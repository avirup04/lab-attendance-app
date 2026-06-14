import React from 'react';
import { Link, Navigate } from 'react-router-dom';

export default function ManagerPortal() {
  const userString = localStorage.getItem('user');
  const user = userString ? JSON.parse(userString) : null;

  // SECURITY CHECK: Only managers can access this page
  if (!user || user.role !== 'manager') {
    return <Navigate to="/manager-login" />;
  }

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4">
      <div className="bg-slate-900/50 backdrop-blur-md rounded-lg p-8 max-w-sm w-full text-center text-white">
        <h1 className="text-3xl font-bold mb-4">Manager Portal</h1>
        <Link to="/portal" className="inline-block bg-slate-800 hover:bg-slate-700 text-white font-semibold py-2 px-4 rounded transition-colors duration-200">
          Back to Portal
        </Link>
      </div>
    </div>
  );
}
