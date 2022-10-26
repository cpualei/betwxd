<h1 align="center">Betwx'd</h1>

<p align="center">Betwx'd is a full-stack pixel-perfect clone of Medium. Betwx'd received it's name from the term "betwixt" meaning "in between two things". This application provides a place where readers and writers can share their thoughts, ideas, opinions and perspectives through articles written by it's users and read by it's users. In order to both write stories and share your thoughts about them, all you have to do is sign up.</p>

<p align="center">Live link: https://betwxd.herokuapp.com/</p>

<br>

## Technologies Used
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![Heroku](https://img.shields.io/badge/heroku-%23430098.svg?style=for-the-badge&logo=heroku&logoColor=white)
![Python](https://img.shields.io/badge/Python-FFD43B?style=for-the-badge&logo=python&logoColor=blue)
![Flask](https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white)
![Postgresql](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
![AWS](https://img.shields.io/badge/Amazon_AWS-232F3E?style=for-the-badge&logo=amazon-aws&logoColor=white)

<br>

<p align="center">
  <img src="https://user-images.githubusercontent.com/93879557/194693390-9b2ec4d6-aa58-435f-a8a8-08e25274a5d2.gif" />
</p>


<p align="center">
  <img src="https://user-images.githubusercontent.com/93879557/194694130-1fd50770-c677-4eb6-8871-25d08edb6d4c.gif" />
</p>


<p align="center">
  <img src="https://user-images.githubusercontent.com/93879557/194693813-8662df4d-b239-4f56-bf71-9fee8157bc23.gif" />
</p>


<br>

### Application Architecture

Betwx'd is built with Flask (backend), React and Redux (frontend), and PostgresSQL (database).

<br>

### Future Features
✅ To reflect the features Medium provides, I plan to implement a search function which allows writers to search other writers and articles, a "claps" feature which allows writers to "clap" (or like) a story, and profile pages for existing users where other users can view all stories that a particular writer has written.

✅ Give users ability to edit their usernames

✅ Give users ability to edit their bios

🟩 Give users ability to edit their profile pictures
<br>

### Contact Me
<a href="https://www.linkedin.com/in/caitlin-buen-lucas/">Linkedin</a> | <a href="https://github.com/cpualei/">Github</a>

<br>

## Getting started
1. Clone the main repository

   ```bash
   git clone https://github.com/cpualei/betwxd.git
   ```

2. Install the dependencies

      ```bash
      pipenv install --dev -r dev-requirements.txt && pipenv install -r requirements.txt
      ```

3. Create a **.env** file based on the example with proper settings for your
   development environment
4. Setup your PostgreSQL user, password and database and make sure it matches your **.env** file

5. Get into your pipenv, migrate your database, seed your database, and run your flask app

   ```bash
   pipenv shell
   ```

   ```bash
   flask db upgrade
   ```

   ```bash
   flask seed all
   ```

   ```bash
   flask run
   ```

6. To run the React App in development, checkout the [README](./react-app/README.md) inside the `react-app` directory.
