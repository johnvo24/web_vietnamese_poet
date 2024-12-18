from datetime import datetime, timedelta
from jose import jwt
from typing import Optional
import secrets

SECRET_KEY = secrets.token_hex(32)
ALGORITHM = "HS256"

def create_access_token(data: dict, expires_delta: Optional[timedelta] = None):
  to_encode = data.copy()
  expire = datetime.utcnow() + (expires_delta or timedelta(minutes=30))
  to_encode.update({"exp": expire})
  return jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
