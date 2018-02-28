# CS3398-Jedda-S2018    
[![Build Status](https://travis-ci.org/CS3398-Jedda-Knights/CS3398-Jedda-S2018.svg?branch=master)](https://travis-ci.org/CS3398-Jedda-Knights/CS3398-Jedda-S2018) 
[![Slack Status](http://slack.videojs.com/badge.svg)](https://cs3398s18jedda.slack.com/)



### Notariety
Notariety is an application primarily aimed at allowing users to create notes, flashcards, and quizzes which can be used as study aids for various courses.  

### Project Status
 <div style="background-color:rgba(224, 240, 217, 0.0470588); text-align:center; vertical-align: middle; padding:40px 0;">
###### Completed: 
* The server for accessing the api's has been setup
* The models for user and flashcard have been created
* The database for the application has been setup
* The main navigation bar and template for notes and flashcards have been implemented
</div>

###### In Progress:
* Integrating the frontend and backend (i.e establishing services in Angular to access the API's in Flask


### Tech-Stack
This is a web application built with:
1. Angular (Frontend)
2. Python-Flask-Restful-API(Backend) 
3. MySQL database(backend) 

### How the Run the Backend Server and the Frontend Server
First, clone the repository on your machine
###### Running the frontend:
1. Open a new terminal (command line) and navigate to the frontend folder using said terminal
2. Run `npm install` to install all the dependencies for the project
3. If you have the angular cli installed:

             i. Run `ng serve`  
   Else if you have only NPM installed:  

             i. Run `npm start` 
4. The server should start running on `http://localhost:4200`
5. Finally, open the link provided above in a browser of your choosing and the app will load

###### Running the backend:
First, Download and install [Postman](https://www.getpostman.com/)
1. Open a new terminal and navigate to the backend folder using said terminal
2. Run `python app.py` 
3. To test the api separately:

            i. Open postman 
            ii. Enter the endpoint for the api in the request url, select the method used on that endpoint,  
        enter required information if the request is a POST, PUT, or DELETE http method 
            iii. Click the `Send` button and the server's response will be returned

### Contributors
* [Kentessa Fanfair](https://github.com/2goldtess)
* [Emily Beaudoin](https://github.com/erb64) 
* [John Halliday](https://github.com/jh2012)
* [Juan Aguirre](https://github.com/Jaa217)
* [Mario Delagarza](https://github.com/MAD1364) 





