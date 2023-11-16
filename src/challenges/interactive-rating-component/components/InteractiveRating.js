import { useState } from "react";
import styles from "./InteractiveRating.module.css";
import thankYouImg from "../assets/images/illustration-thank-you.svg";
import starImg from "../assets/images/icon-star.svg";


export default function InteractiveRating() {
    const [rating, setRating] = useState(null);

    function submitRating(rating) {
        setRating(rating);
    }

    return (
        <div className={styles.InteractiveRating}>
            { rating === null ?
                <RatingSection onSubmit={submitRating}/> :
                <ResultSection rating={rating}/>
            }
        </div>
    )
}


function RatingSection({onSubmit}) {
    const [selected, setSelected] = useState(null);

    function handleSubmit() {
        if (selected !== null) {
            onSubmit(selected);
        }
    }

    return (
        <section className={styles.RatingSection}>
            <img alt="icon" src={starImg}/>
            <h1>How did we do?</h1>

            <p>Please let us know how we did with your support request. All feedback is appreciated 
            to help us improve our offering!</p>

            <ul>
                {
                    Array(5).fill(0).map(
                        (_, i) => 
                            <Rating key={i} title={i + 1} onClick={setSelected} selected={selected === i + 1}/>
                    )
                }
            </ul>

            <button onClick={handleSubmit}>Submit</button>
        </section>
    )
}

function Rating({title, onClick, selected}) {

    const style = `${styles.Rating} ${selected ? styles.selected : ""} `;

    return (
        <p className={style} onClick={() => onClick(title)}>
            <span>{title}</span>
        </p>
    )
}


function ResultSection({rating}) {
    return (
        <section className={styles.ResultSection}>
            <img alt="icon" src={thankYouImg}></img>
            <p>You selected {rating} out of 5</p>

            <h1>Thank you!</h1>

            <p>We appreciate you taking the time to give a rating. If you ever need more support, 
            don’t hesitate to get in touch!</p>
        </section>
    )
}