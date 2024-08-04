import PrimaryButton from "./PrimaryButton";

function MainImage() {
    return (
      <div className="h-96 bg-main-carousel-crane bg-cover bg-center bg-no-repeat relative flex items-center justify-center">
        <div className="h-full w-full absolute bg-overlay"></div>
        <div className="text-center z-1 text-white">
          <p className="text-7xl font-bold">Expert crane services</p>
          <p className="text-xl mb-2 font-light">With decades of experience, we ensure reliable and efficient crane services.</p>
          <PrimaryButton id="call-us">
            Call us
          </PrimaryButton>
        </div>
      </div>
    );
  }
  
  export default MainImage;
  