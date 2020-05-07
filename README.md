**README**

***Authorization token can be gotten on login and it will be used on all the endpoints***

API - https://online-tutoring-api.herokuapp.com

i.e https://online-tutoring-api.herokuapp.com/api/v1/categories - To get all categories

Admin Details - 
- email: "esther@yahoo.com"
- password: "jesus000"

General: (For Admin, Tutors and Students);
1) Admin/Students /tutors can retrieve a subject in a category (by Id)
- GET /api/v1/categories/:category_name/subject

2) Admin/Students /tutors can retrieve all subjects, by category
- GET /api/v1/categories/:category_name/subject
3) Admin/Students /tutors can retrieve all categories
- GET /api/v1/categories/
4) Admin/Students /tutors can search for subjects by name, sorted alphabetically in ascending order.
- GET /api/v1/search/subject?name=subject
5) Admin/Students  can search for tutors by first name, sorted alphabetically in ascending order.
- GET /api/v1/search/tutors?first_name=first_name
6) Admin/Students /tutors can sign in.
- POST /api/v1/user/login
  - parameters - {"email":"ade@yahoo.com","password":"*********"}

Admin:

1) Admin can create subjects under 3 categories: primary, JSS, SSS
- POST /api/v1/categories/:category_name/subject
    - parameters - {"name":"ade","description":"a description"}
2) Admin can update a subject in a category (by Id)
- POST /api/v1/categories/:category_name/subject/:id
    - parameters - {"name":"ade","description":"a description"}
3) Admin can delete a subject in a category (by Id)
- DELETE /api/v1/categories/:category_name/subject/:id
4) Admin can delete or update a category
- DELETE /api/v1/categories/:category_name
- PUT    /api/v1/categories/:category_name
    - parameters - {"name":"ade","description":"a description"}
5) Admin can retrieve all tutors
- GET  /api/v1/tutors
6) Admin can get a tutor (by Id)
- GET  /api/v1/tutors/:id
7) Admin can deactivate a tutor (by Id)
- DELETE  /api/v1/tutors/:id
8) Admin can book lessons
- POST /api/v1/lessons
    - parameters - {"name":"ade","description":"a description"}
9). Admin can retrieve all lessons
- GET /api/v1/lessons
10). Admin can get a lesson (by Id)
- GET /api/v1/lessons/:id
11). Admin can update a lesson (by Id)
- PUT /api/v1/lessons/:id
    - parameters - {"name":"ade","description":"a description"}
12). Admin can delete a lesson (by Id)
- DELETE /api/v1/lessons/:id
13 Admin signs up as a tutor but you can make a tutor of your choice an admin by giving them the admin role. Not all tutors must be admin. Just a few.
- PATCH /api/v1/tutors/:id
    - no parameter needed

 

Tutors:

1) Tutors can register to take a subject in a category
- PATCH  /api/v1/tutors/:id/subject/:subject_id
    - no parameter needed

2) Tutors can see all subjects they registered to take
- GET  /api/v1/tutors/:id/subject
3) Tutors can update a registered subject
- PATCH   /api/v1/tutors/:id/subject/:subject_id
    - parameters - {"name":"ade",description":"a description"}
4) Tutors can delete a registered subject
- DELETE   /api/v1/tutors/:id/subject/:subject_id
 

Students:

1) Students can sign up.
- POST /api/v1/user/signup
- parameter - {
    "first_name":"Eli",
	"last_name":"Ade",
	"role":"Tutor",
	"email":"eli@yahoo.com",
	"password":"jesus000"
}

2) Students can see all tutors taking a subject in a category

3) Students can book lessons
- POST /api/v1/lessons
- parameters - {"name":"ade","description":"a description"}
 