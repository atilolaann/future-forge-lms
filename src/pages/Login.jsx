import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LeftSIdeLogin from "../components/LeftSIdeLogin";
import { toast } from "sonner";
import { Eye, EyeSlash } from "iconsax-reactjs";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!checkEmailAndPassword()) {
      return;
    }

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
        throw new Error(data?.message || "Login failed. Please try again.");
      }

      localStorage.setItem("token", data?.data?.token);
      navigate("/dashboard");

      toast.success("Login successful! Welcome back.", {
        description: "You have successfully logged in to your account.",
        duration: 4000,
        position: "top-right",
      });
    } catch (err) {
      toast.error("Login failed. Please try again.", {
        description:
          err.message || "There was a problem connecting to the server.",
        duration: 4000,
        position: "top-right",
      });
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
      className="bg-white flex  w-screen min-h-screen "
      style={{ width: "100vw" }}
    >
      <LeftSIdeLogin />

      <section className="bg-white p-6 flex flex-1 items-center justify-center ">
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

          <div className="flex flex-col mt-4 relative">
            <label className="font-normal text-md">Password</label>
            <input
              value={password}
              type={visible ? "text" : "password"}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              className="border rounded-[10px] border-orange-600 px-2 h-15 text-black"
            />
            {passwordError && (
              <p className="text-red-500 text-sm mt-2">{passwordError}</p>
            )}

            <div className="absolute right-3 top-10">
              {visible ? (
                <div
                  onClick={() => setVisible(!visible)}
                  className="cursor-pointer block"
                >
                  <Eye size="32" color="#F59E0B" />
                </div>
              ) : (
                <div
                  onClick={() => setVisible(!visible)}
                  className="cursor-pointer block"
                >
                  <EyeSlash size="32" color="#F59E0B" />
                </div>
              )}
            </div>
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
              <span className="text-orange-500 cursor-pointer">
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
