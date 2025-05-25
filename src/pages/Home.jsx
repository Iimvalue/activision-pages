import Carousel from "../components/Carousel";
import CardSection from "../components/CardSection";
import SupportSection from "../components/SupportSection";

export default function Home() {
  const slides = [
    {
      url: "https://www.callofduty.com/cdn/bo6/bo6-gameplay-reveal-trailer-atvi.mp4",
      smallImage:
        "https://imgs.callofduty.com/content/dam/atvi/global/ratings/esrb/cod-hub-esrb-en.png",
      logo: "https://www.activision.com/content/dam/atvi/callofduty/cod-touchui/blackops6/common/black-ops-6-full-logo.png",
      text: "Forced to go rogue. Hunted from Within. ",
      button: "PLAY WITH GAME PASS",
      visitButton: "VISIT SITE",
    },
    {
      url: "https://video.activision.com/activision/cdn/videos/THPS3+4_Reveal_15_Channel_ESRB_16x9_ATVI_Header.mp4",
      smallImage:
        "https://www.activision.com/content/dam/atvi/global/ratings/esrb/Ratingsymbol_e10.png",
      logo: "https://www.activision.com/content/dam/atvi/tony-hawk/chicago/common/PC_LOGO_PRIMARY_NEG_241121.svg",
      text: "Get ready to dash, jump, slide, and bounce.",
      button: "GET NOW",
      visitButton: "VISIT SITE",
    },
    {
      url: "https://www.activision.com/cdn/crash/crash_team_rumble.mp4",
      smallImage:
        "https://www.activision.com/content/dam/atvi/tony-hawk/chicago/common/esrb-rating-en.svg",
      logo: "https://activision.com/content/dam/atvi/Crash/crash-touchui/lava/common/crash-team-rumble-logo.png",
      text: "Available for Xbox Series X|S, Xbox One, PlayStation 4 and 5, Steam, Battle.net, Microsoft PC Store, and Nintendo Switch.",
      button: "PRE ORDER NOW",
      visitButton: "VISIT SITE",
    },
    {
      url: "https://video.activision.com/activision/cdn/videos/call-of-duty-mobile.mp4",
      smallImage:
        "https://imgs.callofduty.com/content/dam/atvi/global/ratings/esrb/cod-hub-esrb-en.png",
      logo: "https://activision.com/content/dam/atvi/callofduty/mobile/home/hero/cod-mobile-logo-v2.png",
      text: "Available Now For iOS and Android!",
      button: "DOWNLOAD NOW",
      visitButton: "VISIT SITE",
    },

    {
      url: "https://video.activision.com/activision/cdn/videos/tony-hawk-pro-1-2.mp4",
      smallImage:
        "https://www.activision.com/content/dam/atvi/global/ratings/esrb/footer-esrb-thps-en.png",
      logo: "https://activision.com/content/dam/atvi/tony-hawk/alcatraz/common/logos/Tony_Hawk-ProSkater1+2-logo.png",
      text: "Available Now For PS4™, XBOX One® & PC!",
      button: "GET NOW",
      visitButton: "VISIT SITE",
    },
  ];

  return (
    <div>
      <div className="w-full">
        <Carousel items={slides} />
      </div>

      <div className="block bg-black">
        <CardSection />
      </div>

      <div className="block">
        <SupportSection />
      </div>
    </div>
  );
}

// {
//       url: "https://video.activision.com/activision/cdn/videos/THPS3+4_Reveal_15_Channel_ESRB_16x9_ATVI_Header.mp4",
//     },
//     {
//       url: "https://www.callofduty.com/cdn/bo6/bo6-gameplay-reveal-trailer-atvi.mp4",
//     },
//     {
//       url: "https://video.activision.com/activision/cdn/videos/tony-hawk-pro-1-2.mp4",
//     },
