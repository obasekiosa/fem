import styles from "./SocialProof.module.css";
import RatingCard from "./RatingCard";
import ProofCard from "./ProofCard";
import imgColton from "../assets/images/image-colton.jpg"
import imgIrene from "../assets/images/image-irene.jpg"
import imgAnne from "../assets/images/image-anne.jpg"


const testifiers = [
    {
        name: "Colton Smith",
        text: "We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent!",
        img: imgColton
    },
    {
        name: "Irene Roberts",
        text: "Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery.",
        img: imgIrene
    },
    {
        name: "Anne Wallace",
        text: "Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone!",
        img: imgAnne
    }
]

export default function SocialProof() {

    return (
        <section className={styles.SocialProof}>

            <div className={styles.top}>
                <div className={styles.topLeft}>
                    <h1>
                        10,000+ of our users love our products.
                    </h1>
                    
                    <p>
                        We only provide great products combined with excellent customer service.
                        See what our satisfied customers are saying about our services.
                    </p>
                </div>

                <div className={styles.topRight}>
                    <div className={styles.RatingContainer}>
                        <RatingCard rating={5} source={"Reviews"}/>
                    </div> 
                
                    <div className={styles.RatingContainer}>
                        <RatingCard rating={5} source={"Report Guru"}/>
                    </div>
                    
                    <div className={styles.RatingContainer}>
                        <RatingCard rating={5} source={"BestTech"}/>
                    </div>
                </div>
                                
            </div>

            
            

        <div className={styles.bottom}>
            {
                testifiers.map((t, i) => 
                    <div className={styles.ProofContainer}><ProofCard img={t.img} name={t.name} text={t.text}/></div>
                )
            }
        </div>
           
           
            
        </section>
    )
}