const router = require('./src/router');

const useSpy = jest.fn();
const listenSpy = jest.fn();

jest.doMock('express', () => {
  return () => ({
    use: useSpy,
    listen: listenSpy,
  })
});

describe('should test server configuration', () => {
  test('use router', () => {
    require('./index.js');
    expect(useSpy).toHaveBeenCalledWith(router);
  });

  test('should call listen fn', () => {
    require('./index.js');
    expect(listenSpy).toHaveBeenCalled();
  });
});

