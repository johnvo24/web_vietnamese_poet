from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from app.database import get_db
from app.schemas.poem import PoemCreate, PoemResponse
from app.models import Poem, User, Genre
from app.auth.dependencies import get_current_user

router = APIRouter()

@router.post("/create", response_model=PoemResponse)
def create_poem(
  poem_data: PoemCreate,
  db: Session = Depends(get_db),
  current_user: User = Depends(get_current_user)
):
  check_genre = db.query(Genre).filter(Genre.id == poem_data.genre_id).first()
  if not check_genre:
    raise HTTPException(status_code=404, detail="Genre not found")

  new_poem = Poem(
    user_id=current_user.id,
    genre_id=poem_data.genre_id,
    prompt=poem_data.prompt,
    title=poem_data.title,
    image=poem_data.image,
    content=poem_data.content,
    note=poem_data.note
  )
  db.add(new_poem)
  db.commit()
  db.refresh(new_poem)
  return new_poem