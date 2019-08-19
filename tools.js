const mockResponse = () => {
  const res = {};
  res.status = jest.fn().mockReturnValue(res);
  res.json = jest.fn().mockReturnValue(res);
  return res;
};

const mockRequest = () => {
  const req = {};
  req.params = jest.fn().mockReturnValue(req);
  return req;
};

const mockNext = () => {
  return jest.fn();
};

module.exports = { mockResponse, mockRequest, mockNext };
