"""Draws every CodeMentor AI icon: a white speech bubble holding "</>" on an indigo-to-violet gradient.

Only the Python standard library: each shape is a signed distance function, anti-aliased over one pixel.
Change a color or a size below, then run from the `mobile` folder:

    python scripts/make-icons.py assets/images
"""
import math
import os
import struct
import sys
import zlib

INDIGO = (79, 70, 229)
VIOLET = (147, 51, 234)
WHITE = (255, 255, 255)
CYAN = (103, 232, 249)
DEEP_CYAN = (8, 145, 178)

# The "</>" glyph in its unit box: two chevrons and a slash, drawn as round-capped strokes.
LEFT = [((0.31, 0.29), (0.10, 0.50)), ((0.10, 0.50), (0.31, 0.71))]
RIGHT = [((0.69, 0.29), (0.90, 0.50)), ((0.90, 0.50), (0.69, 0.71))]
SLASH = ((0.585, 0.22), (0.415, 0.78))
STROKE = 0.095

# The speech bubble in the logo's unit box: a rounded rectangle with a tail at the bottom left.
BUBBLE = (0.5, 0.46, 0.30, 0.25, 0.10)  # center x, center y, half width, half height, corner radius
TAIL = ((0.30, 0.66), (0.26, 0.82), (0.44, 0.69))
# Where the glyph sits: (x, y, width) of its unit box, inside the bubble or alone.
GLYPH_IN_BUBBLE = (0.29, 0.255, 0.42)
GLYPH_ALONE = (0.16, 0.16, 0.68)


def segment_distance(px, py, a, b):
    ax, ay = a
    bx, by = b
    dx, dy = bx - ax, by - ay
    t = max(0.0, min(1.0, ((px - ax) * dx + (py - ay) * dy) / (dx * dx + dy * dy)))
    return math.hypot(px - (ax + t * dx), py - (ay + t * dy))


def rounded_box_distance(px, py, half_width, half_height, radius):
    """Distance to a box centered on 0 with rounded corners; negative inside."""
    qx = abs(px) - half_width + radius
    qy = abs(py) - half_height + radius
    return math.hypot(max(qx, 0.0), max(qy, 0.0)) + min(max(qx, qy), 0.0) - radius


def triangle_distance(px, py, points):
    """Distance to the edges of a triangle; negative inside."""
    a, b, c = points
    edges = min(segment_distance(px, py, p, q) for p, q in ((a, b), (b, c), (c, a)))
    sides = [
        (px - q[0]) * (p[1] - q[1]) - (p[0] - q[0]) * (py - q[1])
        for p, q in ((a, b), (b, c), (c, a))
    ]
    inside = all(side <= 0 for side in sides) or all(side >= 0 for side in sides)
    return -edges if inside else edges


def bubble_distance(x, y):
    cx, cy, half_width, half_height, radius = BUBBLE
    box = rounded_box_distance(x - cx, y - cy, half_width, half_height, radius)
    return min(box, triangle_distance(x, y, TAIL))


def coverage(distance, pixel):
    """Share of the pixel inside a shape, from the signed distance to its edge."""
    return max(0.0, min(1.0, 0.5 - distance / pixel))


def blend(under, color, alpha):
    """Paints `color` with opacity `alpha` over the RGBA color `under`."""
    r, g, b, a = under
    out_alpha = alpha + a * (1 - alpha)
    if out_alpha == 0:
        return (0, 0, 0, 0)

    def mix(new, old):
        return (new * alpha + old * a * (1 - alpha)) / out_alpha

    return (mix(color[0], r), mix(color[1], g), mix(color[2], b), out_alpha)


def gradient(x, y):
    """Indigo at the top left, violet at the bottom right."""
    t = max(0.0, min(1.0, (x + y) / 2))
    return tuple(start + (end - start) * t for start, end in zip(INDIGO, VIOLET))


def glyph_coverage(x, y, box, pixel):
    """Coverage of the chevrons and of the slash at a point of the logo's unit box."""
    bx, by, width = box
    gx, gy = (x - bx) / width, (y - by) / width
    if not (-0.1 < gx < 1.1 and -0.1 < gy < 1.1):
        return 0.0, 0.0
    chevrons = min(segment_distance(gx, gy, a, b) for a, b in LEFT + RIGHT) - STROKE / 2
    slash = segment_distance(gx, gy, *SLASH) - STROKE / 2
    return coverage(chevrons * width, pixel), coverage(slash * width, pixel)


