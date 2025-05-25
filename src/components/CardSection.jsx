import { useState } from "react";
import Card from "./Card";

const CardSection = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const blogData = [
    {
      id: 1,
      image:
        "https://activision.com/content/dam/atvi/callofduty/cod-touchui/blog/hero/BO6-SEASON-04-NARRATIVE-TOUT.jpg",
      date: "May 20, 2025",
      title: "Stitch Returns in Season 04",
      text: "Following a daring jailbreak conducted by his former adversary, Stitch’s clandestine resurrection is achieved and he returns to the fray with orders to crack the codes needed to uncover the Pantheon moles. Get the backstory on his intense rivalry turned uneasy alliance with Russell Adler and deploy as the menacing ex-Perseus agent arriving in the Season 04 Battle Pass.",
      link: "#",
    },
    {
      id: 2,
      image:
        "https://www.activision.com/content/dam/atvi/callofduty/cod-touchui/blog/body/code/CODE-MAM-GY6-TOUT.jpg",
      date: "May 15, 2025",
      title: "Support C.O.D.E. Military Appreciation Month with USAA",
      text: "The Call of Duty Endowment Military Appreciation Month 2025 presented by USAA honors veterans with the C.O.D.E. United Force: Tracer Pack and the C.O.D.E. Got Your Six Event",
      link: "#",
    },

    {
      id: 2,
      image:
        "https://www.activision.com/content/dam/atvi/tony-hawk/blog/chicago/el-rey-blog/THPS-ELREY-IMAGE-TOUT.jpg",
      date: "May 09, 2025",
      title: "Tony Hawk’s Pro Skater 3 + 4: THPS Fest at El Rey Theatre",
      text: "THPS Fest at the El Rey Theater in Los Angeles celebrated the return of Tony Hawk’s Pro Skater 3 + 4 by providing a closer look at some of the levels, skaters, and other new features coming to the game. See what the event was all about, including previously revealed content arriving at launch on July 11.",
      link: "#",
    },
  ];

  const tabs = [
    {
      id: "activision",
      logo: "https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/home/assets/activision-logo-small.svg",
      type: "image",
    },
    {
      id: "call-of-duty",
      logo: "https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/home/assets/cod-logo.svg",
      type: "image",
    },
    {
      id: "tony-hawk",
      logo: "https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/home/assets/THPS3+4_Logo.svg",
      type: "image",
    },
    {
      id: "crash-bandicoot",
      logo: "https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/home/assets/crash-bandicoot-logo.png",
      type: "image",
    },
  ];


  return (
    <section className="bg-black-50 py-16 px-4 sm:px-6 lg:px-8 block">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">
          Latest News & Articles
        </h2>

        <div className="hidden md:block relative mb-12">
          <div className="flex space-x-8 border-b border-gray-200">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`pb-4 px-1 relative focus:outline-none ${
                  activeTab === tab.id
                    ? "text-blue-600"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                {tab.type === "text" ? (
                  <span className="text-lg font-medium">{tab.label}</span>
                ) : (
                  <img src={tab.logo} alt={tab.id} className="h-8 w-auto" />
                )}
                {activeTab === tab.id && (
                  <div className="absolute inset-x-0 bottom-0 h-1 bg-blue-600" />
                )}
              </button>
            ))}
          </div>
        </div>

        <div className="md:hidden mb-8 relative border-t-1 border-b-1 border-white">
          <div
            className="bg-black p-4 rounded-lg shadow-sm cursor-pointer flex justify-end"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <div className="flex items-center w-50 justify-between">
              <span className="text-white text-lg font-bold">All News</span>
              <svg
                className="h-5 w-5 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>

          {mobileMenuOpen && (
            <div className="absolute   z-10 w-full mt-2 bg-black text-white rounded-lg shadow-lg ">
              {tabs.map((tab) => (
                <div
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id);
                    setMobileMenuOpen(false);
                  }}
                  className="flex flex-col p-4 hover:bg-gray-50 cursor-pointer border-b last:border-0 "
                >
                  {tab.type === "text" ? (
                    <span className="bg-gray-900">{tab.label}</span>
                  ) : (
                    <img
                      src={tab.logo}
                      alt={tab.id}
                      className="h-12 w-auto object-contain grayscale"
                    />
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        <Card blogs={blogData} />
      </div>
    </section>
  );
};

export default CardSection;
