import React, { useState } from 'react';
import { Radio, RadioGroup, FormControlLabel } from '@mui/material';
import image1 from '../images/image1.jpg';
import image2 from '../images/image2.jpg';
import image3 from '../images/image3.jpg';
import image4 from '../images/image4.jpg';
import image5 from '../images/image5.jpg';

const imgStyle = {
    width: '100%',
    height: 'auto',
    borderRadius: '50%',
    cursor: 'pointer',
};

const images = [
    { id: 'image1', src: image1, description: 'Pistachio' },
    { id: 'image2', src: image2, description: 'Rafaello' },
    { id: 'image3', src: image3, description: 'Red Velvet' },
    { id: 'image4', src: image4, description: 'Snickers' },
    { id: 'image5', src: image5, description: 'Chocolate' },
];

function ImageRadioButtons() {
    const [selectedValue, setSelectedValue] = useState(null);
    const [selectedImage, setSelectedImage] = useState(null);

    const handleSelection = (event) => {
        setSelectedValue(event.target.value);
    };

    const handleImageClick = (image) => {
        setSelectedImage(image);
    };

    return (
        <div>

            <RadioGroup value={selectedValue} onChange={handleSelection}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '1px' }}>
                    {images.map((image) => (
                        <div key={image.id} onClick={() => handleImageClick(image)}>
                            <FormControlLabel
                                value={image.id}
                                control={<Radio />}
                                labelPlacement="top"
                                label={<img src={image.src} alt={image.id} style={imgStyle} />}
                            />
                        </div>
                    ))}
                </div>
            </RadioGroup>
            {selectedImage && (
                <div style={{ marginTop: '2px' }}>
                    <p>{selectedImage.description}</p>
                </div>
            )}
        </div>
    );
}

export default ImageRadioButtons;
