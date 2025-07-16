from pydantic import BaseModel

class CollectionCreate(BaseModel):
  poem_id: int

class CollectionResponse(BaseModel):
  poem_id: int
  user_id: int
  genre_id: int
  user_name: str
  prompt: str
  title: str
  image: str
  content: str
  note: str
  created_at: str

  class Config:
    from_attributes = True
