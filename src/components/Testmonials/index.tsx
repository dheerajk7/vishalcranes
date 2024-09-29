import testmonialsData from "../../../public/data/testmonials";
import TestmonialItem from "./TestmonialItem";
import TestmonialsType from "./testmonialsType";

function Testmonials() {
  return (
    <section id="services" className="m-auto w-fit mt-8 text-center">
      <p className="text-4xl text-black ">Testmonials</p>
      <ul className="mt-6 flex flex-wrap max-w-[1100px] gap-2">
        {testmonialsData.map((testmonial: TestmonialsType) => (
          <TestmonialItem
            key={testmonial.id}
            id={testmonial.id}
            title={testmonial.title}
            description={testmonial.description}
            imageUrl={testmonial.imageUrl}
          />
        ))}
      </ul>
    </section>
  );
}

export default Testmonials;
