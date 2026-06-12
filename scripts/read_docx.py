import zipfile
import xml.etree.ElementTree as ET
import os

def read_docx(docx_path):
    ns = {'w': 'http://schemas.openxmlformats.org/wordprocessingml/2006/main'}
    
    if not os.path.exists(docx_path):
        print(f"File not found: {docx_path}")
        return ""
        
    try:
        with zipfile.ZipFile(docx_path) as docx:
            xml_content = docx.read('word/document.xml')
            root = ET.fromstring(xml_content)
            
            paragraphs = []
            for paragraph in root.iter('{http://schemas.openxmlformats.org/wordprocessingml/2006/main}p'):
                texts = []
                for run in paragraph.iter('{http://schemas.openxmlformats.org/wordprocessingml/2006/main}t'):
                    if run.text:
                        texts.append(run.text)
                paragraphs.append(''.join(texts))
                
            return '\n'.join(paragraphs)
    except Exception as e:
        print(f"Error reading docx: {e}")
        return ""

if __name__ == '__main__':
    input_path = r"c:\Users\stany\Downloads\4-sight-website-sitemap\4Sight_Website_PRD.docx"
    output_path = r"C:\Users\stany\.gemini\antigravity-ide\brain\5c1da9ac-17f5-403a-84bb-c2d740fd6e0e\prd_text.txt"
    text = read_docx(input_path)
    if text:
        with open(output_path, 'w', encoding='utf-8') as f:
            f.write(text)
        print("Successfully extracted DOCX text to prd_text.txt!")
