const axios = require('axios/index');

const Service = {
  basePath: 'https://jsonplaceholder.typicode.com/posts',

  list() {
    return axios.get(this.basePath)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        return error;
      });
  },

  get(postId) {
    return axios.get(`${this.basePath}/${postId}`)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        return error;
      });
  },
};

module.exports = Service;
