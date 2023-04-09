import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";
import ListVideoContainer from "./components/ListVideoContainer";
import SingleVideoContainer from "./components/SingleVideoContainer";
import VideoContainer from "./components/VideoContainer";
import Error from "./components/Error";
function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        {
          path: "/",
          element: <VideoContainer />,
        },
        {
          path: "/results",
          element: <ListVideoContainer />,
        },
        {
          path: "/watch",
          element: <SingleVideoContainer />,
        },
      ],
      errorElement: <Error/>
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
