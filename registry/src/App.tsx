import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root";
import HomePage from "./pages/home/HomePage";
import { homeLoader } from "./pages/home/homeLoader";
import SearchPage from "./pages/search/SearchPage";
import DetailsPage from "./pages/details/DetailsPage";
import { searchLoader } from "./pages/search/searchLoader";
import { detailsLoader } from "./pages/details/detailsLoader";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        element: <HomePage></HomePage>,
        loader: homeLoader
      },
      {
        path: '/search',
        element: <SearchPage></SearchPage>,
        loader: searchLoader,
      },
      {
        path: '/packages/:name',
        element: <DetailsPage></DetailsPage>,
        loader: detailsLoader,
      },
      {
        path: '/packages/:scope/:name',
        element: <DetailsPage></DetailsPage>,
        loader: detailsLoader,
      }
    ]
  }
])

function App() {
 return <RouterProvider router={router}>
 </RouterProvider>
}

export default App
