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
COLOR_PRIMARY = (8, 98, 136)         # #086288 (Deep Aegean Teal)
COLOR_PRIMARY_DARK = (4, 36, 51)     # #042433 (Midnight Navy)
COLOR_PRIMARY_LIGHT = (14, 114, 158) # #0E729E (Luminous Teal)
COLOR_ACCENT = (77, 141, 186)        # #4D8DBA (Soft Cerulean)
COLOR_ACCENT_LIGHT = (151, 215, 255) # #97D7FF (Powder Sky Cyan)
COLOR_GOLD = (255, 239, 196)         # #FFEFC4 (Soft Champagne Gold / Cream)
COLOR_GOLD_DARK = (212, 175, 105)   # #D4AF69 (Warm Metallic Gold)
COLOR_SURFACE = (244, 248, 251)      # #F4F8FB (Ice White)
COLOR_BORDER = (209, 228, 240)       # #D1E4F0 (Soft Slate Border)
WHITE = (255, 255, 255)

# High-Fashion & Feminine Aesthetic Fonts (Adobe Garamond Pro / Georgia)
def get_serif_font(size, style="regular"):
    scaled_size = int(size * SCALE)
    font_map = {
        "bold": "C:/Windows/Fonts/AGaramondPro-Bold.otf",
        "italic": "C:/Windows/Fonts/AGaramondPro-Italic.otf",
        "regular": "C:/Windows/Fonts/AGaramondPro-Regular.otf",
        "semibold": "C:/Windows/Fonts/ACaslonPro-Semibold.otf",
    }
    font_path = font_map.get(style, font_map["regular"])
    if not os.path.exists(font_path):
        # Fallbacks to Georgia
        fallback_map = {
            "bold": "C:/Windows/Fonts/georgiab.ttf",
            "italic": "C:/Windows/Fonts/georgiai.ttf",
            "regular": "C:/Windows/Fonts/georgia.ttf",
            "semibold": "C:/Windows/Fonts/georgiab.ttf",
        }
        font_path = fallback_map.get(style, "C:/Windows/Fonts/georgia.ttf")
    try:
        return ImageFont.truetype(font_path, scaled_size)
    except:
        return ImageFont.load_default()

def get_sans_font(size, bold=True):
    scaled_size = int(size * SCALE)
    font_name = "segoeuib.ttf" if bold else "segoeui.ttf"
    try:
        return ImageFont.truetype(f"C:/Windows/Fonts/{font_name}", scaled_size)
    except:
        return ImageFont.load_default()

