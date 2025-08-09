from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, scoped_session
import os
from dotenv import load_dotenv

load_dotenv()
SQLALCHEMY_DB_URI = os.getenv("DATABASE_URL")

engine = create_engine(SQLALCHEMY_DB_URI)

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

db_session = scoped_session(SessionLocal)

def get_session():
    session = SessionLocal()
    try:
        yield session
    finally:
        session.close()