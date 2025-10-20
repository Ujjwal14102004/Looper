from fastapi import FastAPI
from pydantic import BaseModel
from typing import List

app = FastAPI(title="Looper Backend")

# Model for a saved loop
class Loop(BaseModel):
    user_id: str
    song_url: str
    start_time: float
    end_time: float

# Temporary in-memory storage (later use MongoDB)
loops_db: List[Loop] = []

@app.get("/")
def read_root():
    return {"message": "Welcome to Looper API"}

@app.post("/loops/")
def create_loop(loop: Loop):
    loops_db.append(loop)
    return {"message": "Loop saved successfully", "loop": loop}

@app.get("/loops/")
def get_loops():
    return loops_db
