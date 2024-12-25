import React, { useEffect } from "react";

/**
 * Hook: useOutsideClick
 *
 * This hook listens for clicks outside a specified DOM element and invokes a callback function.
 *
 * Source: [https://ui.aceternity.com/components/expandable-card by Manu Arora]
 *
 */

export const useOutsideClick = (
  ref: React.RefObject<HTMLDivElement>,
  callback: Function,
) => {
  useEffect(() => {
    const listener = (event: any) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      callback(event);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, callback]);
};
