import { useEffect, useRef, useState } from 'react';
import 'intersection-observer';

export default function useIntersectionObserver(callback, data) {
  const [observationTarget, setObservationTarget] = useState(null);
  const observer = useRef(
    new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        callback(data);
      },
      { threshold: 1 },
    ),
  );

  useEffect(() => {
    const currentTarget = observationTarget;
    const currentObserver = observer.current;
    if (currentTarget) {
      currentObserver.observe(currentTarget);
    }
    return () => {
      if (currentTarget) {
        currentObserver.unobserve(currentTarget);
      }
    };
  }, [observationTarget]);

  return setObservationTarget;
}
