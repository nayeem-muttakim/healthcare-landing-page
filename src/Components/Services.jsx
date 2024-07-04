import img1 from "../assets/Rectangle 27-2.png";
import img2 from "../assets/Rectangle 27-1.png";
import img3 from "../assets/Rectangle 27.png";
import { GoArrowUpRight } from "react-icons/go";

const Services = () => {
  return (
    <section className="bg-[#FFFFF5] my-40">
      <div className="grid grid-cols-2 gap-16">
        {/* text */}
        <div>
          <div className="flex flex-col gap-4">
            <div className="badge badge-outline badge-lg text-lg font-medium px-6 py-5 bg-white">
              Services
            </div>
            <h1 className="text-5xl font-semibold leading-tight">
              Empowering Health, <br />
              Enriching Lives
            </h1>
            <p className="text-lg leading-6">
              We are committed to providing high-quality, <br /> compassionate
              care to every patient we serve. <br /> Whatever your healthcare
              needs may be, you can trust <br /> us to be your partner in health
              and wellness.
            </p>
          </div>
          <a className="btn text-lg font-medium mt-10 bg-[#FFC637]">
            Appointment <GoArrowUpRight />
          </a>
        </div>
        <div className="relative">
          <img src={img1} alt="" className="rounded-3xl " />
          <div
            style={{
              background: "rgba( 11, 10, 103, 0.6 )",
              boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
              backdropFilter: "blur( 1.5px )",
              borderRadius: "10px",
            }}
            className="card absolute bottom-6 left-6 text-white w-[380px] "
          >
            <div className="card-body">
              <h2 className="card-title">Advanced Technology</h2>

              <div className="flex justify-between items-end">
                <p className="opacity-70">
                  Our surgeons are trained in the latest robotic surgical
                  techniques, which allow for greater precision
                </p>
                <button className="p-4 text-lg font-medium rounded-full  bg-[#FFC637]">
                  <GoArrowUpRight className="text-xl" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="relative">
          <img src={img2} alt="" className="rounded-3xl" />
          <div
            style={{
              background: "rgba( 11, 10, 103, 0.6 )",
              boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
              backdropFilter: "blur( 1.5px )",
              borderRadius: "10px",
            }}
            className="card absolute bottom-6 left-6 text-white w-[380px] "
          >
            <div className="card-body">
              <h2 className="card-title">Online Doctor Meet</h2>

              <div className="flex justify-between items-end">
                <p className="opacity-70">
                  Our surgeons are trained in the latest robotic surgical
                  techniques, which allow for greater precision
                </p>
                <button className="p-4 text-lg font-medium rounded-full  bg-[#FFC637]">
                  <GoArrowUpRight className="text-xl" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="relative ">
          <img src={img3} alt="" className="rounded-3xl" />
          <div
            style={{
              background: "rgba( 11, 10, 103, 0.6 )",
              boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
              backdropFilter: "blur( 1.5px )",
              borderRadius: "10px",
            }}
            className="card absolute bottom-6 left-6 text-white w-[380px]"
          >
            <div className="card-body">
              <h2 className="card-title">Consultancy your health</h2>

              <div className="flex justify-between items-end">
                <p className="opacity-70">
                  Our surgeons are trained in the latest robotic surgical
                  techniques, which allow for greater precision
                </p>
                <button className="p-4 text-lg font-medium rounded-full  bg-[#FFC637]">
                  <GoArrowUpRight className="text-xl" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
