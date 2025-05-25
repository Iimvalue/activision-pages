export default function Career() {
  return (
    <main className="bg-black text-white">
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            className="w-full h-full object-cover"
            aria-label="Career hero video"
          >
            <source
              src="https://assets.phenompeople.com/CareerConnectResources/prod/ACPUUS/videos/EVPCareersiteherovideo5-1710271231185.mp4"
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/40" />
        </div>

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <a
            href="#"
            className="inline-block border border-green-800 bg-gray-600 text-white px-8 py-3  text-lg md:text-xl font-semibold transition-colors duration-300"
          >
            SEARCH JOBS
          </a>
        </div>
      </section>

      <section className="bg-[#121212] py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 uppercase tracking-wide">
              START YOUR GAME CHANGING CAREER
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
            {studios.map((studio, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="block">
                  <div className="flex items-center justify-center shadow mb-2">
                    <img
                      src={studio.logo}
                      alt={studio.name}
                      className="h-24 w-auto object-contain cursor-pointer"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-[#121212]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold  mb-12">EXPLORE OUR WORLD</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {exploreItems.map((item) => (
              <div
                key={item.title}
                className="bg-black rounded-lg overflow-hidden"
              >
                <img
                  src={item.image}
                  alt=""
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-400 mb-4">{item.description}</p>
                  <a
                    href="#"
                    className="flex justify-center bg-transparent border border-white text-center rounded-full text-base font-bold w-40 p-3"
                  >
                    LEARN MORE
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        data-static-widget-id="hZBu4r"
        className="phw-widget"
        panel-id=""
        data-ph-id="-1691567324664"
        instance-id="eaT1B7wP"
        view-rev="26"
        has-edit="false"
        sync-with-desktop="true"
        type="static"
        data-widget="hZBu4r"
      >
        <div className="w-full">
          <video className="w-full h-auto" autoPlay muted loop id="myVideo">
            <source
              src="https://www.activision.com/cdn/videos/game-ap-look.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            BE THE FIRST TO APPLY
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {jobs.map((job) => (
              <div
                key={job.id}
                className="bg-white text-black p-6 rounded-lg shadow-lg"
              >
                <h3 className="text-2xl font-bold mb-2">{job.title}</h3>
                <p className="text-gray-600 mb-4">{job.category}</p>
                <p className="mb-4">{job.description}</p>
                <div className="flex justify-between items-center">
                  <a
                    href="#"
                    className="bg-[#2b2b2b] border border-green-800  text-white px-6 py-4  hover:bg-green-700"
                  >
                    APPLY NOW
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

const studios = [
  {
    name: "Art & Animation",
    logo: "https://cdn.phenompeople.com/CareerConnectResources/ACPUUS/images/EVPIconssubitem11-1710455685013.png",
  },
  {
    name: "Engineering",
    logo: "https://cdn.phenompeople.com/CareerConnectResources/ACPUUS/images/EVPIconssubitem12-1710455727924.png",
  },
  {
    name: "Production",
    logo: "https://cdn.phenompeople.com/CareerConnectResources/ACPUUS/images/EVPIconssubitem13-1710455855824.png",
  },
  {
    name: "Corporate Functions",
    logo: "https://cdn.phenompeople.com/CareerConnectResources/ACPUUS/images/EVPIconssubitem14-1710456001039.png",
  },
  {
    name: "Design",
    logo: "https://cdn.phenompeople.com/CareerConnectResources/ACPUUS/images/EVPIconssubitem15-1710456129634.png",
  },
  {
    name: "Marketing & Sales",
    logo: "https://cdn.phenompeople.com/CareerConnectResources/ACPUUS/images/EVPIconssubitem16-1710456257523.png",
  },
  {
    name: "Quality Assurance",
    logo: "https://cdn.phenompeople.com/CareerConnectResources/ACPUUS/images/EVPIconssubitem17-1710456307621.png",
  },
  {
    name: "Studio Operations",
    logo: "https://cdn.phenompeople.com/CareerConnectResources/ACPUUS/images/EVPIconssubitem18-1710456364531.png",
  },
  {
    name: "Central Tech",
    logo: "https://cdn.phenompeople.com/CareerConnectResources/ACPUUS/images/EVPIconssubitem19-1710456408214.png",
  },
];

const exploreItems = [
  {
    title: "Our Locations",
    image:
      "https://cdn.phenompeople.com/CareerConnectResources/ACPUUS/images/1691566582196_PenFactory-1665997299565.jpg",
    description: "Discover our global studio locations",
    link: "https://www.activision.com/company/locations",
  },
  {
    title: "DE&I",
    image:
      "https://cdn.phenompeople.com/CareerConnectResources/ACPUUS/images/1691566670572_PenFactory2-1665997596145.jpg",
    description: "Our commitment to diversity, equity and inclusion",
    link: "https://www.activision.com/company/diversity-inclusion",
  },
  {
    title: "Early Careers",
    image:
      "https://cdn.phenompeople.com/CareerConnectResources/ACPUUS/images/1691566841083_EarlyCareersAP-1666643219491.jpg",
    description: "Opportunities for students and new graduates",
    link: "https://careers.activision.com/early-careers",
  },
  {
    title: "Mission & Talent Brand",
    image:
      "https://cdn.phenompeople.com/CareerConnectResources/ACPUUS/images/Capture4-1716042103068.png",
    description: "Learn about our culture and values",
    link: "https://careers.activision.com/we-are-activision",
  },
];

const jobs = [
  {
    id: 1,
    title: "Senior Gameplay Engineer - High Moon Studios",
    category: "Programming/Software Engineering",
    description: "Collaborate with designers and animators to create new gameplay systems and expand existing ones. Spearhead the development of innovative gameplay experiences. Proficiency in 3D math, related to game...",
  },
  {
    id: 2,
    title: "Lead Analytics Engineer",
    category: "Data Analytics",
    description: "You'll work closely with engineers, product managers, and analytics peers to build a foundational data layer that helps derive meaningful insights and recommendations, as well as furthering self-servi...",
  },
  {
    id: 3,
    title: "Expert Animation Engineer - Infinity Ward",
    category: "Programming/Software Engineering",
    description: "Infinity Ward is looking for a dedicated Expert Animation Engineer with a strong interest in crafting high fidelity, scalable animation systems and behaviors. Develop and upgrade workflows to allow th...",
  },
  {
    id: 4,
    title: "Senior AI Animator - Infinity Ward",
    category: "Animation",
    description: "Use motion capture and hand-keyed techniques to create high-fidelity NPC Animations that are genre-defining. A strong ability in hand-keyed animation. Strong Maya animation experience. A strong passio...",
  },
  {
    id: 5,
    title: "Level Designer",
    category: "Game/Level Design",
    description: "Work with design leadership, artists, and other level designers to deliver environments that embody the creative vision of the game. Work alongside other designers, artists, animators and engineers to...",
  }
];