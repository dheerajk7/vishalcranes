import PrimaryButton from "./PrimaryButton";

function MainImage() {
    return (
      <div className="h-56  md:h-96 bg-main-carousel-crane bg-cover bg-center bg-no-repeat relative flex items-center justify-center">
        <div className="h-full w-full absolute bg-overlay"></div>
        <div className="text-center z-1 text-white">
          <p className="text-5xl font-bold md:text-7xl">Expert crane services</p>
          <p className="px-2 mt-1 md:mt-0 text-xl mb-2 font-light md:px-0">With decades of experience, we ensure reliable and efficient crane services.</p>
          <PrimaryButton id="#contactus">
            Contact us
          </PrimaryButton>
        </div>
      </div>
    );
  }
  
  export default MainImage;
  