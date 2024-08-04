import PrimaryButton from "./PrimaryButton";

function Navbar() {
  return (
    <nav className="bg-white">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex  items-center justify-between h-20">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="absolute -inset-0.5"></span>
              <span className="sr-only">Open main menu</span>
              ssss
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center text-blue text-xl font-bold">
              Vishal Crane Service
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4 ml-4">
                <a
                  href="#services"
                  className="px-4 border-b-4 border-white py-2 text-sm font-medium text-gray-dark hover:border-b-4 hover:border-purple hover:text-purple"
                >
                  Our services
                </a>
                <a
                  href="#"
                  className="px-4 border-b-4 border-white py-2 text-sm font-medium text-gray-dark hover:border-b-4 hover:border-purple hover:text-purple"
                >
                  We have
                </a>
                <a
                  href="#"
                  className="px-4 border-b-4 border-white py-2 text-sm font-medium text-gray-dark hover:border-b-4 hover:border-purple hover:text-purple"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button
              type="button"
              className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
            >
              <span className="absolute -inset-1.5"></span>
              <span className="sr-only">View notifications</span>
            </button>

            <div className="relative ml-3">
              <PrimaryButton id="user-menu-button">Call us</PrimaryButton>
            </div>
          </div>
        </div>
      </div>

      <div className="sm:hidden" id="mobile-menu">
        <div className="space-y-1 px-2 pb-3 pt-2">
          <a
            href="#"
            className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white"
            aria-current="page"
          >
            Dashboard
          </a>
          <a
            href="#"
            className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
          >
            Team
          </a>
          <a
            href="#"
            className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
          >
            Projects
          </a>
          <a
            href="#"
            className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
          >
            Calendar
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
