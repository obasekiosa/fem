import styles from "./ProofCard.module.css";






export default function ProofCard({img, name, text}) {


    return (
        <div className={styles.ProofCard}>
            <div className={styles.headingContainer}>
                <img src={img} alt="avatar"/>

                <div>
                    <h3>{name}</h3>
                    <h4>Verified Buyer</h4>
                </div>
                
            </div>
            <p>{"\" "}{text}{" \""}</p>
        </div>
    )
}