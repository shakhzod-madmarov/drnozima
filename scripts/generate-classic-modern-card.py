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

# REAL PROJECT UI/UX & LOGO COLORS
# Primary: #086288 (RGB: 8, 98, 136)
# Accent: #4D8DBA (RGB: 77, 141, 186)
# Accent Light: #97D7FF (RGB: 151, 215, 255)
# Gold / Cream: #FFEFC4 (RGB: 255, 239, 196)
# Deep Navy / Dark: #042433 (RGB: 4, 36, 51)
# Surface Light: #F4F8FB (RGB: 244, 248, 251)
# Border Soft: #D1E4F0 (RGB: 209, 228, 240)

COLOR_PRIMARY = (8, 98, 136)       # #086288
COLOR_PRIMARY_DARK = (4, 36, 51)   # #042433
COLOR_ACCENT = (77, 141, 186)      # #4D8DBA
COLOR_ACCENT_LIGHT = (151, 215, 255) # #97D7FF
COLOR_GOLD = (255, 239, 196)       # #FFEFC4
COLOR_SURFACE = (244, 248, 251)    # #F4F8FB
COLOR_BORDER = (209, 228, 240)     # #D1E4F0
WHITE = (255, 255, 255)

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
        draw.ellipse([cx - pr*0.4, p_cy - pr*0.4, cx + pr*0.4, p_cy + pr*0.4], fill=COLOR_ACCENT)
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

