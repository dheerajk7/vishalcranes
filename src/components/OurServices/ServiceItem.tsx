import { ServiceItemType } from "./serviceTypes";
function ServiceItem({ id, title, subtitle, image_url }: ServiceItemType) {
  return (
    <li key={id} className="flex-[0_0_49%] flex text-left p-2 gap-1 border border-gray-border rounded">
      <div>
        <div className="text-base py-1">{title}</div>
        <div className="text-sm text-gray-light">{subtitle}</div>
      </div>
      <img src={image_url} alt={title} />
    </li>
  );
}

export default ServiceItem;
