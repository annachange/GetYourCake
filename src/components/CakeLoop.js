import React, {useContext} from "react";
import {GetYourCakeContext} from "../utils/GetYourCakeContext";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import {Link} from "react-router-dom";

function CakeLoop(props) {

    const gyc = useContext(GetYourCakeContext);
    const bakerid = props.baker

    const bakerscakes = gyc.cakes.filter(cake => cake.baker_id === bakerid).slice(0, 4);
    // console.log(bakerscakes)

    const handleClick = () => {
        window.scrollTo(0, 0);
    };


    return (
        <ImageList sx={{ width: 380, height: 500 }}>
        {bakerscakes.map((cake, index) => (

            //  this part has to become clickable
            <ImageListItem key={index} component={Link} to="/ProductSelectionPage" onClick={handleClick}>
                <img
                    src={cake.picture_path}
                    srcSet={`${cake.picture_path}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    alt={cake.name}
                    loading="lazy"
                />
                <ImageListItemBar
                    title={cake.name}
                    position="below"
                />
            </ImageListItem>
        ))}
    </ImageList>
    )
}

export default CakeLoop