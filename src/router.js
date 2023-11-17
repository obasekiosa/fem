import {
    createHashRouter,
} from "react-router-dom";
import App from "./App";
import { InteractiveRatingComponentPage, ProductPreviewCardComponentPage, QRCodeComponentPage, ResultSummaryComponentPage, SamplePage } from "./challenges";
import Error from "./error";

const router = createHashRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <Error />
    },
    {
        path: "/sample-page",
        element: <SamplePage />
    },
    {
        path: "/results-summary-component",
        element: <ResultSummaryComponentPage />
    },
    {
        path: "/product-preview-card-component",
        element: <ProductPreviewCardComponentPage />
    },
    {
        path: "/interactive-rating-component",
        element: <InteractiveRatingComponentPage />
    },
    {
        path: "/qr-code-component",
        element: <QRCodeComponentPage />
    }
]);

export default router;