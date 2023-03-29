import request from "../utils/request";

const RequestApi = {
  Projects: () => request({
    url: 'projects',
    method: 'get',
  }),

  Verify: (password:string) => request({
    url: 'verify',
    method: 'post',
    data: {
      password,
    }
  })
}

export default RequestApi;