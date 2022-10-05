/*
====================================================================
Project:  Color Palette 
Description:  An interactive web application built with React JS. 
The app lets users make a list of their favorite colors by:
- scrolling through colors and selecting which ones to add to 
their color palette list
- deleting colors from their color palette list
Background:  Course work for Skillcrush's "Introduction to 
JavaScript React" course. 

Excercise to-do:  Import and render the presentational components with the 
props they need to respond to user activity. 

===== *** =====

The CssOptions component is a presentational component that renders 
the "CSS Color Options" section of the UI. This part of the UI 
includes:
- a headline, 
- the color options list component <CssOptionsList/>, and 
- the user's selected color component <SelectedCssOption/>. 

The CssOptionsList component needs the following props:
- the selectColor method

The SelectedCssOption component needs the following props: 
- the selectedColor property in state  
- the palette property in state  
- the addToPalette method
====================================================================
*/

import React from "react";
import CssOptionsList from "./CssOptionsList.js";
import SelectedCssOption from "./SelectedCssOption.js";

const CssOptions = (props) => (
  <div>
    <h2>CSS Color Options</h2>
    <div className="color-options-row">
      <CssOptionsList selectColor={props.selectColor} />
      <SelectedCssOption
        selectedColor={props.selectedColor}
        palette={props.palette}
        addToPalette={props.addToPalette}
      />
    </div>
  </div>
);

export default CssOptions;
