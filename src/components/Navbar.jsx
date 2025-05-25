import { useState } from "react";
import { Link } from "react-router";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [careersOpen, setCareersOpen] = useState(false);
  const [supportOpen, setSupportOpen] = useState(false);

  return (
    <header
      id="activision-header"
      className="fixed top-0 left-0 w-full bg-[#000000cc] border-b border-b-[#B3B6B7] text-white z-50"
      data-sso-domain="atvi"
      data-mobile-bp="1024"
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only block px-4 py-2 bg-white text-black"
      >
        Skip to main content
      </a>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="hidden lg:flex items-center h-16">
          <div className="flex-shrink-0">
            <a href="/" aria-label="Visit the Activision home page">
              <img
                className="h-8 w-auto"
                src="https://www.activision.com/content/dam/atvi/global/firstparty/activision/activision_logo_white-text.png"
                alt="Activision logo"
              />
            </a>
          </div>

          <nav
            className="ml-10 flex space-x-8"
            role="menubar"
            aria-label="Main"
          >
            <Link
              to="/"
              className="px-3 py-2 text-sm font-medium hover:text-gray-300"
              role="menuitem"
            >
              Games
            </Link>

            <div
              className="relative"
              onMouseEnter={() => setAboutOpen(true)}
              onMouseLeave={() => setAboutOpen(false)}
            >
              <button
                className="px-3 py-2 text-sm font-medium flex items-center hover:text-gray-300"
                aria-haspopup="true"
                aria-expanded={aboutOpen}
              >
                About
                <svg
                  className="ml-1 h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                className={`absolute top-full mt-2 w-48 bg-black ring-1 ring-white/10 rounded shadow-lg transition-opacity ${
                  aboutOpen ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
                role="menu"
                aria-label="About sub-menu"
              >
                <Link
                  to="/aboutus"
                  className="block px-4 py-2 text-sm hover:bg-gray-800"
                  role="menuitem"
                >
                  About Us
                </Link>
              </div>
            </div>

            <div
              className="relative"
              onMouseEnter={() => setCareersOpen(true)}
              onMouseLeave={() => setCareersOpen(false)}
            >
              <button
                className="px-3 py-2 text-sm font-medium flex items-center hover:text-gray-300"
                aria-haspopup="true"
                aria-expanded={careersOpen}
              >
                Careers
                <svg
                  className="ml-1 h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                className={`absolute top-full mt-2 w-52 bg-black ring-1 ring-white/10 rounded shadow-lg transition-opacity ${
                  careersOpen ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
                role="menu"
                aria-label="Careers sub-menu"
              >
                <Link
                  to="/search-job"
                  className="block px-4 py-2 text-sm hover:bg-gray-800"
                  role="menuitem"
                >
                  Search Jobs
                </Link>
              </div>
            </div>

            <div
              className="relative"
              onMouseEnter={() => setSupportOpen(true)}
              onMouseLeave={() => setSupportOpen(false)}
            >
              <button
                className="px-3 py-2 text-sm font-medium flex items-center hover:text-gray-300"
                aria-haspopup="true"
                aria-expanded={supportOpen}
              >
                Support
                <svg
                  className="ml-1 h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                className={`absolute top-full mt-2 w-40 bg-black ring-1 ring-white/10 rounded shadow-lg transition-opacity ${
                  supportOpen ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
                role="menu"
                aria-label="Support sub-menu"
              >
                <Link
                  to="/support"
                  className="block px-4 py-2 text-sm hover:bg-gray-800"
                  role="menuitem"
                >
                  Support Home
                </Link>
              </div>
            </div>
          </nav>

          <div className="ml-auto flex items-center ">
            {
              <>
                <a
                  href="#"
                  className="px-3 py-1 flex justify-center bg-[#0d406a] border border-[#0768af] text-center rounded-full text-sm"
                >
                  SIGN UP
                </a>
                <a
                  href="https://s.activision.com/activision/login?redirectUrl=https://www.activision.com/"
                  className="px-3 py-2 text-sm hover:text-gray-300"
                >
                  Login
                </a>
              </>
            }
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="lg:hidden flex items-center justify-between h-16 px-4">
        <button
          id="mobile-menu-btn"
          aria-label="Toggle navigation menu"
          aria-haspopup="true"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex flex-col justify-between w-6 h-5 focus:outline-none"
        >
          <span
            className={`block h-0.5 w-full bg-white transform transition duration-200 ${
              mobileOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-full bg-white transition-opacity ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-full bg-white transform transition duration-200 ${
              mobileOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>

        <Link to="/" aria-label="Activision home">
          <img
            className="h-8 w-auto"
            src="https://www.activision.com/content/dam/atvi/global/firstparty/activision/activision_logo_white-text.png"
            alt="Activision logo"
          />
        </Link>

        <div className="w-6" />
      </div>

      {/* Mobile panel */}
      <div
        className={`lg:hidden bg-black overflow-hidden transition-[max-height] duration-300 ${
          mobileOpen ? "max-h-screen" : "max-h-0"
        }`}
        data-animation="slideFromTop"
      >
        <nav
          className="px-4 pt-2 pb-4"
          role="menu"
          aria-labelledby="mobile-menu-btn"
        >
          {["Games", "About", "Careers", "Support"].map((item) => (
            <div key={item} className="mb-1 border-b-1 border-color-[#5c5d5d]">
              <button
                className="w-full text-left p-5 flex justify-between items-center text-sm hover:bg-gray-800"
                onClick={() => {
                  if (item === "About") setAboutOpen(!aboutOpen);
                  if (item === "Careers") setCareersOpen(!careersOpen);
                  if (item === "Support") setSupportOpen(!supportOpen);
                }}
                aria-expanded={
                  item === "About"
                    ? aboutOpen
                    : item === "Careers"
                    ? careersOpen
                    : item === "Support"
                    ? supportOpen
                    : false
                }
              >
                {item}
                {["About", "Careers", "Support"].includes(item) && (
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                )}
              </button>

              {/* sub-menu */}
              {((item === "About" && aboutOpen) ||
                (item === "Careers" && careersOpen) ||
                (item === "Support" && supportOpen)) && (
                <div className="pl-4">
                  {item === "About" && (
                    <>
                      <Link
                        to="/aboutus"
                        className="block px-3 py-1 text-sm hover:bg-gray-800 rounded"
                      >
                        About Us
                      </Link>
                    </>
                  )}
                  {item === "Careers" && (
                    <>
                      <Link
                        to="/search-job"
                        className="block px-3 py-1 text-sm hover:bg-gray-800 rounded"
                      >
                        Search Jobs
                      </Link>
                    </>
                  )}
                  {item === "Support" && (
                    <>
                      <Link
                        to="/support"
                        className="block px-3 py-1 text-sm hover:bg-gray-800 rounded"
                      >
                        Support Home
                      </Link>
                    </>
                  )}
                </div>
              )}
            </div>
          ))}

          {/* SSO for mobile */}
          <div className="flex justify-center mt-4 pt-4 space-y-2">
            {
              <>
                <a
                  href="#"
                  className="px-3 py-1 flex justify-center bg-[#0d406a] border border-[#0768af] text-center rounded-full text-sm"
                >
                  SIGN UP
                </a>
                <a
                  href="https://s.activision.com/activision/login?redirectUrl=https://www.activision.com/"
                  className="px-3 py-2 text-sm hover:text-gray-300"
                >
                  Login
                </a>
              </>
            }
          </div>
        </nav>
      </div>
    </header>
  );
}
