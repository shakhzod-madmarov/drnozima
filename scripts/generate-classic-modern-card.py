import os
import math
import qrcode
from PIL import Image, ImageDraw, ImageFont, ImageFilter

DESKTOP_DIR = os.path.join(os.environ["USERPROFILE"], "Desktop")
PUBLIC_DIR = os.path.abspath("frontend/public")
os.makedirs(DESKTOP_DIR, exist_ok=True)
os.makedirs(PUBLIC_DIR, exist_ok=True)

WEBSITE_URL = "https://drnozima.uz"

# Master Supersampled Canvas: 4x resolution for razor-sharp anti-aliased curves
# Final print target: 1110 x 638 px (94 x 54 mm at 300 DPI)
SCALE = 4
W, H = 1110 * SCALE, 638 * SCALE

# Luxury Palette
C_DEEP_BLUE = (8, 70, 110)       # #08466E - Rich royal sapphire
C_MID_BLUE = (12, 96, 153)       # #0C6099 - Primary dental blue
C_CYAN_ACCENT = (86, 180, 235)   # #56B4EB - Modern medical cyan
C_ICE_BLUE = (235, 246, 253)     # #EBF6FD - Clean porcelain tint
C_WHITE = (255, 255, 255)
C_DARK_NAVY = (4, 36, 51)        # #042433
C_SLATE = (71, 85, 105)
C_GOLD = (212, 175, 55)          # #D4AF37
C_GOLD_AMBER = (245, 158, 11)    # #F59E0B

def get_font(size, bold=True):
    scaled_size = int(size * SCALE)
    font_name = "segoeuib.ttf" if bold else "segoeui.ttf"
    try:
        return ImageFont.truetype(f"C:/Windows/Fonts/{font_name}", scaled_size)
    except:
        return ImageFont.load_default()

def draw_vector_star(draw, cx, cy, R, fill=C_GOLD_AMBER, outline=C_GOLD, width=None):
    """Draw a mathematically precise 5-pointed star."""
    if width is None:
        width = max(1, int(1.5 * SCALE))
    r = R * 0.382
    points = []
    for i in range(10):
        angle = -math.pi / 2 + i * (math.pi / 5)
        dist = R if i % 2 == 0 else r
        points.append((cx + dist * math.cos(angle), cy + dist * math.sin(angle)))
    draw.polygon(points, fill=fill, outline=outline, width=width)

def draw_stars(draw, start_cx, cy, R, count=5, spacing=None):
    if spacing is None:
        spacing = R * 2.35
    total_w = (count - 1) * spacing
    first_cx = start_cx - total_w / 2
    for i in range(count):
        cx = first_cx + i * spacing
        draw_vector_star(draw, cx, cy, R)

def draw_sparkle(draw, cx, cy, size=24, color=C_WHITE):
    """Draw a 4-pointed dental sparkle/gleam."""
    s = size * SCALE
    pts = [
        (cx, cy - s),
        (cx + s*0.25, cy - s*0.25),
        (cx + s, cy),
        (cx + s*0.25, cy + s*0.25),
        (cx, cy + s),
        (cx - s*0.25, cy + s*0.25),
        (cx - s, cy),
        (cx - s*0.25, cy - s*0.25),
    ]
    draw.polygon(pts, fill=color)

