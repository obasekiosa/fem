import styles from "./RatingCard.module.css"
import startIcon from "../assets/images/icon-star.svg"

export default function RatingCard({rating, source}) {

    return (
        <div className={styles.RatingCard}>
            <div>
                {
                    Array(rating).fill(0).map((_, i) => <img key={i} src={startIcon} alt="star rating icon" />)
                }
            </div>
            <p>Rated {rating} Stars in {source}</p>
        </div>
    )
}