import TestmonialsType from "./testmonialsType";

function TestmonialItem({ title, description, id, imageUrl }: TestmonialsType) {
  return (
    <li
      key={id}
      className="md:flex-[0_0_32%] text-left p-2 gap-1 border border-gray-border rounded"
    >
      <div className="flex gap-1 mb-1">
        <img
          className="rounded-[50%] bg-testmonial-background"
          src={imageUrl}
          alt={title}
          style={{ height: "36px", width: "36px" }}
        />
        <div className="text-base py-1">{title}</div>
      </div>
      <div className="text-sm text-gray-light">{description}</div>
    </li>
  );
}

export default TestmonialItem;
