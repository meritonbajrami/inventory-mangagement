import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ServiceDetails from "./pages/ServiceDetails";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/services/:id",
      element: <ServiceDetails />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
