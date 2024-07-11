'use client';

import { RefObject, useCallback, useEffect, useRef, useState } from 'react';

import { gsap } from 'gsap';

export function useRecentWorkFollowPointer({ modal, cursor, label }: { 
  modal: RefObject<HTMLDivElement>, 
  cursor: RefObject<HTMLDivElement>,
  label : RefObject<HTMLDivElement>,
}) {
  const [item, setItem] = useState({ active: false, index: 0 });

  let xMoveModal = useRef<gsap.QuickToFunc>();
  let yMoveModal = useRef<gsap.QuickToFunc>();

  let xMoveCursor = useRef<gsap.QuickToFunc>();
  let yMoveCursor = useRef<gsap.QuickToFunc>();

  let xMoveLabel = useRef<gsap.QuickToFunc>();
  let yMoveLabel = useRef<gsap.QuickToFunc>();

  const handlePointerEnter = useCallback(
    (index: number) => setItem({ active: true, index }),
    [],
  );

  const handlePointerLeave = useCallback(
    (index: number) => setItem({ active: false, index }),
    [],
  );

  const moveItems = useCallback((x: number, y: number): void => {
    if (!xMoveModal.current || !yMoveModal.current) {
      return;
    }

    xMoveModal.current(x);
    yMoveModal.current(y);
    
    if (!xMoveCursor.current || !yMoveCursor.current) {
      return;
    }

    xMoveCursor.current(x);
    yMoveCursor.current(y);
    
    if (!xMoveLabel.current || !yMoveLabel.current) {
      return;
    }

    xMoveLabel.current(x);
    yMoveLabel.current(y);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      xMoveModal.current = gsap.quickTo(modal.current, 'left', {
        duration: 0.8,
        ease: 'power3',
      });
      yMoveModal.current = gsap.quickTo(modal.current, 'top', {
        duration: 0.8,
        ease: 'power3',
      });

      xMoveCursor.current = gsap.quickTo(cursor.current, 'left', {
        duration: 0.5,
        ease: 'power3',
      });
      yMoveCursor.current = gsap.quickTo(cursor.current, 'top', {
        duration: 0.5,
        ease: 'power3',
      });

      xMoveLabel.current = gsap.quickTo(label.current, 'left', {
        duration: 0.45,
        ease: 'power3',
      });
      yMoveLabel.current = gsap.quickTo(label.current, 'top', {
        duration: 0.45,
        ease: 'power3',
      });
    });

    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { item, handlePointerEnter, handlePointerLeave, moveItems };
}