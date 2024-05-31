import {BrowserRouter, Routes , Route} from "react-router-dom"
import Main from "../home/Main"


const AllRoutes=()=>{

    return <BrowserRouter>
    <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/:conversationId" element={<Main />} />

        </Routes></BrowserRouter>
}


export default AllRoutes;