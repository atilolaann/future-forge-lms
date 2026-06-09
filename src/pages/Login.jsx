import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import logo from '../assets/logo.png'
import login from "../assets/login.png"
import LoginA from "./LoginA";

function Login (){
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const handleLogin = async () => {
        if (!email.trim() || !password.trim()||!name.trim()){
            setError(" ❌Please fill all fields");
            return;
        }

        setError("")
        setLoading(true);

       try {
        const response = await fetch ("https://lms-be-kc72.onrender.com/api/auth/login",{
            method: "POST",
            headers: {
                "Content-Type":"application/json",
            },
            body:JSON.stringify({email, password, name}),
        });

        const data = await response.json();

        if (!response.ok) {
            setError(data.message || "❌Login failed");
            return;
        }

        localStorage.setItem("token", data.token);
        navigate("/dashboard");
       }
       catch (err) {
        console.error("Login error:", err);
        setError("❌Network error. Please try again.");
       }
        finally{
            setLoading(false);
        }
    };
    return(
        <div>
            
               <main className="bg-gray-100 flex  justify-center  max-h-[90%] h-screen">
                <LoginA />
                
                <section className="bg-white p-6 max-w-92 flex flex-col my-5">
                    <h2 className="text-2xl font-bold ">Welcome back</h2>
                    <p className="font-semibold">Sign in to your account</p>

                   <div className="flex flex-col my-2 ">
                     <label className="font-normal mt-6">Full name</label>
                    <input
                     type="text"
                     value={name}
                      onChange={(e) => setName(e.target.value)}
                    placeholder="Enter Full name" 
                    className="border rounded-sm border-orange-600 px-2" />
                   </div>
                   <div className="flex flex-col my-2 ">
                     <label className="font-normal ">Email</label>
                    <input
                     type="email"
                     value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter email" 
                    className="border rounded-sm border-orange-600 px-2" />
                   </div>
                   <div className="flex flex-col my-2">
                     <label>Password</label>
                    <input
                     type="password"
                     value={password} 
                     onChange={(e) => setPassword(e.target.value)}
                    placeholder="input password"
                    className="border rounded-sm border-orange-600 mb-12 px-2"
                    />
                   
                    {error &&( <p className="text-red-500 text-sm mt-1">{error}</p>)}
                    <button
                    onClick={handleLogin}
                    disabled={loading}
                     className="bg-orange-600 text-white rounded-sm py-1.5 "
                     >
                     {loading? "Logging in..." :"Login"}
                     </button>
                    <p className="pt-2">Don't have access to LMS? Go back <span className="text-orange-600"> <Link to ="/">Home</Link></span></p>
                   </div>
                </section>
               </main>


                
        
        </div>

    

    );
}
export default Login;