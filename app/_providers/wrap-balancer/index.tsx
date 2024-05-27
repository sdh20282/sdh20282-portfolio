import { Provider } from 'react-wrap-balancer';

/** @param {import('react').PropsWithChildren<unknown>} */
export function WrapBalancerProvider({ children }: { children: React.ReactNode }) {
  return (
    <Provider>{children}</Provider>
  );
}