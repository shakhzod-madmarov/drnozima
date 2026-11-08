import os
import math
import qrcode
from PIL import Image, ImageDraw, ImageFont, ImageFilter

DESKTOP_DIR = os.path.join(os.environ["USERPROFILE"], "Desktop")
PUBLIC_DIR = os.path.abspath("frontend/public")
os.makedirs(DESKTOP_DIR, exist_ok=True)
os.makedirs(PUBLIC_DIR, exist_ok=True)

WEBSITE_URL = "https://drnozima.uz"

# Dimensions: 90 x 50 mm at 300 DPI (with bleed 94 x 54 mm = 1110 x 638 px)
W, H = 1110, 638

# Color Palette matching the user's reference image
DARK_BLUE = "#0C6099"      # Rich dental blue
LIGHT_BLUE = "#63AEEA"     # Soft sky blue
PALE_BLUE = "#DDF0FD"      # Crisp pale background for high text contrast
WHITE = "#FFFFFF"
TEXT_DARK = "#042433"
TEXT_MUTED = "#1E4B6E"

def draw_circle_icon(draw, cx, cy, r, outline_color=WHITE, fill_color=None, width=3):
    """Draw circular outline icon base."""
    box = [cx - r, cy - r, cx + r, cy + r]
    if fill_color:
        draw.ellipse(box, fill=fill_color, outline=outline_color, width=width)
    else:
        draw.ellipse(box, outline=outline_color, width=width)

def draw_phone_symbol(draw, cx, cy, r=22, color=WHITE):
    draw_circle_icon(draw, cx, cy, r, outline_color=color, width=3)
    # Handset
    draw.arc([cx - r*0.5, cy - r*0.5, cx + r*0.5, cy + r*0.5], start=30, end=150, fill=color, width=3)
    draw.ellipse([cx - r*0.45, cy - r*0.2, cx - r*0.15, cy + r*0.1], fill=color)
    draw.ellipse([cx + r*0.15, cy - r*0.2, cx + r*0.45, cy + r*0.1], fill=color)

def draw_location_symbol(draw, cx, cy, r=22, color=WHITE):
    draw_circle_icon(draw, cx, cy, r, outline_color=color, width=3)
    # Pin inside
    pr = r * 0.4
    p_cy = cy - r * 0.15
    draw.ellipse([cx - pr, p_cy - pr, cx + pr, p_cy + pr], fill=color)
    draw.polygon([(cx - pr + 2, p_cy + 2), (cx + pr - 2, p_cy + 2), (cx, cy + r*0.45)], fill=color)
    draw.ellipse([cx - pr*0.4, p_cy - pr*0.4, cx + pr*0.4, p_cy + pr*0.4], fill=LIGHT_BLUE)

def draw_telegram_symbol(draw, cx, cy, r=22, color=WHITE):
    draw_circle_icon(draw, cx, cy, r, outline_color=color, width=3)
    # Paper plane
    pts = [
        (cx - r*0.4, cy),
        (cx + r*0.45, cy - r*0.35),
        (cx - r*0.1, cy + r*0.4),
        (cx, cy + r*0.05),
    ]
    draw.polygon(pts, fill=color)

def draw_instagram_symbol(draw, cx, cy, r=22, color=WHITE):
    draw_circle_icon(draw, cx, cy, r, outline_color=color, width=3)
    # Camera rounded square
    s = r * 0.45
    draw.rounded_rectangle([cx - s, cy - s, cx + s, cy + s], radius=int(s*0.35), outline=color, width=2)
    draw.ellipse([cx - s*0.45, cy - s*0.45, cx + s*0.45, cy + s*0.45], outline=color, width=2)
    draw.ellipse([cx + s*0.45, cy - s*0.5, cx + s*0.65, cy - s*0.3], fill=color)

