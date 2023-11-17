import qrCodeImg from "../assets/images/image-qr-code.png";
import styles from "./QRCodeCard.module.css";


export default function QRCodeCard() {

    return (
        <div className={styles.QRCodeCard}>
            <img src={qrCodeImg} alt="qr code" />
            <h1>Improve your front-end skills by building projects</h1>
            <p>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
        </div>
    )
}