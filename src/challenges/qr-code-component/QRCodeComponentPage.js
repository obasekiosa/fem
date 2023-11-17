
import styles from "./QRCodeComponent.module.css";
import { QRCodeCard } from "./components";


export default function QRCodeComponentPage() {

    return (
        <main className={styles.main}>
            <QRCodeCard />
        </main>
    )
}