import React, { useState } from 'react';
import { Radio, RadioGroup, FormControlLabel} from '@mui/material';
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
    { id: 'image1', src: image1, description: 'Description 1' },
    { id: 'image2', src: image2, description: 'Description 2' },
    { id: 'image3', src: image3, description: 'Description 3' },
    { id: 'image4', src: image4, description: 'Description 4' },
    { id: 'image5', src: image5, description: 'Description 5' },
];

function ImageRadioButtons() {
    const [selectedValue, setSelectedValue] = useState(images[0].id);
    const [selectedImage, setSelectedImage] = useState(null);

    const handleSelection = (event) => {
        setSelectedValue(event.target.value);
    };

    const handleImageClick = (image) => {
        setSelectedImage(image);
    };

    return (
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
    );
}

export default ImageRadioButtons;
