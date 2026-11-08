import os
import math
import qrcode
from PIL import Image, ImageDraw, ImageFont

# Target paths
DESKTOP_DIR = os.path.join(os.environ["USERPROFILE"], "Desktop")
PUBLIC_DIR = os.path.abspath("frontend/public")
os.makedirs(DESKTOP_DIR, exist_ok=True)
os.makedirs(PUBLIC_DIR, exist_ok=True)

GOOGLE_URL = "https://g.page/r/CRxeAqgDMAj8EBM/review"
YANDEX_URL = "https://yandex.uz/maps/org/48640986136/reviews/"

def draw_star(draw, cx, cy, R, fill="#F59E0B", outline="#D97706", width=2):
    """Draw a mathematically perfect 5-pointed vector star."""
    r = R * 0.382
    points = []
    for i in range(10):
        angle = -math.pi / 2 + i * (math.pi / 5)
        dist = R if i % 2 == 0 else r
        points.append((cx + dist * math.cos(angle), cy + dist * math.sin(angle)))
    draw.polygon(points, fill=fill, outline=outline, width=width)

def draw_star_row(draw, start_cx, cy, R, count=5, spacing=None, fill="#F59E0B", outline="#D97706", width=2):
    """Draw a row of vector stars centered horizontally."""
    if spacing is None:
        spacing = R * 2.3
    total_w = (count - 1) * spacing
    first_cx = start_cx - total_w / 2
    for i in range(count):
        cx = first_cx + i * spacing
        draw_star(draw, cx, cy, R, fill=fill, outline=outline, width=width)

def draw_location_icon(draw, cx, cy, size=24, color="#086288"):
    """Draw a clean vector location pin."""
    r = size // 2
    # Upper circle
    circle_cy = cy - r // 2
    draw.ellipse([cx - r, circle_cy - r, cx + r, circle_cy + r], fill=color)
    # Bottom triangle point
    draw.polygon([(cx - r + 2, circle_cy + 2), (cx + r - 2, circle_cy + 2), (cx, cy + r)], fill=color)
    # Inner dot
    inner_r = r // 2.5
    draw.ellipse([cx - inner_r, circle_cy - inner_r, cx + inner_r, circle_cy + inner_r], fill="#FFFFFF")

def draw_phone_icon(draw, cx, cy, size=24, color="#086288"):
    """Draw a clean vector phone receiver icon."""
    r = size // 2
    # Rounded badge with handset
    draw.ellipse([cx - r, cy - r, cx + r, cy + r], fill=color)
    # White receiver body
    w_h = r * 0.6
    draw.rounded_rectangle([cx - w_h, cy - w_h*0.8, cx + w_h, cy + w_h*0.8], radius=int(w_h*0.4), fill="#FFFFFF")
    draw.ellipse([cx - w_h*0.5, cy - w_h*0.5, cx + w_h*0.5, cy + w_h*0.5], fill=color)

