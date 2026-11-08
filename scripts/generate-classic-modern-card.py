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
COLOR_PRIMARY_LIGHT = (16, 128, 172) # #1080AC (Luminous Teal)
COLOR_ACCENT = (77, 141, 186)        # #4D8DBA (Soft Cerulean)
COLOR_ACCENT_LIGHT = (151, 215, 255) # #97D7FF (Powder Sky Cyan)
COLOR_GOLD = (255, 239, 196)         # #FFEFC4 (Soft Champagne Gold / Cream)
COLOR_GOLD_DEEP = (212, 175, 105)    # #D4AF69 (Warm Metallic Gold)
COLOR_ROSE_GOLD = (245, 215, 215)    # Soft Rose-Gold
COLOR_SURFACE = (244, 248, 251)      # #F4F8FB
COLOR_BORDER = (209, 228, 240)       # #D1E4F0
WHITE = (255, 255, 255)

# High-Fashion Feminine Typography Helpers
def get_font(path, size):
    scaled_size = int(size * SCALE)
    try:
        return ImageFont.truetype(path, scaled_size)
    except:
        return ImageFont.load_default()

def draw_sparkle(draw, cx, cy, size, color=COLOR_GOLD):
    """Draw a delicate 4-point jewelry sparkle star."""
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

# Chic Feminine Contact Sticker Badge
def draw_contact_sticker(draw, cx, cy, r, icon_type):
    """Draw a glossy, modern circular sticker badge with soft drop shadow."""
    # Soft drop shadow
    draw.ellipse([cx - r + 2*SCALE, cy - r + 3*SCALE, cx + r + 2*SCALE, cy + r + 3*SCALE], fill=(30, 85, 120))
    # Crisp white glossy sticker base
    draw.ellipse([cx - r, cy - r, cx + r, cy + r], fill=WHITE, outline=COLOR_GOLD, width=int(2*SCALE))
    # Inner border
    draw.ellipse([cx - r + int(3*SCALE), cy - r + int(3*SCALE), cx + r - int(3*SCALE), cy + r - int(3*SCALE)],
                 outline=COLOR_BORDER, width=int(1*SCALE))
                 
    color = COLOR_PRIMARY
    if icon_type == "phone":
        # Professional telephone handset glyph from Segoe MDL2 Assets (\uE717)
        try:
            f_phone = ImageFont.truetype("C:/Windows/Fonts/segmdl2.ttf", int(r * 1.05))
            draw.text((cx, cy), "\uE717", fill=color, font=f_phone, anchor="mm")
        except:
            # Clean vector telephone handset fallback
            canvas = Image.new("RGBA", (r * 2, r * 2), (0, 0, 0, 0))
            cd = ImageDraw.Draw(canvas)
            rcx, rcy = r, r
            cd.rounded_rectangle([rcx - r*0.28, rcy - r*0.62, rcx + r*0.28, rcy - r*0.28], radius=int(r*0.12), fill=color)
            cd.rounded_rectangle([rcx - r*0.28, rcy + r*0.28, rcx + r*0.28, rcy + r*0.62], radius=int(r*0.12), fill=color)
            cd.arc([rcx - r*0.7, rcy - r*0.48, rcx + r*0.22, rcy + r*0.48], start=-70, end=70, fill=color, width=int(r*0.22))
            rotated = canvas.rotate(-40, resample=Image.Resampling.BICUBIC)
            # Paste into base image
            r_img = Image.new("RGBA", (draw.im.size[0], draw.im.size[1]), (0, 0, 0, 0))
            r_img.paste(rotated, (cx - r, cy - r), rotated)
            draw.bitmap((0, 0), r_img)
    elif icon_type == "location":
        pr = r * 0.38
        p_cy = cy - r * 0.1
        draw.ellipse([cx - pr, p_cy - pr, cx + pr, p_cy + pr], fill=color)
        draw.polygon([(cx - pr + 2*SCALE, p_cy + 2*SCALE), (cx + pr - 2*SCALE, p_cy + 2*SCALE), (cx, cy + r*0.44)], fill=color)
        draw.ellipse([cx - pr*0.4, p_cy - pr*0.4, cx + pr*0.4, p_cy + pr*0.4], fill=WHITE)
    elif icon_type == "telegram":
        pts = [(cx - r*0.38, cy), (cx + r*0.42, cy - r*0.32), (cx - r*0.06, cy + r*0.38), (cx, cy + r*0.06)]
        draw.polygon(pts, fill=color)
    elif icon_type == "instagram":
        s = r * 0.4
        draw.rounded_rectangle([cx - s, cy - s, cx + s, cy + s], radius=int(s*0.35), outline=color, width=int(2*SCALE))
        draw.ellipse([cx - s*0.45, cy - s*0.45, cx + s*0.45, cy + s*0.45], outline=color, width=int(2*SCALE))
        draw.ellipse([cx + s*0.45, cy - s*0.5, cx + s*0.62, cy - s*0.32], fill=color)
    elif icon_type == "globe":
        gr = r * 0.46
        draw.ellipse([cx - gr, cy - gr, cx + gr, cy + gr], outline=color, width=int(2*SCALE))
        draw.line([(cx - gr, cy), (cx + gr, cy)], fill=color, width=int(2*SCALE))
        draw.line([(cx, cy - gr), (cx, cy + gr)], fill=color, width=int(2*SCALE))