def draw(size, path, *, background, scale=1.0, content='bubble', monochrome=False):
    """
    background: 'full' (gradient to the edges), 'tile' (rounded gradient square) or None (transparent).
    scale: size of the content relative to the image, around its center.
    content: 'bubble' (the logo), 'glyph' (the "</>" alone, for tiny sizes) or None.
    monochrome: white bubble with the glyph cut out, for Android themed icons.
    """
    pixel = 1.0 / size
    rows = []
    for j in range(size):
        row = bytearray([0])  # PNG filter type of the row: none
        y = (j + 0.5) / size
        for i in range(size):
            x = (i + 0.5) / size
            rgba = (0, 0, 0, 0)
            if background == 'full':
                rgba = (*gradient(x, y), 1.0)
            elif background == 'tile':
                alpha = coverage(rounded_box_distance(x - 0.5, y - 0.5, 0.5, 0.5, 0.225), pixel)
                if alpha:
                    rgba = blend(rgba, gradient(x, y), alpha)

            # The logo's unit box, scaled around the center of the image.
            ux, uy = (x - 0.5) / scale + 0.5, (y - 0.5) / scale + 0.5
            content_pixel = pixel / scale
            if content == 'bubble':
                bubble = coverage(bubble_distance(ux, uy), content_pixel)
                chevrons, slash = glyph_coverage(ux, uy, GLYPH_IN_BUBBLE, content_pixel)
                if monochrome:
                    rgba = (*WHITE, bubble * (1 - max(chevrons, slash)))
                else:
                    for color, alpha in ((WHITE, bubble), (INDIGO, chevrons), (DEEP_CYAN, slash)):
                        if alpha:
                            rgba = blend(rgba, color, alpha)
            elif content == 'glyph':
                chevrons, slash = glyph_coverage(ux, uy, GLYPH_ALONE, content_pixel)
                for color, alpha in ((WHITE, chevrons), (CYAN, slash)):
                    if alpha:
                        rgba = blend(rgba, color, alpha)

            r, g, b, a = rgba
            row += bytes((round(r), round(g), round(b), round(a * 255)))
        rows.append(bytes(row))
    write_png(path, size, b''.join(rows))


def write_png(path, size, raw):
    def chunk(kind, data):
        return struct.pack('>I', len(data)) + kind + data + struct.pack('>I', zlib.crc32(kind + data) & 0xFFFFFFFF)

    header = struct.pack('>IIBBBBB', size, size, 8, 6, 0, 0, 0)  # 8-bit RGBA
    png = b'\x89PNG\r\n\x1a\n' + chunk(b'IHDR', header) + chunk(b'IDAT', zlib.compress(raw, 9)) + chunk(b'IEND', b'')
    with open(path, 'wb') as file:
        file.write(png)
    print('wrote', path, f'{size}x{size}')


def main(out):
    os.makedirs(out, exist_ok=True)
    # Stores and launchers round the corners themselves: gradient to the edges.
    draw(1024, os.path.join(out, 'icon.png'), background='full')
    # Android adaptive icon: the launcher crops to a shape inside the center 66%, so the bubble is smaller.
    draw(512, os.path.join(out, 'android-icon-background.png'), background='full', content=None)
    draw(512, os.path.join(out, 'android-icon-foreground.png'), background=None, scale=0.62)
    draw(432, os.path.join(out, 'android-icon-monochrome.png'), background=None, scale=0.62, monochrome=True)
    # Splash screen (shown at `imageWidth` in app.json): the rounded tile, on the app background.
    draw(384, os.path.join(out, 'splash-icon.png'), background='tile')
    # Browser tab: too small for the bubble, so the "</>" alone on the same gradient.
    draw(48, os.path.join(out, 'favicon.png'), background='tile', content='glyph')


if __name__ == '__main__':
    if len(sys.argv) != 2:
        sys.exit('Usage: python scripts/make-icons.py <out_dir>')
    main(sys.argv[1])