def draw_globe_icon(draw, cx, cy, size=24, color="#086288"):
    """Draw a clean vector web globe icon."""
    r = size // 2
    draw.ellipse([cx - r, cy - r, cx + r, cy + r], outline=color, width=3)
    draw.line([(cx - r, cy), (cx + r, cy)], fill=color, width=2)
    draw.line([(cx, cy - r), (cx, cy + r)], fill=color, width=2)
    draw.ellipse([cx - r//2, cy - r, cx + r//2, cy + r], outline=color, width=2)

def create_qr_with_badge(url, badge_type, qr_size=720):
    """Generate high-error-correction QR code with center badge."""
    qr = qrcode.QRCode(
        version=None,
        error_correction=qrcode.constants.ERROR_CORRECT_H,
        box_size=16,
        border=2,
    )
    qr.add_data(url)
    qr.make(fit=True)
    img_qr = qr.make_image(fill_color="#086288", back_color="#FFFFFF").convert("RGBA")
    img_qr = img_qr.resize((qr_size, qr_size), Image.Resampling.LANCZOS)
    
    # Draw center badge
    badge_dim = int(qr_size * 0.22)
    badge_box = (
        (qr_size - badge_dim) // 2,
        (qr_size - badge_dim) // 2,
        (qr_size + badge_dim) // 2,
        (qr_size + badge_dim) // 2,
    )
    
    draw = ImageDraw.Draw(img_qr)
    draw.ellipse(badge_box, fill="#FFFFFF", outline="#E2E8F0", width=4)
    
    inner_dim = int(badge_dim * 0.72)
    inner_x = (qr_size - inner_dim) // 2
    inner_y = (qr_size - inner_dim) // 2
    
    if badge_type == "google":
        draw.ellipse([inner_x, inner_y, inner_x + inner_dim, inner_y + inner_dim], fill="#4285F4")
        try:
            font_g = ImageFont.truetype("C:/Windows/Fonts/segoeuib.ttf", int(inner_dim * 0.7))
        except:
            font_g = ImageFont.load_default()
        draw.text((qr_size // 2, qr_size // 2), "G", fill="#FFFFFF", font=font_g, anchor="mm")
    elif badge_type == "yandex":
        draw.ellipse([inner_x, inner_y, inner_x + inner_dim, inner_y + inner_dim], fill="#DC2626")
        try:
            font_ya = ImageFont.truetype("C:/Windows/Fonts/segoeuib.ttf", int(inner_dim * 0.7))
        except:
            font_ya = ImageFont.load_default()
        draw.text((qr_size // 2, qr_size // 2), "Я", fill="#FFFFFF", font=font_ya, anchor="mm")
        
    return img_qr

def generate_luxury_stand(W=2480, H=3508):
    """Generate pixel-perfect A4 300 DPI luxury stand."""
    img = Image.new("RGBA", (W, H), "#FFFFFF")
    draw = ImageDraw.Draw(img)
    
    # Fonts
    font_bold = lambda size: ImageFont.truetype("C:/Windows/Fonts/segoeuib.ttf", size)
    font_reg = lambda size: ImageFont.truetype("C:/Windows/Fonts/segoeui.ttf", size)
    
    # 1. Top Luxury Accent Bands
    draw.rectangle([0, 0, W, 44], fill="#086288")
    draw.rectangle([0, 44, W, 58], fill="#D4AF37") # Gold thin line
    
    # Outer decorative subtle border
    margin = 80
    draw.rounded_rectangle(
        [margin, margin + 40, W - margin, H - margin],
        radius=40,
        outline="#D1E4F0",
        width=4
    )
    
    # 2. Header Section
    header_top = 180
    logo_path = os.path.join(PUBLIC_DIR, "logo-symbol.png")
    if os.path.exists(logo_path):
        logo_img = Image.open(logo_path).convert("RGBA")
        logo_img = logo_img.resize((220, 220), Image.Resampling.LANCZOS)
        img.paste(logo_img, ((W - 220) // 2, header_top), logo_img)
    
    # Doctor Title
    y = header_top + 250
    draw.text((W // 2, y), "DR. NOZIMA BAXTIYAROVNA", fill="#086288", font=font_bold(82), anchor="mt")
    
    y += 110
    draw.text((W // 2, y), "SHIFOKOR-STOMATOLOG · DENTIST", fill="#4D8DBA", font=font_bold(44), anchor="mt")
    
    y += 75
    draw.text((W // 2, y), "«Sevdo Denta» Klinikasi · Andijon shahar, A. Fitrat ko'chasi 251B", fill="#64748B", font=font_reg(36), anchor="mt")
    
    # 3. Decorative Gold Star Divider
    y += 85
    line_w = 420
    draw.line([(W // 2 - line_w - 180, y), (W // 2 - 180, y)], fill="#CBD5E1", width=3)
    draw.line([(W // 2 + 180, y), (W // 2 + line_w + 180, y)], fill="#CBD5E1", width=3)
    # Draw 5 Vector Stars in Center
    draw_star_row(draw, start_cx=W // 2, cy=y, R=24, count=5, spacing=58, fill="#F59E0B", outline="#D97706", width=2)
    
    # 4. Call to Action Banner
    y += 65
    cta_box = [W // 2 - 850, y, W // 2 + 850, y + 200]
    draw.rounded_rectangle(cta_box, radius=24, fill="#F0F9FF", outline="#BAE6FD", width=3)
    draw.text((W // 2, y + 55), "Xizmatimiz yoqdimi? Fikringiz biz uchun muhim!", fill="#086288", font=font_bold(46), anchor="mt")
    draw.text((W // 2, y + 125), "Понравился наш приём? Оцените наш сервис и оставьте отзыв", fill="#4B6375", font=font_reg(34), anchor="mt")
    
    # 5. Dual Cards: Google Maps & Yandex Maps
    card_y = y + 270
    card_w = 950
    card_h = 1450
    spacing = 100
    card_left_x = (W - (card_w * 2 + spacing)) // 2
    card_right_x = card_left_x + card_w + spacing
    
    # --- 5A. Left Card: Google Maps ---
    g_card_box = [card_left_x, card_y, card_left_x + card_w, card_y + card_h]
    draw.rounded_rectangle(g_card_box, radius=32, fill="#FFFFFF", outline="#0284C7", width=5)
    
    # Header strip inside Google card
    draw.rounded_rectangle([card_left_x, card_y, card_left_x + card_w, card_y + 150], radius=30, fill="#F0F9FF")
    draw.text((card_left_x + card_w // 2, card_y + 45), "Google Xaritalar", fill="#0284C7", font=font_bold(52), anchor="mt")
    draw.text((card_left_x + card_w // 2, card_y + 105), "Google Maps Reviews", fill="#64748B", font=font_reg(30), anchor="mt")
    
    # Google Stars & Rating Badge (Vector Stars + Text)
    g_rate_y = card_y + 215
    g_center_x = card_left_x + card_w // 2
    # Draw 5 vector stars
    draw_star_row(draw, start_cx=g_center_x - 110, cy=g_rate_y, R=22, count=5, spacing=44, fill="#F59E0B", outline="#D97706", width=2)
    draw.text((g_center_x + 90, g_rate_y), "4.9 / 5.0", fill="#086288", font=font_bold(42), anchor="lm")
    
    # Google QR code
    qr_g = create_qr_with_badge(GOOGLE_URL, "google", qr_size=720)
    qr_g_x = card_left_x + (card_w - 720) // 2
    qr_g_y = card_y + 280
    draw.rounded_rectangle([qr_g_x - 16, qr_g_y - 16, qr_g_x + 720 + 16, qr_g_y + 720 + 16], radius=20, outline="#E2E8F0", width=4)
    img.paste(qr_g, (qr_g_x, qr_g_y), qr_g)
    
    # Google Instructions
    draw.text((card_left_x + card_w // 2, card_y + 1080), "Kamerani qarating va baho bering", fill="#086288", font=font_bold(38), anchor="mt")
    draw.text((card_left_x + card_w // 2, card_y + 1140), "Наведите камеру смартфона", fill="#64748B", font=font_reg(32), anchor="mt")
    
    # Action button
    btn_g_box = [card_left_x + 120, card_y + 1230, card_left_x + card_w - 120, card_y + 1340]
    draw.rounded_rectangle(btn_g_box, radius=20, fill="#0284C7")
    draw.text(((btn_g_box[0] + btn_g_box[2]) // 2, (btn_g_box[1] + btn_g_box[3]) // 2), "Google orqali sharh", fill="#FFFFFF", font=font_bold(38), anchor="mm")
    
    # --- 5B. Right Card: Yandex Maps ---
    y_card_box = [card_right_x, card_y, card_right_x + card_w, card_y + card_h]
    draw.rounded_rectangle(y_card_box, radius=32, fill="#FFFFFF", outline="#DC2626", width=5)
    
    # Header strip inside Yandex card
    draw.rounded_rectangle([card_right_x, card_y, card_right_x + card_w, card_y + 150], radius=30, fill="#FFF5F5")
    draw.text((card_right_x + card_w // 2, card_y + 45), "Yandex Xaritalar", fill="#DC2626", font=font_bold(52), anchor="mt")
    draw.text((card_right_x + card_w // 2, card_y + 105), "Яндекс Карты Отзывы", fill="#64748B", font=font_reg(30), anchor="mt")
    
    # Yandex Stars & Rating Badge (Vector Stars + Text)
    y_rate_y = card_y + 215
    y_center_x = card_right_x + card_w // 2
    draw_star_row(draw, start_cx=y_center_x - 110, cy=y_rate_y, R=22, count=5, spacing=44, fill="#F59E0B", outline="#D97706", width=2)
    draw.text((y_center_x + 90, y_rate_y), "5.0 / 5.0", fill="#086288", font=font_bold(42), anchor="lm")
    
    # Yandex QR code
    qr_y = create_qr_with_badge(YANDEX_URL, "yandex", qr_size=720)
    qr_y_x = card_right_x + (card_w - 720) // 2
    qr_y_y = card_y + 280
    draw.rounded_rectangle([qr_y_x - 16, qr_y_y - 16, qr_y_x + 720 + 16, qr_y_y + 720 + 16], radius=20, outline="#E2E8F0", width=4)
    img.paste(qr_y, (qr_y_x, qr_y_y), qr_y)
    
    # Yandex Instructions
    draw.text((card_right_x + card_w // 2, card_y + 1080), "Kamerani qarating va baho bering", fill="#086288", font=font_bold(38), anchor="mt")
    draw.text((card_right_x + card_w // 2, card_y + 1140), "Наведите камеру смартфона", fill="#64748B", font=font_reg(32), anchor="mt")
    
    # Action button
    btn_y_box = [card_right_x + 120, card_y + 1230, card_right_x + card_w - 120, card_y + 1340]
    draw.rounded_rectangle(btn_y_box, radius=20, fill="#DC2626")
    draw.text(((btn_y_box[0] + btn_y_box[2]) // 2, (btn_y_box[1] + btn_y_box[3]) // 2), "Yandex orqali sharh", fill="#FFFFFF", font=font_bold(38), anchor="mm")
    
    # 6. Footer Section
    foot_y = card_y + card_h + 90
    draw.line([(margin + 60, foot_y), (W - margin - 60, foot_y)], fill="#E2E8F0", width=2)
    
    foot_y += 50
    draw.text((W // 2, foot_y), "Klinikamizni tanlaganingiz uchun tashakkur! / Спасибо, что выбрали нашу клинику!", fill="#086288", font=font_bold(38), anchor="mt")
    
    foot_y += 75
    # Three clean pill badges with vector icons
    # Badge 1: Manzil
    b1_x, b1_w = W // 2 - 820, 560
    draw.rounded_rectangle([b1_x, foot_y, b1_x + b1_w, foot_y + 70], radius=16, fill="#F8FAFC", outline="#E2E8F0", width=2)
    draw_location_icon(draw, b1_x + 36, foot_y + 35, size=28, color="#086288")
    draw.text((b1_x + 65, foot_y + 35), "A. Fitrat ko'chasi, 251B", fill="#334155", font=font_bold(30), anchor="lm")
    
    # Badge 2: Telefon
    b2_x, b2_w = W // 2 - 210, 470
    draw.rounded_rectangle([b2_x, foot_y, b2_x + b2_w, foot_y + 70], radius=16, fill="#F8FAFC", outline="#E2E8F0", width=2)
    draw_phone_icon(draw, b2_x + 36, foot_y + 35, size=28, color="#086288")
    draw.text((b2_x + 65, foot_y + 35), "+998 (91) 619-95-00", fill="#334155", font=font_bold(30), anchor="lm")
    
    # Badge 3: Veb-sayt
    b3_x, b3_w = W // 2 + 310, 510
    draw.rounded_rectangle([b3_x, foot_y, b3_x + b3_w, foot_y + 70], radius=16, fill="#F8FAFC", outline="#E2E8F0", width=2)
    draw_globe_icon(draw, b3_x + 36, foot_y + 35, size=28, color="#086288")
    draw.text((b3_x + 65, foot_y + 35), "drnozima.uz", fill="#334155", font=font_bold(30), anchor="lm")
    
    # Bottom Luxury Accent Bands
    draw.rectangle([0, H - 44, W, H], fill="#086288")
    draw.rectangle([0, H - 58, W, H - 44], fill="#D4AF37")
    
    return img.convert("RGB")

def main():
    print("Generating pixel-perfect luxury stand...")
    img_a4 = generate_luxury_stand(W=2480, H=3508)
    
    # 1. Save A4 files to Public and Desktop
    destinations = [
        (PUBLIC_DIR, "drnozima_review_stand_A4.png", "drnozima_review_stand_A4.pdf"),
        (DESKTOP_DIR, "DrNozima_Review_Stand_A4.png", "DrNozima_Review_Stand_A4.pdf"),
    ]
    for folder, png_name, pdf_name in destinations:
        p_png = os.path.join(folder, png_name)
        p_pdf = os.path.join(folder, pdf_name)
        img_a4.save(p_png, "PNG", dpi=(300, 300))
        img_a4.save(p_pdf, "PDF", resolution=300.0)
        print(f"Saved: {p_png}")
        print(f"Saved: {p_pdf}")
    
    # 2. Generate A5 format (scaled cleanly)
    img_a5 = img_a4.resize((1748, 2480), Image.Resampling.LANCZOS)
    a5_destinations = [
        (PUBLIC_DIR, "drnozima_review_stand_A5.png", "drnozima_review_stand_A5.pdf"),
        (DESKTOP_DIR, "DrNozima_Review_Stand_A5.png", "DrNozima_Review_Stand_A5.pdf"),
    ]
    for folder, png_name, pdf_name in a5_destinations:
        p_png = os.path.join(folder, png_name)
        p_pdf = os.path.join(folder, pdf_name)
        img_a5.save(p_png, "PNG", dpi=(300, 300))
        img_a5.save(p_pdf, "PDF", resolution=300.0)
        print(f"Saved: {p_png}")
        print(f"Saved: {p_pdf}")

    print("\nAll files generated and saved to Desktop & Public successfully!")

if __name__ == "__main__":
    main()
