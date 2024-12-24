from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.database import get_db
from app.models import Collection, User, Poem
from app.schemas.collection import CollectionCreate, CollectionResponse
from app.auth.dependencies import get_current_user

router = APIRouter()

@router.post("/", status_code=201)
def add_to_collection(
  collection_data: CollectionCreate,
  db: Session = Depends(get_db),
  current_user: User = Depends(get_current_user)
):
  # check poem exsist
  check_poem = db.query(Poem).filter(Poem.id == collection_data.poem_id).first()
  if not check_poem:
    raise HTTPException(status_code=404, detail="Poem not found")
  
  existing_entry = (
    db.query(Collection)
    .filter(
      Collection.poem_id == collection_data.poem_id,
      Collection.user_id == current_user.id
    )
    .first()
  )
  if existing_entry:
    raise HTTPException(status_code=400, detail="Poem already in collection")
  
  new_item = Collection(
    poem_id=collection_data.poem_id,
    user_id=current_user.id
  )
  db.add(new_item)
  db.commit()
  return {"message": "Poem added to collection successfully"}

@router.get("/getById", response_model=list[CollectionResponse])
async def get_poem_in_collections(
  db: Session = Depends(get_db),
  current_user: User = Depends(get_current_user)
):
  collections = (
    db.query(
      Poem.id.label("poem_id"),
      Poem.genre_id.label("genre_id"),
      Poem.prompt.label("prompt"),
      Poem.title.label("title"),
      Poem.image.label("image"),
      Poem.content.label("content"),
      Poem.note.label("note"),
      Poem.created_at.label("created_at"),
      User.id.label("user_id"),
      User.username.label("user_name")
    )
    .join(Collection, Collection.poem_id == Poem.id)
    .join(User, User.id == Poem.user_id)
    .filter(Collection.user_id == current_user.id)
    .all()
  )

  result = [
    {
      "poem_id": item.poem_id,
      "user_id": item.user_id,
      "genre_id": item.genre_id,
      "user_name": item.user_name,
      "prompt": item.prompt,
      "title": item.title,
      "image": item.image,
      "content": item.content,
      "note": item.note if item.note else "",
      "created_at": item.created_at.strftime("%b %d · %I:%M %p")
    }
    for item in collections
  ]

  return result

@router.get("/get-all", response_model=list[CollectionResponse])
async def get_poem_in_collections(
  db: Session = Depends(get_db)
):
  collections = (
    db.query(
      Poem.id.label("poem_id"),
      Poem.genre_id.label("genre_id"),
      Poem.prompt.label("prompt"),
      Poem.title.label("title"),
      Poem.image.label("image"),
      Poem.content.label("content"),
      Poem.note.label("note"),
      Poem.created_at.label("created_at"),
      User.id.label("user_id"),
      User.username.label("user_name")
    )
    .join(Collection, Collection.poem_id == Poem.id)
    .join(User, User.id == Poem.user_id)
    .all()
  )

  result = [
    {
      "poem_id": item.poem_id,
      "user_id": item.user_id,
      "genre_id": item.genre_id,
      "user_name": item.user_name,
      "prompt": item.prompt,
      "title": item.title,
      "image": item.image,
      "content": item.content,
      "note": item.note if item.note else "",
      "created_at": item.created_at.strftime("%b %d · %I:%M %p")
    }
    for item in collections
  ]

  return result