import { RouterProvider } from "react-router"
import router from "./Routes/Routes"
import  { Toaster } from 'react-hot-toast';


function App() {

  return (
    <> 
    <RouterProvider router={router}>  </RouterProvider> 
    <Toaster />
    </>
  )
}

export default App
