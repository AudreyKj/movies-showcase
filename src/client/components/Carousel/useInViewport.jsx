import React, { useEffect, useMemo, useState } from 'react';

const useIsInViewport = (ref) => {
  const [isInView, setisInView] = useState(false);

  const observerCallback = ([entry]) => setisInView(entry.isIntersecting);

  const observer = useMemo(
    () => new IntersectionObserver(observerCallback, { threshold: 1.0 }),
    [],
  );

  useEffect(() => {
    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [ref, observer]);

  return isInView;
};

export default useIsInViewport;
