import WeHaveItem from "./WeHaveItem";
import { weHaveType } from "./weHaveTypes";
// @ts-ignore
import weHaveData from "/public/data/weHave";

function WeHave() {
  return (
    <section id="services" className="m-auto w-fit mt-8 text-center">
      <p className="text-4xl text-black ">We have</p>
      <ul className="mt-6 flex flex-wrap max-w-[1100px] gap-2">
        {weHaveData.map((weHave: weHaveType) => {
          return (
            <WeHaveItem
              key={weHave.id}
              id={weHave.id}
              title={weHave.title}
              subTitle={weHave.subTitle}
              imageUrl={weHave.imageUrl}
            />
          );
        })}
      </ul>
    </section>
  );
}

export default WeHave;
