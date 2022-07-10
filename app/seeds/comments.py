from app.models import db, Comment

def seed_comments():
    comment1 = Comment(
        user_id=1,
        story_id=3,
        content='We must protect our elephants. Elephants are my favorite animal!',
        created_at='2022-04-22',
        updated_at='2022-04-22')
    comment2 = Comment(
        user_id=2,
        story_id=3,
        content='I could not agree enough!',
        created_at='2022-04-23',
        updated_at='2022-04-23')
    comment3 = Comment(
        user_id=3,
        story_id=3,
        content='What a negative article. Elephant riding is fun.',
        created_at='2022-04-23',
        updated_at='2022-04-23')
    comment4 = Comment(
        user_id=2,
        story_id=1,
        content='I will agree to disagree.',
        created_at='2022-07-06',
        updated_at='2022-07-06')
    comment5 = Comment(
        user_id=1,
        story_id=1,
        content='That is too bad. Onions taste amazing!',
        created_at='2022-07-08',
        updated_at='2022-07-08')

    db.session.add(comment1)
    db.session.add(comment2)
    db.session.add(comment3)
    db.session.add(comment4)
    db.session.add(comment5)

    db.session.commit()


def undo_comments():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
