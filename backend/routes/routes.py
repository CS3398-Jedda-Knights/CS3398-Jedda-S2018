user_routes = {
    "create new user":{
        "url": "/api/user/add",
        "method": "GET"
    },
    "read one user": {
        "url": "/api/user/<string:username>",
        "method": "POST"
    },
    "update user info": {
        "url": "/api/user/<string:username>",
        "method": "PUT"
    },
    "delete user": {
        "url": "/api/user/<string:username>",
        "method": "DELETE"
    }
}