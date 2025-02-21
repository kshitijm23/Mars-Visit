import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div
      className="h-screen w-screen flex justify-center items-center font-pops"
      style={{
        backgroundImage: "url('/marsblack.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="h-[60%] w-[40%] gap-10 rounded-2xl flex flex-col justify-center items-center shadow-lg bg-black bg-opacity-30 shadow-[#00000040]">
        <div className="text-2xl font-thick tracking-wide text-white">WELCOME</div>
        <div className="text-5xl text-white tracking-wider">MARS AWAITS YOU!</div>
        

        <button
  onClick={() => navigate("/register")}
  className="w-32 h-32 rounded-full bg-cover text-white text-xl font-bold bg-center transition-transform hover:scale-110 active:scale-95 flex items-center justify-center"
  style={{ backgroundImage: "url('/marsbutton.png')" }}
>
  Get Started
</button>

      </div>
    </div>
  );
};

export default Home;
