import anthropic
from app.models.keys import CLAUDE_API_KEY

class Claude():
  def __init__(self):
    self.name = "claude-3-5-sonnet-20241022"
    self.client = anthropic.Anthropic(api_key=CLAUDE_API_KEY,)
    
  def __generate__(self, prompt: str):
    message = self.client.messages.create(
      model="claude-3-5-sonnet-20241022",
      max_tokens=1024,
      messages=[
          {"role": "user", "content": f"Viết bài thơ lục bát dựa vào gợi ý sau (chỉ trả về thơ): {prompt}"}
      ]
    )
    return message.content[0].text
    





