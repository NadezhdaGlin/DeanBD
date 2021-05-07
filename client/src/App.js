import { useRoutes } from "./routes";
import { BrowserRouter } from 'react-router-dom';

function App() {
    const routes = useRoutes();

    return (
        <BrowserRouter>
            {routes}
        </BrowserRouter>
    );
}

export default App;
