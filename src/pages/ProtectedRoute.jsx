import { Navigate } from "react-router-dom";
import SessionTimeout from "../components2/SessionTimeout.jsx";

function ProtectedRoute({children}){
    const token = localStorage.getItem("token");

   return token ?(
   <>
     <SessionTimeout /> {children}
   </>
   ):(
    <Navigate to="/login" />
   )
}
export default ProtectedRoute;