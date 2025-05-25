import { useState } from "react";

const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? items.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === items.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="relative h-screen overflow-hidden ">
      <div className="absolute inset-y-0 left-0 z-20 flex items-center justify-center p-4">
        <button
          onClick={prevSlide}
          className="rounded-full bg-black/30 p-3 text-white transition hover:bg-black/50"
        >
          <svg
            className="h-8 w-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
      </div>

      <div className="absolute inset-y-0 right-0 z-20 flex items-center justify-center p-4">
        <button
          onClick={nextSlide}
          className="rounded-full bg-black/30 p-3 text-white transition hover:bg-black/50"
        >
          <svg
            className="h-8 w-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      <div
        className="flex h-screen w-screen transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {items.map((item, index) => (
          <div key={index} className="relative h-screen w-screen flex-shrink-0">
            <video
              autoPlay
              loop
              muted
              className="absolute h-screen w-screen object-cover"
            >
              <source src={item.url} type="video/mp4" />
            </video>

            <div className="relative flex h-full flex-col items-center justify-center text-center pt-10 text-white">
              <img
                src={item.smallImage}
                className="absolute right-4 top-20 h-16 w-25 object-cover md:h-24 md:w-24"
                alt="rating info"
              />

              <img
                src={item.logo}
                className="mb-6 h-32 w-auto md:h-48"
                alt="game logo"
              />

              <p className="mb-8 max-w-2xl px-4 text-lg w-60 md:text-base font-bold">
                {item.text}
              </p>

              <div className="flex flex-col gap-4 sm:flex-row">
                <a
                  href="#"
                  className="flex justify-center bg-[rgb(7_104_175)]/70 border-2 border-[#0768af] text-center rounded-full text-base font-bold w-60"
                  style={{ padding: "1rem" }}
                >
                  {item.button}
                </a>
                <a
                  href="#"
                  className="flex justify-center bg-transparent border border-white text-center rounded-full text-base font-bold w-60"
                  style={{ padding: "1rem" }}
                >
                  {item.visitButton}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-3 w-3 rounded-full transition-colors ${
              index === currentIndex ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
