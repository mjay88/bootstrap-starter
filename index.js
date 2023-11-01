const express = require('express');
const bodyParser = require('body-parser');
const path = require('path'); // Import the path module

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the 'public' directory, DOES NOT WORK EITHER!!!
// app.use(express.static(path.join(__dirname, "/public")));

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, '/public'), { 
    // Set the content type for .css files to text/css
    setHeaders: (res, path) => {
    console.log("Requesting file:", path);

        if (path.endsWith('.css')) {
            res.set('Content-Type', 'text/css');
        }
        if(path.endsWith('.js')){
            res.set('Content-Type', 'application/javascript'); // Set the content type for .js files to application/javascript
        }
    }
}));
// app.use("/css", express.static(__dirname + "/js"));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/submit-form', (req, res) => {
    const firstName = req.body.first_name
    console.log(firstName);

    res.send('Form submitted successfully!');
});

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});
