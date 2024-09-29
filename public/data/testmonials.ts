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
    imageUrl: "/svg/testmonial.svg",
    description:
      "All the cranes are fully functional in nature. They can lift heavy machinery.",
  },
  {
    id: "2",
    title: "Rajesh Joshi",
    imageUrl: "/svg/testmonial.svg",
    description:
      "They make sure that each crane is checked before giving it on hire. Will surely recommend others.",
  },
  {
    id: "3",
    title: "Mugdha Sankpal",
    imageUrl: "/svg/testmonial.svg",
    description:
      "This company has a wide range of cranes on hire at very competitive price.",
  },
];

export default testmonialsData;
