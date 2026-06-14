import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import InputField from '../components/InputField.jsx';
import { API_BASE_URL } from '../config/apiConfig';

export default function Login() {
  const [formData, setFormData] = useState({
    mobile: '',
    password: '',
  });

  const [submitting, setSubmitting] = useState(false);

  // 1. Initialize the navigate function!
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem('user');

    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);

      if (parsedUser.role === 'manager') {
        navigate('/manager');
      }

      if (parsedUser.role === 'attendee') {
        navigate('/portal');
      }
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submit function fired! Data:", formData);

    setSubmitting(true); // Turn on the loading text

    try {
      const response = await fetch(`${API_BASE_URL}/login.php`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.status === "success") {
        // 2. Redirect to the Portal and pass the data!
        localStorage.setItem('user', JSON.stringify({ name: result.name, role: result.role, mobile: formData.mobile }));
        navigate('/portal');
      } else {
        alert(result.message);
      }
    } catch (error) {
      console.error("Error", error);
      alert("Failed to connect to the server.");
    } finally {
      setSubmitting(false); // Turn off the loading text
    }
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