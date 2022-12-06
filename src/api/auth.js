import * as config from '../config'
import axios from 'axios';


const headers = {
    'Content-Type': 'application/x-www-form-urlencoded',
    Authorization:
      'Basic ' +
      Buffer.from(process.env.REACT_APP_SPOTIFY_CLIENT_ID + ':' + process.env.REACT_APP_SPOTIFY_CLIENT_SECRET).toString('base64'),
  };
  
 export const authToken = async() => {
 var token = [];
   await axios.post(config.default.api.authUrl,
    'grant_type=client_credentials',{ headers },
   ).then(function (response) {
     token = response
  }).catch(function (error) {
    console.log(error);
  });

  return token.data

}

