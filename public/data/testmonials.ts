import TestmonialImage1 from "../svg/testmonial.svg";
import TestmonialImage2 from "../svg/testmonial2.svg";

interface TestmonialsTypes {
  id: string;
  title: string;
  imageUrl: string;
  description: string;
}

const testmonialsData: TestmonialsTypes[] = [
  {
    id: "1",
    title: "Vedika Kantol",
    imageUrl: TestmonialImage1.src,
    description:
      "All the cranes are fully functional in nature. They can lift heavy machinery.",
  },
  {
    id: "2",
    title: "Rajesh Joshi",
    imageUrl: TestmonialImage2.src,
    description:
      "They make sure that each crane is checked before giving it on hire. Will surely recommend others.",
  },
  {
    id: "3",
    title: "Mugdha Sankpal",
    imageUrl: TestmonialImage1.src,
    description:
      "This company has a wide range of cranes on hire at very competitive price.",
  },
];

export default testmonialsData;
