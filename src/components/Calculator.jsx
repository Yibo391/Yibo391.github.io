import React, { useState } from 'react';

const Calculator = () => {
    const [current, setCurrent] = useState('');
    const [error, setError] = useState(false);

    const handleInput = (value) => {
        if (error) {
            setError(false);
            setCurrent(value);
        } else {
            setCurrent(current + value);
        }
    };

    const calculateResult = () => {
        try {
            // Using eval in a real app has security implications, it's used here for simplicity
            const result = eval(current).toString();
            setCurrent(result);
        } catch {
            setCurrent("Error");
            setError(true);
        }
    };

    const reset = () => {
        setCurrent('');
        setError(false);
    };

    const containerStyle = {
        marginTop: '1rem',
        padding: '1rem',
        border: '2px solid #dee2e6', // Set border color
        borderRadius: '0.25rem', // Optional: adds rounded corners
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)' // Optional: adds shadow for depth
    };

    return (
        <div className="container" style={containerStyle}>
            <h2 className="mb-3">Calculator</h2>
            <div className="input-group mb-3">
                <input type="text" className="form-control text-right" value={current || "0"} readOnly />
            </div>
            <div className="row g-2">
                {["1", "2", "3", "+", "4", "5", "6", "-", "7", "8", "9", "*", "0", "/", "="].map((char, index) => (
                    <div key={index} className="col-3">
                        <button 
                            className={`btn ${'0123456789'.includes(char) ? 'btn-light' : 'btn-secondary'} w-100`}
                            onClick={() => {
                                if (char === '=') {
                                    calculateResult();
                                } else {
                                    handleInput(char);
                                }
                            }}>
                            {char}
                        </button>
                    </div>
                ))}
                <div className="col-3">
                    <button className="btn btn-danger w-100" onClick={reset}>AC</button>
                </div>
            </div>
        </div>
    );
};

export default Calculator;
