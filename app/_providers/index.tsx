import { WrapBalancerProvider } from "./wrap-balancer"

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <WrapBalancerProvider>{children}</WrapBalancerProvider>
  );
}