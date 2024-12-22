from pydantic import BaseModel

class CollectionCreate(BaseModel):
  poem_id: int
