user_routes = {
    "create new user":{
        "url": "/api/user/add",
        "method": "POST"
    },
    "read one user": {
        "url": "/api/user/<string:username>",
        "method": "GET"
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

flashcard_routes = {
    "read all flashcards": {
        "url": "/api/flashcard/<string:subject>"
        "method": "GET"
    }
}