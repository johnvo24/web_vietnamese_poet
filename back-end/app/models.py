from sqlalchemy import Column, Integer, String, Boolean, DateTime, Text
from sqlalchemy.sql import func
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()

class User(Base):
  __tablename__ = "users"
  id = Column(Integer, primary_key=True, index=True, autoincrement=True)
  full_name = Column(String, nullable=False)
  username = Column(String, unique=True, index=True, nullable=False)
  password = Column(String, nullable=False)
  bio = Column(Text, nullable=True)
  email = Column(String, unique=True, index=True, nullable=False)
  phone = Column(String, nullable=True)
  location = Column(String, nullable=True)
  date_of_birth = Column(DateTime, nullable=True)
  is_verified = Column(Boolean, default=False)
  created_at = Column(DateTime, default=func.now())
  updated_at = Column(DateTime, default=func.now(), onupdate=func.now())
  last_login = Column(DateTime, nullable=True)
  role = Column(String, default="user")
