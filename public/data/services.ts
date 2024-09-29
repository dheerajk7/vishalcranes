import A1Image from '../svg/a1.svg';
import A2Image from '../svg/a2.svg';
import A3Image from '../svg/a3.svg';

interface typeOfServiceData {
  id: string;
  title: string;
  subtitle: string;
  imageUrl: string;
}


const serviceData: typeOfServiceData[] = [
  {
    id: "24_hours_cranes",
    title: "24 Hours Cranes",
    subtitle:
      "We provide wide varieties of cranes on hire 24 hours a day as per the requirements of our clients.",
    imageUrl: A1Image.src,
  },
  {
    id: "industrial",
    title: "Industrial",
    subtitle:
      "Specialized crane services for industrial sectors including manufacturing and logistics.",
    imageUrl: A2Image.src,
  },
  {
    id: "construction",
    title: "Construction",
    subtitle:
      "Reliable crane services for construction sites ensuring safety and efficiency.",
    imageUrl: A3Image.src,
  },
  {
    id: "Technical",
    title: "Technical",
    subtitle:
      "Advanced technical crane operations for complex engineering projects.",
    imageUrl: A1Image.src,
  },
  {
    id: "rollers_and_movers",
    title: "Rollers & Movers",
    subtitle:
      "We deal in crane rollers and earth movers that are used for erupting large portions of lands at once.",
    imageUrl: A2Image.src,
  },
  {
    id: "material_lifting",
    title: "Material Lifting",
    subtitle:
      "With our expertise in this domain, we are engaged in providing material lifting crane on hire.",
    imageUrl: A3Image.src,
  },
];

export default serviceData;
