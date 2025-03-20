import { lazy, Suspense } from 'react';
import { Page } from '@strapi/strapi/admin';

const Dashboard = lazy(() => import('../components/Dashboard'));

const HomePage = () => {
  return (
    <Suspense fallback={<Page.Loading />}>
      <Dashboard />
    </Suspense>
  );
};

export { HomePage };
