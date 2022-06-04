import Appe from './Appetizer/Appetizer.js';
import Beef from './Beef/Beef';
import Chicken from './Chicken/Chicken';
import Fish from './Fish/Fish';
import Guyanese from './Guyanese/Guyanese';
import Ndle from './Noodles/Noodles';
import Rice from './Rice/Rice';
import Seafood from './Seafood/Seafood';
import Shrimp from './Shrimp/Shrimp';
import Soup from './Soup/Soup';
import Veg from './Vegetarian/Vegetarian';

import SideBar from './SideBar/SideBar';
import React from "react";

function Menu() {

    return (
        <div>
             <SideBar />
            {/* <Appe />
            <Soup />
            <Guyanese />
            <Chicken />
            <Beef />
            <Shrimp />
            <Fish />
            <Seafood />
            <Rice />
            <Ndle />
            <Veg /> */}
        </div>


    );
}

export default Menu;