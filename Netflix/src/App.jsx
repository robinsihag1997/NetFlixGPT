import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Body from "./Components/Body";
import Browse from "./Components/Browse";
import PageNotFound from "./Components/PageNotFound";

function App() {
  const appRouter = createBrowserRouter([
    { path: "/", element: <Body /> },
    { path: "/browse", element: <Browse /> },
    { path: "*", element: <PageNotFound /> },
  ]);

  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
}

export default App;
