import sys
try:
    import PyPDF2
    def extract(path):
        text = ""
        with open(path, 'rb') as f:
            reader = PyPDF2.PdfReader(f)
            for page in reader.pages:
                text += page.extract_text()
        print(f"--- {path} ---")
        print(text)
except ImportError:
    print("PyPDF2 not installed")

import glob
for f in ["c:/Users/AMAN MISHRA/OneDrive/Documents/Desktop/Aman_Mishra_DS_Resume.pdf", "c:/Users/AMAN MISHRA/OneDrive/Documents/Desktop/Aman_Mishra_Full_Stack_Resume.pdf", "c:/Users/AMAN MISHRA/OneDrive/Documents/Desktop/Resume (1).pdf"]:
    try:
        extract(f)
    except Exception as e:
        print(f"Error reading {f}: {e}")
