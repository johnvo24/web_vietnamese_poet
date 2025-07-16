from fastapi import APIRouter, Depends, HTTPException
from fastapi.security import OAuth2PasswordRequestForm
from sqlalchemy.orm import Session
from app.database import get_db
from app.models import User
from app.schemas.user import LoginRequest, TokenResponse, UserCreate, UserResponse
from app.auth.hashing import hash_password, verify_password
from app.auth.jwt import create_access_token
from datetime import timedelta

router = APIRouter()

@router.post("/register", response_model=UserResponse)
def register(user: UserCreate, db: Session = Depends(get_db)):
  check_email = db.query(User).filter(User.email == user.email).first()
  check_username = db.query(User).filter(User.username == user.username).first()
  if check_email:
    raise HTTPException(status_code=400, detail="Email already registered")
  if check_username:
    raise HTTPException(status_code=400, detail="Username already exsist")
  user_data = User(**user.dict(exclude={"password"}), password=hash_password(user.password))
  db.add(user_data)
  db.commit()
  db.refresh(user_data)
  return user_data

@router.post("/login", response_model=TokenResponse)
async def login(form_data: OAuth2PasswordRequestForm = Depends(), db: Session = Depends(get_db)):
  user = db.query(User).filter(User.username == form_data.username).first()
  if not user or not verify_password(form_data.password, user.password):
    raise HTTPException(status_code=401, detail="Invalid credentials")
  access_token = create_access_token(data={"sub": user.username}, expires_delta=timedelta(hours=1))
  return {"access_token": access_token, "token_type": "bearer"}
