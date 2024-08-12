// @ts-ignore
import serviceData from "/public/data/services";
import { ServiceItemType } from "./serviceTypes";
import ServiceItem from "./ServiceItem";

function OurServices() {
  return (
    <section id="services" className="m-auto w-fit mt-8 text-center">
      <p className="text-4xl text-black ">Our Services</p>
      <p className="text-xl font-light">
        Explore our range of professional crane services tailored to meet
        diverse industry needs
      </p>
      <ul className="mt-6 flex flex-wrap max-w-[1100px] gap-2">
        {serviceData.map((service: ServiceItemType) => {
            return <ServiceItem title={service.title} key={service.id} subtitle={service.subtitle} id={service.id} image_url={service.image_url} />
        } )}
      </ul>
    </section>
  );
}

export default OurServices;
