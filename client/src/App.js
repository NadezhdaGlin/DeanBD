import { useRoutes } from "./routes";
import { BrowserRouter } from 'react-router-dom';

function App() {
  const routes = useRoutes();

  return (
    <BrowserRouter>
      <div>
        {routes}
      </div>
    </BrowserRouter>
  );
}

export default App;
