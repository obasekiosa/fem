import {
    createBrowserRouter,
} from "react-router-dom";
import App from "./App";
import { Demo } from "./challenges";
import Error from "./error";

const ROOT_PATH = "/fem";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <Error />
    },
    {
        path: "/test",
        element: <Demo />
    }
], {
    basename: ROOT_PATH
});

export default router;