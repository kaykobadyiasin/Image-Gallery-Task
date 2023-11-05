import { useEffect, useState } from "react";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import ImageGallery from "./components/ImageGallery";
import { Icon } from "@iconify/react";

function App() {
  // State to track the scroll position
  const [scrollPosition, setScrollPosition] = useState(0);

  // Scroll to the top when the component is first loaded
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Event handler to update the scroll position as the user scrolls
  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  // Attach the scroll event listener and remove it when the component unmounts
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="bg-[#F0F9FF] min-h-screen pt-5">
        {/* Navbar: Displays the name and profile photo */}
        <nav className="xl:w-10/12 xl:mx-auto mx-5 bg-white px-5 py-3 shadow-md rounded-full animate__animated animate__fadeInDown">
          <div className="flex items-center justify-between">
            <a href="#" className="lg:text-2xl text-xl font-bold text-[#00226D]">
              Kaykobad <span className="text-[#1179EF]">Yiasin</span>
            </a>
            <img
              src="https://kaykobadyiasin-portfolio.web.app/assets/Kaykobad-Yiasin-Photo-1fe1ad0d.jpg"
              className="w-12 h-12 object-cover rounded-full"
              alt=""
            />
          </div>
        </nav>
        {/* Navbar end */}

        {/* Banner section */}
        <Banner />

        {/* Image Gallery section */}
        <ImageGallery />

        {/* Add a button to scroll back to the top when the user scrolls down */
        scrollPosition > 100 && (
          <button
            className="fixed bottom-16 right-4 bg-[#1179EF] hover:bg-[#00226D] text-white p-2 rounded-full animate__animated animate__pulse animate__infinite infinite animate__slow 2s"
            onClick={() => window.scrollTo(0, 0)}
          >
            <Icon icon="pajamas:scroll-up" className="text-3xl " />
          </button>
        )}
        <hr />

        {/* Footer section */}
        <Footer />

      </div>
    </>
  );
}

export default App;
