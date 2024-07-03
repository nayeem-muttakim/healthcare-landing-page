import { GoArrowUpRight } from "react-icons/go";
import solutionImg from "../assets/Rectangle 24.png";
const WhoWeAre = () => {
  return (
    <section>
      <div className="flex justify-between my-10">
        {/* text */}
        <div>
          <div className="flex flex-col gap-4">
            <div className="badge badge-outline badge-lg text-lg font-medium px-6 py-5 ">
              Who we are
            </div>
            <h1 className="text-5xl font-semibold leading-tight">
              We Help To Get <br />
              Solutions
            </h1>
            <p className="text-lg leading-6">
              We are proud to be a trusted healthcare provider in our <br />{" "}
              community, and we look forward to serving you and your <br />{" "}
              family with excellence, integrity, and compassion. Your health{" "}
              <br /> is our priority, and we are here for you every step of the
              way. <br /> We believe in treating each patient with dignity,
              respect, and <br />
              empathy, ensuring that they receive the attention and care <br />
              they deserve.
            </p>
          </div>
          <a className="btn text-lg font-medium mt-10 bg-[#FFC637]">
            Learn more <GoArrowUpRight />
          </a>
        </div>
        {/* image */}
        <div className="relative">
          <img src={solutionImg} alt="" />
          <div className="card bg-[#343268] absolute z-10 -bottom-7 -left-[95px] w-[395px] h-52 shadow-xl">
            <div className="card-body text-white">
              <h2 className="text-3xl">Our mission is simple</h2>
              <p className="text-lg">
                To provide high-quality healthcare services that are accessible,
                personalized, and patient-centered.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
