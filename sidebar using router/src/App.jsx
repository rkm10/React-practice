import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import Navbar from "./Components/navbar"


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Root />} errorElement={<h2>Error......</h2>}>
      <Route>
        <Route path="/" element={<Navbar />} />

      </Route>
    </Route>
  )
)
function App() {

  return (
    <RouterProvider router={router} />
  );
}

export default App
