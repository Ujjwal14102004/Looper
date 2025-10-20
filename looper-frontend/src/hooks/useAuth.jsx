import { useState, useEffect } from 'react';

const useAuth = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        // Fetch user info from API or context
    }, []);

    return { user, setUser };
};

export default useAuth;
