// @ts-ignore
import serviceData from "/public/data/services";
import { ServiceItemType } from "./serviceTypes";
import ServiceItem from "./ServiceItem";

function OurServices() {
  return (
    <>
    <span style={{position: 'relative', top: "-40px"}} id="services" />
    <section className="m-auto w-fit mt-8 text-center">
      <p className="text-3xl md:text-4xl text-black ">
        Our Services
      </p>
      <p className="text-base md:text-xl px-1 mt-1 font-light">
        Explore our range of professional crane services tailored to meet
        diverse industry needs
      </p>
      <ul className="px-2 md:px-0 mt-6 flex justify-center flex-wrap max-w-[1100px] gap-2">
        {serviceData.map((service: ServiceItemType) => {
          return (
            <ServiceItem
              title={service.title}
              key={service.id}
              subtitle={service.subtitle}
              id={service.id}
              imageUrl={service.imageUrl}
            />
          );
        })}
      </ul>
    </section>
    </>
  );
}

export default OurServices;
