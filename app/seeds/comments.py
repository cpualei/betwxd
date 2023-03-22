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
        user_id=4,
        story_id=3,
        content="The vertebrae of the elephant's backbone point upwards just like humans. Instead of round and smooth discs, elephants have sharp, bony protrusions that extend upwards from their spine. If people constantly sit in metal seats on the back of the elephant, the animal feels pain and its health is severely damaged.",
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
    comment6 = Comment(
        user_id=5,
        story_id=4,
        content='Sharks are the white blood cells of the ocean.',
        created_at='2023-01-10',
        updated_at='2023-01-10')
    comment7 = Comment(
        user_id=4,
        story_id=4,
        content='Killer whales eat great white sharks for breakfast.',
        created_at='2022-11-26',
        updated_at='2022-11-26')
    comment8 = Comment(
        user_id=4,
        story_id=5,
        content='Lake Tahoe is beautiful during all seasons. Winter there is my favorite.',
        created_at='2022-09-20',
        updated_at='2022-09-20')
    comment9 = Comment(
        user_id=2,
        story_id=5,
        content='Lake Tahoe during spring > any other season',
        created_at='2023-01-01',
        updated_at='2023-01-01')
    comment10 = Comment(
        user_id=3,
        story_id=2,
        content='"most dont\'t feed on humans" but I leave hikes with 5,000 mosquito bites, everytime.',
        created_at='2022-08-08',
        updated_at='2022-08-08')
    comment11 = Comment(
        user_id=5,
        story_id=2,
        content='Wow, I really had no idea',
        created_at='2022-10-06',
        updated_at='2022-10-06')
    comment12 = Comment(
        user_id=5,
        story_id=6,
        content='Thank you for the tips! I love succulents but can never keep them alive.',
        created_at='2023-02-27',
        updated_at='2023-02-27')
    comment13 = Comment(
        user_id=3,
        story_id=6,
        content='Isopropyl alcohol truly does rid of eggs and larvae.',
        created_at='2023-03-08',
        updated_at='2023-03-08')
    comment14 = Comment(
        user_id=2,
        story_id=6,
        content='No wonder my succulents die... I have them in the shade.',
        created_at='2023-03-08',
        updated_at='2023-03-08')
    comment15 = Comment(
        user_id=2,
        story_id=3,
        content='Please don\'t right elephants :(',
        created_at='2023-03-08',
        updated_at='2023-03-08')
    comment16 = Comment(
        user_id=2,
        story_id=9,
        content='Traces of all of these chemicals, like everything else that goes down the drain, can be found in our drinking water.',
        created_at='2023-03-10',
        updated_at='2023-03-10')
    comment17 = Comment(
        user_id=4,
        story_id=9,
        content='Cool',
        created_at='2023-03-10',
        updated_at='2023-03-10')
    comment18 = Comment(
        user_id=3,
        story_id=9,
        content='But the chemicals add extra flavor to my sashimi?',
        created_at='2023-03-11',
        updated_at='2023-03-11')
    comment19 = Comment(
        user_id=3,
        story_id=8,
        content='Can you share your sources on this?',
        created_at='2023-03-12',
        updated_at='2023-03-12')
    comment20 = Comment(
        user_id=4,
        story_id=8,
        content='Wikipedia!',
        created_at='2023-03-12',
        updated_at='2023-03-12')
    comment21 = Comment(
        user_id=3,
        story_id=8,
        content='Yikes.',
        created_at='2023-03-12',
        updated_at='2023-03-12')
    comment22 = Comment(
        user_id=3,
        story_id=7,
        content='I use RESTful APIs in all of my projects.',
        created_at='2023-03-17',
        updated_at='2023-03-17')

    db.session.add(comment1)
    db.session.add(comment2)
    db.session.add(comment3)
    db.session.add(comment4)
    db.session.add(comment5)
    db.session.add(comment6)
    db.session.add(comment7)
    db.session.add(comment8)
    db.session.add(comment9)
    db.session.add(comment10)
    db.session.add(comment11)
    db.session.add(comment12)
    db.session.add(comment13)
    db.session.add(comment14)
    db.session.add(comment15)
    db.session.add(comment16)
    db.session.add(comment17)
    db.session.add(comment18)
    db.session.add(comment19)
    db.session.add(comment20)
    db.session.add(comment21)
    db.session.add(comment22)

    db.session.commit()


def undo_comments():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
