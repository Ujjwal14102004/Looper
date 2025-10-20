from fastapi import FastAPI
from pydantic import BaseModel
from typing import List

app = FastAPI(title="Looper API")

# In-memory storage for loops (for MVP)
loops_db = []

class Loop(BaseModel):
    user_id: str
    song_url: str
    start_time: float
    end_time: float

@app.get("/")
def home():
    return {"message": "Welcome to Looper API"}

@app.post("/loops/")
def create_loop(loop: Loop):
    loops_db.append(loop)
    return {"message": "Loop saved", "loop": loop}

@app.get("/loops/", response_model=List[Loop])
def get_loops():
    return loops_db
