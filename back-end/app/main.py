from fastapi import FastAPI
from app.routers import auth
from app.routers import users

app = FastAPI()

# include routers
app.include_router(auth.router, prefix="/auth", tags=["Authentication"])
app.include_router(users.router, prefix="/user", tags=["User"])

@app.get("/")
async def read_root():
    return {"message": "Hello, FastAPI!"}