import request from '@/config/axios'

const {
  fetchPost,
} = request

export default {
  query: (url, params) => fetchPost(url, params),
}
