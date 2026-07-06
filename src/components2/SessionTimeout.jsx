import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner"

function SessionTimeout() {
  const navigate = useNavigate();

  useEffect(() => {
    let timeout;
    console.log("SessionTimeout mounted");

    

    const resetTimer = () => {
      
      clearTimeout(timeout);

      timeout = setTimeout(
        () => {
          console.log("Timer expired");
          localStorage.removeItem("token");

          toast.error("Session expired. Please login again.",{
            duration:3000,
          });

          setTimeout(() => {
            navigate("/login", { replace: true });
          }, 5000); // Delay navigation for 5 seconds to allow the toast to be visible
        },
        20 * 60 * 1000,
      ); // 20 minutes
    };

    window.addEventListener("mousemove", resetTimer);
    window.addEventListener("keydown", resetTimer);
    window.addEventListener("click", resetTimer);
    window.addEventListener("scroll", resetTimer);

    resetTimer();

    return () => {
      clearTimeout(timeout);
      window.removeEventListener("mousemove", resetTimer);
      window.removeEventListener("keydown", resetTimer);
      window.removeEventListener("click", resetTimer);
      window.removeEventListener("scroll", resetTimer);
    };
  }, [navigate]);

  return null;
}

export default SessionTimeout;