def draw_project_dental_mirror(img, cx, cy, radius=int(140 * SCALE), ring_thick=int(22 * SCALE)):
    """Draw the dental mirror using REAL PROJECT LOGO and BRAND COLORS."""
    draw = ImageDraw.Draw(img)
    
    # 1. Mirror Handle (angled down-right)
    h_angle = math.radians(32)
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
    
    # Handle grip in Project Accent color (#4D8DBA / #97D7FF)
    grip_pts = [
        (hx + 170*SCALE, hy + 85*SCALE),
        (hx + 380*SCALE, hy + 175*SCALE),
        (hx + 375*SCALE, hy + 230*SCALE),
        (hx + 150*SCALE, hy + 115*SCALE),
    ]
    draw.polygon(grip_pts, fill=COLOR_ACCENT)
    
    # Grip detail grooves
    draw.line([(hx + 220*SCALE, hy + 105*SCALE), (hx + 200*SCALE, hy + 140*SCALE)], fill=WHITE, width=int(3*SCALE))
    draw.line([(hx + 270*SCALE, hy + 125*SCALE), (hx + 250*SCALE, hy + 160*SCALE)], fill=WHITE, width=int(3*SCALE))
    draw.line([(hx + 320*SCALE, hy + 145*SCALE), (hx + 300*SCALE, hy + 180*SCALE)], fill=WHITE, width=int(3*SCALE))
    
    # 2. Mirror Glass Face: Crisp White with subtle soft bevel
    draw.ellipse([cx - radius, cy - radius, cx + radius, cy + radius], fill=WHITE, outline=WHITE, width=ring_thick)
    
    # 3. REAL PROJECT LOGO (Full-color tooth with gradient and gold star!)
    logo_path = os.path.join(PUBLIC_DIR, "logo-symbol.png")
    if os.path.exists(logo_path):
        logo = Image.open(logo_path).convert("RGBA")
        target_size = int(radius * 1.5)
        logo_resized = logo.resize((target_size, target_size), Image.Resampling.LANCZOS)
        img.paste(logo_resized, (cx - target_size // 2, cy - target_size // 2), logo_resized)

def create_project_qr(url=WEBSITE_URL, qr_size=int(200 * SCALE)):
    """Generate high-error-correction QR code in Project Primary color."""
    qr = qrcode.QRCode(
        version=None,
        error_correction=qrcode.constants.ERROR_CORRECT_H,
        box_size=12,
        border=1,
    )
    qr.add_data(url)
    qr.make(fit=True)
    img_qr = qr.make_image(fill_color=COLOR_PRIMARY, back_color=WHITE).convert("RGBA")
    img_qr = img_qr.resize((qr_size, qr_size), Image.Resampling.LANCZOS)
    return img_qr

# ==========================================
# 1. FRONT CARD (PER USER COMMENTS & REAL COLORS)
# ==========================================
def render_front():
    # Base background: Project Primary Deep Teal (#086288) with subtle top-to-bottom shading
    img = Image.new("RGBA", (W, H), COLOR_PRIMARY)
    draw = ImageDraw.Draw(img)
    
    # Subtle ambient gradient from #064B69 to #086288
    for y in range(H):
        t = y / H
        r = int(COLOR_PRIMARY_DARK[0] * 0.4 + COLOR_PRIMARY[0] * (1 - 0.4*t))
        g = int(COLOR_PRIMARY_DARK[1] * 0.4 + COLOR_PRIMARY[1] * (1 - 0.4*t))
        b = int(COLOR_PRIMARY_DARK[2] * 0.4 + COLOR_PRIMARY[2] * (1 - 0.4*t))
        draw.line([(0, y), (W, y)], fill=(r, g, b, 255))
        
    # Dental Mirror with real project logo in center
    draw_project_dental_mirror(img, cx=W // 2 - int(30 * SCALE), cy=int(235 * SCALE), radius=int(135 * SCALE), ring_thick=int(20 * SCALE))
    
    draw = ImageDraw.Draw(img)
    
    # USER COMMENT 0: "remove DR" -> NOZIMA BAXTIYAROVNA
    draw.text((W // 2, int(450 * SCALE)), "NOZIMA BAXTIYAROVNA", fill=WHITE, font=get_font(44, bold=True), anchor="mt")
    
    # USER COMMENT 1: "Sevdo Denta klinikasi" -> SEVDO DENTA KLINIKASI in Project Accent Light (#97D7FF)
    draw.text((W // 2, int(512 * SCALE)), "S E V D O   D E N T A   K L I N I K A S I", fill=COLOR_ACCENT_LIGHT, font=get_font(21, bold=True), anchor="mt")
    
    # USER COMMENT 2: "Eski shahar, Andijon" -> Eski shahar, Andijon in Project Soft Border / Cream
    draw.text((W // 2, int(552 * SCALE)), "Eski shahar, Andijon", fill=COLOR_BORDER, font=get_font(19, bold=False), anchor="mt")
    
    return img.resize((1110, 638), Image.Resampling.LANCZOS).convert("RGB")

# ==========================================
# 2. BACK CARD (PER USER COMMENTS & REAL COLORS)
# ==========================================
def render_back():
    # Base background: Project Accent (#4D8DBA)
    img = Image.new("RGBA", (W, H), COLOR_ACCENT)
    draw = ImageDraw.Draw(img)
    
    # 1. Top-Right Wave: Project Primary Deep Teal (#086288)
    wave_pts = [
        (int(460 * SCALE), 0),
        (int(550 * SCALE), int(55 * SCALE)),
        (int(660 * SCALE), int(125 * SCALE)),
        (int(810 * SCALE), int(180 * SCALE)),
        (int(980 * SCALE), int(210 * SCALE)),
        (W, int(220 * SCALE)),
        (W, 0),
    ]
    draw.polygon(wave_pts, fill=COLOR_PRIMARY)
    draw.line(wave_pts[:-2], fill=WHITE, width=int(2.5 * SCALE))
    
    # 2. USER COMMENT 4 & 5:
    # "remove DR." -> NOZIMA BAXTIYAROVNA
    # "change to Ayollar Stomatologi" -> Ayollar Stomatologi
    draw.text((W - int(65 * SCALE), int(42 * SCALE)), "NOZIMA BAXTIYAROVNA", fill=WHITE, font=get_font(34, bold=True), anchor="rt")
    draw.text((W - int(65 * SCALE), int(88 * SCALE)), "Ayollar Stomatologi", fill=COLOR_GOLD, font=get_font(22, bold=True), anchor="rt")
    draw.text((W - int(65 * SCALE), int(124 * SCALE)), "Sevdo Denta klinikasi", fill=COLOR_ACCENT_LIGHT, font=get_font(18, bold=False), anchor="rt")
    
    # 3. USER COMMENT 3:
    # "Andijon sh. , Eski shahar, Old Town binosi"
    col_x = int(75 * SCALE)
    text_x = col_x + int(56 * SCALE)
    
    contacts = [
        ("phone", "+998 (91) 619-95-00", int(65 * SCALE)),
        ("location", "Andijon sh., Eski shahar, Old Town binosi", int(136 * SCALE)),
        ("telegram", "Telegram: @Miss_Dentist_95", int(207 * SCALE)),
        ("instagram", "Instagram: @sevdo_denta", int(278 * SCALE)),
        ("globe", "drnozima.uz", int(349 * SCALE)),
    ]
    
    for icon_type, text_val, y_pos in contacts:
        cy = y_pos + int(13 * SCALE)
        draw_circular_icon(draw, col_x + int(18 * SCALE), cy, icon_type, color=WHITE)
        draw.text((text_x, y_pos), text_val, fill=WHITE, font=get_font(22, bold=True), anchor="lt")
        
    # 4. Services List (Clean and spacious)
    serv_y = int(430 * SCALE)
    draw.line([(col_x, serv_y - int(10 * SCALE)), (int(640 * SCALE), serv_y - int(10 * SCALE))], fill=WHITE, width=int(2 * SCALE))
    draw.text((col_x, serv_y), "XIZMATLAR:", fill=COLOR_PRIMARY_DARK, font=get_font(19, bold=True), anchor="lt")
    
    draw.text((col_x, serv_y + int(32 * SCALE)), "• Tish davolash   • Vinirlar   • Sirkoniy qoplama", fill=WHITE, font=get_font(19, bold=True), anchor="lt")
    draw.text((col_x, serv_y + int(60 * SCALE)), "• Tish oqartirish   • Bolalar stomatologiyasi   • Rentgen", fill=WHITE, font=get_font(19, bold=True), anchor="lt")
    
    # 5. USER COMMENT 6:
    # "put to to center to circle bellow"
    # Place the large white circle / sculpted tooth element in the bottom-right,
    # and put the Website QR code DIRECTLY IN THE CENTER OF IT!
    circle_cx = int(870 * SCALE)
    circle_cy = int(455 * SCALE)
    circle_r = int(175 * SCALE)
    
    # Draw large circular white pedestal with soft drop shadow
    draw.ellipse([circle_cx - circle_r - 6*SCALE, circle_cy - circle_r - 6*SCALE,
                  circle_cx + circle_r + 6*SCALE, circle_cy + circle_r + 6*SCALE], fill=(50, 110, 155))
    draw.ellipse([circle_cx - circle_r, circle_cy - circle_r, circle_cx + circle_r, circle_cy + circle_r],
                 fill=WHITE, outline=COLOR_PRIMARY, width=int(4 * SCALE))
                 
    # Inner elegant border
    draw.ellipse([circle_cx - circle_r + int(12*SCALE), circle_cy - circle_r + int(12*SCALE),
                  circle_cx + circle_r - int(12*SCALE), circle_cy + circle_r - int(12*SCALE)],
                 outline=COLOR_BORDER, width=int(2 * SCALE))

    # Center QR Code right in the center of this circle
    qr_size = int(210 * SCALE)
    qr_img = create_project_qr(WEBSITE_URL, qr_size=qr_size)
    img.paste(qr_img, (circle_cx - qr_size // 2, circle_cy - qr_size // 2 - int(14 * SCALE)), qr_img)
    
    # Label inside circle at bottom
    draw.text((circle_cx, circle_cy + qr_size // 2 + int(6 * SCALE)), "Saytga o'tish (QR)", fill=COLOR_PRIMARY, font=get_font(15, bold=True), anchor="mt")
    draw.text((circle_cx, circle_cy + qr_size // 2 + int(24 * SCALE)), "drnozima.uz", fill=COLOR_ACCENT, font=get_font(13, bold=False), anchor="mt")

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
        v = int((math.sin(y * 0.05) * 8))
        base_r = max(0, min(255, 196 + v))
        base_g = max(0, min(255, 148 + v))
        base_b = max(0, min(255, 96 + v))
        draw.rectangle([0, y, pw, y + plank_h], fill=(base_r, base_g, base_b))
        
        # Horizontal wood grain lines
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
    draw.text((pw // 2, 45), "NOZIMA BAXTIYAROVNA — AYOLLAR STOMATOLOGI", fill="#086288", font=font_title, anchor="mt")
    draw.text((pw // 2, 102), "Sevdo Denta Klinikasi · Rasmiy Vizitka (90×50 mm, 300 DPI Chop etishga tayyor)", fill="#4A657A", font=font_sub, anchor="mt")
    
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
    draw.text((cx - 155, y_front + card_h // 2 - 18), "OLD TOMONI", fill="#086288", font=ImageFont.truetype("C:/Windows/Fonts/segoeuib.ttf", 26), anchor="mt")
    draw.text((cx - 155, y_front + card_h // 2 + 10), "Yuz qismi", fill="#5A7A90", font=ImageFont.truetype("C:/Windows/Fonts/segoeui.ttf", 20), anchor="mt")
    
    draw.rounded_rectangle([cx - 280, y_back + card_h // 2 - 40, cx - 30, y_back + card_h // 2 + 40], radius=12, fill=(255, 255, 255, 240))
    draw.text((cx - 155, y_back + card_h // 2 - 18), "ORQA TOMONI", fill="#086288", font=ImageFont.truetype("C:/Windows/Fonts/segoeuib.ttf", 26), anchor="mt")
    draw.text((cx - 155, y_back + card_h // 2 + 10), "Kontaktlar & QR", fill="#5A7A90", font=ImageFont.truetype("C:/Windows/Fonts/segoeui.ttf", 20), anchor="mt")
    
    return mockup

def main():
    print("1. Rendering Master Front Side with real project colors and NOZIMA BAXTIYAROVNA...")
    front = render_front()
    print("2. Rendering Master Back Side with Ayollar Stomatologi, Old Town binosi, and centered QR...")
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
    
    print("\nAll files successfully generated and saved to Desktop & Public!")

if __name__ == "__main__":
    main()
