'use client'

import React, { useEffect } from "react";
import CardSlide from "./slides/card-slide";
import {cardWidth, cardMargin} from "./slides/card-slide/styles.module.scss";
import styles from './styles.module.scss';

export default function SliderComponent({ data }) {
    const [slideArray, setSlideArray] = React.useState([]);
    const [focus, setFocus] = React.useState(0);
    const [prevFocus, setPrev] = React.useState(0);
    const [offset, setOffset] = React.useState(0);
    const cardJump = parseInt(cardWidth, 10) + parseInt(cardMargin, 10) * 2;

    useEffect(() => {
        document.addEventListener('keydown', navigateSlider);

        if (slideArray.length <= 0 || prevFocus != focus) {
            setSlideArray(createSlider());
            setPrev(focus);
            setOffset(focus * cardJump);

            console.log(offset);
        }

        return function cleanup () {
            document.removeEventListener('keydown', navigateSlider);
        }
    });

    function createSlider() {
        const slideArray = [];
    
        for(let i = 0; i < data?.length; i++) {
            slideArray.push(
                <CardSlide
                    key = {i}
                    data = {data[i]}
                    id = {i}
                    focus = {focus}
                />
            );
        }
        return slideArray;
    }

    function navigateSlider(event) {
        const ARROW_RIGHT = 39;
        const ARROW_LEFT = 37;
        switch(event.keyCode) {
            case ARROW_RIGHT:
                nextSlide();
                break;
            case ARROW_LEFT:
                previousSlide();
                break;
            default:
                break;
        };
    }
    
    function nextSlide() {
        if (focus + 1 < data.length)
            setFocus(focus + 1);
    }

    function previousSlide() {
        if (focus > 0)
            setFocus(focus - 1);
    }
    
    return <div className={styles.container} style={{left: `-${offset}px`}}>{slideArray}</div>;
}