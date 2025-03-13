'use client'

import React, { useEffect } from "react";
import axios from "axios";
import SliderComponent from "@/components/slider-component";
import styles from './styles.module.scss';

function fetchData(setData) {
    axios
    .get('https://acc01.titanos.tv/v1/genres/14/contents?market=es&device=tv&locale=es&page=1&per_page=50')
    .then(resp => {
        if (typeof setData === 'function') setData(resp.data?.collection);
    })
    .catch(err => {
        console.error(err);
        fetchData(setData);
    });
}

export default function Main() {
    const [data, setData] = React.useState([]);

    useEffect(() => {
        fetchData(setData);
    });

    if (data?.length > 0)
        return <SliderComponent data = {data} length = {data.length} />;
    else
        return <div className={`${styles.spinner}`}>Loading...</div>;
}