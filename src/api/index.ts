import request from "../utils/request";
import type { Project } from "../public/interface";

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
    },
  }),

  addProject: (project:Project) => request({
    url: 'admin/addproject',
    method: 'post',
    data: {
      project,
    },
    withCredentials: true,
  })
}

export default RequestApi;