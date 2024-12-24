from datetime import datetime, timedelta
from jose import jwt
from typing import Optional

SECRET_KEY = "7db32ff1a6e5d01ee98afe74b66a13eee8dd91dc48573a90db155e961326a863"
ALGORITHM = "HS256"

def create_access_token(data: dict, expires_delta: Optional[timedelta] = None):
  to_encode = data.copy()
  expire = datetime.utcnow() + (expires_delta or timedelta(minutes=30))
  to_encode.update({"exp": expire})
  return jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
