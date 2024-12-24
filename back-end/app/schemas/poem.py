from pydantic import BaseModel
from datetime import datetime
from typing import Optional

class PoemCreate(BaseModel):
  genre_id: int
  prompt: str
  title: str
  image: str
  content: str
  note: Optional[str] = None

class PoemResponse(BaseModel):
  id: int
  user_id: int
  genre_id: int
  prompt: str
  title: str
  image: str
  content: str
  note: Optional[str]
  created_at: datetime

  class Config:
    from_attributes = True
