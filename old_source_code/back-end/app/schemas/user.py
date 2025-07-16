from pydantic import BaseModel, EmailStr
from datetime import datetime
from typing import Optional

class User(BaseModel):
  full_name: str
  username: str
  email: EmailStr
  bio: Optional[str] = None
  phone: Optional[str] = None
  location: Optional[str] = None
  date_of_birth: Optional[datetime] = None

class UserCreate(User):
  password: str

class UserResponse(User):
  id: int
  is_verified: bool
  created_at: datetime
  updated_at: datetime
  role: str

  class Config:
    from_attributes = True

class UserUpdate(BaseModel):
  full_name: Optional[str] = None
  bio: Optional[str] = None
  phone: Optional[str] = None
  location: Optional[str] = None
  date_of_birth: Optional[datetime] = None

  class Config:
    from_attributes = True

class LoginRequest(BaseModel):
  username: str
  password: str

class TokenResponse(BaseModel):
  access_token: str
  token_type: str

class ShowWriterResponse(BaseModel):
  user_id: int
  full_name: str
  avatar: str

  class Config:
    from_attributes = True