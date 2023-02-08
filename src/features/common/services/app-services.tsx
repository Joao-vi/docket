import { createContext, useContext } from 'react';

type IAppServices = typeof APP_SERVICES;

const APP_SERVICES = {};

const AppServices = createContext<IAppServices | undefined>(undefined);

const AppServicesProvider = ({ children }: { children: JSX.Element }) => (
  <AppServices.Provider value={APP_SERVICES}>{children}</AppServices.Provider>
);

const useAppServices = () => {
  const ctx = useContext(AppServices);

  if (!ctx) throw new Error('You must use useAppService inside <AppServicesProvider/>');

  return ctx;
};

export { AppServicesProvider, useAppServices };
