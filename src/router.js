import {
    createHashRouter,
} from "react-router-dom";
import App from "./App";
import { Demo } from "./challenges";
import Error from "./error";

const ROOT_PATH = "/fem";

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