import { Provider } from 'react-wrap-balancer';

export function WrapBalancerProvider({
  children
}: {
  children?: React.ReactNode
}) {
  return (
    <Provider>{children}</Provider>
  );
}