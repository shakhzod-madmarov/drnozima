import os
import qrcode
from PIL import Image, ImageDraw, ImageFont

# Target paths
PUBLIC_DIR = os.path.abspath("frontend/public")
os.makedirs(PUBLIC_DIR, exist_ok=True)

GOOGLE_URL = "https://g.page/r/CRxeAqgDMAj8EBM/review"
YANDEX_URL = "https://yandex.uz/maps/org/48640986136/reviews/"

def create_qr_with_badge(url, badge_type, qr_size=750):
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
    
    # White circular background with outline
    draw = ImageDraw.Draw(img_qr)
    draw.ellipse(badge_box, fill="#FFFFFF", outline="#E2E8F0", width=4)
    
    # Add inner icon or text
    inner_dim = int(badge_dim * 0.72)
    inner_x = (qr_size - inner_dim) // 2
    inner_y = (qr_size - inner_dim) // 2
    
    if badge_type == "google":
        # Draw Google G logo or clean styled G
        # Blue circle with white G
        draw.ellipse(
            [inner_x, inner_y, inner_x + inner_dim, inner_y + inner_dim],
            fill="#4285F4"
        )
        try:
            font_g = ImageFont.truetype("C:/Windows/Fonts/segoeuib.ttf", int(inner_dim * 0.7))
        except:
            font_g = ImageFont.load_default()
        draw.text(
            (qr_size // 2, qr_size // 2),
            "G",
            fill="#FFFFFF",
            font=font_g,
            anchor="mm"
        )
    elif badge_type == "yandex":
        # Red circle with white Я
        draw.ellipse(
            [inner_x, inner_y, inner_x + inner_dim, inner_y + inner_dim],
            fill="#E11D48"
        )
        try:
            font_ya = ImageFont.truetype("C:/Windows/Fonts/segoeuib.ttf", int(inner_dim * 0.7))
        except:
            font_ya = ImageFont.load_default()
        draw.text(
            (qr_size // 2, qr_size // 2),
            "Я",
            fill="#FFFFFF",
            font=font_ya,
            anchor="mm"
        )
        
    return img_qr

def generate_stand_a4(output_png, output_pdf):
    # A4 at 300 DPI = 2480 x 3508 pixels
    W, H = 2480, 3508
    img = Image.new("RGBA", (W, H), "#FFFFFF")
    draw = ImageDraw.Draw(img)
    
    # Load fonts
    font_bold = lambda size: ImageFont.truetype("C:/Windows/Fonts/segoeuib.ttf", size)
    font_reg = lambda size: ImageFont.truetype("C:/Windows/Fonts/segoeui.ttf", size)
    
    # Subtle top accent bar (Teal & Gold gradient feel)
    draw.rectangle([0, 0, W, 40], fill="#086288")
    draw.rectangle([0, 40, W, 52], fill="#D4AF37") # Gold thin line
    
    # Outer decorative frame
    margin = 80
    draw.rounded_rectangle(
        [margin, margin + 40, W - margin, H - margin],
        radius=40,
        outline="#D1E4F0",
        width=4
    )
    
    # Inner subtle background for the whole page
    # Header Section
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
    
    # Divider with gold stars
    y += 90
    draw.line([(W // 2 - 450, y), (W // 2 + 450, y)], fill="#E2E8F0", width=3)
    draw.text((W // 2, y), "★ ★ ★ ★ ★", fill="#F59E0B", font=font_bold(42), anchor="mm")
    
    # Call to action banner
    y += 70
    cta_box = [W // 2 - 850, y, W // 2 + 850, y + 200]
    draw.rounded_rectangle(cta_box, radius=24, fill="#F0F9FF", outline="#BAE6FD", width=3)
    draw.text((W // 2, y + 55), "Xizmatimiz yoqdimi? Fikringiz biz uchun muhim!", fill="#086288", font=font_bold(46), anchor="mt")
    draw.text((W // 2, y + 125), "Понравился наш приём? Оцените наш сервис и оставьте отзыв", fill="#4B6375", font=font_reg(34), anchor="mt")
    
    # Dual Cards: Google Maps & Yandex Maps
    card_y = y + 270
    card_w = 950
    card_h = 1450
    spacing = 100
    card_left_x = (W - (card_w * 2 + spacing)) // 2
    card_right_x = card_left_x + card_w + spacing
    
    # 1. Left Card: Google Maps
    g_card_box = [card_left_x, card_y, card_left_x + card_w, card_y + card_h]
    draw.rounded_rectangle(g_card_box, radius=32, fill="#FFFFFF", outline="#0284C7", width=5)
    # Header strip inside Google card
    draw.rounded_rectangle([card_left_x, card_y, card_left_x + card_w, card_y + 150], radius=30, fill="#F0F9FF")
    draw.text((card_left_x + card_w // 2, card_y + 45), "Google Xaritalar", fill="#0284C7", font=font_bold(52), anchor="mt")
    draw.text((card_left_x + card_w // 2, card_y + 105), "Google Maps Reviews", fill="#64748B", font=font_reg(30), anchor="mt")
    
    # Google Stars & Rating
    draw.text((card_left_x + card_w // 2, card_y + 200), "★★★★★  4.9 / 5.0", fill="#F59E0B", font=font_bold(38), anchor="mt")
    
    # Google QR code
    qr_g = create_qr_with_badge(GOOGLE_URL, "google", qr_size=720)
    qr_g_x = card_left_x + (card_w - 720) // 2
    qr_g_y = card_y + 280
    # QR white holder with subtle shadow border
    draw.rounded_rectangle([qr_g_x - 16, qr_g_y - 16, qr_g_x + 720 + 16, qr_g_y + 720 + 16], radius=20, outline="#E2E8F0", width=4)
    img.paste(qr_g, (qr_g_x, qr_g_y), qr_g)
    
    # Google Instructions
    draw.text((card_left_x + card_w // 2, card_y + 1080), "Kamerani qarating va baho bering", fill="#086288", font=font_bold(38), anchor="mt")
    draw.text((card_left_x + card_w // 2, card_y + 1140), "Наведите камеру смартфона", fill="#64748B", font=font_reg(32), anchor="mt")
    # Action badge
    btn_g_box = [card_left_x + 120, card_y + 1230, card_left_x + card_w - 120, card_y + 1340]
    draw.rounded_rectangle(btn_g_box, radius=20, fill="#0284C7")
    draw.text(((btn_g_box[0] + btn_g_box[2]) // 2, (btn_g_box[1] + btn_g_box[3]) // 2), "Google orqali sharh", fill="#FFFFFF", font=font_bold(38), anchor="mm")
    
    # 2. Right Card: Yandex Maps
    y_card_box = [card_right_x, card_y, card_right_x + card_w, card_y + card_h]
    draw.rounded_rectangle(y_card_box, radius=32, fill="#FFFFFF", outline="#DC2626", width=5)
    # Header strip inside Yandex card
    draw.rounded_rectangle([card_right_x, card_y, card_right_x + card_w, card_y + 150], radius=30, fill="#FFF5F5")
    draw.text((card_right_x + card_w // 2, card_y + 45), "Yandex Xaritalar", fill="#DC2626", font=font_bold(52), anchor="mt")
    draw.text((card_right_x + card_w // 2, card_y + 105), "Яндекс Карты Отзывы", fill="#64748B", font=font_reg(30), anchor="mt")
    
    # Yandex Stars & Rating
    draw.text((card_right_x + card_w // 2, card_y + 200), "★★★★★  5.0 / 5.0", fill="#F59E0B", font=font_bold(38), anchor="mt")
    
    # Yandex QR code
    qr_y = create_qr_with_badge(YANDEX_URL, "yandex", qr_size=720)
    qr_y_x = card_right_x + (card_w - 720) // 2
    qr_y_y = card_y + 280
    draw.rounded_rectangle([qr_y_x - 16, qr_y_y - 16, qr_y_x + 720 + 16, qr_y_y + 720 + 16], radius=20, outline="#E2E8F0", width=4)
    img.paste(qr_y, (qr_y_x, qr_y_y), qr_y)
    
    # Yandex Instructions
    draw.text((card_right_x + card_w // 2, card_y + 1080), "Kamerani qarating va baho bering", fill="#086288", font=font_bold(38), anchor="mt")
    draw.text((card_right_x + card_w // 2, card_y + 1140), "Наведите камеру смартфона", fill="#64748B", font=font_reg(32), anchor="mt")
    # Action badge
    btn_y_box = [card_right_x + 120, card_y + 1230, card_right_x + card_w - 120, card_y + 1340]
    draw.rounded_rectangle(btn_y_box, radius=20, fill="#DC2626")
    draw.text(((btn_y_box[0] + btn_y_box[2]) // 2, (btn_y_box[1] + btn_y_box[3]) // 2), "Yandex orqali sharh", fill="#FFFFFF", font=font_bold(38), anchor="mm")
    
    # Footer Section
    foot_y = card_y + card_h + 90
    draw.line([(margin + 60, foot_y), (W - margin - 60, foot_y)], fill="#E2E8F0", width=2)
    
    foot_y += 50
    draw.text((W // 2, foot_y), "Klinikamizni tanlaganingiz uchun tashakkur! / Спасибо, что выбрали нашу клинику!", fill="#086288", font=font_bold(38), anchor="mt")
    
    foot_y += 65
    info_text = "📍 Andijon shahar, A. Fitrat ko'chasi, 251B   |   📞 +998 (91) 619-95-00   |   🌐 drnozima.uz"
    draw.text((W // 2, foot_y), info_text, fill="#475569", font=font_reg(34), anchor="mt")
    
    # Bottom subtle gold bar
    draw.rectangle([0, H - 40, W, H], fill="#086288")
    draw.rectangle([0, H - 52, W, H - 40], fill="#D4AF37")
    
    # Save PNG
    img_rgb = img.convert("RGB")
    img_rgb.save(output_png, "PNG", dpi=(300, 300))
    print(f"Generated PNG: {output_png}")
    
    # Save PDF
    img_rgb.save(output_pdf, "PDF", resolution=300.0)
    print(f"Generated PDF: {output_pdf}")

    # Generate A5 version (scaled down cleanly)
    a5_w, a5_h = 1748, 2480
    img_a5 = img_rgb.resize((a5_w, a5_h), Image.Resampling.LANCZOS)
    output_png_a5 = output_png.replace("A4", "A5")
    output_pdf_a5 = output_pdf.replace("A4", "A5")
    img_a5.save(output_png_a5, "PNG", dpi=(300, 300))
    img_a5.save(output_pdf_a5, "PDF", resolution=300.0)
    print(f"Generated A5 PNG: {output_png_a5}")
    print(f"Generated A5 PDF: {output_pdf_a5}")

if __name__ == "__main__":
    png_a4 = os.path.join(PUBLIC_DIR, "drnozima_review_stand_A4.png")
    pdf_a4 = os.path.join(PUBLIC_DIR, "drnozima_review_stand_A4.pdf")
    generate_stand_a4(png_a4, pdf_a4)
