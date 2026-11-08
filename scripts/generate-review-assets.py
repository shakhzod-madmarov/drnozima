import os
import qrcode
from qrcode.image.styledpil import StyledPilImage
from qrcode.image.styles.moduledrawers.pil import RoundedModuleDrawer, SquareModuleDrawer
from PIL import Image, ImageDraw, ImageFont

# URLs
GOOGLE_URL = "https://g.page/r/CRxeAqgDMAj8EBM/review"
YANDEX_URL = "https://yandex.uz/maps/org/48640986136/reviews/"

PUBLIC_DIR = os.path.abspath("frontend/public")
os.makedirs(PUBLIC_DIR, exist_ok=True)

print("1. Generating standalone QR code images...")

# Generate high-res QR for Google
qr_google = qrcode.QRCode(
    version=None,
    error_correction=qrcode.constants.ERROR_CORRECT_H,
    box_size=20,
    border=2,
)
qr_google.add_data(GOOGLE_URL)
qr_google.make(fit=True)
img_google_qr = qr_google.make_image(fill_color="#086288", back_color="#FFFFFF").convert("RGBA")
google_qr_path = os.path.join(PUBLIC_DIR, "qr-google-review.png")
img_google_qr.save(google_qr_path)
print(f"Saved Google QR to {google_qr_path}")

# Generate high-res QR for Yandex
qr_yandex = qrcode.QRCode(
    version=None,
    error_correction=qrcode.constants.ERROR_CORRECT_H,
    box_size=20,
    border=2,
)
qr_yandex.add_data(YANDEX_URL)
qr_yandex.make(fit=True)
img_yandex_qr = qr_yandex.make_image(fill_color="#086288", back_color="#FFFFFF").convert("RGBA")
yandex_qr_path = os.path.join(PUBLIC_DIR, "qr-yandex-review.png")
img_yandex_qr.save(yandex_qr_path)
print(f"Saved Yandex QR to {yandex_qr_path}")

# Generate SVG strings for inline web use
import qrcode.image.svg
svg_factory = qrcode.image.svg.SvgPathImage

qr_g_svg = qrcode.QRCode(error_correction=qrcode.constants.ERROR_CORRECT_H, box_size=10, border=1, image_factory=svg_factory)
qr_g_svg.add_data(GOOGLE_URL)
qr_g_svg.make(fit=True)
img_g_svg = qr_g_svg.make_image()
with open(os.path.join(PUBLIC_DIR, "qr-google-review.svg"), "wb") as f:
    img_g_svg.save(f)

qr_y_svg = qrcode.QRCode(error_correction=qrcode.constants.ERROR_CORRECT_H, box_size=10, border=1, image_factory=svg_factory)
qr_y_svg.add_data(YANDEX_URL)
qr_y_svg.make(fit=True)
img_y_svg = qr_y_svg.make_image()
with open(os.path.join(PUBLIC_DIR, "qr-yandex-review.svg"), "wb") as f:
    img_y_svg.save(f)

print("SVG files generated successfully.")
