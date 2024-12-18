from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from app.database import get_db
from app.models import User
from app.schemas.user import UserUpdate, UserResponse
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
