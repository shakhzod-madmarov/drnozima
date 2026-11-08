import os
import math
import qrcode
from PIL import Image, ImageDraw, ImageFont

# Directories
DESKTOP_DIR = os.path.join(os.environ["USERPROFILE"], "Desktop")
PUBLIC_DIR = os.path.abspath("frontend/public")
os.makedirs(DESKTOP_DIR, exist_ok=True)
os.makedirs(PUBLIC_DIR, exist_ok=True)

WEBSITE_URL = "https://drnozima.uz"

# Dimensions: 90 x 50 mm at 300 DPI + 2mm bleeds each side (94 x 54 mm) = 1110 x 638 pixels
W, H = 1110, 638

def draw_star(draw, cx, cy, R, fill="#F59E0B", outline="#D97706", width=1):
    """Draw a mathematically perfect 5-pointed vector star."""
    r = R * 0.382
    points = []
    for i in range(10):
        angle = -math.pi / 2 + i * (math.pi / 5)
        dist = R if i % 2 == 0 else r
        points.append((cx + dist * math.cos(angle), cy + dist * math.sin(angle)))
    draw.polygon(points, fill=fill, outline=outline, width=width)

def draw_star_row(draw, start_cx, cy, R, count=5, spacing=None, fill="#F59E0B", outline="#D97706", width=1):
    if spacing is None:
        spacing = R * 2.3
    total_w = (count - 1) * spacing
    first_cx = start_cx - total_w / 2
    for i in range(count):
        cx = first_cx + i * spacing
        draw_star(draw, cx, cy, R, fill=fill, outline=outline, width=width)

def draw_circle_icon(draw, cx, cy, r, bg_color, symbol, font, text_color="#FFFFFF"):
    """Draw a circular badge with text/symbol."""
    draw.ellipse([cx - r, cy - r, cx + r, cy + r], fill=bg_color)
    draw.text((cx, cy), symbol, fill=text_color, font=font, anchor="mm")

