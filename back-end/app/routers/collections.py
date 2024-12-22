from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.database import get_db
from app.models import Collection, User, Poem
from app.schemas.collection import CollectionCreate
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