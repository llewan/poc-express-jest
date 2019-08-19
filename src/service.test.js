const axios = require('axios/index');
const Service = require('./service');

jest.mock('axios');

describe('should test Service', () => {
  afterEach(() => {
    jest.resetModules();
  });
  test('list method should succeed', async () => {
    const response = { data: [{}, {}] };
    axios.get.mockResolvedValue(response);
    const actual = await Service.list();
    expect(actual).toEqual(response.data);
  });
  test('list method should fail', async () => {
    const error = new Error();
    axios.get.mockImplementation(() => Promise.reject(error));
    const actual = await Service.list();
    expect(actual).toEqual(error);
  });
  test('GET method should succeed', async () => {
    const response = { data: [{}, {}] };
    const spy = jest.fn().mockReturnValue(Promise.resolve(response));
    axios.get.mockImplementation(spy);
    const actual = await Service.get('123');
    expect(actual).toEqual(response.data);
    expect(spy).toBeCalledWith(`${Service.basePath}/123`)
  });
  test('GET method should fail', async () => {
    const error = new Error();
    const spy = jest.fn().mockReturnValue(Promise.reject(error));
    axios.get.mockImplementation(spy);
    const actual = await Service.get('123');
    expect(actual).toEqual(error);
  });
});
