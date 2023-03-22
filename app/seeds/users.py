from app.models import db, User


# Adds a demo user, you can add other users here if you want
def seed_users():
    Demo = User(
        username='Demo', email='demo@aa.io', password='password', profile_photo='https://seeklogo.com/images/M/medium-2020-new-icon-logo-454E46D050-seeklogo.com.png', bio='Welcome to the demo profile page. Have fun demo-ing!')
    Marnie = User(
        username='Marnie', email='marnie@aa.io', password='password', profile_photo='https://abovethelaw.com/wp-content/uploads/2017/04/Marnie-Michaels-Girls-300x198.jpg', bio='Lover of water, despiser of mosquitos')
    Bobbie = User(
        username='Bobbie', email='bobbie@aa.io', password='password', profile_photo='https://upload.wikimedia.org/wikipedia/commons/b/b9/Bobby_Cannavale_2009.jpg', bio='I am an animal advocate - a voice for those that do not have one.')
    Rihanna = User(
        username='Rihanna', email='rihanna@aa.io', password='password', profile_photo='https://assets.teenvogue.com/photos/604b63245a8c47a0fc860da0/4:3/w_2332,h_1749,c_limit/rihanna-lede.jpg', bio='You already know who I am.')
    Caitlin = User(
        username='Caitlin', email='caitlin@aa.io', password='password', profile_photo='https://caitlinbuenlucas.com/img/me.jpg', bio='Welcome to my full-stack pixel-perfect clone of Medium. Thanks for passing through.')

    db.session.add(Demo)
    db.session.add(Marnie)
    db.session.add(Bobbie)
    db.session.add(Rihanna)
    db.session.add(Caitlin)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
