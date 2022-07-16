REMOVE GIT ORIGIN
git remote remove origin

ADD GIT ORIGIN
git remote add origin https://github.com/cpualei/betwxd

CHECK GIT ORIGIN
git remote -v


to rebuild a database with sqlalchemy:

- drop database, then create it
- delete all migration versions
- start the shell
- run: flask db migrate
- run: flask db upgrade
- run: flask seed all

to only drop the data from the databse:
- run: flask undo all

HEROKU
heroku run -a betwxd flask db migrate
heroku run -a betwxd flask db upgrade
heroku run -a betwxd flask seed all

asdfasd
