import React, {useEffect} from "react";
import styles from './styles.module.scss';

function shortenDesc(description) {
    if (description.length > 150)
        return description.substring(0, 147) + '...';
    return description;
}

function extractImg(data) {
    return data?.images?.artwork_portrait;
}

export default function CardSlide({ data, id, focus }) {
    const img = extractImg(data);


    return <div id={`slide_${id}`} className={`${styles.card}${focus === id ? ` ${styles.focused}` : ''}`} style={{backgroundImage: `url(${img})`}}>
        <div className={styles.footer}>
            <div className={styles.title}>{data?.title} - {data?.year}</div>
            <div className={styles.description}>{shortenDesc(data?.synopsis)}</div>
        </div>
    </div>
}