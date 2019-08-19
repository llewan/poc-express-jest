const Controller = require('./controller');
jest.mock('./controller');

const getSpy = jest.fn();
const postSpy = jest.fn();

jest.doMock('express', () => {
  return {
    Router() {
      return {
        get: getSpy,
        post: postSpy
      }
    }
  }
});

describe('should test router', () => {
  require('./router.js');
  test('should test get POSTS', () => {
    expect(getSpy).toHaveBeenNthCalledWith(1, '/posts', Controller.getPosts);
  });
  test('should test get POST', () => {
    expect(getSpy).toHaveBeenNthCalledWith(2, '/posts/:postId', Controller.getPost);
  });
});
