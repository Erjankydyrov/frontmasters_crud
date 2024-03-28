import { useRoutes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Layout from "./layout/Layout/Layout";

const App = () => {
  const element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/about", element: <About /> },
  ]);
  
  return (
    <>
      <Layout>{element}</Layout>
    </>
  );
};

export default App;
