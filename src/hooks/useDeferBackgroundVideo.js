import { useEffect, useRef, useState } from 'react';

/**
 * Evita cargar video de fondo en móvil, con save-data o prefers-reduced-motion,
 * y lo monta solo cuando la sección entra en viewport (desktop).
 */
export function useDeferBackgroundVideo() {
  const containerRef = useRef(null);
  const [allowVideo, setAllowVideo] = useState(false);
  const [mountVideo, setMountVideo] = useState(false);

  useEffect(() => {
    const update = () => {
      const mq = window.matchMedia('(max-width: 767px)');
      const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
      const conn = typeof navigator !== 'undefined' ? navigator.connection : undefined;
      const saveData = conn?.saveData === true;
      setAllowVideo(!mq.matches && !motion.matches && !saveData);
    };

    update();
    const mq = window.matchMedia('(max-width: 767px)');
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    mq.addEventListener('change', update);
    motion.addEventListener('change', update);
    const conn = navigator.connection;
    if (conn?.addEventListener) {
      conn.addEventListener('change', update);
    }
    return () => {
      mq.removeEventListener('change', update);
      motion.removeEventListener('change', update);
      conn?.removeEventListener?.('change', update);
    };
  }, []);

  useEffect(() => {
    if (!allowVideo) {
      setMountVideo(false);
      return;
    }
    const node = containerRef.current;
    if (!node) return;

    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setMountVideo(true);
        }
      },
      { rootMargin: '200px 0px', threshold: 0.01 }
    );
    io.observe(node);
    return () => io.disconnect();
  }, [allowVideo]);

  return { containerRef, showVideo: allowVideo && mountVideo };
}
