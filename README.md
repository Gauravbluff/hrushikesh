**_Signup Input Format_**

```
Signup URL: localhost:8000/user/signup  

{
    "fullname":"Hrushikkesh Das",
    "contact":"7606810227",
    "location":{
        "country":"India",
        "state":"Odisha",
        "district":"Jagatsinghpur",
        "block":"Kujanga",
        "latitude":"12345678",
        "longitude":"12345678",
        "pincode":"754142",
        "full_address":"Udyabata, Dochoki, Paradip"
    }
}
```

**_Login Input Format_**

```
Login URL: localhost:8000/user/login

{
    "contact":"7606810227"
}
```

**_Login Output Format_**
```
{
    "message": "YOU HAVE SUCCESSFULLY LOGGED IN!",
    "result": [
        {
            "location": {
                "country": "India",
                "state": "Odisha",
                "district": "Jagatsinghpur",
                "block": "Kujanga",
                "latitude": "12345678",
                "longitude": "12345678",
                "pincode": "754142",
                "full_address": "Udyabata, Dochoki, Paradip"
            },
            "_id": "5fd3d45e41508a2a706ead99",
            "_userid": "5fd3d45e41508a2a706ead98",
            "fullname": "Hrushikkesh Das",
            "contact": "7606810227",
            "__v": 0
        }
    ],
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfdXNlcmlkIjoiNWZkM2Q0NWU0MTUwOGEyYTcwNmVhZDk4IiwiZnVsbG5hbWUiOiJIcnVzaGlra2VzaCBEYXMiLCJjb250YWN0IjoiNzYwNjgxMDIyNyIsImlhdCI6MTYwNzcxODE5MiwiZXhwIjoxNjA3NzIxNzkyfQ.wSrPgn16qon7KZAXGSlYhHVxvR3MFld09Fx4qeEx7S4"
}
```
