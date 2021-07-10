### Quickest way to create a Web-Service for JSON output, using JSONServer (https://www.npmjs.com/package/json-server)

1.  Create Node Project -

        npm init

2.  Install JSONServer -

        npm install -save json-server

3.  Create "db.json" file.

4.  Inside "package.json" add this -

        "scripts": {
            "start": "json-server -p 3001 -w db.json"
        },

5.  Start the JSONServer -

    npm start

The Web-Service will be available at port 3001

### On a Completely New environment(like checked in from Git repo) -
1.
        npm install

2.
        npm start
