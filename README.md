# Courseology-Full-Stack-Project

## Project Design
My Coursology project mimics a universities content management system.
You can view all courses and teachers at the university.
Each course and teacher have their own page with extra information including information about which teachers are linked to which courses and vice versa.
#
<img
  src="/courseology-frontend/src/assets/Picture1.png"
  alt="Coursology Home Page">
#
<img
  src="/courseology-frontend/src/assets/Picture2.png"
  alt="Create Course Page">
#
Users can create, update and delete teachers and courses as would be required on a university CMS.

## Build

### Front End
The front end is build in React with Sass used for styling.
The project's architecture seperates pages, containers and components with the majority of logic held in containers to make the components as reusable as possible.

### Back End
The backend is built in Java with Spring Boot, seperating the logic into controller, service and repository.
Full CRUD functionality is included for teachers and courses with a MySQL database holding the information on each.
