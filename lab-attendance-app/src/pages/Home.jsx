import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4">
      <div className="bg-slate-900/50 backdrop-blur-md rounded-lg p-8 max-w-sm w-full text-center text-white">
        <h1 className="text-3xl font-bold mb-2">Dr. Bannerjee Lab</h1>
        <p className="text-lg mb-6">Attendance &amp; Access Portal</p>
        <div className="flex flex-col gap-3">
          <Link to="/manager" className="bg-slate-800 hover:bg-slate-700 text-white font-semibold py-2 px-4 rounded transition-colors duration-200 block">
            Manager Portal
          </Link>
          <Link to="/login" className="bg-slate-800 hover:bg-slate-700 text-white font-semibold py-2 px-4 rounded transition-colors duration-200 block">
            Attendee Login
          </Link>
          <Link to="/register" className="bg-slate-800 hover:bg-slate-700 text-white font-semibold py-2 px-4 rounded transition-colors duration-200 block">
            Attendee Register
          </Link>
        </div>
      </div>
    </div>
  );
}
