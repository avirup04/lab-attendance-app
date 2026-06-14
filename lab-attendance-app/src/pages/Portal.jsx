import React from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';

export default function Portal() {
    const navigate = useNavigate();

    const userString = localStorage.getItem('user');
    const user = userString ? JSON.parse(userString) : null;

    // SECURITY CHECK: If someone tries to visit /portal without logging in, kick them back to login
    if (!user) {
        return <Navigate to="/login" />;
    }

    const handleLogout = () => {
        localStorage.removeItem('user');
        navigate('/');
    };

    return (
        <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center text-teal-400 p-4">
            <div className="bg-slate-900/50 p-8 rounded-2xl border border-slate-800 text-center max-w-md w-full">

                {/* Greeting changes based on role */}
                <h1 className="text-4xl font-bold mb-2">
                    Hello, {user.name}!
                </h1>

                <p className="text-slate-400 mb-8">
                    You are logged in as an <span className="text-teal-300 font-bold uppercase">{user.role}</span>.
                </p>

                {/* Show different buttons based on their role */}
                {user.role === 'manager' ? (
                    <Link to="/manager" className="block w-full bg-teal-600 hover:bg-teal-500 text-slate-950 font-bold py-3 rounded-lg mb-4 transition-colors">
                        Go to Manager Dashboard
                    </Link>
                ) : (
                    <button className="w-full bg-slate-800 hover:bg-slate-700 text-teal-400 font-bold py-3 rounded-lg border border-slate-700 mb-4 transition-colors">
                        Scan Attendance QR
                    </button>
                )}

                <button
                    onClick={handleLogout}
                    className="text-red-400 hover:text-red-300 text-sm underline"
                >
                    Logout
                </button>
            </div>
        </div>
    );
}