import React, { useState, useEffect } from 'react';
import authService from '../../service/authService';
import { useNavigate } from 'react-router-dom';

const Profile: React.FC = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [user, setUser] = useState<any>(null);

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem('user') || '{}');
        if (storedUser) {
            setUser(storedUser);
        }
    }, []);

    const navigate = useNavigate();
    const handleLogout = () => {
        authService.logout();
        window.location.reload();
        navigate("/");
    };

    return (
        <div className="container mt-5">
            <h2>Profile</h2>
            {user ? (
                <div>
                    <p><strong>Username:</strong> {user.username}</p>
                    <p><strong>Email:</strong> {user.email}</p>
                    <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default Profile;
