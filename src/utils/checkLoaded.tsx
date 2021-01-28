import React, { useEffect, useState } from 'react';

export const useLoadScript = (check: () => boolean) => {
    const [loaded, setLoad] = useState(false);

    useEffect(() => {
        const tryCheck = setInterval(() => {
            if (check()) {
                setLoad(true)
                clearInterval(tryCheck)
            }
            else
                return;
        }, 100);

        return () => { clearInterval(tryCheck) };
    }, [])

    return loaded;
};




