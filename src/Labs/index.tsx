import { Routes,Route } from "react-router";
import Assignment3 from "./a3";
import { Link } from "react-router-dom";
import Nav from "../Nav";


function Labs() {
    return(
    <div className="container">
      <Nav/>
      <h1>Labs</h1>
      <Link to="/Labs/a3"> Assignment3</Link>
      <Routes>
        <Route path="/a3/*" element={<Assignment3/>}/> 
        {/* <Route path="/a4" element={<Assignment4/>}/> */}
        {/* <Route path="/a5" element={<Assignment5/>}/> */}

      </Routes>
    </div>
    )
}

export default Labs;