# Online Tutoring API

API - https://online-tutoring-api.herokuapp.com/api/v1

## Authentication

This API uses jsonwebtoken as a form of authentication

The token can be gotten through login

Sample token -

---

eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1MnQ5amN1b2s5ZDBiNDFnIiwiam9iUm9sZSI6ImFkbWluIiwiaWF0IjoxNTg4Mzc1MjcyLCJleHAiOjE1ODg0NjE2NzJ9.ovPC3QFiNNW6afCBNpeFQ0UBZACjtf3OSfznHY823XU

---

To use it on PostMan, copy the token, go to the authorization tab and paste the code in into the token input field.

## SignUp and Login

To be able to use the API, you can sign up as Student or Tutor

**SignUp Endpoint**

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

**Login Endpoint**

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

**Admin can create subjects under 3 categories: primary, JSS, SSS - Endpoint**

POST https://online-tutoring-api.herokuapp.com/api/v1/categories/:category_name/subject

- :category_name - i.e primary, JSS, SSS

Parameters Required -

- name
- description

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

**Admin can update a subject in a category (by Id) - Endpoint**

PUT https://online-tutoring-api.herokuapp.com/api/v1/categories/:category_name/subject/:id

- :category_name - i.e primary, JSS, SSS
- :id - i.e - 5eb46103b1a95b001751019f

Parameters Required -

- name
- description

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

**Admin can delete a subject in a category (by Id) - Endpoint**

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

**Admin can update a category - Endpoint**

PUT https://online-tutoring-api.herokuapp.com/api/v1/categories/:category_name

- :category_name - i.e primary, JSS, SSS

Parameters Required -

- name
- description

```
{
	"name":"primary",
	"description":"New Primary School"
}
```

Success Response -

```
{
    "status": true,
    "message": "Category was updated successfully",
    "name": "primary",
    "id": "5eb37805cfa699267c25f044"
}
```

**Admin can delete a category - Endpoint**

DELETE /api/v1/categories/:category_name

No parameters needed

Success Response -

```
{
    "status": true,
    "message": "Category was deleted successfully",
    "name": "primary"
}
```

**Admin can retrieve all tutors - Endpoint**

GET https://online-tutoring-api.herokuapp.com/api/v1/tutors

No parameters needed

Success Response -

```
{
    "status": true,
    "data": [
        {
            "_id": "5eb34fe04b6d3134b4f15208",
            "first_name": "Samson",
            "last_name": "Olayemi",
            "role": "Tutor",
            "email": "yemi@yahoo.com",
            "password": "$2a$12$A6Nkjuvid53kAZConHPb1eZZFQtlTjQc62FqUdmSGhrYXAQPqFMny",
            "createdAt": "2020-05-07T00:01:36.124Z",
            "updatedAt": "2020-05-07T00:01:36.124Z",
            "__v": 0
        },
        {
            "_id": "5eb366b7a7817510b0352f04",
            "first_name": "Eli",
            "last_name": "Ade",
            "role": "Tutor",
            "email": "eli@yahoo.com",
            "password": "$2a$12$mN9prrPbxh4B3ifQCwBdXeAnbk5IbZO49yAtYNGge.KoPW8U5qd3C",
            "createdAt": "2020-05-07T01:39:03.280Z",
            "updatedAt": "2020-05-07T01:39:03.280Z",
            "__v": 0
        }
    ]
}
```

**Admin can get a tutor (by Id) - Endpoint**

GET https://online-tutoring-api.herokuapp.com/api/v1/tutors/:id

:id - tutor id

No parameters needed

Success Response -

```
{
    "status": true,
    "data": [
        {
            "_id": "5eb366b7a7817510b0352f04",
            "first_name": "Eli",
            "last_name": "Ade",
            "role": "Tutor",
            "email": "eli@yahoo.com",
            "password": "$2a$12$mN9prrPbxh4B3ifQCwBdXeAnbk5IbZO49yAtYNGge.KoPW8U5qd3C",
            "createdAt": "2020-05-07T01:39:03.280Z",
            "updatedAt": "2020-05-07T01:39:03.280Z",
            "__v": 0
        }
    ]
}
```

