import { useContext, useEffect, useState } from 'react';
import { LayoutRouterContext } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { usePreviousValue } from '@/hooks';
import { usePathname } from 'next/navigation';

export function FrozenRouter(props: { children: React.ReactNode }) {
  const context = useContext(LayoutRouterContext);
  const prevContext = usePreviousValue(context) ?? null;

  const pathname = usePathname();
  const prevPathname = usePreviousValue(pathname);

  const [targetContext, setTargetContext] = useState<typeof context>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const changed = pathname !== prevPathname && pathname !== undefined && prevPathname !== undefined;

  useEffect(() => {
    if (pathname !== prevPathname) {
      setIsAnimating(true);
      setTargetContext(prevContext);
    }
  }, [pathname, prevPathname]);

  useEffect(() => {
    if (!isAnimating) return;

    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 750);

    return () => clearTimeout(timer);
  }, [isAnimating]);
 
  return (
    <LayoutRouterContext.Provider value={changed || isAnimating ? targetContext ?? prevContext : context}>
      {props.children}
    </LayoutRouterContext.Provider>
  );
}