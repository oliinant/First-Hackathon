from session import get_session
from tables import User

def add_user(username, email, password):
    session_gen = get_session()
    session = next(session_gen)
    
    try:
        new_user = User(username=username, email=email, password=password)
        session.add(new_user)
        session.commit()
        session.refresh(new_user)
        return new_user
    finally:
        session_gen.close()


def check_user_login(username, password):
    session_gen = get_session()
    session = next(session_gen)
    
    try:
        user = session.query(User).filter_by(username=username, password=password).first()
        return user
    finally:
        session_gen.close()

add_user("UwU", "ichbinoliin", "123")
        
    
        

