import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import InputField from '../components/InputField.jsx';

export default function Login() {
  const [formData, setFormData] = useState({
    mobile: '',
    password: '',
  });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    console.log('Login submitted:', formData);
    setTimeout(() => setSubmitting(false), 1000);
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4">
      <div className="bg-slate-900/50 backdrop-blur-md rounded-lg p-8 max-w-sm w-full text-center text-white">
        <h1 className="text-3xl font-bold mb-6">Attendee Login</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-left">
          <InputField
            label="Mobile Number"
            name="mobile"
            type="tel"
            value={formData.mobile}
            onChange={handleChange}
            placeholder="555-123-4567"
          />
          <InputField
            label="Password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="••••••••"
          />
          <button
            type="submit"
            disabled={submitting}
            className="w-full bg-teal-600 hover:bg-teal-500 text-white font-semibold py-2 px-4 rounded transition-colors duration-200 disabled:opacity-50"
          >
            {submitting ? 'Logging in...' : 'Login'}
          </button>
        </form>
        <div className="mt-4 text-sm">
          <Link
            to="/register"
            className="text-teal-300 hover:text-teal-200"
          >
            Don't have an account? Register here
          </Link>
        </div>
        <Link
          to="/"
          className="inline-block mt-4 bg-slate-800 hover:bg-slate-700 text-white font-semibold py-2 px-4 rounded transition-colors duration-200"
        >
          Back Home
        </Link>
      </div>
    </div>
  );
}
