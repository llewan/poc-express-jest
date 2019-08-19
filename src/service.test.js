const axios = require('axios/index');
const Service = require('./service');

jest.mock('axios');

describe('should test Service', () => {
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
});
