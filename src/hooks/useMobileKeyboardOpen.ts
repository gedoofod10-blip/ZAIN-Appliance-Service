import { useEffect, useState } from 'react';

export function useMobileKeyboardOpen(): boolean {
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);

  useEffect(() => {
    const isFormField = (el: EventTarget | null): boolean => {
      if (!(el instanceof HTMLElement)) return false;
      const tag = el.tagName.toLowerCase();
      return tag === 'input' || tag === 'textarea' || tag === 'select';
    };

    const handleFocusIn = (e: FocusEvent) => {
      if (isFormField(e.target) && window.innerWidth < 768) {
        setIsKeyboardOpen(true);
      }
    };

    const handleFocusOut = () => {
      window.setTimeout(() => {
        if (!isFormField(document.activeElement)) {
          setIsKeyboardOpen(false);
        }
      }, 100);
    };

    const handleViewportResize = () => {
      if (!window.visualViewport || window.innerWidth >= 768) return;
      const heightRatio = window.visualViewport.height / window.innerHeight;
      if (heightRatio < 0.75) {
        setIsKeyboardOpen(true);
      } else if (!isFormField(document.activeElement)) {
        setIsKeyboardOpen(false);
      }
    };

    document.addEventListener('focusin', handleFocusIn);
    document.addEventListener('focusout', handleFocusOut);
    window.visualViewport?.addEventListener('resize', handleViewportResize);

    return () => {
      document.removeEventListener('focusin', handleFocusIn);
      document.removeEventListener('focusout', handleFocusOut);
      window.visualViewport?.removeEventListener('resize', handleViewportResize);
    };
  }, []);

  return isKeyboardOpen;
}
