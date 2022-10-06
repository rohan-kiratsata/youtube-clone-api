import {
  FiYoutube,
  FiTrendingUp,
  FiGlobe,
  FiCode,
  FiMusic,
  FiHome,
} from "react-icons/fi";
import { MdOutlineScience } from "react-icons/md";
import { HiOutlineAcademicCap } from "react-icons/hi";

export const categories = [
  { id: 1, name: "Home", icon: <FiHome /> },
  { id: 2, name: "Trending", icon: <FiTrendingUp /> },
  { id: 3, name: "Explore", icon: <FiGlobe /> },
  { id: 4, name: "Coding", icon: <FiCode /> },
  { id: 5, name: "Music", icon: <FiMusic /> },
  { id: 6, name: "Science", icon: <MdOutlineScience /> },
  { id: 7, name: "Education", icon: <HiOutlineAcademicCap /> },
];

export const ICONS = {
  Youtube: <FiYoutube />,
};
