import { useContext } from 'react';
import { LayoutRouterContext } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { usePreviousValue } from '@/hooks';
import { useSelectedLayoutSegment } from 'next/navigation';

export function FrozenRouter(props: { children: React.ReactNode }) {
  const context = useContext(LayoutRouterContext);
  const prevContext = usePreviousValue(context) || null;
 
  const segment = useSelectedLayoutSegment();
  const prevSegment = usePreviousValue(segment);
 
  const changed = segment !== prevSegment && segment !== undefined && prevSegment !== undefined;
 
  return (
    <LayoutRouterContext.Provider value={changed ? prevContext : context}>
      {props.children}
    </LayoutRouterContext.Provider>
  );
}