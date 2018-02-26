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
        "url": "/api/flashcards/<string:subject>",
        "method": "GET"
    },
    "create new flashcard": {
        "url": "/api/flashcard/add",
        "method": "POST"
    },
    "read one flashcard": {
        "url": "/api/flashcard/<string:id>",
        "method": "GET"
    },
    "update flashcard": {
        "url": "/api/flashcard/<string:id>",
        "method": "PUT"
    },
    "delete flashcard": {
        "url": "/api/flashcard/<string:id>",
        "method": "DELETE"
    }

}