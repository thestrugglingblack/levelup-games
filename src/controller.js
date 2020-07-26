import {generate} from './api';

export default {
  generate: async (req, h) => {

    return h.response({
      status: 200,
      data: await generate()
    });
  }
}
