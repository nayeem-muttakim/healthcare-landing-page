import { FaYoutube } from "react-icons/fa";
import { FaFacebook, FaInstagram } from "react-icons/fa6";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import logo from "../assets/logo light.png";

const Footer = () => {
  return (
    <footer className="bg-[#020043] h-[410px] text-white py-36 ">
      <div className="max-w-7xl mx-auto footer items-end text-base">
        <div className="grid gap-7 ">
          <img src={logo} alt="" />
          <p>
            123 Main Street Anytown, USA <br /> Postal Code : 12345
          </p>
          <p>
            Support: support@oyolloo.com <br />
            (Available : 10:am to 07:00pm)
          </p>
        </div>
        <nav>
          <a className="link link-hover">Home</a>
          <a className="link link-hover">About Us</a>
          <a className="link link-hover">Success Page</a>
          <a className="link link-hover">Terms and Condition</a>
        </nav>
        <nav>
          <a className="link link-hover">Services</a>
          <a className="link link-hover">Scheduling</a>
          <a className="link link-hover">Contact Us</a>
          <a className="link link-hover">Patient Portal</a>
        </nav>
        <nav>
          <h6>Follow Us</h6>
          <div className="grid grid-flow-col gap-5 items-center">
            <a>
              <FaFacebook className="size-6" />
            </a>
            <a>
              <FaInstagram className="size-6" />
            </a>
            <TiSocialLinkedinCircular className="size-7" />
            <a>
              <FaYoutube className="size-6" />
            </a>
          </div>
          <a className="mt-4 opacity-50">@Docplus 2024</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
