import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import LeftSIdeLogin from "../components/LeftSIdeLogin";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!checkEmailAndPassword()) {
      return;
    }

    setError("");
    setLoading(true);

    try {
      const response = await fetch(
        "https://lms-be-kc72.onrender.com/api/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        },
      );

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "❌Login failed,Contact Lead");
        return;
      }
      localStorage.setItem("token", data?.data?.token);
      navigate("/dashboard");
    } catch (err) {
      console.error("", err);
      setError("❌Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const checkEmailAndPassword = () => {
    let valid = true;

    if (!email.trim()) {
      setEmailError("Email is required");
      valid = false;
    } else {
      setEmailError("");
    }

    if (!password.trim()) {
      setPasswordError("Password is required");
      valid = false;
    } else {
      setPasswordError("");
    }

    return valid;
  };

  return (
    <main
      className="bg-white flex justify-center h-screen"
      style={{ width: "100vw" }}
    >
      <LeftSIdeLogin />

      <section className="bg-white p-6 flex flex-1 items-center justify-center my-5">
        <div className="w-92.25">
          <h2 className="text-4xl font-bold ">Welcome back</h2>
          <p className="text-[20px] font-normal">Sign in to your account</p>

          <div className="flex flex-col mt-16">
            <label className="font-normal text-md mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email"
              className="border rounded-[10px] border-orange-600 px-2 h-15 text-black"
            />
            {emailError && (
              <p className="text-red-500 text-sm mt-2">{emailError}</p>
            )}
          </div>

          <div className="flex flex-col mt-4">
            <label className="font-normal text-md">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              className="border rounded-[10px] border-orange-600 px-2 h-15 text-black"
            />
            {passwordError && (
              <p className="text-red-500 text-sm mt-2">{passwordError}</p>
            )}
          </div>

          <div className="w-full mt-10">
            <button
              onClick={handleLogin}
              disabled={loading}
              className="bg-linear-to-b from-[#F59E0B] via-[#F5891E] to-[#F67430] text-white rounded-[10px] py-1.5 w-full font-medium h-15 cursor-pointer"
            >
              {loading ? "Logging in..." : "Login"}
            </button>

            <p className="pt-2 text-lg">
              Don't have access to LMS?{" "}
              <span className="text-orange-600 cursor-pointer">
                Contact Lead
              </span>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
export default Login;
