import { useEffect, useRef } from 'react';

export default function useInterval(callback: CallableFunction, delay: number) {
    const savedCallback = useRef<CallableFunction>();

    // Remember the latest function.
    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    // Set up the interval.
    useEffect(() => {
        function tick() {
            if (savedCallback?.current) {
                savedCallback.current();
            }
        }
        if (delay !== null) {
            const id = setInterval(tick, delay);
            return () => clearInterval(id);
        }
        return () => {};
    }, [delay]);
}
