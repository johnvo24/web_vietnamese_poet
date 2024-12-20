from sqlalchemy import Column, Integer, String, Boolean, DateTime, Text, ForeignKey
from sqlalchemy.sql import func
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship

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

  poems = relationship("Poem", back_populates="user")

class Genre(Base):
  __tablename__ = "genres"
  id = Column(Integer, primary_key=True, index=True, autoincrement=True)
  name = Column(String, nullable=False)
  description = Column(Text, nullable=True)
  created_at = Column(DateTime, default=func.now())

  poems = relationship("Poem", back_populates="genre")

class Poem(Base):
  __tablename__ = "poems"
  id = Column(Integer, primary_key=True, index=True, autoincrement=True)
  user_id = Column(Integer, ForeignKey("users.id"), nullable=False)
  genre_id = Column(Integer, ForeignKey("genres.id"), nullable=False)  # 0: lục bát, 1: thất ngôn tứ tuyệt
  prompt = Column(Text, nullable=False)
  title = Column(String(255), nullable=False)
  content = Column(Text, nullable=False)
  note = Column(Text, nullable=True)
  create_at = Column(DateTime, default=func.now())

  genre = relationship("Genre", back_populates="poems")
  user = relationship("User", back_populates="poems")