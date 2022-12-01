import { RouterProvider } from "react-router-dom";
import { routes } from "./Routes/Routes";
import toast, { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="App">
      <RouterProvider router={routes}></RouterProvider>
      <Toaster position="bottom-center" reverseOrder={false}/>
    </div>
  );
}

export default App;
