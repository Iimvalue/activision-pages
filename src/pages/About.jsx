export default function About() {
  return (
    <div className="text-white">
      <section className="relative h-[600px]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/company/about/atvi-about-hero.jpg)",
          }}
        />
      </section>

      <section className="py-12 px-4 max-w-6xl text-center mx-auto">
        <div className="space-y-12">
          <div className="space-y-6 ">
            <h2 className="text-4xl font-bold ">Our Mission</h2>
            <hr className="text-gray-500" />
            <p className="text-lg text-justify">
              At Activision, we strive to create the most iconic brands in
              gaming and entertainment. We’re driven by our mission to deliver
              unrivaled gaming experiences for the world to enjoy, together.
              Home to iconic franchises like Call of Duty®, Crash Bandicoot™,
              and Tony Hawk’s™ Pro Skater™, we're a global leader in interactive
              entertainment. Our goal? Delight millions with innovative, fun,
              and engaging games. With a legacy of success, we're pushing
              boundaries with cutting-edge technology and inclusive practices.
              Join us in delivering unforgettable entertainment and seize the
              chance to level up your career.{" "}
            </p>
          </div>

          <div className="space-y-6">
            <h2 className="text-4xl font-bold">Activate Your Future</h2>
            <hr className="text-gray-500" />
            <p>
              We unite our global player community with epic entertainment,
              focusing on three core pillars:
            </p>
            <ul className="pl-6 space-y-2 list-none">
              <li>People - fostering talent and learning opportunities.</li>
              <li>Innovation - consistently pushing to iterate and evolve.</li>
              <li>Excellence - delivering high-quality games consistently.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Our Values</h2>
        <hr className="text-gray-500" />

        <img
          src="https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/company/about/values/atvi-values.png"
          alt="Activision Values"
          className="mx-auto object-contain mb-8"
        />
        <a
          href="#"
          className="bg-[rgb(7_104_175)]/70 border-2 border-[#0768af] text-center rounded-full text-base font-bold w-70"
          style={{ padding: "1rem" }}
        >
          LEARN MORE
        </a>
      </section>

      <section className="py-12 px-4 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center">
          Our Leadership Team
        </h2>
        <hr className="text-gray-500 my-10" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {leadership.map((member) => (
            <div key={member.name} className="text-center">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-auto mb-4 rounded-full"
              />
              <p className="font-bold text-xl">{member.name}</p>
              <p>{member.title}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-12 px-4 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center">Our Games</h2>
        <hr className="text-gray-500 my-10" />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {games.map((game) => (
            <a
              key={game.title}
              href={game.link}
              className="group relative block"
            >
              <div
                className="aspect-square bg-cover bg-center rounded-lg 
              transition-transform duration-300 
              hover:scale-105 transform cursor-pointer"
                style={{ backgroundImage: `url(${game.image})` }}
              />
              <div className="mt-2 text-center">
                <p className="font-semibold ">{game.title}</p>
                <p className="text-sm text-gray-500">{game.rating}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="py-12 px-4 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center">Our Studios</h2>
        <hr className="text-gray-500 my-10" />

        <div className="flex flex-wrap justify-center gap-8">
          {studios.map((studio) => (
            <a
              key={studio.name}
              href={studio.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={studio.logo}
                alt={studio.name}
                className="h-16 w-auto"
              />
            </a>
          ))}
        </div>
      </section>

      <section className="relative min-h-[500px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-no-repeat h-100  bg-center z-0"
          style={{
            backgroundImage:
              "url(https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/home/assets/joinus-banner-img-spyro.png)",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/50 to-black/80" />
        </div>

        <div className="relative z-10 container mx-auto px-4 py-16 md:flex md:items-center md:min-h-[500px]">
          <div className="md:w-1/2 mb-12 md:mb-0 text-white">
            <h2 className="text-4xl font-bold text-[#0768af] p-5">HAVE FUN</h2>
            <p className="text-gray-300 font-bold text-sm pb-5">
              LEARN MORE ABOUT JOB OPPORTUNITIES
            </p>
            <a
              href="#"
              className="flex justify-center bg-transparent border border-white text-center rounded-full text-base font-bold w-60 p-3"
            >
              JOIN US
            </a>
          </div>

          <div className="md:w-1/2 text-white md:pl-12">
            <h3 className="text-2xl font-bold mb-6">Our Teams</h3>
            <div className="grid grid-cols-2 gap-4">
              {[
                "Game Design",
                "Art & Animation",
                "Brand Management",
                "Production",
                "Quality Assurance",
                "Customer Support",
                "Studio Operations",
                "Programming",
                "Finance & Accounting",
                "Human Resources",
              ].map((team) => (
                <p key={team} className="text-lg">
                  {team}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Sample data - replace with actual content
const leadership = [
  {
    name: "Rob Kostich",
    title: "President",
    image:
      "https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/company/about/leadership/rob-kostich.jpg",
  },
  {
    name: "Josh Taub",
    title: "Chief Operating Officer",
    image:
      "https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/company/about/leadership/josh-taub.jpg",
  },
  {
    name: "Suzie Carr",
    title: "Chief People Officer",
    image:
      "https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/company/about/leadership/suzie-carr.jpg",
  },
  {
    name: "Terri Durham",
    title: "SVP & General Counsel",
    image:
      "https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/company/about/leadership/terri-durham.jpg",
  },
  {
    name: "David Stohl",
    title: "Head of Development, Call of Duty",
    image:
      "https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/company/about/leadership/dave-stohl.jpg",
  },
  {
    name: "Pat Kelly",
    title: "Head of Creative, Call of Duty",
    image:
      "https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/company/about/leadership/patt-kelly.jpg",
  },
  {
    name: "Tyler Bahl",
    title: "SVP, Head of Marketing",
    image:
      "https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/company/about/leadership/tyler-bahl.jpg",
  },
  {
    name: "Natasha Tatarchuk",
    title: "SVP, Chief Technology Officer",
    image:
      "https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/company/about/leadership/natasha.jpg",
  },
  {
    name: "Matt Cox",
    title: "GM, Call of Duty",
    image:
      "https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/company/about/leadership/matt-cox.jpg",
  },
];

const games = [
  {
    title: "Call of Duty Black Ops 6",
    image:
      "https://www.activision.com/content/dam/atvi/support/contact-us/BO6-FOB.jpg",
    rating: "Mature 17+",
    link: "https://www.activision.com/games/call-of-duty/call-of-duty-black-ops-6",
  },
  {
    title: "Call of Duty®: Warzone",
    image:
      "https://www.activision.com/content/dam/atvi/callofduty/cod-touchui/warzone/common/wz-boxart.jpg",
    rating: "Mature 17+",
    link: "https://www.activision.com/games/call-of-duty/call-of-duty-warzone",
  },
  {
    title: "Call of Duty Modern Warfare III",
    image:
      "https://www.activision.com/content/dam/atvi/activision/games/call-of-duty/call-of-duty-modern-warfare-iii/mwiii-boxart.jpg",
    rating: "Mature 17+",
    link: "https://www.activision.com/games/call-of-duty/call-of-duty-modern-warfare-3",
  },
  {
    title: "Crash Team Rumble",
    image:
      "https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/games/game-details/crash-bandicoot/crash-team-rumble/CTRumble_KEYART_SEASON2_1080X1350_AVAILABLE_NOW.jpg",
    rating: "Everyone 10+",
    link: "https://www.activision.com/games/crash/crash-team-rumble",
  },
  {
    title: "Tony Hawk's™ Pro Skater™ 1 + 2",
    image:
      "https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/games/game-details/tony-hawk/tony-hawk-pro-skater-1-2/thps-1-2-boxart.png",
    rating: "Teen",
    link: "https://www.activision.com/games/tony-hawk/tony-hawks-pro-skater-1-2",
  },
  {
    title: "Call of Duty®: Mobile",
    image:
      "https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/games/game-details/call-of-duty/mobile/codm-boxart.jpg",
    rating: "Mature 17+",
    link: "https://www.activision.com/games/call-of-duty/call-of-duty-mobile",
  },
  {
    title: "Sekiro®: Shadows Die Twice",
    image:
      "https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/games/game-details/sekiro/shadows-die-twice/sekiro-boxart.jpg",
    rating: "Mature 17+",
    link: "https://www.activision.com/games/sekiro/sekiro-shadows-die-twice",
  },
  {
    title: "SPYRO® Reignited Trilogy",
    image:
      "https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/games/game-details/spyro/reignited-trilogy/spyro-boxart.png",
    rating: "Everyone 10+",
    link: "https://www.activision.com/games/spyro/spyro-reignited-trilogy",
  },
];
const studios = [
  {
    name: "Treyarch",
    logo: "https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/company/about/studios/logo_treyarch.png",
    link: "https://www.treyarch.com",
  },
  {
    name: "Infinity Ward",
    logo: "https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/company/about/studios/logo_infinityward.png",
    link: "https://www.infinityward.com",
  },
  {
    name: "High Moon Studios",
    logo: "https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/company/about/studios/logo_highmoon-studios.png",
    link: "https://www.highmoonstudios.com",
  },
  {
    name: "Beenox",
    logo: "https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/company/about/studios/logo_beenox.png",
    link: "https://beenox.com/en/",
  },
  {
    name: "Sledgehammer Games",
    logo: "https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/company/about/studios/logo_sledgehammer.png",
    link: "https://www.sledgehammergames.com",
  },
  {
    name: "Raven Software",
    logo: "https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/company/about/studios/logo_raven.png",
    link: "https://www.ravensoftware.com",
  },
  {
    name: "Toys for Bob",
    logo: "https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/company/about/studios/logo-toysforbob.png",
    link: "https://www.toysforbob.com",
  },
  {
    name: "Activision Shanghai Studios",
    logo: "https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/company/about/studios/logo_atvi-shanghai-studio.png",
    link: "", // No link provided in original HTML
  },
  {
    name: "Demonware",
    logo: "https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/company/about/studios/logo_demonware.png",
    link: "https://www.demonware.net",
  },
];

const teams = [
  "Game Design",
  "Art & Animation",
  "Brand Management",
  // Add other teams
];