**Admin can deactivate a tutor (by Id) - Endpoint**

DELETE https://online-tutoring-api.herokuapp.com/api/v1/tutors/:id

No parameters needed

Success Response -

```
{
    "status": true,
    "message": "Tutor was deactivated successfully"
}
```

**Admin can book lessons - Endpoint**

POST https://online-tutoring-api.herokuapp.com/api/v1/lessons

Parameters Required -

- name
- description

```
{
	"name":"Verbal Lesson",
	"description":"verbal lesson"
}
```

Success Response -

```
{
    "status": true,
    "message": "Lesson created successfully",
    "name": "Verbal Lesson",
    "id": "5eb46d413cecb24f60382973"
}
```

**Admin can retrieve all lessons - Endpoint**

GET https://online-tutoring-api.herokuapp.com/api/v1/lessons

No parameters needed

Success Response -

```
{
    "status": true,
    "data": [
        {
            "_id": "5eb46d413cecb24f60382973",
            "name": "Verbal Lesson",
            "description": "verbal lesson",
            "__v": 0
        },
        {
            "_id": "5eb46d82dee01600174fd9de",
            "name": "Social Studies Lesson",
            "description": "social lesson",
            "__v": 0
        }
    ]
}
```

**Admin can get a lesson (by Id) - Endpoint**

GET https://online-tutoring-api.herokuapp.com/api/v1/lessons/:id

- :id - lesson-id

No parameters needed

Success Response -

```
{
    "status": true,
    "data": {
        "_id": "5eb46d413cecb24f60382973",
        "name": "Verbal Lesson",
        "description": "verbal lesson",
        "__v": 0
    }
}
```

**Admin can update a lesson (by Id) - Endpoint**

PUT https://online-tutoring-api.herokuapp.com/api/v1/lessons/:id

- :id - lesson-id

Parameters Required -

- name
- description

```
{
	"name":"Verbal Lesson",
	"description":"verbal lesson"
}
```

Success Response -

```
{
    "status": true,
    "message": "Lesson was updated successfully",
    "name": "Verbal Lesson",
    "id": "5eb46d413cecb24f60382973"
}
```

**Admin can delete a lesson (by Id) - Endpoint**

DELETE https://online-tutoring-api.herokuapp.com/api/v1/lessons/:id

- :id - lesson-id

No parameters needed

Success Response -

```
{
    "status": true,
    "message": "Lesson was deleted successfully",
    "name": "Verbal Lesson"
}
```

**Admin can make Tutor an Admin - Endpoint**

PATCH https://online-tutoring-api.herokuapp.com/api/v1/tutors/:id

No parameters needed

Success Response -

```
{
    "status": true,
    "message": "Tutor is now an Admin",
    "id": "5eb34fe04b6d3134b4f15208"
}
```

## General: (For Admin, Tutors and Students);

This a a general route, authentication is enough to access these routes

**Admin/Students/tutors can retrieve a subject in a category (by Id) - Endpoint**

GET https://online-tutoring-api.herokuapp.com/api/v1/categories/:category_name/subject/:id

- :id - subject-id

No parameters needed

Success Response -

```
{
    "status": true,
    "data": {
        "tutors": [],
        "_id": "5eb476a10a0e01001715fd23",
        "user": [],
        "name": "Math",
        "description": "Mathematics",
        "category": "5eb3786bcfa699267c25f045",
        "__v": 0
    }
}
```

**Admin/Students /tutors can retrieve all subjects, by category - Endpoint**

GET https://online-tutoring-api.herokuapp.com/api/v1/categories/:category_name/subject

:category_name - i.e primary, JSS, SSS

No parameters needed

Success Response -

```
{
    "status": true,
    "data": [
        {
            "tutors": [],
            "_id": "5eb476a10a0e01001715fd23",
            "user": [],
            "name": "Math",
            "description": "Mathematics",
            "category": "5eb3786bcfa699267c25f045",
            "__v": 0
        }
    ]
}
```

**Admin/Students/tutors can retrieve all categories - Endpoint**

GET https://online-tutoring-api.herokuapp.com/api/v1/categories

