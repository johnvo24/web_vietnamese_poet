import google.generativeai as genai
from app.models.keys import GEMINI_API_KEY

class Gemini():
  def __init__(self):
    self.name = "gemini-1.5-flash"
    genai.configure(api_key=GEMINI_API_KEY)
    self.model = genai.GenerativeModel("gemini-1.5-flash")
    
  def __generate__(self, prompt: str):
    result = self.model.generate_content(f"Viết bài thơ lục bát (chỉ trả về thơ) dựa vào gợi ý sau: {prompt}")
    return result.text
    