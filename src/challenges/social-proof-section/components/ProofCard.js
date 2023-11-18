import styles from "./ProofCard.module.css";






export default function ProofCard({img, name, text}) {


    return (
        <div className={styles.ProofCard}>
            <div className={styles.headingContainer}>
                <img src={img} alt="avatar"/>

                <div>
                    <p>{name}</p>
                    <p>Verified Buyer</p>
                </div>
                
            </div>
            <p>{"\" "}{text}{" \""}</p>
        </div>
    )
}