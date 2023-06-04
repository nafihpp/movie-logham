import React, { useEffect } from "react";

const useDebounce = (incomingFuc, delay) => {
    useEffect(() => {
        let timer = setTimeout(() => {
            incomingFuc();
        }, delay);
        return () => {
            clearTimeout(timer);
        };
    }, []);
};

export default useDebounce;
