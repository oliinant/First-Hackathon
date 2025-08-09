import uuid
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import Column, String, DATETIME, text
from sqlalchemy.dialects.postgresql import UUID

Base = declarative_base()

class User(Base):
    __tablename__ = "users"
    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    username = Column(String, unique=True, nullable=False)
    email = Column(String, unique=True, nullable=False)
    password = Column(String, nullable=False)
    role = Column(String, default="regular_user", nullable=False)
    created_at = Column(DATETIME(timezone=True), server_default=text("now()"), nullable=False)
    
    def __repr__(self):
        return f"<User(id={self.id}, username={self.username}, email={self.email}, password={self.password}, role={self.role}, created_at={self.created_at})"
