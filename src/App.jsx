 import './App.css'
//  import Layout from './Layout'
import { BrowserRouter } from "react-router-dom";
import AppRoutes from './AppRoutes';
 

function App() {
 
  return (
    <>
    <BrowserRouter>
      <AppRoutes/>
     {/* <Layout/> */}
    </BrowserRouter>
    </>
  )
}

export default App
  