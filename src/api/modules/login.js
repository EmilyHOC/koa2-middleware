import request from '../../utils/request'

const login = {
  loginApi(data, ctx) {
    return request({
      url: '/gms/login',
      method: 'post',
      data,
    }, ctx);
  },

  userInfoApi(ctx) {
    return request({
      url: '/gms/userinfo',
      method: 'get',
    }, ctx);
  },
};

export default login;