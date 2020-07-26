const axios = require('axios');

 const request = async (url) => {
  const response = await axios.get(url);
  return response.data

};

 export  {request};
