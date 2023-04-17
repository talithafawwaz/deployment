import CreateProduct from "../pages/CreateProduct";
import LandingPage from "../pages/LandingPage";

const Routers = [
    {
        path: "/",
        element: <LandingPage/>,
    },
    {
        path: "/CreateProduct",
        element: <CreateProduct/>,
    },
];

export default Routers