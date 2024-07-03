import { GoArrowUpRight } from "react-icons/go";
import appointmentImg from "../assets/Rectangle 32.png";
import logo from "../assets/logo light.png";

const Appointment = () => {
  return (
    <section
      style={{ backgroundImage: `url(${appointmentImg})` }}
      className={
        " relative z-10 bg-center bg-no-repeat bg-cover h-[477px] rounded-[48px] before:content-[''] before:absolute before:inset-0 before:block before:bg-gradient-to-r before:from-[#020043] before:to-[#5A5D76] before:opacity-75 before:z-[-5] before:rounded-[48px] grid grid-cols-2 justify-center items-center my-40 p-20"
      }
    >
      <div className="text-white">
        <h1 className="text-5xl font-semibold leading-tight">
          Get Your <br />
          First Appointment <br />
          at 50% off!
        </h1>
        <div >
          <button className="btn text-lg font-semibold mt-10 bg-[#FFC637]">
            Appointment <GoArrowUpRight />
          </button>
          <button className="btn ml-4 btn-outline text-lg font-semibold text-white border-white">
            Learn More <GoArrowUpRight />
          </button>
        </div>
      </div>
      <div className="justify-self-end self-start">
        <img src={logo} alt="" />
      </div>
    </section>
  );
};

export default Appointment;