def draw_globe_symbol(draw, cx, cy, r=22, color=WHITE):
    draw_circle_icon(draw, cx, cy, r, outline_color=color, width=3)
    gr = r * 0.5
    draw.ellipse([cx - gr, cy - gr, cx + gr, cy + gr], outline=color, width=2)
    draw.line([(cx - gr, cy), (cx + gr, cy)], fill=color, width=2)
    draw.line([(cx, cy - gr), (cx, cy + gr)], fill=color, width=2)

def draw_dental_mirror_and_tooth(img, cx=555, cy=250, radius=135, ring_thick=22):
    """Draw the iconic dental mirror with tooth inside and handle sweeping to the right."""
    draw = ImageDraw.Draw(img)
    
    # 1. Handle extending down and right
    # Handle angle ~ 32 degrees down-right
    h_start_x = cx + int(radius * math.cos(math.radians(34)))
    h_start_y = cy + int(radius * math.sin(math.radians(34)))
    
    # Curved shaft connecting mirror to grip
    handle_points = [
        (h_start_x - 8, h_start_y - 4),
        (h_start_x + 85, h_start_y + 40),
        (h_start_x + 160, h_start_y + 70),
        (h_start_x + 300, h_start_y + 115),
        (h_start_x + 295, h_start_y + 165),
        (h_start_x + 150, h_start_y + 115),
        (h_start_x + 75, h_start_y + 80),
        (h_start_x - 18, h_start_y + 15),
    ]
    draw.polygon(handle_points, fill=WHITE)
    
    # Grip part in light blue
    grip_points = [
        (h_start_x + 160, h_start_y + 68),
        (h_start_x + 300, h_start_y + 113),
        (h_start_x + 295, h_start_y + 167),
        (h_start_x + 150, h_start_y + 117),
    ]
    draw.polygon(grip_points, fill=LIGHT_BLUE)
    # Grip lines
    draw.line([(h_start_x + 185, h_start_y + 78), (h_start_x + 175, h_start_y + 125)], fill=WHITE, width=4)
    draw.line([(h_start_x + 225, h_start_y + 90), (h_start_x + 215, h_start_y + 138)], fill=WHITE, width=4)
    
    # 2. Outer Mirror Ring (White)
    draw.ellipse([cx - radius, cy - radius, cx + radius, cy + radius], outline=WHITE, width=ring_thick)
    
    # 3. Inner Tooth Symbol inside the mirror
    # Draw classic dental tooth: Crown + 2 roots + dental cross
    tooth_w = 110
    tooth_h = 130
    tx = cx - tooth_w // 2
    ty = cy - tooth_h // 2 - 5
    
    # Load and color logo-symbol or draw sharp tooth
    logo_path = os.path.join(PUBLIC_DIR, "logo-symbol.png")
    if os.path.exists(logo_path):
        logo = Image.open(logo_path).convert("RGBA")
        r, g, b, a = logo.split()
        white_tooth = Image.new("RGBA", logo.size, (255, 255, 255, 255))
        white_tooth.putalpha(a)
        white_tooth = white_tooth.resize((150, 150), Image.Resampling.LANCZOS)
        img.paste(white_tooth, (cx - 75, cy - 75), white_tooth)
    else:
        # Fallback smooth tooth
        draw.rounded_rectangle([tx, ty, tx + tooth_w, ty + tooth_h*0.7], radius=25, fill=WHITE)
        draw.polygon([(tx + 10, ty + tooth_h*0.6), (tx + 35, ty + tooth_h), (tx + 50, ty + tooth_h*0.6)], fill=WHITE)
        draw.polygon([(tx + tooth_w - 50, ty + tooth_h*0.6), (tx + tooth_w - 35, ty + tooth_h), (tx + tooth_w - 10, ty + tooth_h*0.6)], fill=WHITE)
        
    # Dental Plus Cross `+` in light blue inside tooth
    cross_cx = cx + 28
    cross_cy = cy - 22
    cw, ch = 8, 22
    draw.rectangle([cross_cx - ch//2, cross_cy - cw//2, cross_cx + ch//2, cross_cy + cw//2], fill=DARK_BLUE)
    draw.rectangle([cross_cx - cw//2, cross_cy - ch//2, cross_cx + cw//2, cross_cy + ch//2], fill=DARK_BLUE)

def generate_classic_front():
    """Front Card: Solid Deep Blue, Centered Dental Mirror + Tooth, Clean Typography."""
    img = Image.new("RGBA", (W, H), DARK_BLUE)
    
    font_bold = lambda size: ImageFont.truetype("C:/Windows/Fonts/segoeuib.ttf", size)
    font_reg = lambda size: ImageFont.truetype("C:/Windows/Fonts/segoeui.ttf", size)
    
    # Draw the iconic dental mirror with handle
    draw_dental_mirror_and_tooth(img, cx=W // 2 - 30, cy=245, radius=130, ring_thick=20)
    
    draw = ImageDraw.Draw(img)
    
    # Primary Title: DENTAL CLINIC / DR. NOZIMA BAXTIYAROVNA
    draw.text((W // 2, 455), "DR. NOZIMA BAXTIYAROVNA", fill=WHITE, font=font_bold(44), anchor="mt")
    
    # Subtitle with letter spacing look
    draw.text((W // 2, 518), "S T O M A T O L O G I Y A   K L I N I K A S I", fill=LIGHT_BLUE, font=font_bold(22), anchor="mt")
    draw.text((W // 2, 558), "«Sevdo Denta» · Andijon", fill="#A3D4F7", font=font_reg(19), anchor="mt")
    
    return img.convert("RGB")

def create_scan_qr(url=WEBSITE_URL, qr_size=240):
    """Generate high-error-correction QR code for website."""
    qr = qrcode.QRCode(
        version=None,
        error_correction=qrcode.constants.ERROR_CORRECT_H,
        box_size=10,
        border=1,
    )
    qr.add_data(url)
    qr.make(fit=True)
    img_qr = qr.make_image(fill_color=DARK_BLUE, back_color=WHITE).convert("RGBA")
    img_qr = img_qr.resize((qr_size, qr_size), Image.Resampling.LANCZOS)
    return img_qr

def generate_classic_back():
    """Back Card: Two-Tone Curved Blue Wave + Corner Tooth + Contacts & Services + QR."""
    # Base is Light Sky-Blue (matching reference)
    img = Image.new("RGBA", (W, H), LIGHT_BLUE)
    draw = ImageDraw.Draw(img)
    
    font_bold = lambda size: ImageFont.truetype("C:/Windows/Fonts/segoeuib.ttf", size)
    font_reg = lambda size: ImageFont.truetype("C:/Windows/Fonts/segoeui.ttf", size)
    
    # 1. Dark Blue Wave swooping from top to top-right
    # Curve points
    wave_points = [
        (460, 0),
        (540, 60),
        (660, 130),
        (820, 185),
        (1000, 215),
        (W, 225),
        (W, 0),
    ]
    draw.polygon(wave_points, fill=DARK_BLUE)
    
    # 2. Large Corner Tooth Silhouette in Bottom-Right
    # Large white rounded tooth cutting in from corner
    tooth_cx = 940
    tooth_cy = 490
    tooth_rx = 220
    tooth_ry = 200
    
    # Subtle drop shadow for corner tooth
    draw.ellipse([tooth_cx - tooth_rx - 6, tooth_cy - tooth_ry - 6, tooth_cx + tooth_rx + 6, tooth_cy + tooth_ry + 6], fill="#509FE0")
    # Main white tooth body
    draw.ellipse([tooth_cx - tooth_rx, tooth_cy - tooth_ry, tooth_cx + tooth_rx, tooth_cy + tooth_ry], fill=WHITE)
    # Inner blue shadow contour inside tooth (like reference image)
    draw.arc([tooth_cx - tooth_rx + 35, tooth_cy - tooth_ry + 35, tooth_cx + tooth_rx - 35, tooth_cy + tooth_ry - 35], start=45, end=240, fill=LIGHT_BLUE, width=28)
    
    # 3. Top-Right Doctor Name & Title (in Dark Blue Wave)
    draw.text((W - 65, 45), "DR. NOZIMA BAXTIYAROVNA", fill=WHITE, font=font_bold(34), anchor="rt")
    draw.text((W - 65, 92), "SHIFOKOR-STOMATOLOG · DENTIST", fill="#A3D4F7", font=font_bold(20), anchor="rt")
    draw.text((W - 65, 126), "«Sevdo Denta» Klinikasi", fill=WHITE, font=font_reg(18), anchor="rt")
    
    # 4. Left Column: Circular Contact Icons & Details
    col_x = 75
    text_x = col_x + 58
    
    items = [
        ("phone", "+998 (91) 619-95-00", 70),
        ("location", "Andijon sh., A. Fitrat ko'chasi 251B", 145),
        ("telegram", "Telegram: @Miss_Dentist_95", 220),
        ("instagram", "Instagram: @sevdo_denta", 295),
        ("globe", "drnozima.uz", 370),
    ]
    
    for icon_type, text_val, y_pos in items:
        cy = y_pos + 12
        if icon_type == "phone":
            draw_phone_symbol(draw, col_x + 18, cy, r=20, color=WHITE)
        elif icon_type == "location":
            draw_location_symbol(draw, col_x + 18, cy, r=20, color=WHITE)
        elif icon_type == "telegram":
            draw_telegram_symbol(draw, col_x + 18, cy, r=20, color=WHITE)
        elif icon_type == "instagram":
            draw_instagram_symbol(draw, col_x + 18, cy, r=20, color=WHITE)
        elif icon_type == "globe":
            draw_globe_symbol(draw, col_x + 18, cy, r=20, color=WHITE)
            
        draw.text((text_x, y_pos), text_val, fill=WHITE, font=font_bold(23), anchor="lt")
        
    # 5. Core Services List (Lower-Left area)
    serv_y = 445
    draw.line([(col_x, serv_y - 12), (640, serv_y - 12)], fill=WHITE, width=2)
    draw.text((col_x, serv_y), "XIZMATLAR:", fill=DARK_BLUE, font=font_bold(20), anchor="lt")
    
    services_text = [
        "• Kariyes va tish nervini og'riqsiz davolash",
        "• Estetik vinirlar · Sirkoniy qoplamalar",
        "• Professional tish tozalash va oqartirish",
        "• Bolalar stomatologiyasi · 3D Rentgen",
    ]
    for idx, st in enumerate(services_text):
        draw.text((col_x, serv_y + 30 + idx * 28), st, fill=WHITE, font=font_bold(19), anchor="lt")

    # 6. QR Code to Website (Center-Right area, crisp and scannable)
    qr_img = create_scan_qr(WEBSITE_URL, qr_size=200)
    qr_x = 680
    qr_y = 230
    
    # White card plate for QR
    draw.rounded_rectangle([qr_x - 12, qr_y - 10, qr_x + 200 + 12, qr_y + 200 + 50], radius=16, fill=WHITE, outline=DARK_BLUE, width=3)
    img.paste(qr_img, (qr_x, qr_y), qr_img)
    draw.text((qr_x + 100, qr_y + 208), "Saytga o'tish (QR)", fill=DARK_BLUE, font=font_bold(16), anchor="mt")
    draw.text((qr_x + 100, qr_y + 228), "drnozima.uz", fill=TEXT_MUTED, font=font_reg(14), anchor="mt")

    return img.convert("RGB")

def generate_mockup_on_wood(front_img, back_img):
    """Generate a high-end presentation mockup on a warm wood/table texture just like reference!"""
    pw, ph = 2400, 1600
    mockup = Image.new("RGB", (pw, ph), "#EAE4DC")
    draw = ImageDraw.Draw(mockup)
    
    # Draw soft wooden plank horizontal lines
    for y in range(0, ph, 110):
        draw.line([(0, y), (pw, y)], fill="#D8CFBF", width=3)
        draw.line([(0, y + 2), (pw, y + 2)], fill="#F5EFE6", width=2)
        
    font_title = ImageFont.truetype("C:/Windows/Fonts/segoeuib.ttf", 46)
    font_sub = ImageFont.truetype("C:/Windows/Fonts/segoeui.ttf", 26)
    
    # Header title
    draw.text((pw // 2, 50), "DR. NOZIMA BAXTIYAROVNA — CLASSIC MODERN TASHRIF QOG'OZI", fill="#086288", font=font_title, anchor="mt")
    draw.text((pw // 2, 110), "Siz yuborgan klassik va zamonaviy uslubdagi ikki tomonlama vizitka (90×50 mm, 300 DPI)", fill="#556B7D", font=font_sub, anchor="mt")
    
    card_w, card_h = 1000, 575
    f_resized = front_img.resize((card_w, card_h), Image.Resampling.LANCZOS)
    b_resized = back_img.resize((card_w, card_h), Image.Resampling.LANCZOS)
    
    cx = (pw - card_w) // 2
    y_front = 190
    y_back = 850
    
    # Drop shadows
    shadow_offset = 18
    draw.rounded_rectangle([cx + shadow_offset, y_front + shadow_offset, cx + card_w + shadow_offset, y_front + card_h + shadow_offset], radius=16, fill="#B0A696")
    draw.rounded_rectangle([cx + shadow_offset, y_back + shadow_offset, cx + card_w + shadow_offset, y_back + card_h + shadow_offset], radius=16, fill="#B0A696")
    
    mockup.paste(f_resized, (cx, y_front))
    mockup.paste(b_resized, (cx, y_back))
    
    # Side badges
    draw.text((cx - 40, y_front + card_h // 2), "OLD TOMONI\n(Yuz qismi)", fill="#086288", font=font_title, anchor="rm")
    draw.text((cx - 40, y_back + card_h // 2), "ORQA TOMONI\n(Kontaktlar & QR)", fill="#086288", font=font_title, anchor="rm")
    
    return mockup

def main():
    print("Generating Classic Modern Business Card...")
    front = generate_classic_front()
    back = generate_classic_back()
    mockup = generate_mockup_on_wood(front, back)
    
    targets = [
        # Desktop
        (os.path.join(DESKTOP_DIR, "DrNozima_Vizitka_ClassicModern_Old.png"), front),
        (os.path.join(DESKTOP_DIR, "DrNozima_Vizitka_ClassicModern_Orqa.png"), back),
        (os.path.join(DESKTOP_DIR, "DrNozima_Vizitka_ClassicModern_Mockup.png"), mockup),
        # Public
        (os.path.join(PUBLIC_DIR, "drnozima_card_classic_front.png"), front),
        (os.path.join(PUBLIC_DIR, "drnozima_card_classic_back.png"), back),
        (os.path.join(PUBLIC_DIR, "drnozima_card_classic_mockup.png"), mockup),
    ]
    
    for path, img in targets:
        img.save(path, "PNG", dpi=(300, 300))
        print(f"Saved: {path}")
        
    # PDF generation
    pdf_desktop = os.path.join(DESKTOP_DIR, "DrNozima_Vizitka_ClassicModern_Chop_Etish.pdf")
    pdf_public = os.path.join(PUBLIC_DIR, "drnozima_card_classic_print.pdf")
    front.save(pdf_desktop, "PDF", resolution=300.0, save_all=True, append_images=[back])
    front.save(pdf_public, "PDF", resolution=300.0, save_all=True, append_images=[back])
    print(f"Saved PDF: {pdf_desktop}")
    print(f"Saved PDF: {pdf_public}")

if __name__ == "__main__":
    main()
