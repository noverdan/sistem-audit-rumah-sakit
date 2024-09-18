import React from 'react';
import { useState } from 'react';

const Dropdown = ({ span, options, className }) => {
    const [selected, setSelected] = useState('');

    const handleChange = (event) => {
        setSelected(event.target.value);
    };

    return (
        <div className={``}>
            <div className={`relative z-40`}>
                <select
                    value={selected}
                    onChange={handleChange}
                    className={`${className} appearance-none bg-white border border-gray-300 rounded-lg shadow-sm`}
                >
                    {selected ? (
                        <option value={selected}>{selected}</option>
                    ) : (
                        <option value="" disabled>{span}</option>
                    )}
                    {options.map((option, index) => (
                        <option key={index} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                    <svg
                        className="w-5 h-5 text-gray-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                        />
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default Dropdown;