def draw_dental_mirror_master(img, cx, cy, radius, ring_thick):
    """Draw an ultra-realistic, sleek metallic dental mirror with organic tapered handle."""
    draw = ImageDraw.Draw(img)
    
    # 1. Ergonomic Handle: Smooth Bézier-like multi-point curve
    # Starts at ~36 deg from bottom-right of mirror
    rad_rad = math.radians(35)
    hx = cx + int(radius * math.cos(rad_rad))
    hy = cy + int(radius * math.sin(rad_rad))
    
    # Metal shaft transitioning into ergonomic sky-blue textured grip
    shaft_pts = []
    # Build upper and lower profile
    ctrl_pts = [
        (hx - 20*SCALE, hy - 5*SCALE, 26*SCALE),
        (hx + 90*SCALE, hy + 50*SCALE, 30*SCALE),
        (hx + 190*SCALE, hy + 95*SCALE, 36*SCALE),
        (hx + 320*SCALE, hy + 150*SCALE, 42*SCALE),
        (hx + 480*SCALE, hy + 215*SCALE, 46*SCALE),
    ]
    
    # Upper edge
    poly_top = []
    poly_bot = []
    for x, y, th in ctrl_pts:
        nx = -math.sin(rad_rad) * (th / 2)
        ny = math.cos(rad_rad) * (th / 2)
        poly_top.append((x - nx, y - ny))
        poly_bot.append((x + nx, y + ny))
        
    poly_shaft = poly_top + list(reversed(poly_bot))
    draw.polygon(poly_shaft, fill=C_WHITE)
    
    # Grip overlay in Cyan/Sky blue
    grip_top = poly_top[2:]
    grip_bot = poly_bot[2:]
    poly_grip = grip_top + list(reversed(grip_bot))
    draw.polygon(poly_grip, fill=C_CYAN_ACCENT)
    
    # Metallic grooves on grip
    for gx, gy in [(hx + 240*SCALE, hy + 118*SCALE), (hx + 290*SCALE, hy + 138*SCALE), (hx + 340*SCALE, hy + 158*SCALE)]:
        draw.line([(gx - 10*SCALE, gy - 20*SCALE), (gx + 10*SCALE, gy + 20*SCALE)], fill=C_WHITE, width=int(3*SCALE))
        
    # 2. Outer Mirror Ring with subtle soft glow
    draw.ellipse([cx - radius, cy - radius, cx + radius, cy + radius], outline=C_WHITE, width=ring_thick)
    # Inner silver highlight ring
    inner_rad = radius - ring_thick
    draw.ellipse([cx - inner_rad, cy - inner_rad, cx + inner_rad, cy + inner_rad], outline=C_CYAN_ACCENT, width=int(3*SCALE))
    
    # 3. Tooth inside mirror: Crisp white silhouette with blue cross
    logo_path = os.path.join(PUBLIC_DIR, "logo-symbol.png")
    if os.path.exists(logo_path):
        logo = Image.open(logo_path).convert("RGBA")
        r, g, b, a = logo.split()
        white_tooth = Image.new("RGBA", logo.size, (255, 255, 255, 255))
        white_tooth.putalpha(a)
        target_size = int(radius * 1.15)
        white_tooth = white_tooth.resize((target_size, target_size), Image.Resampling.LANCZOS)
        img.paste(white_tooth, (cx - target_size // 2, cy - target_size // 2), white_tooth)
        
    # Dental Plus Cross `+`
    cross_cx = cx + int(32 * SCALE)
    cross_cy = cy - int(24 * SCALE)
    c_thick = int(7 * SCALE)
    c_len = int(22 * SCALE)
    draw.rectangle([cross_cx - c_len//2, cross_cy - c_thick//2, cross_cx + c_len//2, cross_cy + c_thick//2], fill=C_MID_BLUE)
    draw.rectangle([cross_cx - c_thick//2, cross_cy - c_len//2, cross_cx + c_thick//2, cross_cy + c_len//2], fill=C_MID_BLUE)
    
    # Gleaming sparkle on top-left of mirror
    draw_sparkle(draw, cx - int(radius * 0.7), cy - int(radius * 0.7), size=18, color=C_WHITE)

def draw_sculpted_tooth(draw, base_cx, base_cy, scale_t=1.0):
    """Draw a sculpted, anatomical 3D-styled dental tooth cutting in from corner."""
    # Main outer tooth body (White with soft cyan contour)
    rx = int(240 * SCALE * scale_t)
    ry = int(210 * SCALE * scale_t)
    
    # Drop shadow under tooth
    draw.ellipse([base_cx - rx - 8*SCALE, base_cy - ry - 8*SCALE, base_cx + rx + 8*SCALE, base_cy + ry + 8*SCALE], fill=(70, 140, 190))
    # Main white crown body
    draw.ellipse([base_cx - rx, base_cy - ry, base_cx + rx, base_cy + ry], fill=C_WHITE)
    # Inner enamel crescent contour (just like reference image!)
    draw.arc([base_cx - rx + 38*SCALE, base_cy - ry + 38*SCALE, base_cx + rx - 38*SCALE, base_cy + ry - 38*SCALE],
             start=45, end=235, fill=C_CYAN_ACCENT, width=int(26*SCALE))
    # Inner delicate highlight
    draw.arc([base_cx - rx + 75*SCALE, base_cy - ry + 75*SCALE, base_cx + rx - 75*SCALE, base_cy + ry - 75*SCALE],
             start=60, end=220, fill=C_ICE_BLUE, width=int(12*SCALE))

def draw_modern_icon(draw, cx, cy, icon_type, color=C_WHITE):
    """Draw clean, vector outline icons inside circular badges."""
    r = int(21 * SCALE)
    # Outer circle
    draw.ellipse([cx - r, cy - r, cx + r, cy + r], outline=color, width=int(2.5 * SCALE))
    
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
        draw.ellipse([cx - pr*0.4, p_cy - pr*0.4, cx + pr*0.4, p_cy + pr*0.4], fill=C_CYAN_ACCENT)
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

def create_master_qr(url=WEBSITE_URL, qr_size=240*SCALE):
    """Generate high-error-correction QR code for website."""
    qr = qrcode.QRCode(
        version=None,
        error_correction=qrcode.constants.ERROR_CORRECT_H,
        box_size=12,
        border=1,
    )
    qr.add_data(url)
    qr.make(fit=True)
    img_qr = qr.make_image(fill_color=C_MID_BLUE, back_color=C_WHITE).convert("RGBA")
    img_qr = img_qr.resize((qr_size, qr_size), Image.Resampling.LANCZOS)
    return img_qr

# ==========================================
# 1. FRONT SIDE: LUXURY CLASSIC & MODERN
# ==========================================
def build_master_front():
    # Subtle royal sapphire vertical gradient
    img = Image.new("RGBA", (W, H), C_DEEP_BLUE)
    draw = ImageDraw.Draw(img)
    
    # Smooth gradient overlay
    for y in range(H):
        t = y / H
        # interpolate from C_DEEP_BLUE to C_MID_BLUE
        r = int(C_DEEP_BLUE[0] * (1 - t) + C_MID_BLUE[0] * t)
        g = int(C_DEEP_BLUE[1] * (1 - t) + C_MID_BLUE[1] * t)
        b = int(C_DEEP_BLUE[2] * (1 - t) + C_MID_BLUE[2] * t)
        draw.line([(0, y), (W, y)], fill=(r, g, b, 255))
        
    # Draw Dental Mirror & Tooth in center
    mirror_cx = W // 2 - int(35 * SCALE)
    mirror_cy = int(245 * SCALE)
    draw_dental_mirror_master(img, mirror_cx, mirror_cy, radius=int(132 * SCALE), ring_thick=int(20 * SCALE))
    
    draw = ImageDraw.Draw(img)
    
    # Doctor Name with elegant letter-spacing feel
    draw.text((W // 2, int(455 * SCALE)), "DR. NOZIMA BAXTIYAROVNA", fill=C_WHITE, font=get_font(42, bold=True), anchor="mt")
    
    # Subtitle
    draw.text((W // 2, int(515 * SCALE)), "S T O M A T O L O G I Y A   K L I N I K A S I", fill=C_CYAN_ACCENT, font=get_font(21, bold=True), anchor="mt")
    draw.text((W // 2, int(555 * SCALE)), "«Sevdo Denta» · Andijon", fill=C_ICE_BLUE, font=get_font(18, bold=False), anchor="mt")
    
    # 5 Subtle Golden Stars
    draw_stars(draw, W // 2, int(595 * SCALE), R=int(9 * SCALE), count=5, spacing=int(24 * SCALE))
    
    # Downsample to target 1110 x 638 px
    final_front = img.resize((1110, 638), Image.Resampling.LANCZOS).convert("RGB")
    return final_front

# ==========================================
# 2. BACK SIDE: TWO-TONE WAVE & SERVICES
# ==========================================
def build_master_back():
    img = Image.new("RGBA", (W, H), C_CYAN_ACCENT)
    draw = ImageDraw.Draw(img)
    
    # 1. Background: Smooth gradient on base
    for x in range(W):
        t = x / W
        r = int(C_CYAN_ACCENT[0] * (1 - t*0.3) + 200 * (t*0.3))
        g = int(C_CYAN_ACCENT[1] * (1 - t*0.3) + 225 * (t*0.3))
        b = int(C_CYAN_ACCENT[2] * (1 - t*0.3) + 250 * (t*0.3))
        draw.line([(x, 0), (x, H)], fill=(r, g, b, 255))
        
    # 2. Sweeping Dark Blue Wave from top to top-right
    # Organic curve
    wave_pts = [
        (int(450 * SCALE), 0),
        (int(540 * SCALE), int(55 * SCALE)),
        (int(650 * SCALE), int(125 * SCALE)),
        (int(800 * SCALE), int(180 * SCALE)),
        (int(980 * SCALE), int(210 * SCALE)),
        (W, int(220 * SCALE)),
        (W, 0),
    ]
    draw.polygon(wave_pts, fill=C_DEEP_BLUE)
    # Accent wave line (Gold/Cyan)
    draw.line(wave_pts[:-2], fill=C_WHITE, width=int(3 * SCALE))
    
    # 3. Sculpted Corner Tooth (Bottom-Right)
    draw_sculpted_tooth(draw, base_cx=int(945 * SCALE), base_cy=int(490 * SCALE), scale_t=1.0)
    
    # 4. Top-Right Doctor Title (In Dark Blue Wave)
    draw.text((W - int(65 * SCALE), int(42 * SCALE)), "DR. NOZIMA BAXTIYAROVNA", fill=C_WHITE, font=get_font(33, bold=True), anchor="rt")
    draw.text((W - int(65 * SCALE), int(88 * SCALE)), "SHIFOKOR-STOMATOLOG · DENTIST", fill=C_CYAN_ACCENT, font=get_font(20, bold=True), anchor="rt")
    draw.text((W - int(65 * SCALE), int(122 * SCALE)), "«Sevdo Denta» Klinikasi", fill=C_WHITE, font=get_font(18, bold=False), anchor="rt")
    # Stars
    draw_stars(draw, W - int(130 * SCALE), int(160 * SCALE), R=int(8 * SCALE), count=5, spacing=int(20 * SCALE))
    
    # 5. Left Column Contacts (Razor sharp icons + clean text)
    col_x = int(75 * SCALE)
    text_x = col_x + int(56 * SCALE)
    
    contacts = [
        ("phone", "+998 (91) 619-95-00", int(65 * SCALE)),
        ("location", "Andijon sh., A. Fitrat ko'chasi 251B", int(138 * SCALE)),
        ("telegram", "Telegram: @Miss_Dentist_95", int(211 * SCALE)),
        ("instagram", "Instagram: @sevdo_denta", int(284 * SCALE)),
        ("globe", "drnozima.uz", int(357 * SCALE)),
    ]
    
    for icon_type, text_val, y_pos in contacts:
        cy = y_pos + int(13 * SCALE)
        draw_modern_icon(draw, col_x + int(18 * SCALE), cy, icon_type, color=C_WHITE)
        draw.text((text_x, y_pos), text_val, fill=C_WHITE, font=get_font(22, bold=True), anchor="lt")
        
    # 6. Core Services as Modern Tag Pills
    serv_y = int(432 * SCALE)
    draw.line([(col_x, serv_y - int(10 * SCALE)), (int(640 * SCALE), serv_y - int(10 * SCALE))], fill=C_WHITE, width=int(2 * SCALE))
    draw.text((col_x, serv_y), "XIZMATLAR / SERVICES:", fill=C_DEEP_BLUE, font=get_font(19, bold=True), anchor="lt")
    
    # 4 Clean Service Bullets
    bullets = [
        "Kariyes va tish nervini og'riqsiz davolash",
        "Estetik restavratsiya va vinirlar",
        "Sirkoniy qoplamalar (koronka)",
        "Professional tish tozalash va oqartirish",
    ]
    
    b_y = serv_y + int(32 * SCALE)
    for idx, b_text in enumerate(bullets):
        by_pos = b_y + idx * int(29 * SCALE)
        draw.ellipse([col_x + int(4*SCALE), by_pos + int(6*SCALE), col_x + int(12*SCALE), by_pos + int(14*SCALE)], fill=C_DEEP_BLUE)
        draw.text((col_x + int(20 * SCALE), by_pos), b_text, fill=C_WHITE, font=get_font(18, bold=True), anchor="lt")
        
    # 7. QR Code to Website (Tile on the right, perfectly placed)
    qr_size = int(210 * SCALE)
    qr_img = create_master_qr(WEBSITE_URL, qr_size=qr_size)
    qr_x = int(680 * SCALE)
    qr_y = int(225 * SCALE)
    
    # White card plate with subtle shadow
    draw.rounded_rectangle([qr_x - 14*SCALE, qr_y - 12*SCALE, qr_x + qr_size + 14*SCALE, qr_y + qr_size + 52*SCALE],
                           radius=int(18*SCALE), fill=C_WHITE, outline=C_DEEP_BLUE, width=int(3*SCALE))
    img.paste(qr_img, (qr_x, qr_y), qr_img)
    draw.text((qr_x + qr_size // 2, qr_y + qr_size + int(10 * SCALE)), "Saytga o'tish (QR)", fill=C_DEEP_BLUE, font=get_font(16, bold=True), anchor="mt")
    draw.text((qr_x + qr_size // 2, qr_y + qr_size + int(30 * SCALE)), "drnozima.uz", fill=C_MID_BLUE, font=get_font(14, bold=False), anchor="mt")

    # Downsample to target 1110 x 638 px
    final_back = img.resize((1110, 638), Image.Resampling.LANCZOS).convert("RGB")
    return final_back

# ==========================================
# 3. LUXURY PRESENTATION MOCKUP ON WOOD
# ==========================================
def build_master_mockup(front_img, back_img):
    pw, ph = 2400, 1600
    mockup = Image.new("RGB", (pw, ph), "#EBE5DC")
    draw = ImageDraw.Draw(mockup)
    
    # Realistic warm wooden table plank lines
    for y in range(0, ph, 110):
        draw.line([(0, y), (pw, y)], fill="#D5CBB9", width=3)
        draw.line([(0, y + 2), (pw, y + 2)], fill="#F8F3EA", width=2)
        
    font_title = ImageFont.truetype("C:/Windows/Fonts/segoeuib.ttf", 46)
    font_sub = ImageFont.truetype("C:/Windows/Fonts/segoeui.ttf", 26)
    
    draw.text((pw // 2, 45), "DR. NOZIMA BAXTIYAROVNA — PREMIUM VIZITKA", fill="#08466E", font=font_title, anchor="mt")
    draw.text((pw // 2, 105), "Classic & Modern Dental Design (90×50 mm, 300 DPI Chop etishga tayyor)", fill="#5B7082", font=font_sub, anchor="mt")
    
    card_w, card_h = 1020, 586
    f_card = front_img.resize((card_w, card_h), Image.Resampling.LANCZOS)
    b_card = back_img.resize((card_w, card_h), Image.Resampling.LANCZOS)
    
    cx = (pw - card_w) // 2
    y_front = 185
    y_back = 855
    
    # Soft diffuse drop shadow for realism
    s_off = 22
    draw.rounded_rectangle([cx + s_off, y_front + s_off, cx + card_w + s_off, y_front + card_h + s_off], radius=18, fill="#A89D8B")
    draw.rounded_rectangle([cx + s_off, y_back + s_off, cx + card_w + s_off, y_back + card_h + s_off], radius=18, fill="#A89D8B")
    
    mockup.paste(f_card, (cx, y_front))
    mockup.paste(b_card, (cx, y_back))
    
    # Side badges
    draw.text((cx - 45, y_front + card_h // 2), "OLD TOMONI\n(Yuz qismi)", fill="#08466E", font=font_title, anchor="rm")
    draw.text((cx - 45, y_back + card_h // 2), "ORQA TOMONI\n(Kontaktlar & QR)", fill="#08466E", font=font_title, anchor="rm")
    
    return mockup

def main():
    print("1. Rendering Master Front Side (4x SSAA)...")
    front = build_master_front()
    print("2. Rendering Master Back Side (4x SSAA)...")
    back = build_master_back()
    print("3. Rendering Studio Mockup...")
    mockup = build_master_mockup(front, back)
    
    # Save files to Desktop and Public
    targets = [
        (os.path.join(DESKTOP_DIR, "DrNozima_Vizitka_ClassicModern_Old.png"), front),
        (os.path.join(DESKTOP_DIR, "DrNozima_Vizitka_ClassicModern_Orqa.png"), back),
        (os.path.join(DESKTOP_DIR, "DrNozima_Vizitka_ClassicModern_Mockup.png"), mockup),
        (os.path.join(PUBLIC_DIR, "drnozima_card_classic_front.png"), front),
        (os.path.join(PUBLIC_DIR, "drnozima_card_classic_back.png"), back),
        (os.path.join(PUBLIC_DIR, "drnozima_card_classic_mockup.png"), mockup),
    ]
    
    for path, img in targets:
        img.save(path, "PNG", dpi=(300, 300))
        print(f"Saved: {path}")
        
    # PDF generation: Multi-page print file
    pdf_desk = os.path.join(DESKTOP_DIR, "DrNozima_Vizitka_ClassicModern_Chop_Etish.pdf")
    pdf_pub = os.path.join(PUBLIC_DIR, "drnozima_card_classic_print.pdf")
    front.save(pdf_desk, "PDF", resolution=300.0, save_all=True, append_images=[back])
    front.save(pdf_pub, "PDF", resolution=300.0, save_all=True, append_images=[back])
    print(f"Saved PDF: {pdf_desk}")
    print(f"Saved PDF: {pdf_pub}")
    
    print("\nMasterpiece Classic Modern Card created successfully!")

if __name__ == "__main__":
    main()
