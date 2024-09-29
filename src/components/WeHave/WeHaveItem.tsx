import { weHaveType } from "./weHaveTypes";

function WeHaveItem({ id, title, subTitle, imageUrl }: weHaveType) {
  return (
    <li
      key={id}
      className="flex-[0_0_47%] md:flex-[0_0_32%] p-2 gap-1 border border-gray-border rounded"
    >
      <img src={imageUrl} alt={title} />
      <div className="text-base pt-2">{title}</div>
      {/* <div className="text-sm text-gray-light">{subTitle}</div> */}
    </li>
  );
}

export default WeHaveItem;
