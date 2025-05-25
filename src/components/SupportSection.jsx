const SupportSection = () => (
  <section className="bg-black py-16 md:px-8">
    <div className="max-w-7xl mx-auto grid grid-cols-1 my-5 md:grid-cols-2 gap-8">
      <div className="flex flex-col items-center text-white space-y-6 order-2 md:order-1">
        <h3 className="text-xl md:text-4xl font-bold">WE'RE HERE TO HELP!</h3>
        <p className="text-gray-300 text-sm text-center">
          Get answers to frequently asked questions, check server status, and
          engage with a<br />
          support expert
        </p>
        <a
          href="#"
          className="flex justify-center bg-transparent border border-white text-center rounded-full text-base font-bold w-60 p-3"
        >
          VISIT SUPPORT
        </a>
      </div>

      <div className="relative order-1 md:order-2 h-30 md:h-auto">
        <img
          src="https://w6d5-tailwind-project.onrender.com/support-banner-v3.jpg"
          alt="Support banner"
          className=" h-full w-full box-content border-t-1 border-white"
        />
      </div>
    </div>

    <div className="max-w-7xl mx-auto grid grid-cols-1 my-5 md:grid-cols-2 gap-8">
      <div className="flex flex-col items-center text-white space-y-6 order-2 md:order-1">
        <h2 className="text-4xl font-bold text-[#0768af]">HAVE FUN</h2>
        <p className="text-gray-300 text-sm text-center">
        LEARN MORE ABOUT JOB OPPORTUNITIES
        </p>
        <a
          href="#"
          className="flex justify-center bg-transparent border border-white text-center rounded-full text-base font-bold w-60 p-3"
        >
          JOIN US
        </a>
      </div>

      <div className="relative order-1 md:order-2 h-30 w-full md:h-auto">
        <img
          src="https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/home/assets/joinus-banner-img-spyro.png"
          alt="Support banner"
          className=" h-full w-screen object-conver border-t-1 border-white"
        />
        
      </div>
    </div>
  </section>
);

export default SupportSection;
