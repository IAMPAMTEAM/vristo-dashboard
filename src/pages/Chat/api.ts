import axios from 'axios';

const API_URL = 'https://t734ag33bzq7marwc5spfjtgwi0zdoqz.lambda-url.us-east-1.on.aws?';
const instance = axios.create({
  baseURL: API_URL,
});
instance.defaults.headers.post['Content-Type'] = 'application/json';

export const initialSendApi = async (input: string) => {
  console.log(input);
  return await axios(API_URL, {
    method: 'GET',
    params: {
      text: input,
    },
  });
  // .then((response) => {
  //   console
  //   return response;
  // })
  // .catch((error) => {
  //   console.error(`error = `, error);
  // });
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
        // withCredentials: true
      }
    )
    .then((response) => {
      console.log(response);
    });
};
