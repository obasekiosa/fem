import styles from "./ProductPreviewCardComponentPage.module.css";
import { ProductPreviewCard } from "./components";


export default function ProductPreviewCardComponentPage() {
    return (
        <main className={styles.main}>
            <ProductPreviewCard />
        </main>
    );
}