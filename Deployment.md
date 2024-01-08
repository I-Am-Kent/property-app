Deployment

1. Application is split into two, Front-end and Back-end
2. Front end is located in client folder

Deployment to Heroku with Procfile
web: node Server/server.js

Deployment description

1. When code is push to heroku, heroku-postbuild will run and it will run npm install and npm run build inside client folder
2. after the build is finish, our express server will serve the build folder. code below is the line where we ask express to serve our built application.
   note: built application can be served on a static server.

```
app.use(express.static("client/build"))
```

3. We add a get handler to ensure user is forwarded to our app when they access the URL

```
app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
)
```

4. After the building finish, our application is run with the command

```
npm start : node Server/server.js
```

We don't need to run our frontend terminal because our express server is serving our front end for us.

Links to deployed app:

1. https://property-tracker3120.herokuapp.com/
