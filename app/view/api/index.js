import axios from 'axios';

const instance = axios.create({
  baseURL: '/api'
})

const createAPI = (url, method, config) => {
  return instance({
    url,
    method,
    ...config
  })
}

/** 拦截器 */
instance.interceptors.request.use(
  config => {
    return config
  },
  err => {
    return Promise.reject(err);
  }
)
instance.interceptors.response.use(
  res => {
    return res
  },
  err => {
    return Promise.reject(err);
  }
)

export const user = {
  login: (config) => createAPI('/login', 'post', config)
}

export const project = {
  getList: (config) => createAPI('/projects', 'get', config),
  getDetail: (config) => createAPI(`/projects/${config.projectId}`, 'get', config),
  copyProject: (config) => createAPI('/projects/:id', 'post', config),
  deleteProject: (config) => createAPI('/projects/:id', 'delete', config),
  addProject: (config) => createAPI('/projects', 'post', config),
  editProject: (config) => createAPI('/projects/:id', 'put', config),
  syncSwagger: (config) => createAPI('/projects/:id/sync', 'get', config)
}

export default {
  user,
  project
}