import request from "../utils/request";

const RequestApi = {
  Projects: () => request({
    url: 'projects',
    method: 'get',
  })
}

export default RequestApi;