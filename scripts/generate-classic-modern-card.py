import os
import math
import qrcode
from PIL import Image, ImageDraw, ImageFont, ImageFilter

DESKTOP_DIR = os.path.join(os.environ["USERPROFILE"], "Desktop")
PUBLIC_DIR = os.path.abspath("frontend/public")
os.makedirs(DESKTOP_DIR, exist_ok=True)
os.makedirs(PUBLIC_DIR, exist_ok=True)

WEBSITE_URL = "https://drnozima.uz"

# Master Supersampled Canvas (4x SSAA)
# Target print size: 94 x 54 mm (90 x 50 mm trim) at 300 DPI = 1110 x 638 px
# Internal canvas = 4440 x 2552 px
SCALE = 4
W, H = 1110 * SCALE, 638 * SCALE

# Palette matching the user's reference image exactly
ROYAL_BLUE = (14, 98, 160)     # #0E62A0 - Solid medical blue of reference card
ACCENT_BLUE = (90, 172, 238)    # #5AACEF - Mid-light blue handle & wave accent
SKY_BLUE = (82, 164, 232)      # #52A4E8 - Back card base field in reference
DEEP_NAVY = (8, 62, 102)       # #083E66 - Top wave deep shade
WHITE = (255, 255, 255)
GOLD = (245, 175, 25)

def get_font(size, bold=True):
    scaled_size = int(size * SCALE)
    font_name = "segoeuib.ttf" if bold else "segoeui.ttf"
    try:
        return ImageFont.truetype(f"C:/Windows/Fonts/{font_name}", scaled_size)
    except:
        return ImageFont.load_default()

def draw_aa_circle(draw, cx, cy, r, outline_color=WHITE, fill_color=None, width=None):
    if width is None:
        width = int(2.5 * SCALE)
    box = [cx - r, cy - r, cx + r, cy + r]
    if fill_color:
        draw.ellipse(box, fill=fill_color, outline=outline_color, width=width)
    else:
        draw.ellipse(box, outline=outline_color, width=width)

def draw_circular_icon(draw, cx, cy, icon_type, r=None, color=WHITE):
    """Draw circular line icons matching the reference image."""
    if r is None:
        r = int(22 * SCALE)
    draw_aa_circle(draw, cx, cy, r, outline_color=color, width=int(2.5 * SCALE))
    
    if icon_type == "phone":
        # Handset
        draw.arc([cx - r*0.48, cy - r*0.48, cx + r*0.48, cy + r*0.48], start=30, end=150, fill=color, width=int(3*SCALE))
        draw.ellipse([cx - r*0.45, cy - r*0.18, cx - r*0.15, cy + r*0.12], fill=color)
        draw.ellipse([cx + r*0.15, cy - r*0.18, cx + r*0.45, cy + r*0.12], fill=color)
    elif icon_type == "location":
        pr = r * 0.4
        p_cy = cy - r * 0.12
        draw.ellipse([cx - pr, p_cy - pr, cx + pr, p_cy + pr], fill=color)
        draw.polygon([(cx - pr + 2*SCALE, p_cy + 2*SCALE), (cx + pr - 2*SCALE, p_cy + 2*SCALE), (cx, cy + r*0.48)], fill=color)
        draw.ellipse([cx - pr*0.4, p_cy - pr*0.4, cx + pr*0.4, p_cy + pr*0.4], fill=SKY_BLUE)
    elif icon_type == "telegram":
        pts = [
            (cx - r*0.42, cy),
            (cx + r*0.45, cy - r*0.35),
            (cx - r*0.08, cy + r*0.42),
            (cx, cy + r*0.06),
        ]
        draw.polygon(pts, fill=color)
    elif icon_type == "instagram":
        s = r * 0.44
        draw.rounded_rectangle([cx - s, cy - s, cx + s, cy + s], radius=int(s*0.35), outline=color, width=int(2*SCALE))
        draw.ellipse([cx - s*0.45, cy - s*0.45, cx + s*0.45, cy + s*0.45], outline=color, width=int(2*SCALE))
        draw.ellipse([cx + s*0.45, cy - s*0.5, cx + s*0.65, cy - s*0.3], fill=color)
    elif icon_type == "globe":
        gr = r * 0.5
        draw.ellipse([cx - gr, cy - gr, cx + gr, cy + gr], outline=color, width=int(2*SCALE))
        draw.line([(cx - gr, cy), (cx + gr, cy)], fill=color, width=int(2*SCALE))
        draw.line([(cx, cy - gr), (cx, cy + gr)], fill=color, width=int(2*SCALE))

