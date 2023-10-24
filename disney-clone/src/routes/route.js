import { Route, Routes } from "react-router-dom";
import Header from "../components/Header";
import Login from "../page/Login/Login";
//use later
export const Router = () =>{
    return(
        <>
            <Header/>
            <Routes>
                {/* <Route path="/" element={<Login/>} /> */}
            </Routes>
        </>
        );
}


export default Router;