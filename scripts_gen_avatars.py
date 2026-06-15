from PIL import Image, ImageDraw, ImageFont
import os

OUT = "/app/frontend/src/assets/images"
os.makedirs(OUT, exist_ok=True)

NAVY = (32, 46, 74)
NAVY2 = (45, 62, 99)
RED = (230, 57, 70)
WHITE = (255, 255, 255)

def font(size):
    for p in [
        "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf",
        "/usr/share/fonts/truetype/liberation/LiberationSans-Bold.ttf",
    ]:
        if os.path.exists(p):
            return ImageFont.truetype(p, size)
    return ImageFont.load_default()

def vgrad(w, h, top, bot):
    base = Image.new("RGB", (w, h), top)
    draw = ImageDraw.Draw(base)
    for y in range(h):
        t = y / h
        c = tuple(int(top[i] + (bot[i] - top[i]) * t) for i in range(3))
        draw.line([(0, y), (w, y)], fill=c)
    return base

def avatar(filename, initials):
    w, h = 800, 1000
    img = vgrad(w, h, NAVY, NAVY2)
    d = ImageDraw.Draw(img)
    # circle
    cx, cy, r = w // 2, h // 2 - 40, 200
    d.ellipse([cx - r, cy - r, cx + r, cy + r], fill=(255, 255, 255, 0), outline=RED, width=10)
    f = font(150)
    tb = d.textbbox((0, 0), initials, font=f)
    tw, th = tb[2] - tb[0], tb[3] - tb[1]
    d.text((cx - tw / 2 - tb[0], cy - th / 2 - tb[1]), initials, font=f, fill=WHITE)
    # placeholder label
    fl = font(34)
    lbl = "PLACEHOLDER"
    lb = d.textbbox((0, 0), lbl, font=fl)
    lw = lb[2] - lb[0]
    d.text(((w - lw) / 2 - lb[0], cy + r + 70), lbl, font=fl, fill=(180, 190, 210))
    img.save(os.path.join(OUT, filename))
    print("saved", filename)

avatar("ceo.png", "KR")
avatar("NANCY KIRKPATRICK.png", "NK")
avatar("INDAR.png", "IM")
avatar("PIRABA.png", "PG")
avatar("RANDY.png", "RD")
avatar("VLADIMIR.png", "VP")
print("done avatars")
