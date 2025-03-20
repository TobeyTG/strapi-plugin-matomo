import config, { type ConfigService } from './config';

export interface MatomoServices {
  config: ConfigService;
}

export default {
  config,
};
