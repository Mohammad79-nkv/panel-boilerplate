import { useState, useEffect, useRef } from "react";

export const useLocalStorage = (key : any, defaultValue : any) => {
  const [value, setValue] = useState(
    window.localStorage.getItem(key) || defaultValue
  );
  const isDomMount = useRef(false);

  useEffect(() => {
    if (isDomMount.current) {
      const rawValue = JSON.stringify(value);
      localStorage.setItem(key, rawValue);
    }

    isDomMount.current = true;
  }, [key, value]);

  return [value, setValue];
};
