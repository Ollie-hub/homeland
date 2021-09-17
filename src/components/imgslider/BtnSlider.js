import React from "react";
import "./imgslider.scss";
import leftArrow from "./icons/left-arrow.svg";
import rightArrow from "./icons/right-arrow.svg";
// funtion til at styre knapperne til slideren
//Onclick button, for begge buttons. Tjekker om det er next eller previous slide.
const BtnSlider = ({ direction, moveSlide }) => {

    return (
        <button onClick={moveSlide} className={direction === "next" ? "btn-slide next" : "btn-slide prev"}>
            <img src={direction === "next" ? rightArrow : leftArrow} alt="arrows" />
        </button>
    );
}

export { BtnSlider };