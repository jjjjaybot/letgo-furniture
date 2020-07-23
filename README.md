# letgo-furniture

> A mobile app for selling and posting furnitures with user auth.

## Setup

go to Backend folder and do npm i.

Then go to cofig folder and in the development.js file changes the assetsBaseUrl to be your local IP address.

For example, if my IP address is 192.168.0.88, then the assetsBaseUrl should be "http://192.168.0.88:9000/assets/".

Go to http://localhost:9000/api/listings to see if you have any json object. If you do, then do node index.js to start the back end.

Go to app folder and then go to config folder, and in the settings.js file change the apiUrl similarly as the above, for example, "http://192.168.0.88:9000/api".

open a new folder and go to app folder and do npm i, and expo start.
