const Footer = () => (
  <footer
    id="atvi-footer"
    className="md:bg-[radial-gradient(ellipse_at_50%_-300px,#686868_0%,#000000_90%)] text-white relative"
  >
    <div className="container mx-auto px-4 py-8 flex flex-col items-center md:block">
      <div className="footer-links grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        <div className="footer-col-1">
          <p className="footer-header text-sm font-semibold mb-4">Follow Us</p>
          <ul className="footer-socialmedia-list flex flex-row gap-4">
            {[
              {
                name: "Facebook",
                icon: "https://cdn-icons-png.flaticon.com/512/4406/4406234.png",
              },
              {
                name: "Twitter",
                icon: "https://cdn-icons-png.flaticon.com/512/4628/4628695.png",
              },
              {
                name: "YouTube",
                icon: "https://cdn-icons-png.flaticon.com/512/1384/1384012.png",
              },
              {
                name: "LinkedIn",
                icon: "https://cdn-icons-png.flaticon.com/512/665/665212.png",
              },
              {
                name: "Instagram",
                icon: "https://cdn-icons-png.flaticon.com/512/1362/1362857.png",
              },
            ].map((platform) => (
              <li key={platform.name}>
                <a
                  href="#"
                  className="hover:opacity-75 transition-opacity"
                  target="_blank"
                  data-label={platform.name.toLowerCase()}
                  aria-label={platform.name}
                >
                  <img
                    src={platform.icon}
                    alt={`${platform.name} icon`}
                    className="w-8 h-8 object-contain bg-white rounded-full"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col-2">
          <p className="footer-header text-sm font-semibold mb-4">
            Popular Games
          </p>
          <ul className="space-y-2">
            {[
              "Call of Duty",
              "Tony Hawk Pro Skater",
              "Crash Bandicoot",
              "Spyro",
              "Sekiro",
            ].map((game) => (
              <li key={game}>
                <a
                  href="#"
                  className="text-sm hover:text-gray-300 transition-colors"
                  target="_blank"
                >
                  {game}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col-3">
          <p className="footer-header text-sm font-semibold mb-4">Company</p>
          <ul className="space-y-2">
            {["Press", "Research", "Activision Blizzard", "Contact Us"].map(
              (item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm hover:text-gray-300 transition-colors"
                    target="_blank"
                  >
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>

        <div className="footer-col-4">
          <p className="footer-header text-sm font-semibold mb-4">Legal</p>
          <ul className="space-y-2">
            {[
              "Terms of Use",
              "Privacy Policy",
              "Cookie Policy",
              "Cookie Settings",
              "Online Safety",
              "Applicant Privacy Policy",
              "Your Privacy Choices",
            ].map((item) => (
              <li key={item}>
                {item === "Cookie Settings" ? (
                  <button className="text-sm hover:text-gray-300 transition-colors">
                    {item}
                  </button>
                ) : (
                  <a
                    href="#"
                    className="text-sm hover:text-gray-300 transition-colors"
                  >
                    {item}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="footer-ratings flex justify-between gap-4 mb-8 w-2/3">
        <a href="#" className="footer-ratings-icon">
          <img
            src="https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/common/footer/esrb-e-m.jpg"
            alt="ESRB Rating"
            className="max-w-[80px]"
          />
        </a>
        <a href="#" className="footer-ratings-icon">
          <img
            src="https://www.activision.com/content/dam/atvi/activision/home/footer/ESRB_updated.jpg"
            alt="ESRB Cert"
            className="w-[50px]"
          />
        </a>
      </div>

      <div className="footer-locale-container mb-8 flex justify-center">
        <div className="atvi-locale-selector relative">
          <button
            className="flex items-center rounded cursor-pointer"
            aria-label="Selected region - United States"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/14009/14009832.png"
              alt="USA icon"
              width={25}
            />
          </button>
        </div>
      </div>

      <div className="footer-atvi-logo mb-8 flex justify-center">
        <a href="#" className="footer-logo">
          <img
            src="https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/home/assets/activision-logo.svg"
            alt="Activision"
            className="w-50"
          />
        </a>
      </div>

      <div className="footer-copyright text-sm text-white flex justify-center">
        <p>Copyright 2025 Activision Publishing, Inc.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
