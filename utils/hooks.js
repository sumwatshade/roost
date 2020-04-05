import {useEffect, useState} from 'react';

/**
 * Debounces a search term to limit performance need
 * @param {Any} value Value to debounce
 * @param {Number} delay the amount of delay for the value
 * @return {Any} debounced value
 */
export function useDebounce(value, delay) {
  // State and setters for debounced value
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(
      () => {
        // Update debounced value after delay
        const handler = setTimeout(() => {
          setDebouncedValue(value);
        }, delay);

        // Cancel the timeout if value changes (also on delay change or unmount)
        // This is how we prevent debounced value from updating if val changes
        // within the delay period. Timeout gets cleared and restarted.
        return () => {
          clearTimeout(handler);
        };
      },
      [value, delay], // Only re-call effect if value or delay changes
  );

  return debouncedValue;
}