def draw_sparkle(draw, cx, cy, size, color=COLOR_GOLD):
    """Draw an elegant 4-point jewelry sparkle star."""
    pts = [
        (cx, cy - size),
        (cx + size * 0.22, cy - size * 0.22),
        (cx + size, cy),
        (cx + size * 0.22, cy + size * 0.22),
        (cx, cy + size),
        (cx - size * 0.22, cy + size * 0.22),
        (cx - size, cy),
        (cx - size * 0.22, cy - size * 0.22),
    ]
    draw.polygon(pts, fill=color)

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
# 1. FRONT CARD (PER USER FEEDBACK: REMOVE STICK + FEMININE CREATIVE TYPOGRAPHY)
# ==========================================
def render_front():
    img = Image.new("RGBA", (W, H), COLOR_PRIMARY)
    draw = ImageDraw.Draw(img)
    
    # 1. Smooth radial glow illumination from center
    cx_center, cy_center = W // 2, H // 2
    max_diag = int(math.hypot(W, H) / 2)
    step = 8 * SCALE
    for r in range(max_diag, 0, -step):
        t = r / max_diag
        # Center is luminous teal (#0E729E), edges fade into rich midnight teal (#042433)
        cr = int(COLOR_PRIMARY_LIGHT[0] * (1 - t*0.75) + COLOR_PRIMARY_DARK[0] * (t*0.75))
        cg = int(COLOR_PRIMARY_LIGHT[1] * (1 - t*0.75) + COLOR_PRIMARY_DARK[1] * (t*0.75))
        cb = int(COLOR_PRIMARY_LIGHT[2] * (1 - t*0.75) + COLOR_PRIMARY_DARK[2] * (t*0.75))
        draw.ellipse([cx_center - r, cy_center - r, cx_center + r, cy_center + r], fill=(cr, cg, cb, 255))
        
    # 2. Luxury Medallion Emblem (NO STICK / HANDLE - PURE HARMONIOUS CIRCLE)
    # Perfectly centered horizontally
    emblem_cx = W // 2
    emblem_cy = int(225 * SCALE)
    emblem_r = int(122 * SCALE)
    
    # Outer champagne gold soft aura ring
    draw.ellipse([emblem_cx - emblem_r - int(12*SCALE), emblem_cy - emblem_r - int(12*SCALE),
                  emblem_cx + emblem_r + int(12*SCALE), emblem_cy + emblem_r + int(12*SCALE)],
                 outline=(255, 239, 196, 100), width=int(2*SCALE))
                 
    # Gold perimeter ring
    draw.ellipse([emblem_cx - emblem_r - int(5*SCALE), emblem_cy - emblem_r - int(5*SCALE),
                  emblem_cx + emblem_r + int(5*SCALE), emblem_cy + emblem_r + int(5*SCALE)],
                 outline=COLOR_GOLD, width=int(3*SCALE))
                 
    # Crisp white circular face
    draw.ellipse([emblem_cx - emblem_r, emblem_cy - emblem_r,
                  emblem_cx + emblem_r, emblem_cy + emblem_r],
                 fill=WHITE, outline=WHITE, width=int(2*SCALE))
                 
    # Inner soft cyan hairline
    draw.ellipse([emblem_cx - emblem_r + int(8*SCALE), emblem_cy - emblem_r + int(8*SCALE),
                  emblem_cx + emblem_r - int(8*SCALE), emblem_cy + emblem_r - int(8*SCALE)],
                 outline=COLOR_BORDER, width=int(1.5*SCALE))
                 
    # Official Project Full-Color Logo (Graceful tooth silhouette with golden sparkle)
    logo_path = os.path.join(PUBLIC_DIR, "logo-symbol.png")
    if os.path.exists(logo_path):
        logo = Image.open(logo_path).convert("RGBA")
        target_size = int(emblem_r * 1.55)
        logo_resized = logo.resize((target_size, target_size), Image.Resampling.LANCZOS)
        img.paste(logo_resized, (emblem_cx - target_size // 2, emblem_cy - target_size // 2), logo_resized)
        
    draw = ImageDraw.Draw(img)
    
    # Flanking delicate gold sparkle accents
    draw_sparkle(draw, emblem_cx - emblem_r - int(38*SCALE), emblem_cy, int(12*SCALE), COLOR_GOLD)
    draw_sparkle(draw, emblem_cx + emblem_r + int(38*SCALE), emblem_cy, int(12*SCALE), COLOR_GOLD)
    draw_sparkle(draw, emblem_cx - emblem_r - int(58*SCALE), emblem_cy - int(10*SCALE), int(6*SCALE), COLOR_ACCENT_LIGHT)
    draw_sparkle(draw, emblem_cx + emblem_r + int(58*SCALE), emblem_cy - int(10*SCALE), int(6*SCALE), COLOR_ACCENT_LIGHT)
    
    # 3. FEMININE & CREATIVE TYPOGRAPHY (Adobe Garamond Pro / Haute Horlogerie aesthetic)
    font_name = get_serif_font(52, style="bold")
    font_divider = get_serif_font(22, style="regular")
    font_clinic = get_serif_font(23, style="regular")
    font_city = get_serif_font(20, style="italic")
    
    # Name: Nozima Baxtiyarovna (No "DR", beautiful title casing, warm and feminine)
    name_y = int(416 * SCALE)
    draw.text((W // 2, name_y), "Nozima Baxtiyarovna", fill=WHITE, font=font_name, anchor="mt")
    
    # Elegant gold hairline divider with center 4-point sparkle
    div_y = int(484 * SCALE)
    div_len = int(220 * SCALE)
    draw.line([(W // 2 - div_len, div_y), (W // 2 - int(24 * SCALE), div_y)], fill=COLOR_GOLD, width=int(1.5 * SCALE))
    draw_sparkle(draw, W // 2, div_y, int(8 * SCALE), COLOR_GOLD)
    draw.line([(W // 2 + int(24 * SCALE), div_y), (W // 2 + div_len, div_y)], fill=COLOR_GOLD, width=int(1.5 * SCALE))
    
    # Clinic Name: SEVDO DENTA KLINIKASI (Tracked letters, soft sky cyan)
    clinic_y = int(510 * SCALE)
    draw.text((W // 2, clinic_y), "S E V D O   D E N T A   K L I N I K A S I", fill=COLOR_ACCENT_LIGHT, font=font_clinic, anchor="mt")
    
    # City: Eski shahar, Andijon (Soft italic champagne gold)
    city_y = int(552 * SCALE)
    draw.text((W // 2, city_y), "Eski shahar, Andijon", fill=COLOR_GOLD, font=font_city, anchor="mt")
    
    return img.resize((1110, 638), Image.Resampling.LANCZOS).convert("RGB")

# ==========================================
# 2. BACK CARD (PER USER FEEDBACK: AYOLLAR STOMATOLOGI, OLD TOWN, CENTERED QR)
# ==========================================
def render_back():
    img = Image.new("RGBA", (W, H), COLOR_ACCENT)
    draw = ImageDraw.Draw(img)
    
    # 1. Subtle smooth gradient background
    for y in range(H):
        t = y / H
        r = int(COLOR_ACCENT[0] * (1 - 0.15*t) + COLOR_PRIMARY[0] * (0.15*t))
        g = int(COLOR_ACCENT[1] * (1 - 0.15*t) + COLOR_PRIMARY[1] * (0.15*t))
        b = int(COLOR_ACCENT[2] * (1 - 0.15*t) + COLOR_PRIMARY[2] * (0.15*t))
        draw.line([(0, y), (W, y)], fill=(r, g, b, 255))
        
    # 2. Flowing organic silk wave in top right (Deep Aegean Teal)
    wave_pts = []
    x_start = int(410 * SCALE)
    for x in range(x_start, W + 1, int(4 * SCALE)):
        norm_x = (x - x_start) / (W - x_start)
        # Gentle smooth curve
        y_wave = int((math.sin(norm_x * math.pi * 0.5) * 235) * SCALE)
        wave_pts.append((x, y_wave))
        
    poly_pts = [(x_start, 0)] + wave_pts + [(W, 0)]
    draw.polygon(poly_pts, fill=COLOR_PRIMARY)
    # Double accent lines (Crisp white + Champagne gold)
    draw.line(wave_pts, fill=WHITE, width=int(2.5 * SCALE))
    draw.line([(p[0], p[1] + int(4 * SCALE)) for p in wave_pts], fill=COLOR_GOLD, width=int(1.5 * SCALE))
    
    # 3. Header Texts (Top-Right):
    # - Nozima Baxtiyarovna (No "DR.")
    # - Ayollar Stomatologi (Warm Gold)
    # - Sevdo Denta klinikasi (Soft Sky Cyan)
    font_header_name = get_serif_font(42, style="bold")
    font_header_title = get_serif_font(26, style="italic")
    font_header_clinic = get_serif_font(20, style="regular")
    
    draw.text((W - int(65 * SCALE), int(40 * SCALE)), "Nozima Baxtiyarovna", fill=WHITE, font=font_header_name, anchor="rt")
    draw.text((W - int(65 * SCALE), int(94 * SCALE)), "Ayollar Stomatologi", fill=COLOR_GOLD, font=font_header_title, anchor="rt")
    draw.text((W - int(65 * SCALE), int(136 * SCALE)), "«Sevdo Denta» klinikasi", fill=COLOR_ACCENT_LIGHT, font=font_header_clinic, anchor="rt")
    
    # 4. Contacts on Left (Aligned with circular icons):
    # - Phone: +998 (91) 619-95-00
    # - Location: Andijon sh., Eski shahar, Old Town binosi
    # - Telegram: @Miss_Dentist_95
    # - Instagram: @sevdo_denta
    # - Website: drnozima.uz
    font_contact = get_sans_font(21, bold=True)
    
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
        draw.text((text_x, y_pos), text_val, fill=WHITE, font=font_contact, anchor="lt")
        
    # 5. Services List ("XIZMATLAR")
    serv_y = int(430 * SCALE)
    font_serv_head = get_serif_font(22, style="bold")
    font_serv_items = get_serif_font(21, style="regular")
    
    draw.line([(col_x, serv_y - int(10 * SCALE)), (int(640 * SCALE), serv_y - int(10 * SCALE))], fill=COLOR_GOLD, width=int(2 * SCALE))
    draw.text((col_x, serv_y), "X I Z M A T L A R :", fill=COLOR_PRIMARY_DARK, font=font_serv_head, anchor="lt")
    
    draw.text((col_x, serv_y + int(32 * SCALE)), "• Estetik tish davolash   • Vinirlar   • Sirkoniy qoplama", fill=WHITE, font=font_serv_items, anchor="lt")
    draw.text((col_x, serv_y + int(60 * SCALE)), "• Tish oqartirish   • Bolalar stomatologiyasi   • 3D Rentgen", fill=WHITE, font=font_serv_items, anchor="lt")
    
    # 6. Centered Website QR Code Pedestal (Bottom-Right)
    circle_cx = int(870 * SCALE)
    circle_cy = int(455 * SCALE)
    circle_r = int(175 * SCALE)
    
    # Outer drop shadow
    draw.ellipse([circle_cx - circle_r - 6*SCALE, circle_cy - circle_r - 6*SCALE,
                  circle_cx + circle_r + 6*SCALE, circle_cy + circle_r + 6*SCALE], fill=(50, 110, 155))
    # Crisp white pedestal
    draw.ellipse([circle_cx - circle_r, circle_cy - circle_r, circle_cx + circle_r, circle_cy + circle_r],
                 fill=WHITE, outline=COLOR_PRIMARY, width=int(4 * SCALE))
    # Inner gold border
    draw.ellipse([circle_cx - circle_r + int(12*SCALE), circle_cy - circle_r + int(12*SCALE),
                  circle_cx + circle_r - int(12*SCALE), circle_cy + circle_r - int(12*SCALE)],
                 outline=COLOR_GOLD, width=int(2 * SCALE))
                 
    # Centered QR code
    qr_size = int(210 * SCALE)
    qr_img = create_project_qr(WEBSITE_URL, qr_size=qr_size)
    img.paste(qr_img, (circle_cx - qr_size // 2, circle_cy - qr_size // 2 - int(14 * SCALE)), qr_img)
    
    # Captions inside pedestal
    font_qr_label = get_serif_font(18, style="bold")
    font_qr_sub = get_serif_font(16, style="italic")
    draw.text((circle_cx, circle_cy + qr_size // 2 + int(6 * SCALE)), "Saytga o'tish (QR)", fill=COLOR_PRIMARY, font=font_qr_label, anchor="mt")
    draw.text((circle_cx, circle_cy + qr_size // 2 + int(24 * SCALE)), "drnozima.uz", fill=COLOR_ACCENT, font=font_qr_sub, anchor="mt")
    
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
        
    font_title = ImageFont.truetype("C:/Windows/Fonts/AGaramondPro-Bold.otf", 48)
    font_sub = ImageFont.truetype("C:/Windows/Fonts/AGaramondPro-Italic.otf", 26)
    
    # Elegant title plate at top
    draw.rounded_rectangle([pw//2 - 650, 25, pw//2 + 650, 145], radius=16, fill=(255, 255, 255, 230), outline=(120, 80, 45), width=2)
    draw.text((pw // 2, 45), "NOZIMA BAXTIYAROVNA — AYOLLAR STOMATOLOGI", fill="#086288", font=font_title, anchor="mt")
    draw.text((pw // 2, 104), "Sevdo Denta Klinikasi · Rasmiy Vizitka (90×50 mm, 300 DPI Chop etishga tayyor)", fill="#4A657A", font=font_sub, anchor="mt")
    
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
    draw.text((cx - 155, y_front + card_h // 2 - 18), "OLD TOMONI", fill="#086288", font=ImageFont.truetype("C:/Windows/Fonts/AGaramondPro-Bold.otf", 28), anchor="mt")
    draw.text((cx - 155, y_front + card_h // 2 + 12), "Yuz qismi", fill="#5A7A90", font=ImageFont.truetype("C:/Windows/Fonts/AGaramondPro-Italic.otf", 22), anchor="mt")
    
    draw.rounded_rectangle([cx - 280, y_back + card_h // 2 - 40, cx - 30, y_back + card_h // 2 + 40], radius=12, fill=(255, 255, 255, 240))
    draw.text((cx - 155, y_back + card_h // 2 - 18), "ORQA TOMONI", fill="#086288", font=ImageFont.truetype("C:/Windows/Fonts/AGaramondPro-Bold.otf", 28), anchor="mt")
    draw.text((cx - 155, y_back + card_h // 2 + 12), "Kontaktlar & QR", fill="#5A7A90", font=ImageFont.truetype("C:/Windows/Fonts/AGaramondPro-Italic.otf", 22), anchor="mt")
    
    return mockup

def main():
    print("1. Rendering Refined Front Side (No stick, pure circular medallion, feminine typography)...")
    front = render_front()
    print("2. Rendering Refined Back Side (Ayollar Stomatologi, Old Town binosi, centered QR)...")
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
