import WeHaveItem from "./WeHaveItem";
import { weHaveType } from "./weHaveTypes";
// @ts-ignore
import weHaveData from "/public/data/weHave";

function WeHave() {
  return (
    <>
      <span id="wehave" style={{ position: "relative", top: "-40px" }} />
      <section className="m-auto w-fit mt-8 text-center">
        <p className="text-4xl text-black ">We have</p>
        <ul className="px-2 mt-6 flex flex-wrap justify-center max-w-[1100px] gap-2">
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
    </>
  );
}

export default WeHave;
