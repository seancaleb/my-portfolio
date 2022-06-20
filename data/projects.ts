import { nanoid } from "nanoid";
import { Project } from "../types";
import crypto from "../public/projects/crypto.png";
import ecommerce from "../public/projects/ecommerce.png";
import movie from "../public/projects/movie.png";

const projects: Project[] = [
  {
    id: nanoid(),
    title: "Crypto web application",
    description:
      "A demo crypto application that uses the coingecko api to fetch data related to cryptocurrencies. This project shows the statistical graph of prices per crypto coin.",
    alt: "Crypto landing page",
    link: "https://sn-crypto.vercel.app/",
    image: {
      ...crypto,
      mainSrc: "/projects/crypto.png",
    },
  },
  {
    id: nanoid(),
    title: "Ecommerce web application",
    description:
      "An ecommerce web application that integrates Commerce JS to display storefront products. It uses firebase auth to allow users to register and login to save their cart and wishlists.",
    alt: "Ecommerce  landing page",
    link: "https://sn-commerce.vercel.app/",
    image: {
      ...ecommerce,
      mainSrc: "/projects/ecommerce.png",
    },
  },
  {
    id: nanoid(),
    title: "Movie web application",
    description:
      "A demo movie application that uses the tmdb api to fetch data related to movies and casts. This project comes up with search features for particular movies and celebrities.",
    alt: "Movie landing page",
    link: "https://sn-movie-react-app.vercel.app/",
    image: {
      ...movie,
      mainSrc: "/projects/movie.png",
    },
  },
];

export default projects;
