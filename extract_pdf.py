"""
Script para extraer el contenido del CV en PDF
Ejecutar: python extract_pdf.py
"""
import pdfplumber
import json
from pathlib import Path

# Ruta al PDF
pdf_path = r"public\doc\CV-MichaelTomaylla2026.pdf"

def extract_pdf_content():
    """Extrae todo el contenido del PDF"""
    
    try:
        with pdfplumber.open(pdf_path) as pdf:
            print(f"📄 Procesando PDF: {Path(pdf_path).name}")
            print(f"   Páginas: {len(pdf.pages)}\n")
            
            full_text = ""
            for i, page in enumerate(pdf.pages, 1):
                text = page.extract_text()
                full_text += f"\n{'='*80}\n"
                full_text += f"PÁGINA {i}\n"
                full_text += f"{'='*80}\n"
                full_text += text + "\n"
            
            # Guardar en archivo de texto
            output_file = "cv_extracted.txt"
            with open(output_file, "w", encoding="utf-8") as f:
                f.write(full_text)
            
            print(f"✅ Contenido extraído exitosamente")
            print(f"   Guardado en: {output_file}")
            print(f"\n{'='*80}")
            print("CONTENIDO EXTRAÍDO:")
            print(f"{'='*80}\n")
            print(full_text)
            
            return full_text
            
    except FileNotFoundError:
        print(f"❌ Error: No se encontró el archivo PDF en {pdf_path}")
    except Exception as e:
        print(f"❌ Error al procesar el PDF: {str(e)}")
        print("\nInstala las dependencias necesarias:")
        print("   pip install pdfplumber")

if __name__ == "__main__":
    extract_pdf_content()
