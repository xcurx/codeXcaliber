const Hero = () => {
  return (
    <div
      className="w-screen h-screen flex-col xs:flex items-center justify-center overflow-y-hidden relative"
    >
      <div
        className="w-full xs:w-[470px] sm:w-[550px] md:w-[700px] lg:w-[800px] xl:w-[1100px] mt-20 xs:mt-0 xs:ml-[40px] md:ml-[65px] flex justify-center xs:justify-between text-6xl md:text-8xl lg:text-8xl xl:text-9xl -z-10"
      >
        <p
          className="text-transparent bg-clip-text bg-gradient-to-b xs:bg-gradient-to-r from-white via-white to-transparent"
        >
          code
        </p>
        <p>X</p>
        <p
          className="text-transparent bg-clip-text bg-gradient-to-b xs:bg-gradient-to-l from-white via-white to-transparent"
        >
          caliber
        </p>
      </div>
      <img
        className="h-[40rem] xs:h-[20rem] sm:h-[30rem] md:h[35rem] lg:h-[40rem] xl:h-[60rem] animate-levitate absolute mx-auto left-0 right-0 top-52 xs:top-52 sm:top-48 lg:top-32 xl:top-28 -z-10"
        src="/images/hero-phone.png"
        alt="phone"
      />
    </div>
  );
};

export default Hero;