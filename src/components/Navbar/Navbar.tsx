"use client";
import { useState } from "react";
import PrimaryButton from "../PrimaryButton";
import MenuCloseImage from "../../../public/svg/menuclosed.svg";
import MenuOpenedImage from "../../../public/svg/menuopen.svg";
import Image from "next/image";

function Navbar() {
  const [isExpanded, setIsExpanded] = useState(false);

  function handleExpandCollapse() {
    setIsExpanded((prevState) => !prevState);
  }

  return (
    <nav className="bg-white fixed top-0 w-full z-2">
      <div className="mx-auto max-w-7xl px-2 lg:px-6 lg:px-8">
        <div className="relative flex  items-center justify-between h-20">
          <div className="absolute inset-y-0 left-0 flex items-center lg:hidden">
            <button
              type="button"
              className="relative inline-flex items-center justify-center"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={handleExpandCollapse}
            >
              {isExpanded ? (
                <Image
                  src={MenuOpenedImage}
                  alt="close"
                  style={{ height: "44px" }}
                />
              ) : (
                <Image
                  src={MenuCloseImage}
                  alt="open"
                  style={{ height: "44px" }}
                />
              )}
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center lg:items-stretch lg:justify-start">
            <a href="#" className="flex flex-shrink-0 items-center text-blue text-xl font-bold">
              Vishal Crane Service
            </a>
            <div className="hidden lg:ml-6 lg:block">
              <div className="flex space-x-4 xl:ml-4">
                <a
                  href="#services"
                  className="xl:px-4 border-b-4 border-white py-2 text-lg font-medium text-gray-dark hover:border-b-4 hover:border-purple hover:text-purple"
                >
                  Our services
                </a>
                <a
                  href="#wehave"
                  className="xl:px-4 border-b-4 border-white py-2 text-lg font-medium text-gray-dark hover:border-b-4 hover:border-purple hover:text-purple"
                >
                  We have
                </a>
                <a
                  href="#testmonials"
                  className="xl:px-4 border-b-4 border-white py-2 text-lg font-medium text-gray-dark hover:border-b-4 hover:border-purple hover:text-purple"
                >
                  Testmonials
                </a>
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 lg:static lg:inset-auto lg:ml-6 lg:pr-0 hidden lg:ml-6 lg:block">
            <PrimaryButton id="#contactus">Conctact us</PrimaryButton>
          </div>
        </div>
      </div>

      {isExpanded && (
        <div
          className="lg:hidden"
          id="mobile-menu"
          onClick={() => {
            setIsExpanded(() => false);
          }}
        >
          <div className="border-collapse">
            <a
              href="#services"
              className="border-collapse block px-4 py-2 text-base font-medium text-gray-300 border-t border-gray-border"
            >
              Our services
            </a>
            <a
              href="#wehave"
              className="border-collapse block px-4 py-2 text-base font-medium text-gray-300 border-y border-gray-border"
            >
              We have
            </a>
            <a
              href="#testmonials"
              className="block px-4 py-2 text-base font-medium text-gray-300 border-b border-gray-border"
            >
              Testmonials
            </a>
            <a
              href="#contactus"
              className="block px-4 py-2 text-base font-medium text-gray-300 border-b border-gray-border"
            >
              Contact us
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
