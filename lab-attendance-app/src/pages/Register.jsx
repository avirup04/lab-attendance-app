import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import InputField from '../components/InputField.jsx';
import { API_BASE_URL } from '../config/apiConfig';

export default function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${API_BASE_URL}/register.php`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const result = await response.json();

      if (result.status === "success") {
        alert(result.message);
        // ADD THIS LINE: Clear the form fields after success
        setFormData({
          name: '',
          email: '',
          mobile: '',
          password: ''
        }); 
      } else {
        alert("Error: " + result.message);
      }
    } catch (error) {
      console.error("Error", error);
      alert("Failed to connect to server");
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4">
      <div className="bg-slate-900/50 backdrop-blur-md rounded-lg p-8 max-w-sm w-full text-center text-white">
        <h1 className="text-3xl font-bold mb-6">Attendee Register</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-left">
          <InputField
            label="Name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            placeholder="John Doe"
          />
          <InputField
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="john@example.com"
          />
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
            className="w-full bg-teal-600 hover:bg-teal-500 text-white font-semibold py-2 px-4 rounded transition-colors duration-200"
          >
            Register
          </button>
        </form>
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
