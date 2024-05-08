import axios from 'axios';

const API_URL = 'https://prqc0yptq6.execute-api.us-east-1.amazonaws.com/demo/bedrock';
const instance = axios.create({
  baseURL: API_URL,
});
instance.defaults.headers.post['Content-Type'] = 'application/json';

export const initialSendApi = async (input: string) => {
  await axios(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
    },
    withCredentials: true,
  })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.error(`error = `, error);
    });
  // await instance
  //   .post(
  //     '',
  //     {
  //       input,
  //     },
  //     {
  //       'Content-Type': 'application/json',
  //       'Access-Control-Allow-Origin': '요청을 보낼 url',
  //     }
  //   )
  //   .then((response) => {
  //     console.log(response);
  //   })
  //   .catch((err) => {
  //     console.error(`error = `, err);
  //   });
};

export const resendApi = (input: string, sessionId: string) => {
  instance
    .post(
      '/bedrock',
      {
        input,
        sessionId,
      },
      {
        // withCredentials: false
      }
    )
    .then((response) => {
      console.log(response);
    });
};
