import {
  FiYoutube,
  FiTrendingUp,
  FiGlobe,
  FiCode,
  FiMusic,
} from "react-icons/fi";
import { MdOutlineScience } from "react-icons/md";
import { HiOutlineAcademicCap } from "react-icons/hi";

export const categories = [
  { name: "Trending", icon: <FiTrendingUp /> },
  { name: "Explore", icon: <FiGlobe /> },
  { name: "Coding", icon: <FiCode /> },
  { name: "Music", icon: <FiMusic /> },
  { name: "Science", icon: <MdOutlineScience /> },
  { name: "Education", icon: <HiOutlineAcademicCap /> },
];

export const ICONS = {
  Youtube: <FiYoutube />,
};
