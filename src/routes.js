import IndexController from './controller';

export default [
  {
    path: '/status',
    method: 'GET',
    handler: (req, h) => {
      return h.response({
        status: 200,
        message: 'OK',
      });
    }
  },
  {
    path: '/generate',
    method: 'GET',
    handler: IndexController.generate
  },
];
