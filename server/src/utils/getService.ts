import { PLUGIN_ID } from '../constants';
import { type MatomoServices } from '../services';

const getService = <TName extends keyof MatomoServices>(name: TName): MatomoServices[TName] =>
  global.strapi.plugin(PLUGIN_ID).service<MatomoServices[TName]>(name);

export default getService;
