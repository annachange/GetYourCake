//page for selected cake details



import React, {useContext} from "react";
import ComboBoxAnna from "./ComboBoxAnna";
import {useLocation, useParams} from 'react-router-dom';


import {GetYourCakeContext} from "../utils/GetYourCakeContext";

function ProductSelectionPage() {

    let { cakeid } = useParams();
    console.log(cakeid)
    const gyc = useContext(GetYourCakeContext);

    const cake = gyc.cakes.find(ck => ck.id === cakeid);
    console.log(cake)

    const baker = gyc.bakers.find(bk => bk.id === cake.baker_id);
    console.log(baker)


    return (
    <div>
      <div className="content">
          {/*<h1>{cakeName}</h1>*/}




        <div className="content section">


            <ComboBoxAnna cake={cake} baker={baker} />
        </div>
        {/* Put your page content here */}
      </div>

    </div>
  );
}

export default ProductSelectionPage;
