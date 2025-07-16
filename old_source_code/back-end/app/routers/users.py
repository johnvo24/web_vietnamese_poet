from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from app.database import get_db
from app.models import User
from app.schemas.user import UserUpdate, UserResponse, ShowWriterResponse
from app.auth.jwt import create_access_token
from app.auth.dependencies import get_current_user

router = APIRouter()

@router.put("/profile", response_model=UserResponse)
def update_profile(
  update_data: UserUpdate,
  db: Session = Depends(get_db),
  current_user: User = Depends(get_current_user)
):
  user = db.query(User).filter(User.id == current_user.id).first()
  if not user:
    raise HTTPException(status_code=404, detail="User not found")
  
  for field, value in update_data.dict(exclude_unset=True).items():
    setattr(user, field, value)

  db.commit()
  db.refresh(user)
  return user

@router.get("/me", response_model=UserResponse)
def get_all(
  db: Session = Depends(get_db),
  current_user: User = Depends(get_current_user)
):
  return current_user

@router.get("/show-writers", response_model=list[ShowWriterResponse])
async def get_all_writers(
  db: Session = Depends(get_db)
):
  writers = (
    db.query(
      User.id.label("user_id"),
      User.full_name.label("full_name")
    ).all()
  )

  result = [
    {
      "user_id": item.user_id,
      "full_name": item.full_name,
      "avatar": "https://upload.wikimedia.org/wikipedia/commons/2/21/Johnny_Depp_2020.jpg"
    }
    for item in writers
  ]

  return result