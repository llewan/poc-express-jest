const Controller = require('./controller');
const Service = require('./service');

jest.mock('./service');

test('should test #getPosts - successful', async () => {
  const posts = [{}, {}];
  Service.list.mockImplementation(() => Promise.resolve(posts));
  const res = { json: a => a };
  const actual = await Controller.getPosts(null, res, null);
  expect(actual).toEqual(posts);
});

test('should test #getPosts - error', async () => {
  const error = new Error();
  Service.list.mockImplementation(() => Promise.reject(error));
  const nextSpy = jest.fn();
  await Controller.getPosts(null, null, nextSpy);
  expect(nextSpy).toBeCalledWith(error);
});
