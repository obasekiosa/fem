import {
    createHashRouter,
} from "react-router-dom";
import App from "./App";
import { ProductPreviewCardComponentPage, ResultSummaryComponentPage, SamplePage } from "./challenges";
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
        path: "/product-card-component",
        element: <ProductPreviewCardComponentPage />
    }
]);

export default router;