
import axios from 'axios';
import config from '../config';

const request = (conf, ctx) => {
  console.log(request, 'request')
  const token = ctx.request.header['x-interface-token'];
  const configSelf = Object.assign(conf, {
    baseURL: config.api_url,
    headers: { 'X-INTERFACE-TOKEN': token },
  });
  return axios(configSelf);
};

export default request;
