# More on React & Redux

1. Navigation with React Router
2. Handling Authentication with React
3. Handling Forms with Redux Form

## React Routers

        npm install --save react-router-dom

### React needs "React-Redux" library to make "Redux" working with it.

        npm install --save redux react-redux

### Redux-Form

    npm install --save redux-form

    Ref - https://redux-form.com/8.3.0/docs/gettingstarted.md/

### Using semantic-ui for ready made styles

Inside index.html

    <head>
      ....
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css">
      ....
    </head>

    https://semantic-ui.com/
    https://cdnjs.com/libraries/semantic-ui

### For Google OAuth

Inside index.html

    <head>
      ....
      <script src="https://apis.google.com/js/api.js"/></script>
      ....
    </head>

Rest in "GoodleAuth.js"

### Using axios for making http/s requests

        npm install --save axios

### Using redux-thunk -

        npm install --save redux-thunk

Different ways to write axios codes -

1.  import axios from "axios";

    doSearch(term) {

    axios
    .get("https://api.unsplash.com/search/photos", {
    headers: {
    Authorization:
    "Client-ID 3aYtL95VY43RtqmodYSnH3UUg5S3Dh-H-CzFr8cbPdU",
    },
    params: {
    query: term,
    },
    })
    .then((result) => {
    // console.log(result);
    this.setState({ images: resuls.data.result });
    })
    .catch((err) => console.log("Can not fetch images : " + err));
    }

2.  import axios from "axios";

    async doSearch(term) {

    var result = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
    Authorization: "Client-ID 3aYtL95VY43RtqmodYSnH3UUg5S3Dh-H-CzFr8cbPdU",
    },
    params: {
    query: term,
    },
    });

    this.setState({ images: resuls.data.result });
    }

3.  import axios from "axios";

    doSearch = async (term) => {

    var result = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
    Authorization: "Client-ID 3aYtL95VY43RtqmodYSnH3UUg5S3Dh-H-CzFr8cbPdU",
    },
    params: {
    query: term,
    },
    });
    console.log(result);

    this.setState({ images: resuls.data.result });
    };

4.  unsplash.js

    import axios from "axios";
    export default axios.create({
    headers: {
    Authorization: "Client-ID 3aYtL95VY43RtqmodYSnH3UUg5S3Dh-H-CzFr8cbPdU",
    },
    baseURL: "https://api.unsplash.com",
    });

    App.js

    import unsplash from "../api/unsplash";
    doSearch = async (term) => {

    var result = await unsplash.get("/search/photos", {
    params: {
    query: term,
    },
    });
    console.log(result);
    this.setState({ images: resuls.data.result });
    };
