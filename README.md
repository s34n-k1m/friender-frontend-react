# Friender - Frontend React

Friender is an app that helps people make friends and connect with others based on geographic proximity and hobbies/interests.  

Frontend and backend repositories were split for deployment. The backend repository can be found [here](https://github.com/s34n-k1m/friender-backend-flask).

Deployed demo can be seen [here](https://friender.demo.seanmkim.com/).

* Backend built with:
    * Flask
    * Flask WTForms
    * PostgreSQL database
    * SQL Alchemy
    * AWS S3
    * Mapbox
    * Geopy
* Frontend built with:
    * React

# Features:
* Login/authentication
* Users can sign up with: username, email, password, first name, last name, hobbies, interests, location (zip code), and friend radius (in miles)
* Users can edit their profile and optionally upload photos (Images are stored to Amazon S3).
* Users are shown a potential friends list and can like or dislike each potential friend.
* Users are shown other users (name, hobbies, interests, pics) who meet the following criteria:
    1. Other user's location is within friend radius
    2. User's location is within other user's friend radius
    3. User has not yet liked or disliked the other user
    4. User has not been disliked yet by the other user

# Getting Started on the Server-side

1. Clone the [backend repository](https://github.com/s34n-k1m/friender-backend-flask)  
2. `cd friender-backend-flask`
3. Create the virtual environment
* `python3 -m venv venv`
* `source venv/bin/activate`
* `pip3 install -r requirements.txt`
4. Create the database
* `createdb friender`
* `python3 seed.py`
5. Start the server
* `flask run`

# Getting Started on the Client-side

1. Clone this repository
2. `cd friender-frontend-react`
3. `npm install`
4. `npm start`

# Authors
My pair for this project was @clairelcasey 

# Future Add-ons:
* Add testing
* Messages
    * If two users both say yes for friend match, they should be able to message each other
* Image uploads    
    * Drag and drop file upload
* Add option to see Friends List
    * Unlike already liked person
    * Like already unliked person
* Search by hobbies/interests
* Add map of potential friends
    * Pin on the potential friend's zip code center 


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
