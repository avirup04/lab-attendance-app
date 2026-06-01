import React from 'react';

/**
 * Reusable input field with a label.
 *
 * Props:
 * - label: Text for the label.
 * - name: Input name attribute.
 * - type: Input type (e.g., "text", "email", "password").
 * - value: Controlled value.
 * - onChange: Change handler (receives the event).
 * - placeholder: Optional placeholder text.
 */
export default function InputField({
  label,
  name,
  type = 'text',
  value,
  onChange,
  placeholder = '',
}) {
  return (
    <div className="flex flex-col gap-1">
      <label
        htmlFor={name}
        className="text-sm text-slate-400 font-medium"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="bg-slate-900 border border-slate-700 rounded px-3 py-2 text-white placeholder:text-slate-500 focus:outline-none focus:border-teal-500 transition-colors"
      />
    </div>
  );
}
