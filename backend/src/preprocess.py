import cv2
import numpy as np

def preprocess_image(img_path: str,out_size=(128, 256)):
    """
    Preprocessing the image:
    - loading in grayscale
    - resizing to fixed size
    - applying thresholding + noise removal
    Returns: binary numpy image ready for feature extraction
    """
    img = cv2.imread(img_path, cv2.IMREAD_GRAYSCALE)
    if img is None:
        raise ValueError(f"Cannot read {img_path}")

    img = cv2.GaussianBlur(img, (3, 3), 0)

    _, binary = cv2.threshold(img, 0, 255, cv2.THRESH_BINARY_INV + cv2.THRESH_OTSU)

    kernel = np.ones((2, 2), np.uint8)
    binary = cv2.morphologyEx(binary, cv2.MORPH_OPEN, kernel)
    binary = cv2.morphologyEx(binary, cv2.MORPH_CLOSE, kernel)

    ys, xs = np.where(binary > 0)
    if len(xs) == 0 or len(ys) == 0:
        return cv2.resize(binary, out_size)
    x0, x1, y0, y1 = xs.min(), xs.max(), ys.min(), ys.max()
    cropped = binary[y0:y1+1, x0:x1+1]

    h, w = cropped.shape
    scale = min(out_size[0] / h, out_size[1] / w)
    new_h, new_w = int(h * scale), int(w * scale)
    resized = cv2.resize(cropped, (new_w, new_h))
    pad_h, pad_w = out_size[0] - new_h, out_size[1] - new_w
    top, bottom = pad_h // 2, pad_h - pad_h // 2
    left, right = pad_w // 2, pad_w - pad_w // 2
    padded = cv2.copyMakeBorder(resized, top, bottom, left, right, cv2.BORDER_CONSTANT, value=0)

    return padded
