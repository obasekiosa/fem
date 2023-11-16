import styles from "./InteractiveRatingComponentPage.module.css";
import { InteractiveRating } from "./components";


export default function InteractiveRatingComponentPage() {

    return (
        <main className={styles.main}>
            <InteractiveRating />
        </main>
    )
}