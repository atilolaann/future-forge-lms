import LoginLogo from "../assets/login-logo.png";
import login from "../assets/login.png";

function LoginA() {
  return (
    <div className="bg-gradient-to-b from-[#F59E0B] via-[#F5891E] to-[#F67430] flex-1 h-screen">
      <section className="p-10 text-white flex items-center flex-col justify-center gap-10 2xl:gap-16">
        {/* Logo */}
        <div className="w-[544px] h-[100px]">
          <img
            src={LoginLogo}
            className="w-full h-full object-contain"
            alt="futureforge logo"
          />
        </div>

        {/* Login Image */}
        <div className="w-[544px] h-auto">
          <img
            src={login}
            className="w-full h-full my-2"
            alt="login image"
            style={{ objectFit: "contain" }}
          />
        </div>

        {/* Description */}

        <div className="w-[544px]">
          <h2 className="text-4xl font-bold py-5">Onboard into our LMS</h2>
          <p className="text-2xl font-normal">
            Your personalized learning hub for resources, recordings, progress
            tracking, and cohort collaboration — all in one place
          </p>
        </div>
      </section>
    </div>
  );
}
export default LoginA;
