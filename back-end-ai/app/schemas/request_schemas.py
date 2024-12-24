from pydantic import BaseModel

class GeneratePoemRequest(BaseModel):
    model: str
    prompt: str
    # max_length: int = 50