No parameters needed

Success Response -

```
{
    "status": true,
    "data": [
        {
            "_id": "5eb2cdf4db507144b8cbcfb8",
            "name": "SSS",
            "description": "Senior Secondary School",
            "__v": 0
        },
        {
            "_id": "5eb3786bcfa699267c25f045",
            "name": "JSS",
            "description": "Junior Secondary School",
            "__v": 0
        },
        {
            "_id": "5eb47cdb20931f00178572da",
            "name": "primary",
            "description": "Primary School",
            "__v": 0
        }
    ]
}
```


**Admin/Students /tutors can search for subjects by name, sorted alphabetically in ascending order - Endpoint**

GET https://online-tutoring-api.herokuapp.com/api/v1/search/subject?name=Subject


Success Response -

```
{
    "status": true,
    "data": [
        {
            "tutors": [],
            "_id": "5eb476a10a0e01001715fd23",
            "user": [],
            "name": "Math",
            "description": "Mathematics",
            "category": "5eb3786bcfa699267c25f045",
            "__v": 0
        }
    ]
}
```

**Admin/Students can search for tutors by first name, sorted alphabetically in ascending order. - Endpoint**

 GET https://online-tutoring-api.herokuapp.com/api/v1/search/tutors?first_name=first_name


Success Response -

```
{
    "status": true,
    "data": [
        {
            "_id": "5eb3451f7e5ab74ebc94a0d2",
            "first_name": "Esther",
            "last_name": "Odejobi",
            "role": "Tutor",
            "email": "esther@yahoo.com",
            "password": "$2a$12$0.z9FT74JFjBPq1tmboZ5OMsKHuJZYLJaMG5Kxdh7tAi0RfVbHEvK",
            "createdAt": "2020-05-06T23:15:43.152Z",
            "updatedAt": "2020-05-06T23:18:33.399Z",
            "__v": 0
        }
    ]
}
```

## Tutors

**Tutors can register to take a subject in a category. - Endpoint**

PATCH https://online-tutoring-api.herokuapp.com/api/v1/tutors/:id/subject/:subject_id
  
- :id - tutor id
- :subject_id - subject id

No parameters needed

Success Response -

```
{
    "status": true,
    "message": "Subject registered successfully",
    "subject_name": "Math"
}
```

**Tutors can see all subjects they registered to take. - Endpoint**

GET https://online-tutoring-api.herokuapp.com/api/v1/tutors/:id/subject

- :id - tutor id

No parameters needed

Success Response -

```
{
    "status": true,
    "data": [
        {
            "tutors": [
                "5eb3451f7e5ab74ebc94a0d2"
            ],
            "_id": "5eb476a10a0e01001715fd23",
            "user": [],
            "name": "Math",
            "description": "Mathematics",
            "category": "5eb3786bcfa699267c25f045",
            "__v": 0
        }
    ]
}
```

**Tutors can update a registered subject. - Endpoint**

PUT https://online-tutoring-api.herokuapp.com/api/v1/tutors/:id/subject/:subject_id

- :subject_id - subject id
- :id - tutor id

Parameters Required -

- name
- description

```
{	
	"name":"Math",
	"description":"Mathematics is great"
}
```
Success Response -

```
{
    "status": true,
    "data": [
        {
            "tutors": [
                "5eb3451f7e5ab74ebc94a0d2"
            ],
            "_id": "5eb476a10a0e01001715fd23",
            "user": [],
            "name": "Math",
            "description": "Mathematics is great",
            "category": "5eb3786bcfa699267c25f045",
            "__v": 0
        }
    ]

```


4. Tutors can delete a registered subject

- DELETE /api/v1/tutors/:id/subject/:subject_id

Students:

1. Students can sign up.

- POST /api/v1/user/signup
- parameter - {
  "first_name":"Eli",
  "last_name":"Ade",
  "role":"Tutor",
  "email":"eli@yahoo.com",
  "password":"jesus000"
  }

2. Students can see all tutors taking a subject in a category

3. Students can book lessons

- POST /api/v1/lessons
- parameters - {"name":"ade","description":"a description"}
