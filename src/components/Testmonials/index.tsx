import testmonialsData from "../../../public/data/testmonials";
import TestmonialItem from "./TestmonialItem";
import TestmonialsType from "./testmonialsType";

function Testmonials() {
  return (
    <>
      <span id="testmonials" style={{ position: "relative", top: "-40px" }} />
      <section className="m-auto w-fit mt-8 text-center">
        <p className="text-4xl text-black ">Testmonials</p>
        <ul className="px-2 mt-6 flex flex-wrap justify-center max-w-[1100px] gap-2">
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
    </>
  );
}

export default Testmonials;
