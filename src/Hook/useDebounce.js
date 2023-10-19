import { useState, useEffect } from 'react';

// custom hook làm logic khi gõ xong tìm kiếm sẽ loading và hiển thị SearchResult
function useDebounce(value, delay) {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => setDebouncedValue(value), delay);

        return () => clearTimeout(handler);
    }, [value]);

    return debouncedValue;
}

export default useDebounce;
