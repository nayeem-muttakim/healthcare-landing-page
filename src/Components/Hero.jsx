import banner from "../assets/Rectangle 5.png";
const Hero = () => {
  return (
    <section
      style={{ backgroundImage: `url(${banner})` }}
      className={
        " relative z-10 bg-center h-[470px] rounded-[48px] before:content-[''] before:absolute before:inset-0 before:block before:bg-gradient-to-b before:from-[#00C19D00] before:to-[#02004378] before:opacity-75 before:z-[-5] before:rounded-[48px]"
      }
    ></section>
  );
};

export default Hero;
