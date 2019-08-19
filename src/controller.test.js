const Controller = require('./controller');
const Service = require('./service');
const { mockResponse, mockRequest, mockNext } = require('../tools');
jest.mock('./service');

describe('should test controller', () => {
  afterEach(() => {
    jest.resetModules();
  });

  test('should test #getPosts - successful', async () => {
    const posts = [{}, {}];
    Service.list.mockImplementation(() => Promise.resolve(posts));
    const res = mockResponse();
    await Controller.getPosts(null, res, null);
    expect(res.json).toBeCalledWith(posts);
    expect(res.status).toBeCalledWith(201);
  });

  test('should test #getPosts - error', async () => {
    const error = new Error();
    Service.list.mockImplementation(() => Promise.reject(error));
    const next = mockNext();
    await Controller.getPosts(null, null, next);
    expect(next).toBeCalledWith(error);
  });

  test('should test #getPost - successful', async () => {
    const post = {};
    const getSpy = jest.fn().mockReturnValue(Promise.resolve(post));
    Service.get.mockImplementation(getSpy);
    const res = mockResponse();
    const req = mockRequest();
    req.params = { postId : '123' };
    await Controller.getPost(req, res, null);
    expect(res.json).toBeCalledWith(post);
    expect(getSpy).toBeCalledWith(req.params.postId);
  });

  test('should test #getPost - fail', async () => {
    const error = new Error();
    const getSpy = jest.fn().mockReturnValue(Promise.reject(error));
    Service.get.mockImplementation(getSpy);
    const next = mockNext();
    const req = mockRequest();
    req.params = { postId : '123' };
    await Controller.getPost(req, null, next);
    expect(next).toBeCalledWith(error);
  });
});

