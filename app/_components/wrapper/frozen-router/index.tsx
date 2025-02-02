import { useContext } from 'react';
import { LayoutRouterContext } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { usePreviousValue } from '@/hooks';
import { usePathname } from 'next/navigation';

export function FrozenRouter(props: { children: React.ReactNode }) {
  const context = useContext(LayoutRouterContext);
  const prevContext = usePreviousValue(context) || null;

  const pathname = usePathname();
  const prevPathname = usePreviousValue(pathname);
 
  const changed = pathname !== prevPathname && pathname !== undefined && prevPathname !== undefined;
 
  return (
    <LayoutRouterContext.Provider value={changed ? prevContext : context}>
      {props.children}
    </LayoutRouterContext.Provider>
  );
}