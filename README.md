# Online Tutoring API

API - https://online-tutoring-api.herokuapp.com/api/v1

## Authentication

This API uses jsonwebtoken as a form of authentication 

The token can be gotten through login

Sample token - 

***
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1MnQ5amN1b2s5ZDBiNDFnIiwiam9iUm9sZSI6ImFkbWluIiwiaWF0IjoxNTg4Mzc1MjcyLCJleHAiOjE1ODg0NjE2NzJ9.ovPC3QFiNNW6afCBNpeFQ0UBZACjtf3OSfznHY823XU
***

## SignUp and Login

To be able to use the API, you can sign up as Student or Tutor

SignUp Endpoint

POST https://online-tutoring-api.herokuapp.com/api/v1/user/signup

Parameters Required - first_name, last_name, role, email and password
```
{	
	"first_name":"Eli",
	"last_name":"Ade",
	"role":"Tutor",
	"email":"eli@yahoo.com",
	"password":"jesus000"
}
```

The role can only be "Tutor" or "Student" and it is case sensitive

Success Response -
```
{
    "status": true,
    "message": "User account successfully created",
    "id": "5eb45388885e400017666e0f",
    "role": "Student" or "Tutor"
}
```

Login Endpoint

POST https://online-tutoring-api.herokuapp.com/api/v1/user/login

Parameters Required - email and password

```
{	
	"email":"eli@yahoo.com",
	"password":"jesus000"
}
```
Success Response -
```
{
    "status": "success",
    "_id": "5eb45388885e400017666e0f",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkZUB5YWhvby5jb20iLCJfaWQiOiI1ZWI0NTM4ODg4NWU0MDAwMTc2NjZlMGYiLCJyb2xlIjoiU3R1ZGVudCIsImlhdCI6MTU4ODg3NjQ0NCwiZXhwIjoxNTg4ODgwMDQ0fQ.4OMcjqoCUVXf4wz73cFMKg3lI9amGRv4P2L_BYs54l0"
}
```


## Admin

Only a user with an Admin Role can use this route

Admin Details 

- email:"king@yahoo.com",
- password:"12345"

Admin can create subjects under 3 categories: primary, JSS, SSS - Endpoint

 POST https://online-tutoring-api.herokuapp.com/api/v1/categories/:category_name/subject

Parameters Required - name and description
:category_name - i.e primary, JSS, SSS

```
{
	"name":"English",
	"description":"English"
}
```
Success Response -
```
{
    "status": true,
    "message": "Subject created successfully",
    "name": "English",
    "category_id": "5eb3786bcfa699267c25f045",
    "id": "5eb46103b1a95b001751019f"
}
```

Admin can update a subject in a category (by Id) - Endpoint

PUT https://online-tutoring-api.herokuapp.com/api/v1/categories/:category_name/subject/:id

Parameters Required - name and description
:category_name - i.e primary, JSS, SSS
:id - subject_id("5eb46103b1a95b001751019f")
```
{
	"name":"English",
	"description":"English"
}
```
Success Response -
```
{
    "status": true,
    "message": "Subject was updated successfully",
    "name": "English",
    "id": "5eb46103b1a95b001751019f"
}
```

Admin can delete a subject in a category (by Id)

DELETE https://online-tutoring-api.herokuapp.com/api/v1/categories/:category_name/subject/:id

No parameters needed

Success Response -
```
{
    "status": true,
    "message": "Subject was deleted successfully",
    "name": "English"
}
```



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
 