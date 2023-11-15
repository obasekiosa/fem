import styles from "./ProductPreviewCard.module.css"
import imgMobile from "../assets/images/image-product-mobile.jpg";
import cartIcon from "../assets/images/icon-cart.svg";

export default function ProductPreviewCard() {
    return (
        <div className={styles.ProductPreviewCard}>
            <img className={styles.productImg}
                src={imgMobile}
                alt="Product display"
            />
            <section className={styles.productInfoSection}>
                <h4>Perfume</h4>

                <h2>Gabrielle Essence Eau De Parfum</h2>

                <p>A floral, solar and voluptuous interpretation composed by Olivier Polge, 
  Perfumer-Creator for the House of CHANEL.</p>

                <section className={styles.productCostSection}>
                    <span>$149.99</span>
                    <span>$169.99</span>
                </section>

                <button> <img src={cartIcon} alt="check out button icon"/> Add to Cart</button>
            </section>
        </div>
    );
}