from fastapi import Depends, HTTPException, status
from jose import jwt, JWTError
from sqlalchemy .orm import Session
from app.database import get_db
from app.models import User
from app.auth.jwt import SECRET_KEY, ALGORITHM

def get_current_user(token: str, db: Session = Depends(get_db)):
  credentials_exception = HTTPException(
    status_code=status.HTTP_401_UNAUTHORIZED,
    detail="Could not validate credentials",
    headers={"WWW-Authenticate": "Bearer"},
  )
  try:
    payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
    username: str = payload.get("sub")
    if username is None:
      raise credentials_exception 
  except JWTError:
    raise credentials_exception
  
  user = db.query(User).filter(User.username == username).first()
  if user is None:
    raise credentials_exception
  return user