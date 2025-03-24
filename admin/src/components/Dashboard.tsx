import { useFetchClient } from '@strapi/strapi/admin';
import { memo, useEffect, useState } from 'react';
import { MatomoPluginConfig } from '../../../server/src/config';
import { PLUGIN_ID } from '../../../server/src/constants';

interface Config {
  config: MatomoPluginConfig;
}
const Dashboard = () => {
  const [url, setUrl] = useState<string | null>(null);
  const { get } = useFetchClient();

  useEffect(() => {
    (async () => {
      const res = await get(`/${PLUGIN_ID}/config`);
      const config: Config = res.data;
      console.log(config.config);
      setUrl(config.config.widgetURL);
    })();
  }, []);

  return url ? (
    <div>
      <iframe
        src={url}
        width="100%"
        height="100%"
        loading="lazy"
        frameBorder="0"
        style={{ height: 'calc(100vh - 2px)', width: '100%' }}
      ></iframe>
      <div style={{ fontSize: 14, paddingBottom: 16 }}>
        Stats powered by{' '}
        <a
          target="_blank"
          style={{ color: '#4F46E5', textDecoration: 'underline' }}
          href="https://matomo.org/"
        >
          Matomo
        </a>
      </div>
    </div>
  ) : null;
};

export default memo(Dashboard);
