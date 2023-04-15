//looping through all cakes and showing first 2 products related to specific baker

//included into MainViewCards


import React, {useContext} from "react";
import {GetYourCakeContext} from "../utils/GetYourCakeContext";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import {Link} from "react-router-dom";

function CakeLoop(props) {

    const gyc = useContext(GetYourCakeContext);
    const bakerid = props.baker

    const bakerscakes = gyc.cakes.filter(cake => cake.baker_id === bakerid).slice(0, 2);
    // console.log(bakerscakes)

    const handleClick = () => {
        window.scrollTo(0, 0);
    };


    return (
        <ImageList s={4} sx={{ justify: 'center'}}>
        {bakerscakes.map((cake, index) => {

            let url = 'ProductSelectionPage/'+ cake.id;

           return ( <ImageListItem key={index} component={Link} to={url} onClick={handleClick}>
                <img
                    src={cake.picture_path}
                    srcSet={`${cake.picture_path}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    alt={cake.name}
                    loading="lazy"
                />

            </ImageListItem>)
        })}
    </ImageList>
    )
}

export default CakeLoop