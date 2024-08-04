interface typeOfServiceData {
  id: string;
  title: string;
  subtitle: string;
  image_url: string;
}

const serviceData: typeOfServiceData[] = [
  {
    id: "24_hours_cranes",
    title: "24 Hours Cranes",
    subtitle:
      "We provide wide varieties of cranes on hire 24 hours a day as per the requirements of our clients.",
    image_url: "/svg/a1.svg",
  },
  {
    id: "industrial",
    title: "Industrial",
    subtitle:
      "Specialized crane services for industrial sectors including manufacturing and logistics.",
    image_url: "/svg/a2.svg",
  },
  {
    id: "construction",
    title: "Construction",
    subtitle:
      "Reliable crane services for construction sites ensuring safety and efficiency.",
    image_url: "/svg/a3.svg",
  },
  {
    id: "Technical",
    title: "Technical",
    subtitle:
      "Advanced technical crane operations for complex engineering projects.",
    image_url: "/svg/a1.svg",
  },
  {
    id: "rollers_and_movers",
    title: "Rollers & Movers",
    subtitle:
      "We deal in crane rollers and earth movers that are used for erupting large portions of lands at once.",
    image_url: "/svg/a2.svg",
  },
  {
    id: "material_lifting",
    title: "Material Lifting",
    subtitle:
      "With our expertise in this domain, we are engaged in providing material lifting crane on hire.",
    image_url: "/svg/a3.svg",
  },
];

export default serviceData;