def draw_reference_dental_mirror(img, cx, cy, radius=int(145 * SCALE), ring_thick=int(22 * SCALE)):
    """Draw the dental mirror exactly as styled in the user's reference image."""
    draw = ImageDraw.Draw(img)
    
    # Mirror Handle: Sweeps from bottom-right of circle to right edge of card
    # Tangent / angle ~ 32 degrees down-right
    h_angle = math.radians(30)
    hx = cx + int(radius * math.cos(h_angle))
    hy = cy + int(radius * math.sin(h_angle))
    
    # White metallic connector shaft
    shaft_pts = [
        (hx - 15*SCALE, hy - 8*SCALE),
        (hx + 90*SCALE, hy + 45*SCALE),
        (hx + 170*SCALE, hy + 85*SCALE),
        (hx + 380*SCALE, hy + 175*SCALE),
        (hx + 375*SCALE, hy + 230*SCALE),
        (hx + 150*SCALE, hy + 115*SCALE),
        (hx + 75*SCALE, hy + 75*SCALE),
        (hx - 25*SCALE, hy + 20*SCALE),
    ]
    draw.polygon(shaft_pts, fill=WHITE)
    
    # Light blue handle grip at the end
    grip_pts = [
        (hx + 170*SCALE, hy + 85*SCALE),
        (hx + 380*SCALE, hy + 175*SCALE),
        (hx + 375*SCALE, hy + 230*SCALE),
        (hx + 150*SCALE, hy + 115*SCALE),
    ]
    draw.polygon(grip_pts, fill=ACCENT_BLUE)
    
    # Grip detail lines
    draw.line([(hx + 220*SCALE, hy + 105*SCALE), (hx + 200*SCALE, hy + 140*SCALE)], fill=WHITE, width=int(3*SCALE))
    draw.line([(hx + 270*SCALE, hy + 125*SCALE), (hx + 250*SCALE, hy + 160*SCALE)], fill=WHITE, width=int(3*SCALE))
    draw.line([(hx + 320*SCALE, hy + 145*SCALE), (hx + 300*SCALE, hy + 180*SCALE)], fill=WHITE, width=int(3*SCALE))
    
    # Mirror White Ring
    draw.ellipse([cx - radius, cy - radius, cx + radius, cy + radius], outline=WHITE, width=ring_thick)
    
    # Clean White Tooth Silhouette inside mirror
    logo_path = os.path.join(PUBLIC_DIR, "logo-symbol.png")
    if os.path.exists(logo_path):
        logo = Image.open(logo_path).convert("RGBA")
        r, g, b, a = logo.split()
        white_tooth = Image.new("RGBA", logo.size, (255, 255, 255, 255))
        white_tooth.putalpha(a)
        target_size = int(radius * 1.18)
        white_tooth = white_tooth.resize((target_size, target_size), Image.Resampling.LANCZOS)
        img.paste(white_tooth, (cx - target_size // 2, cy - target_size // 2), white_tooth)
        
    # Dental Plus Cross `+` inside tooth (just like reference image!)
    cross_cx = cx + int(32 * SCALE)
    cross_cy = cy - int(24 * SCALE)
    c_thick = int(7 * SCALE)
    c_len = int(22 * SCALE)
    draw.rectangle([cross_cx - c_len//2, cross_cy - c_thick//2, cross_cx + c_len//2, cross_cy + c_thick//2], fill=ROYAL_BLUE)
    draw.rectangle([cross_cx - c_thick//2, cross_cy - c_len//2, cross_cx + c_thick//2, cross_cy + c_len//2], fill=ROYAL_BLUE)

def draw_corner_tooth_reference(draw, cx, cy):
    """Draw the large white anatomical tooth cutting into bottom-right corner."""
    rx = int(240 * SCALE)
    ry = int(210 * SCALE)
    
    # Drop shadow
    draw.ellipse([cx - rx - 8*SCALE, cy - ry - 8*SCALE, cx + rx + 8*SCALE, cy + ry + 8*SCALE], fill=(60, 135, 195))
    # Main white tooth body
    draw.ellipse([cx - rx, cy - ry, cx + rx, cy + ry], fill=WHITE)
    # Inner light-blue shadow contour (exact match to reference card!)
    draw.arc([cx - rx + 38*SCALE, cy - ry + 38*SCALE, cx + rx - 38*SCALE, cy + ry - 38*SCALE],
             start=45, end=235, fill=ACCENT_BLUE, width=int(26*SCALE))

def create_master_qr(url=WEBSITE_URL, qr_size=int(190 * SCALE)):
    """Generate high-error-correction QR code for website."""
    qr = qrcode.QRCode(
        version=None,
        error_correction=qrcode.constants.ERROR_CORRECT_H,
        box_size=10,
        border=1,
    )
    qr.add_data(url)
    qr.make(fit=True)
    img_qr = qr.make_image(fill_color=ROYAL_BLUE, back_color=WHITE).convert("RGBA")
    img_qr = img_qr.resize((qr_size, qr_size), Image.Resampling.LANCZOS)
    return img_qr

# ==========================================
# 1. FRONT CARD (MASTER REFERENCE MATCH)
# ==========================================
def render_front():
    img = Image.new("RGBA", (W, H), ROYAL_BLUE)
    
    # Dental Mirror & Tooth
    draw_reference_dental_mirror(img, cx=W // 2 - int(30 * SCALE), cy=int(240 * SCALE), radius=int(135 * SCALE), ring_thick=int(20 * SCALE))
    
    draw = ImageDraw.Draw(img)
    
    # Title matching reference: Centered, clean, confident
    # In reference: "DENTALCLINIC"
    # Here: "DR. NOZIMA BAXTIYAROVNA"
    draw.text((W // 2, int(450 * SCALE)), "DR. NOZIMA BAXTIYAROVNA", fill=WHITE, font=get_font(42, bold=True), anchor="mt")
    draw.text((W // 2, int(512 * SCALE)), "S T O M A T O L O G I Y A   K L I N I K A S I", fill=ACCENT_BLUE, font=get_font(21, bold=True), anchor="mt")
    draw.text((W // 2, int(552 * SCALE)), "«Sevdo Denta» · Andijon", fill="#D4EAF8", font=get_font(18, bold=False), anchor="mt")
    
    # Downsample to 1110 x 638 px
    return img.resize((1110, 638), Image.Resampling.LANCZOS).convert("RGB")

# ==========================================
# 2. BACK CARD (MASTER REFERENCE MATCH + QR)
# ==========================================
def render_back():
    img = Image.new("RGBA", (W, H), SKY_BLUE)
    draw = ImageDraw.Draw(img)
    
    # 1. Dark Blue Wave swooping from top to top-right
    wave_pts = [
        (int(460 * SCALE), 0),
        (int(550 * SCALE), int(55 * SCALE)),
        (int(660 * SCALE), int(125 * SCALE)),
        (int(810 * SCALE), int(180 * SCALE)),
        (int(980 * SCALE), int(210 * SCALE)),
        (W, int(220 * SCALE)),
        (W, 0),
    ]
    draw.polygon(wave_pts, fill=DEEP_NAVY)
    draw.line(wave_pts[:-2], fill=WHITE, width=int(2.5 * SCALE))
    
    # 2. Corner Tooth in Bottom-Right
    draw_corner_tooth_reference(draw, cx=int(945 * SCALE), cy=int(490 * SCALE))
    
    # 3. Top-Right Name & Profession in Dark Blue Wave (Matching reference "JOHN DOE / DENTIST")
    draw.text((W - int(65 * SCALE), int(42 * SCALE)), "DR. NOZIMA BAXTIYAROVNA", fill=WHITE, font=get_font(33, bold=True), anchor="rt")
    draw.text((W - int(65 * SCALE), int(88 * SCALE)), "SHIFOKOR-STOMATOLOG · DENTIST", fill=ACCENT_BLUE, font=get_font(20, bold=True), anchor="rt")
    draw.text((W - int(65 * SCALE), int(122 * SCALE)), "«Sevdo Denta» Klinikasi", fill=WHITE, font=get_font(18, bold=False), anchor="rt")
    
    # 4. Left Column Contacts (Matching reference 4 circular icons)
    col_x = int(75 * SCALE)
    text_x = col_x + int(56 * SCALE)
    
    contacts = [
        ("phone", "+998 (91) 619-95-00", int(65 * SCALE)),
        ("location", "Andijon sh., A. Fitrat ko'chasi 251B", int(136 * SCALE)),
        ("telegram", "Telegram: @Miss_Dentist_95", int(207 * SCALE)),
        ("instagram", "Instagram: @sevdo_denta", int(278 * SCALE)),
        ("globe", "drnozima.uz", int(349 * SCALE)),
    ]
    
    for icon_type, text_val, y_pos in contacts:
        cy = y_pos + int(13 * SCALE)
        draw_circular_icon(draw, col_x + int(18 * SCALE), cy, icon_type, color=WHITE)
        draw.text((text_x, y_pos), text_val, fill=WHITE, font=get_font(22, bold=True), anchor="lt")
        
    # 5. Core Services Highlight (Two sleek clean lines)
    serv_y = int(430 * SCALE)
    draw.line([(col_x, serv_y - int(10 * SCALE)), (int(640 * SCALE), serv_y - int(10 * SCALE))], fill=WHITE, width=int(2 * SCALE))
    draw.text((col_x, serv_y), "XIZMATLAR:", fill=DEEP_NAVY, font=get_font(19, bold=True), anchor="lt")
    
    draw.text((col_x, serv_y + int(32 * SCALE)), "• Tish davolash   • Vinirlar   • Sirkoniy qoplama", fill=WHITE, font=get_font(19, bold=True), anchor="lt")
    draw.text((col_x, serv_y + int(60 * SCALE)), "• Tish oqartirish   • Bolalar stomatologiyasi   • Rentgen", fill=WHITE, font=get_font(19, bold=True), anchor="lt")
    
    # 6. QR Code to Website (Tile on the right, perfectly placed)
    qr_size = int(190 * SCALE)
    qr_img = create_master_qr(WEBSITE_URL, qr_size=qr_size)
    qr_x = int(680 * SCALE)
    qr_y = int(225 * SCALE)
    
    # White card plate with subtle shadow
    draw.rounded_rectangle([qr_x - 12*SCALE, qr_y - 10*SCALE, qr_x + qr_size + 12*SCALE, qr_y + qr_size + 46*SCALE],
                           radius=int(16*SCALE), fill=WHITE, outline=DEEP_NAVY, width=int(3*SCALE))
    img.paste(qr_img, (qr_x, qr_y), qr_img)
    draw.text((qr_x + qr_size // 2, qr_y + qr_size + int(8 * SCALE)), "Saytga o'tish (QR)", fill=ROYAL_BLUE, font=get_font(15, bold=True), anchor="mt")
    draw.text((qr_x + qr_size // 2, qr_y + qr_size + int(27 * SCALE)), "drnozima.uz", fill=DEEP_NAVY, font=get_font(13, bold=False), anchor="mt")

    return img.resize((1110, 638), Image.Resampling.LANCZOS).convert("RGB")

# ==========================================
# 3. REALISTIC WOODEN TABLE STUDIO MOCKUP
# ==========================================
def render_realistic_wood_mockup(front_img, back_img):
    pw, ph = 2400, 1600
    mockup = Image.new("RGB", (pw, ph), "#C49A6C")
    draw = ImageDraw.Draw(mockup)
    
    # Generate realistic rich warm natural wood planks
    plank_h = 200
    for y in range(0, ph, plank_h):
        # Plank base color variation
        v = int((math.sin(y * 0.05) * 8))
        base_r = max(0, min(255, 196 + v))
        base_g = max(0, min(255, 148 + v))
        base_b = max(0, min(255, 96 + v))
        draw.rectangle([0, y, pw, y + plank_h], fill=(base_r, base_g, base_b))
        
        # Subtle horizontal wood grain lines
        for gy in range(y, y + plank_h, 8):
            g_alpha = int(abs(math.sin(gy * 0.2)) * 12)
            draw.line([(0, gy), (pw, gy)], fill=(base_r - g_alpha, base_g - g_alpha, base_b - g_alpha))
            
        # Dark plank seam groove
        draw.line([(0, y), (pw, y)], fill=(120, 80, 45), width=4)
        draw.line([(0, y + 2), (pw, y + 2)], fill=(225, 185, 135), width=2)
        
    font_title = ImageFont.truetype("C:/Windows/Fonts/segoeuib.ttf", 46)
    font_sub = ImageFont.truetype("C:/Windows/Fonts/segoeui.ttf", 26)
    
    # Elegant title plate at top
    draw.rounded_rectangle([pw//2 - 650, 25, pw//2 + 650, 145], radius=16, fill=(255, 255, 255, 230), outline=(120, 80, 45), width=2)
    draw.text((pw // 2, 45), "DR. NOZIMA BAXTIYAROVNA — RASMIY VIZITKA", fill="#0A4C7A", font=font_title, anchor="mt")
    draw.text((pw // 2, 102), "Siz yuborgan klassik namuna asosida 100% professional tayyorlangan dizayn (90×50 mm, 300 DPI)", fill="#4A657A", font=font_sub, anchor="mt")
    
    card_w, card_h = 1020, 586
    f_card = front_img.resize((card_w, card_h), Image.Resampling.LANCZOS)
    b_card = back_img.resize((card_w, card_h), Image.Resampling.LANCZOS)
    
    cx = (pw - card_w) // 2
    y_front = 195
    y_back = 865
    
    # Multi-layer realistic soft contact drop shadows
    for off, col in [(24, (70, 45, 25)), (16, (90, 60, 35)), (8, (120, 85, 50))]:
        draw.rounded_rectangle([cx + off, y_front + off, cx + card_w + off, y_front + card_h + off], radius=16, fill=col)
        draw.rounded_rectangle([cx + off, y_back + off, cx + card_w + off, y_back + card_h + off], radius=16, fill=col)
        
    mockup.paste(f_card, (cx, y_front))
    mockup.paste(b_card, (cx, y_back))
    
    # Side badge plates
    draw.rounded_rectangle([cx - 280, y_front + card_h // 2 - 40, cx - 30, y_front + card_h // 2 + 40], radius=12, fill=(255, 255, 255, 240))
    draw.text((cx - 155, y_front + card_h // 2 - 18), "OLD TOMONI", fill="#0A4C7A", font=ImageFont.truetype("C:/Windows/Fonts/segoeuib.ttf", 26), anchor="mt")
    draw.text((cx - 155, y_front + card_h // 2 + 10), "Yuz qismi", fill="#5A7A90", font=ImageFont.truetype("C:/Windows/Fonts/segoeui.ttf", 20), anchor="mt")
    
    draw.rounded_rectangle([cx - 280, y_back + card_h // 2 - 40, cx - 30, y_back + card_h // 2 + 40], radius=12, fill=(255, 255, 255, 240))
    draw.text((cx - 155, y_back + card_h // 2 - 18), "ORQA TOMONI", fill="#0A4C7A", font=ImageFont.truetype("C:/Windows/Fonts/segoeuib.ttf", 26), anchor="mt")
    draw.text((cx - 155, y_back + card_h // 2 + 10), "Kontaktlar & QR", fill="#5A7A90", font=ImageFont.truetype("C:/Windows/Fonts/segoeui.ttf", 20), anchor="mt")
    
    return mockup

def main():
    print("1. Rendering Masterpiece Front Side...")
    front = render_front()
    print("2. Rendering Masterpiece Back Side...")
    back = render_back()
    print("3. Rendering Natural Wood Studio Mockup...")
    mockup = render_realistic_wood_mockup(front, back)
    
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
        
    pdf_desk = os.path.join(DESKTOP_DIR, "DrNozima_Vizitka_ClassicModern_Chop_Etish.pdf")
    pdf_pub = os.path.join(PUBLIC_DIR, "drnozima_card_classic_print.pdf")
    front.save(pdf_desk, "PDF", resolution=300.0, save_all=True, append_images=[back])
    front.save(pdf_pub, "PDF", resolution=300.0, save_all=True, append_images=[back])
    print(f"Saved PDF: {pdf_desk}")
    print(f"Saved PDF: {pdf_pub}")

if __name__ == "__main__":
    main()
