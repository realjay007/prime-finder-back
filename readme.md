# Prime Finder Backend
Backend component for [prime finder web app](https://github.com/realjay007/prime-finder-front)

Live Demo: [https://prime-finder.realjay.dev](https://prime-finder.realjay.dev)

# Pre-reqs
The only requirement needed is a recent version of [Node.js](https://nodejs.org/en/).

# Getting started
- Clone the repository
```
git clone git@github.com:realjay007/prime-finder-backend.git <project_name>
```
- Install dependencies
```
cd <project_name>
npm install
```
- Copy the example environment variable to .env and update values as required. At the moment, only the `PORT` variable is set, which determines the port the app listens on when it runs
```
cp .env.example .env
```
- Run the project.
```
npm run debug
```

# Deployment
Before running the app in a production environment, you would need to build the project to convert the Typescript to Javascript that can be run the Node Runtime.
```
npm run build
```
And then start the application using:
```
npm start
```
This starts the application listening on the port set in the `PORT` environment variable. Normally you would not want to keep the production terminal open for this, so it is recommended to use a process manager e.g [pm2](https://pm2.keymetrics.io/) to manage the process in the background.

If you're using docker, a dockerfile is provided to ease the deployment process.

# Tests
Test were written using the jest framework
```
npm test
```
This also generates a coverage report in the `./coverage` folder

# API documentation
## Responses
Responses from the application are in JSON in the following format
```javascript
{
	"status": boolean,
	"message": string, // optional
	"data": any // optional
}
```
The `status` attribute specifies if the request was successful or not

The `message` contains a user-friendly message commonly used to indicate errors or, in the case of deleting a resource, success that the resource was properly deleted.

The `data` attribute contains any other information associated with the response.

## Endpoints
### **POST /prime/find-next-lower**
Accepts a number and returns the highest prime number lower tha input number

- **Request**
	```javascript
	{
		"number": 55 // The input number
	}
	```

- **Response**
	```javascript
	{
		"status": true,
		"data": 53 // The highest prime number lower than 55
	}
	```

- **Errors**
	- Code: 400
	- Content:
		```javascript
			{
				"status": false,
				"message": "ValidationError: \"number\" must be greater than or equal to 3"
			}
		```
