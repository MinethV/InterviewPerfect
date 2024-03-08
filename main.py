from fastapi import FastAPI, Body, status, HTTPException
from bson import ObjectId
from fastapi import FastAPI, HTTPException, Body, status

import config.env as env
import config.db as db
from data import  Questions

app = FastAPI()
settings = env.get_settings()


@app.get("/")
async def home():
    return "Hello, World!"

@app.get(
    "/questions/",
    response_description="List all questions",
    response_model=Questions.QuestionCollection,
    response_model_by_alias=False,
)
async def get_question():
    """
    List all of the questions in the database.

    """
    return Questions.QuestionCollection(
        Questions=await db.questions_collection.find().to_list(5)
    )