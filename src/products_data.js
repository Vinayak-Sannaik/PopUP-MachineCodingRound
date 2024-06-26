import productImg1 from "./productImg.png";
import productImg2 from "./productImg.png";

import sampleImg1 from "./sample2.png";
import sampleImg2 from "./sample2.png";
import sampleImg3 from "./sample2.png";
import sampleImg4 from "./sample2.png";

export const products = [
  {
    id: 1,
    img: productImg1,
    name: "Raju Rassibomb",
    MRP: "Raju’s Dreams/-",
    description:
      "This product packs an extra punch, thanks to the literal blood, sweat and tears of a young boy.",
    contents: [
      "10 hand-hurting pieces of rassi bombs",
      "Jilled with great pain",
      "Raju’s hopes",
    ],
    shippingTime: "Before Raju understands that his dreams do not matter.",
    sample_imgs: [sampleImg1, sampleImg2, sampleImg3, sampleImg4],
  },
  {
    id: 2,
    img: productImg2,
    name: "Ladiyon ki Rani Chani",
    MRP: "Chani’s Dreams/-",
    description:
      "This product is the queen of all ladi crackers, handcrafted with the utmost care and sadness.",
    contents: [
      "20 pieces of ladi crackers",
      "Jilled with tears of Chani",
      "Chani’s silent prayers",
    ],
    shippingTime: "Before Chani’s tears dry up.",
    sample_imgs: [sampleImg1, sampleImg2, sampleImg3, sampleImg4],
  },
];
