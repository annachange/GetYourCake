import React, { useState } from 'react';

const CakePriceCalculator = () => {
    const [kg, setKg] = useState('1kg');
    const [flavor, setFlavor] = useState('vanilla');
    const [delivery, setDelivery] = useState('standard');

    const calculatePrice = () => {
        let basePrice = 20;
        if (kg === '2kg') {
            basePrice *= 2;
        }
        if (flavor === 'chocolate') {
            basePrice += 5;
        }
        if (delivery === 'express') {
            basePrice += 10;
        }
        return basePrice;
    };

    return (
        <div>
            <label>Choose kg:</label>
            <select value={kg} onChange={(e) => setKg(e.target.value)}>
                <option value="1kg">1kg</option>
                <option value="2kg">2kg</option>
            </select>
            <label>Choose flavor:</label>
            <select value={flavor} onChange={(e) => setFlavor(e.target.value)}>
                <option value="vanilla">Vanilla</option>
                <option value="chocolate">Chocolate</option>
            </select>
            <label>Choose delivery:</label>
            <select value={delivery} onChange={(e) => setDelivery(e.target.value)}>
                <option value="standard">Standard</option>
                <option value="express">Express (+$10)</option>
            </select>
            <p>Price: ${calculatePrice()}</p>
        </div>
    );
};

export default CakePriceCalculator;