# Chic Feminine Pill Sticker for Services
def draw_pill_sticker(draw, x, y, w, h, text, font):
    """Draw an elegant, rounded pill sticker with soft drop shadow and gold jewelry sparkle."""
    # Soft drop shadow
    draw.rounded_rectangle([x + 2*SCALE, y + 2.5*SCALE, x + w + 2*SCALE, y + h + 2.5*SCALE], radius=int(h/2), fill=(35, 90, 125))
    # Crisp white sticker base
    draw.rounded_rectangle([x, y, x + w, y + h], radius=int(h/2), fill=WHITE, outline=COLOR_GOLD, width=int(1.5*SCALE))
    # Delicate inner border
    draw.rounded_rectangle([x + int(2*SCALE), y + int(2*SCALE), x + w - int(2*SCALE), y + h - int(2*SCALE)],
                           radius=int(h/2 - 2*SCALE), outline=COLOR_BORDER, width=int(1*SCALE))
    # Tiny golden jewelry sparkle
    pts = [
        (x + int(14*SCALE), y + h//2 - int(5*SCALE)),
        (x + int(14*SCALE) + int(3*SCALE), y + h//2),
        (x + int(14*SCALE), y + h//2 + int(5*SCALE)),
        (x + int(14*SCALE) - int(3*SCALE), y + h//2)
    ]
    draw.polygon(pts, fill=COLOR_GOLD_DEEP)
    # Text
    draw.text((x + int(24*SCALE), y + h//2), text, fill=COLOR_PRIMARY, font=font, anchor="lm")

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
# 1. FRONT CARD (FEMININE STICKERS + CALLIGRAPHIC ROMANTIC FONT)
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
        cr = int(COLOR_PRIMARY_LIGHT[0] * (1 - t*0.75) + COLOR_PRIMARY_DARK[0] * (t*0.75))
        cg = int(COLOR_PRIMARY_LIGHT[1] * (1 - t*0.75) + COLOR_PRIMARY_DARK[1] * (t*0.75))
        cb = int(COLOR_PRIMARY_LIGHT[2] * (1 - t*0.75) + COLOR_PRIMARY_DARK[2] * (t*0.75))
        draw.ellipse([cx_center - r, cy_center - r, cx_center + r, cy_center + r], fill=(cr, cg, cb, 255))
        
    # 2. Central Cameo Sticker Medallion (NO STICK / HANDLE - PURE HARMONIOUS CIRCLE)
    emblem_cx = W // 2
    emblem_cy = int(220 * SCALE)
    emblem_r = int(122 * SCALE)
    
    # Cameo sticker drop shadow
    draw.ellipse([emblem_cx - emblem_r + 4*SCALE, emblem_cy - emblem_r + 6*SCALE,
                  emblem_cx + emblem_r + 4*SCALE, emblem_cy + emblem_r + 6*SCALE], fill=(2, 25, 38))
                  
    # Rose-Gold soft aura ring
    draw.ellipse([emblem_cx - emblem_r - int(10*SCALE), emblem_cy - emblem_r - int(10*SCALE),
                  emblem_cx + emblem_r + int(10*SCALE), emblem_cy + emblem_r + int(10*SCALE)],
                 outline=COLOR_ROSE_GOLD, width=int(2*SCALE))
                 
    # Champagne Gold perimeter ring
    draw.ellipse([emblem_cx - emblem_r - int(4*SCALE), emblem_cy - emblem_r - int(4*SCALE),
                  emblem_cx + emblem_r + int(4*SCALE), emblem_cy + emblem_r + int(4*SCALE)],
                 outline=COLOR_GOLD, width=int(3*SCALE))
                 
    # Crisp white circular sticker base
    draw.ellipse([emblem_cx - emblem_r, emblem_cy - emblem_r,
                  emblem_cx + emblem_r, emblem_cy + emblem_r], fill=WHITE)
                  
    # Inner soft hairline ring
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
    
    # Flanking delicate gold & rose sparkle sticker accents
    draw_sparkle(draw, emblem_cx - emblem_r - int(38*SCALE), emblem_cy, int(13*SCALE), COLOR_GOLD)
    draw_sparkle(draw, emblem_cx + emblem_r + int(38*SCALE), emblem_cy, int(13*SCALE), COLOR_GOLD)
    draw_sparkle(draw, emblem_cx - emblem_r - int(56*SCALE), emblem_cy - int(12*SCALE), int(7*SCALE), COLOR_ROSE_GOLD)
    draw_sparkle(draw, emblem_cx + emblem_r + int(56*SCALE), emblem_cy - int(12*SCALE), int(7*SCALE), COLOR_ROSE_GOLD)
    
    # 3. FEMININE & CREATIVE CALLIGRAPHIC TYPOGRAPHY (Gabriola / Garamond)
    font_name = get_font("C:/Windows/Fonts/Gabriola.ttf", 78)
    font_clinic = get_font("C:/Windows/Fonts/AGaramondPro-Regular.otf", 23)
    font_city = get_font("C:/Windows/Fonts/AGaramondPro-Italic.otf", 21)
    
    # Name: Nozima Baxtiyarovna (Poetic, romantic calligraphic script, No "DR")
    name_y = int(390 * SCALE)
    draw.text((W // 2, name_y), "Nozima Baxtiyarovna", fill=WHITE, font=font_name, anchor="mt")
    
    # Elegant gold hairline divider with center 4-point jewelry sparkle
    div_y = int(482 * SCALE)
    div_len = int(220 * SCALE)
    draw.line([(W // 2 - div_len, div_y), (W // 2 - int(24 * SCALE), div_y)], fill=COLOR_GOLD, width=int(1.5 * SCALE))
    draw_sparkle(draw, W // 2, div_y, int(8 * SCALE), COLOR_GOLD)
    draw.line([(W // 2 + int(24 * SCALE), div_y), (W // 2 + div_len, div_y)], fill=COLOR_GOLD, width=int(1.5 * SCALE))
    
    # Clinic Name: SEVDO DENTA KLINIKASI (Tracked letters, soft sky cyan)
    draw.text((W // 2, int(508 * SCALE)), "S E V D O   D E N T A   K L I N I K A S I", fill=COLOR_ACCENT_LIGHT, font=font_clinic, anchor="mt")
    
    # City: Eski shahar, Andijon (Soft italic champagne gold)
    draw.text((W // 2, int(550 * SCALE)), "Eski shahar, Andijon", fill=COLOR_GOLD, font=font_city, anchor="mt")
    
    return img.resize((1110, 638), Image.Resampling.LANCZOS).convert("RGB")

# ==========================================
# 2. BACK CARD (FEMININE STICKERS + BOLALAR STOMATOLOGIYASI REMOVED)
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
        
    # 2. Flowing organic silk ribbon wave in top right (Deep Aegean Teal)
    wave_pts = []
    x_start = int(400 * SCALE)
    for x in range(x_start, W + 1, int(4 * SCALE)):
        norm_x = (x - x_start) / (W - x_start)
        y_wave = int((math.sin(norm_x * math.pi * 0.5) * 235) * SCALE)
        wave_pts.append((x, y_wave))
        
    poly_pts = [(x_start, 0)] + wave_pts + [(W, 0)]
    draw.polygon(poly_pts, fill=COLOR_PRIMARY)
    # Double accent lines (Crisp white + Champagne gold)
    draw.line(wave_pts, fill=WHITE, width=int(2.5 * SCALE))
    draw.line([(p[0], p[1] + int(4 * SCALE)) for p in wave_pts], fill=COLOR_GOLD, width=int(1.5 * SCALE))
    
    # 3. Header Texts (Feminine Calligraphic & Italic):
    # - Nozima Baxtiyarovna (Gabriola romantic script)
    # - Ayollar Stomatologi (Warm Gold Italic)
    # - «Sevdo Denta» klinikasi (Soft Sky Cyan)
    font_head_name = get_font("C:/Windows/Fonts/Gabriola.ttf", 58)
    font_head_title = get_font("C:/Windows/Fonts/Gabriola.ttf", 36)
    font_head_clinic = get_font("C:/Windows/Fonts/AGaramondPro-Regular.otf", 20)
    
    draw.text((W - int(65 * SCALE), int(24 * SCALE)), "Nozima Baxtiyarovna", fill=WHITE, font=font_head_name, anchor="rt")
    draw.text((W - int(65 * SCALE), int(88 * SCALE)), "Ayollar Stomatologi", fill=COLOR_GOLD, font=font_head_title, anchor="rt")
    draw.text((W - int(65 * SCALE), int(136 * SCALE)), "«Sevdo Denta» klinikasi", fill=COLOR_ACCENT_LIGHT, font=font_head_clinic, anchor="rt")
    
    # 4. Contacts on Left with Chic Sticker Badges
    col_x = int(75 * SCALE)
    text_x = col_x + int(56 * SCALE)
    font_contact = get_font("C:/Windows/Fonts/segoeuib.ttf", 21)
    
    contacts = [
        ("phone", "+998 (91) 619-95-00", int(65 * SCALE)),
        ("location", "Andijon sh., Eski shahar, Old Town binosi", int(136 * SCALE)),
        ("telegram", "Telegram: @Miss_Dentist_95", int(207 * SCALE)),
        ("instagram", "Instagram: @sevdo_denta", int(278 * SCALE)),
        ("globe", "drnozima.uz", int(349 * SCALE)),
    ]
    
    for icon_type, text_val, y_pos in contacts:
        cy = y_pos + int(13 * SCALE)
        draw_contact_sticker(draw, col_x + int(18 * SCALE), cy, int(22 * SCALE), icon_type)
        # Soft drop shadow behind contact text for maximum crisp contrast
        draw.text((text_x + SCALE, y_pos + SCALE), text_val, fill=(3, 30, 45), font=font_contact, anchor="lt")
        draw.text((text_x, y_pos), text_val, fill=WHITE, font=font_contact, anchor="lt")
        
    # 5. Services List ("XIZMATLAR") - BOLALAR STOMATOLOGIYASI IS 100% REMOVED!
    # Rendered as Chic Feminine Pill Stickers!
    serv_y = int(422 * SCALE)
    font_serv_head = get_font("C:/Windows/Fonts/AGaramondPro-Bold.otf", 21)
    font_sticker = get_font("C:/Windows/Fonts/AGaramondPro-Bold.otf", 18)
    
    draw.line([(col_x, serv_y - int(10 * SCALE)), (int(650 * SCALE), serv_y - int(10 * SCALE))], fill=COLOR_GOLD, width=int(2 * SCALE))
    draw.text((col_x, serv_y), "X I Z M A T L A R :", fill=COLOR_PRIMARY_DARK, font=font_serv_head, anchor="lt")
    
    p_h = int(32 * SCALE)
    # Row 1 Stickers: Estetik restavratsiya | Vinirlar | Sirkoniy qoplama
    row1_y = serv_y + int(32 * SCALE)
    draw_pill_sticker(draw, col_x, row1_y, int(220 * SCALE), p_h, "Estetik restavratsiya", font_sticker)
    draw_pill_sticker(draw, col_x + int(230 * SCALE), row1_y, int(130 * SCALE), p_h, "Vinirlar", font_sticker)
    draw_pill_sticker(draw, col_x + int(370 * SCALE), row1_y, int(185 * SCALE), p_h, "Sirkoniy qoplama", font_sticker)
    
    # Row 2 Stickers: Tish oqartirish | Nozik davolash | 3D Rentgen  (ZERO Bolalar stomatologiyasi!)
    row2_y = serv_y + int(72 * SCALE)
    draw_pill_sticker(draw, col_x, row2_y, int(175 * SCALE), p_h, "Tish oqartirish", font_sticker)
    draw_pill_sticker(draw, col_x + int(185 * SCALE), row2_y, int(175 * SCALE), p_h, "Nozik davolash", font_sticker)
    draw_pill_sticker(draw, col_x + int(370 * SCALE), row2_y, int(150 * SCALE), p_h, "3D Rentgen", font_sticker)
    
    # 6. Circular QR Pedestal Sticker (Bottom-Right)
    circle_cx = int(870 * SCALE)
    circle_cy = int(455 * SCALE)
    circle_r = int(175 * SCALE)
    
    # Soft drop shadow
    draw.ellipse([circle_cx - circle_r + 4*SCALE, circle_cy - circle_r + 6*SCALE,
                  circle_cx + circle_r + 4*SCALE, circle_cy + circle_r + 6*SCALE], fill=(30, 80, 115))
    # Crisp white circular seal base
    draw.ellipse([circle_cx - circle_r, circle_cy - circle_r, circle_cx + circle_r, circle_cy + circle_r],
                 fill=WHITE, outline=COLOR_PRIMARY, width=int(4 * SCALE))
    # Inner gold border
    draw.ellipse([circle_cx - circle_r + int(10*SCALE), circle_cy - circle_r + int(10*SCALE),
                  circle_cx + circle_r - int(10*SCALE), circle_cy + circle_r - int(10*SCALE)],
                 outline=COLOR_GOLD, width=int(2.5 * SCALE))
                 
    # Centered QR code
    qr_size = int(210 * SCALE)
    qr_img = create_project_qr(WEBSITE_URL, qr_size=qr_size)
    img.paste(qr_img, (circle_cx - qr_size // 2, circle_cy - qr_size // 2 - int(14 * SCALE)), qr_img)
    
    # Captions inside pedestal
    font_qr_label = get_font("C:/Windows/Fonts/AGaramondPro-Bold.otf", 18)
    font_qr_sub = get_font("C:/Windows/Fonts/AGaramondPro-Italic.otf", 16)
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
        
    font_title = ImageFont.truetype("C:/Windows/Fonts/Gabriola.ttf", 64)
    font_sub = ImageFont.truetype("C:/Windows/Fonts/AGaramondPro-Italic.otf", 26)
    
    # Elegant title plate at top
    draw.rounded_rectangle([pw//2 - 650, 25, pw//2 + 650, 145], radius=16, fill=(255, 255, 255, 230), outline=(120, 80, 45), width=2)
    draw.text((pw // 2, 40), "Nozima Baxtiyarovna — Ayollar Stomatologi", fill="#086288", font=font_title, anchor="mt")
    draw.text((pw // 2, 104), "«Sevdo Denta» Klinikasi · Rasmiy Vizitka (90×50 mm, 300 DPI Chop etishga tayyor)", fill="#4A657A", font=font_sub, anchor="mt")
    
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
    draw.text((cx - 155, y_front + card_h // 2 - 24), "OLD TOMONI", fill="#086288", font=ImageFont.truetype("C:/Windows/Fonts/Gabriola.ttf", 36), anchor="mt")
    draw.text((cx - 155, y_front + card_h // 2 + 10), "Yuz qismi", fill="#5A7A90", font=ImageFont.truetype("C:/Windows/Fonts/AGaramondPro-Italic.otf", 20), anchor="mt")
    
    draw.rounded_rectangle([cx - 280, y_back + card_h // 2 - 40, cx - 30, y_back + card_h // 2 + 40], radius=12, fill=(255, 255, 255, 240))
    draw.text((cx - 155, y_back + card_h // 2 - 24), "ORQA TOMONI", fill="#086288", font=ImageFont.truetype("C:/Windows/Fonts/Gabriola.ttf", 36), anchor="mt")
    draw.text((cx - 155, y_back + card_h // 2 + 10), "Stikerlar & QR", fill="#5A7A90", font=ImageFont.truetype("C:/Windows/Fonts/AGaramondPro-Italic.otf", 20), anchor="mt")
    
    return mockup

def main():
    print("1. Rendering Refined Front Side (Cameo sticker medallion, calligraphic feminine typography)...")
    front = render_front()
    print("2. Rendering Refined Back Side (Sticker badges, pill stickers, Bolalar stomatologiyasi REMOVED)...")
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
