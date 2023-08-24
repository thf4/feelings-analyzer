const reviews = require('./review-2021.json');
const axios = require('axios');
var fs = require('fs');

const headers = {
  'Content-type': 'application/json',
  Authorization: ""
}

const allFellings = [];
async function fellings() {
  for (let index = 18402; index < reviews.length; index++) {
    try {
      const element = reviews[index];

      const response = await axios.post("https://api.gotit.ai/NLU/v1.5/Analyze",
        element, { headers });
      allFellings.push(response.data.sentiment);

    } catch (error) {
      fs.writeFileSync('./feelings-2021-8.json', JSON.stringify(allFellings))
      console.log(`COM ERROR -- ${index}`);
    }
    console.log(`SEM ERROR -- ${index}`);
    fs.writeFileSync('./feelings-2021-8.json', JSON.stringify(allFellings))
  };
};

fellings();