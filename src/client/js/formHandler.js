const userUrl = require('valid-url');

const handleSubmit = function (event) {
    event.preventDefault();

let formText = document.getElementById('name').value;
    // check for valid url
    if (userUrl.isWebUri(formText)) {
        console.log("::: Form Submitted :::");
        fetchAylien('http://localhost:3030/article', formText);
    } else {
        document.getElementById('error').innerHTML = 'Please Enter a Valid URL.';
        }
};

    const fetchAylien = async (url, input) => {
        const res = await fetch(url, {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            text: input})
        });
        try {
            const data = await res.json();
            if(res.status >= 200 && res.status < 400) {
                //const list = document.createElement('li');
                document.getElementById('polarity').innerHTML = data.polarity;
                document.getElementById('polarity_confidence').innerHTML = data.polarity_confidence;
                document.getElementById('subjectivity').innerHTML = data.subjectivity;
                document.getElementById('subjectivity_confidence').innerHTML = data.subjectivity_confidence;
                document.getElementById('text').innerHTML = data.text;
            }
            } catch(error) {
                document.getElementById('error').innerHTML = 'Something went wrong with your request. Please try again';
            }
        }

export { handleSubmit, userUrl, fetchAylien }