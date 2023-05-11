import { useEffect, useState } from "react";

const useCounter = (op) => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
        setCounter((prevCounter) => op(prevCounter));
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return counter;
}

export default useCounter;