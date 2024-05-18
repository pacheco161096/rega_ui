import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Home from "./routes/home"
import Dashboard from "./routes/dashboard"
import Login from './routes/login'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ "/" }  element={ <Navigate replace to="/es-mx" /> }/>
        <Route path={ "/:lang" }  element={ <Home/>}/>
        <Route path={ "/:lang/login" }  element={ <Login/>}/>
        <Route path={ "/:lang/micuenta" }  element={ <Dashboard/> }/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
