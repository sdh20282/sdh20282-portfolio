import { useContext, useEffect, useState } from "react";
import { LayoutRouterContext } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { usePreviousValue } from "@/hooks";
import { usePathname } from "next/navigation";

export function FrozenRouter({ children }: { children: React.ReactNode }) {
  const context = useContext(LayoutRouterContext);
  const prevContext = usePreviousValue(context) ?? null;

  const pathname = usePathname();
  const prevPathname = usePreviousValue(pathname);

  const [targetContext, setTargetContext] = useState<typeof context>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  const changed = pathname !== prevPathname && pathname !== undefined && prevPathname !== undefined;

  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
  }, []);

  useEffect(() => {
    if (changed) {
      setScrollY(window.scrollY);
      setIsAnimating(true);
      setTargetContext(prevContext);

      setTimeout(() => setIsAnimating(false), 750);
    }
  }, [changed]);

  useEffect(() => {
    if (!isAnimating) {
      window.scrollTo({ top: changed ? 0 : scrollY, behavior: "instant" });
    }
  }, [isAnimating]);

  return (
    <LayoutRouterContext.Provider value={changed || isAnimating ? targetContext ?? prevContext : context}>
      {children}
    </LayoutRouterContext.Provider>
  );
}