def create_website_qr(url=WEBSITE_URL, qr_size=320):
    """Generate high-error-correction QR code for website."""
    qr = qrcode.QRCode(
        version=None,
        error_correction=qrcode.constants.ERROR_CORRECT_H,
        box_size=12,
        border=1,
    )
    qr.add_data(url)
    qr.make(fit=True)
    img_qr = qr.make_image(fill_color="#086288", back_color="#FFFFFF").convert("RGBA")
    img_qr = img_qr.resize((qr_size, qr_size), Image.Resampling.LANCZOS)
    
    # Draw center tooth or NZ monogram badge
    badge_dim = int(qr_size * 0.24)
    badge_box = [
        (qr_size - badge_dim) // 2,
        (qr_size - badge_dim) // 2,
        (qr_size + badge_dim) // 2,
        (qr_size + badge_dim) // 2,
    ]
    draw = ImageDraw.Draw(img_qr)
    draw.ellipse(badge_box, fill="#FFFFFF", outline="#086288", width=3)
    inner_dim = int(badge_dim * 0.76)
    inner_box = [
        (qr_size - inner_dim) // 2,
        (qr_size - inner_dim) // 2,
        (qr_size + inner_dim) // 2,
        (qr_size + inner_dim) // 2,
    ]
    draw.ellipse(inner_box, fill="#086288")
    try:
        font_nz = ImageFont.truetype("C:/Windows/Fonts/segoeuib.ttf", int(inner_dim * 0.55))
    except:
        font_nz = ImageFont.load_default()
    draw.text((qr_size // 2, qr_size // 2), "D", fill="#FFEFC4", font=font_nz, anchor="mm")
    return img_qr

def generate_front_side():
    """Luxury Dark Navy / Deep Teal Front Side."""
    img = Image.new("RGBA", (W, H), "#042433")
    draw = ImageDraw.Draw(img)
    
    font_bold = lambda size: ImageFont.truetype("C:/Windows/Fonts/segoeuib.ttf", size)
    font_reg = lambda size: ImageFont.truetype("C:/Windows/Fonts/segoeui.ttf", size)
    
    # 1. Subtle diagonal gradient / accents
    for x in range(W):
        # subtle teal glow towards top-left
        alpha = int(35 * (1 - x / W))
        draw.line([(x, 0), (x, H)], fill=(8, 98, 136, alpha))
        
    # Gold decorative border (bleed margin at 30px)
    b_margin = 32
    draw.rounded_rectangle([b_margin, b_margin, W - b_margin, H - b_margin], radius=16, outline="#D4AF37", width=2)
    draw.rounded_rectangle([b_margin + 6, b_margin + 6, W - b_margin - 6, H - b_margin - 6], radius=12, outline="#086288", width=1)
    
    # Logo placement
    logo_path = os.path.join(PUBLIC_DIR, "logo-symbol.png")
    if os.path.exists(logo_path):
        logo = Image.open(logo_path).convert("RGBA")
        logo = logo.resize((150, 150), Image.Resampling.LANCZOS)
        img.paste(logo, (70, 75), logo)
        
    # Doctor Name and Title
    draw.text((250, 80), "DR. NOZIMA BAXTIYAROVNA", fill="#FFEFC4", font=font_bold(38), anchor="lt")
    draw.text((250, 132), "SHIFOKOR-STOMATOLOG · DENTIST", fill="#97D7FF", font=font_bold(22), anchor="lt")
    draw.text((250, 168), "«Sevdo Denta» Klinikasi", fill="#CBD5E1", font=font_reg(20), anchor="lt")
    
    # 5 Stars next to title
    draw_star_row(draw, start_cx=880, cy=100, R=14, count=5, spacing=32, fill="#F59E0B", outline="#D97706", width=1)
    draw.text((880, 138), "4.9 ★★★★★", fill="#FFEFC4", font=font_bold(18), anchor="mt")
    
    # Divider line
    draw.line([(70, 245), (W - 70, 245)], fill="#086288", width=2)
    draw.line([(70, 247), (350, 247)], fill="#D4AF37", width=2)
    
    # Contact Information Grid (2 Columns)
    col1_x = 75
    col2_x = 580
    row1_y = 285
    row2_y = 360
    row3_y = 435
    row4_y = 510
    
    font_icon = font_bold(16)
    
    # Col 1: Phone & Address
    # Phone
    draw_circle_icon(draw, col1_x + 18, row1_y + 16, 18, "#0284C7", "P", font_icon)
    draw.text((col1_x + 50, row1_y), "Telefon:", fill="#94A3B8", font=font_reg(16), anchor="lt")
    draw.text((col1_x + 50, row1_y + 20), "+998 (91) 619-95-00", fill="#FFFFFF", font=font_bold(24), anchor="lt")
    
    # Address
    draw_circle_icon(draw, col1_x + 18, row3_y + 16, 18, "#086288", "A", font_icon)
    draw.text((col1_x + 50, row3_y), "Manzil:", fill="#94A3B8", font=font_reg(16), anchor="lt")
    draw.text((col1_x + 50, row3_y + 20), "Andijon sh., A. Fitrat ko'chasi 251B", fill="#FFFFFF", font=font_bold(20), anchor="lt")
    draw.text((col1_x + 50, row3_y + 45), "(Eski shahar, 1-qavat)", fill="#CBD5E1", font=font_reg(17), anchor="lt")

    # Col 2: Website & Social Media
    # Website
    draw_circle_icon(draw, col2_x + 18, row1_y + 16, 18, "#086288", "W", font_icon)
    draw.text((col2_x + 50, row1_y), "Rasmiy veb-sayt:", fill="#94A3B8", font=font_reg(16), anchor="lt")
    draw.text((col2_x + 50, row1_y + 20), "drnozima.uz", fill="#FFEFC4", font=font_bold(24), anchor="lt")
    
    # Telegram
    draw_circle_icon(draw, col2_x + 18, row2_y + 30, 18, "#0284C7", "T", font_icon)
    draw.text((col2_x + 50, row2_y + 14), "Telegram:", fill="#94A3B8", font=font_reg(16), anchor="lt")
    draw.text((col2_x + 50, row2_y + 34), "@Miss_Dentist_95", fill="#97D7FF", font=font_bold(22), anchor="lt")

    # Instagram
    draw_circle_icon(draw, col2_x + 18, row4_y + 10, 18, "#E11D48", "I", font_icon)
    draw.text((col2_x + 50, row4_y - 6), "Instagram:", fill="#94A3B8", font=font_reg(16), anchor="lt")
    draw.text((col2_x + 50, row4_y + 14), "@sevdo_denta", fill="#FDA4AF", font=font_bold(22), anchor="lt")
    
    # Bottom brand note
    draw.text((W // 2, H - 48), "Tishlaringiz salomatligi va go'zalligi — bizning oliy maqsadimiz", fill="#64748B", font=font_reg(16), anchor="mm")
    
    return img.convert("RGB")

def generate_back_side():
    """Clean Medical Luxury Back Side with Services & QR Code."""
    img = Image.new("RGBA", (W, H), "#FFFFFF")
    draw = ImageDraw.Draw(img)
    
    font_bold = lambda size: ImageFont.truetype("C:/Windows/Fonts/segoeuib.ttf", size)
    font_reg = lambda size: ImageFont.truetype("C:/Windows/Fonts/segoeui.ttf", size)
    
    # Outer frame
    b_margin = 32
    draw.rounded_rectangle([b_margin, b_margin, W - b_margin, H - b_margin], radius=16, outline="#086288", width=2)
    draw.rounded_rectangle([b_margin + 6, b_margin + 6, W - b_margin - 6, H - b_margin - 6], radius=12, outline="#E2E8F0", width=1)
    
    # Top Ribbon Header
    draw.rectangle([b_margin + 8, b_margin + 8, W - b_margin - 8, b_margin + 85], fill="#F0F9FF")
    draw.text((70, b_margin + 28), "STOMATOLOGIYA XIZMATLARI", fill="#086288", font=font_bold(28), anchor="lt")
    draw.text((70, b_margin + 58), "Professional muolajalar va zamonaviy uskunalar", fill="#64748B", font=font_reg(17), anchor="lt")
    
    # Stars on top right
    draw_star_row(draw, start_cx=W - 170, cy=b_margin + 45, R=12, count=5, spacing=26, fill="#F59E0B", outline="#D97706", width=1)
    
    # Left Column: Services List (6 items)
    services = [
        "Kariyes va nervni og'riqsiz davolash",
        "Estetik restavratsiya va vinirlar",
        "Sirkoniy va metallokeramika qoplamalar",
        "Professional tozalash va tish oqartirish",
        "Bolalar stomatologiyasi (og'riqsiz)",
        "3D Raqamli radioviziografiya rentgen"
    ]
    
    start_y = 150
    item_h = 70
    for idx, s in enumerate(services):
        sy = start_y + idx * item_h
        # Bullet badge with checkmark
        draw.ellipse([70, sy + 4, 98, sy + 32], fill="#086288")
        draw.text((84, sy + 18), "v", fill="#FFFFFF", font=font_bold(16), anchor="mm")
        # Text
        draw.text((115, sy + 4), s, fill="#0F172A", font=font_bold(21), anchor="lt")
        # Divider line
        if idx < len(services) - 1:
            draw.line([(115, sy + 48), (660, sy + 48)], fill="#F1F5F9", width=1)
            
    # Right Column: QR Code to Website & Booking
    qr_x = 720
    qr_y = 145
    qr_img = create_website_qr(WEBSITE_URL, qr_size=320)
    
    # QR Card Holder
    qr_holder = [qr_x - 14, qr_y - 10, qr_x + 320 + 14, qr_y + 320 + 75]
    draw.rounded_rectangle(qr_holder, radius=18, fill="#F8FAFC", outline="#BAE6FD", width=2)
    img.paste(qr_img, (qr_x, qr_y), qr_img)
    
    draw.text((qr_x + 160, qr_y + 338), "Kamerani qarating", fill="#086288", font=font_bold(19), anchor="mt")
    draw.text((qr_x + 160, qr_y + 365), "Saytga o'tish va online yozilish", fill="#475569", font=font_reg(16), anchor="mt")
    
    # Footer ribbon on back side
    foot_y = H - 85
    draw.line([(b_margin + 8, foot_y), (W - b_margin - 8, foot_y)], fill="#E2E8F0", width=1)
    draw.text((70, foot_y + 18), "Ish vaqti: Dushanba - Shanba 08:00 - 18:00 (Yakshanba dam)", fill="#64748B", font=font_reg(17), anchor="lt")
    draw.text((W - 70, foot_y + 18), "🌐 drnozima.uz", fill="#086288", font=font_bold(20), anchor="rt")
    
    return img.convert("RGB")

def generate_side_by_side_preview(img_front, img_back):
    """Generate luxury presentation mockup showing Front and Back side-by-side."""
    margin = 80
    pw = W * 2 + margin * 3
    ph = H + margin * 2 + 100
    
    preview = Image.new("RGBA", (pw, ph), "#F1F5F9")
    draw = ImageDraw.Draw(preview)
    
    # Title
    font_title = ImageFont.truetype("C:/Windows/Fonts/segoeuib.ttf", 46)
    font_sub = ImageFont.truetype("C:/Windows/Fonts/segoeui.ttf", 26)
    draw.text((pw // 2, 45), "DR. NOZIMA BAXTIYAROVNA — RASMIY TASHRIF QOG'OZI (VIZITKA)", fill="#086288", font=font_title, anchor="mt")
    draw.text((pw // 2, 105), "Standart 90×50 mm (300 DPI Chop etishga tayyor) · Ikki tomonlama (Oldi va Orqasi)", fill="#64748B", font=font_sub, anchor="mt")
    
    # Paste Front
    fx = margin
    fy = margin + 80
    # Drop shadow for front
    draw.rounded_rectangle([fx + 8, fy + 8, fx + W + 8, fy + H + 8], radius=16, fill="#CBD5E1")
    preview.paste(img_front, (fx, fy))
    
    # Label for front
    draw.text((fx + W // 2, fy + H + 25), "OLD TOMONI (Yuz qismi)", fill="#086288", font=font_title, anchor="mt")
    
    # Paste Back
    bx = fx + W + margin
    by = fy
    draw.rounded_rectangle([bx + 8, by + 8, bx + W + 8, by + H + 8], radius=16, fill="#CBD5E1")
    preview.paste(img_back, (bx, by))
    
    draw.text((bx + W // 2, by + H + 25), "ORQA TOMONI (Xizmatlar & Sayt QR)", fill="#086288", font=font_title, anchor="mt")
    
    return preview.convert("RGB")

def main():
    print("1. Generating Front side...")
    front = generate_front_side()
    print("2. Generating Back side...")
    back = generate_back_side()
    
    print("3. Generating Side-by-Side Presentation Mockup...")
    preview = generate_side_by_side_preview(front, back)
    
    # File targets
    files = [
        # Desktop
        (os.path.join(DESKTOP_DIR, "DrNozima_Vizitka_Old.png"), front),
        (os.path.join(DESKTOP_DIR, "DrNozima_Vizitka_Orqa.png"), back),
        (os.path.join(DESKTOP_DIR, "DrNozima_Vizitka_Mockup.png"), preview),
        # Public
        (os.path.join(PUBLIC_DIR, "drnozima_business_card_front.png"), front),
        (os.path.join(PUBLIC_DIR, "drnozima_business_card_back.png"), back),
        (os.path.join(PUBLIC_DIR, "drnozima_business_card_preview.png"), preview),
    ]
    
    for path, img in files:
        img.save(path, "PNG", dpi=(300, 300))
        print(f"Saved PNG: {path}")
        
    # PDF generation: Multi-page (Page 1 = Front, Page 2 = Back)
    pdf_desktop = os.path.join(DESKTOP_DIR, "DrNozima_Vizitka_Chop_Etish.pdf")
    pdf_public = os.path.join(PUBLIC_DIR, "drnozima_business_card_print.pdf")
    
    front.save(pdf_desktop, "PDF", resolution=300.0, save_all=True, append_images=[back])
    front.save(pdf_public, "PDF", resolution=300.0, save_all=True, append_images=[back])
    print(f"Saved Multi-page PDF: {pdf_desktop}")
    print(f"Saved Multi-page PDF: {pdf_public}")

if __name__ == "__main__":
    main()
