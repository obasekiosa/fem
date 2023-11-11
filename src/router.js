import {
    createHashRouter,
} from "react-router-dom";
import App from "./App";
import { Demo } from "./challenges";
import Error from "./error";

const router = createHashRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <Error />
    },
    {
        path: "/test",
        element: <Demo />
    }
]);

export default router;