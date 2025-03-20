import { getService } from '../utils';

const matomoController = {
  async config(ctx: any) {
    const config = await getService('config').get();

    ctx.send({ config });
  },
};

export default matomoController;
