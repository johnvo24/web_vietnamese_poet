from fastapi import FastAPI, Request, HTTPException
from fastapi.responses import JSONResponse
from app.models.gemini import Gemini
from app.models.claude import Claude
from app.schemas.request_schemas import GeneratePoemRequest
from typing import List

app = FastAPI()
gemini = Gemini()
claude = Claude()

# Error handling
@app.exception_handler(404)
async def not_found_handler(request: Request, exc):
  return JSONResponse(
    status_code=404,
    content={"error":"Không tồn tại đường dẫn này má ơi!"}
  )

# Route cơ bản: Trang chính
@app.get("/")
def read_root():
  return {"message": "Welcome to VIPOE-API backend!"}

# Route cơ bản: Trang chính
@app.get("/models/", response_model=List[str])
def list_models():
  models = [
    gemini.name,
    claude.name,
  ]
  return JSONResponse(content=models, status_code=200)

# API POST: Nhận dữ liệu từ client
@app.post("/generate-poem/")
async def create_item(req: GeneratePoemRequest):
  if req.model == gemini.name:
    model = gemini
  elif req.model == claude.name:
    model = claude
  else:
    raise HTTPException(status_code=400, detail="Model not supported")
  try:
    content = model.__generate__(req.prompt)
    content = content.replace(" <pad>", "")
    content = content.replace(" </s>", "")
    content = content.replace("<s> ", "")
    content = content.replace("\n ", "\n")
    content = list(content)
    for i in range(1, len(content)):
      if content[i-1]=='\n':
        content[i] = content[i].upper()
    content = "".join(content)
    print(content)
    return {"title": "", "content": content}
  except Exception as e:
    raise HTTPException(status_code=500, detail=str(e))