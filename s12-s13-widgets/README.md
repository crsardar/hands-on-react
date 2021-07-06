
### Contents 
1. Hook System
2. Tab Navigation
3. Open in new Tab i.e Ctl/Cmd + Click event handling
4. Times - setTimeout(), clearTimeOut()
5. dangerouslySetInnerHTML - 


Understanding React's Hooking (Using features of React.Components without subclassing it, using 'functions')

### Using semantic-ui for ready made styles

Inside index.html

    <head>
      ....
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css">
      ....
    </head>

    https://semantic-ui.com/
    https://cdnjs.com/libraries/semantic-ui

### Using axios for making http/s requests

        npm install --save axios

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
