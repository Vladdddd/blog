import s from "./Header.module.scss";

import ArticleIcon from "@mui/icons-material/ArticleOutlined";

import AccessTimeIcon from "@mui/icons-material/AccessTimeOutlined";
import AutoAwesomeMotionIcon from "@mui/icons-material/AutoAwesomeMotionOutlined";
import TravelExploreIcon from "@mui/icons-material/TravelExploreOutlined";
import SubjectIcon from "@mui/icons-material/SubjectOutlined";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumberedOutlined";

import AbcIcon from "@mui/icons-material/AbcOutlined";
import AirplanemodeActiveIcon from "@mui/icons-material/AirplanemodeActiveOutlined";
import EngineeringIcon from "@mui/icons-material/EngineeringOutlined";
import PetsIcon from "@mui/icons-material/PetsOutlined";
import CheckroomIcon from "@mui/icons-material/CheckroomOutlined";
import Face6Icon from "@mui/icons-material/Face6Outlined";
import BlenderIcon from "@mui/icons-material/BlenderOutlined";
import TakeoutDiningIcon from "@mui/icons-material/TakeoutDiningOutlined";
import HouseIcon from "@mui/icons-material/HouseOutlined";
import BugReportIcon from "@mui/icons-material/BugReportOutlined";
import FastfoodIcon from "@mui/icons-material/FastfoodOutlined";

export const grammarMenu = {
  name: "Grammar",
  icon: <ArticleIcon className={s.icon} />,
  menuItems: [
    {
      name: "tenses",
      icon: <AccessTimeIcon className={s.icon} />,
    },
    {
      name: "prepositions",
      icon: <AutoAwesomeMotionIcon className={s.icon} />,
    },
    {
      name: "adjectives",
      icon: <SubjectIcon className={s.icon} />,
    },
    {
      name: "nouns",
      icon: <TravelExploreIcon className={s.icon} />,
    },
    {
      name: "numerals",
      icon: <FormatListNumberedIcon className={s.icon} />,
    },
  ],
};

export const vocabularyMenu = {
  name: "Vocabulary",
  icon: <ArticleIcon className={s.icon} />,
  menuItems: [
    {
      name: "most-useful",
      icon: <AbcIcon className={s.icon} />,
    },
    {
      name: "airport",
      icon: <AirplanemodeActiveIcon className={s.icon} />,
    },
    {
      name: "proffessions",
      icon: <EngineeringIcon className={s.icon} />,
    },
    {
      name: "animals",
      icon: <PetsIcon className={s.icon} />,
    },
    {
      name: "clothes",
      icon: <CheckroomIcon className={s.icon} />,
    },
    {
      name: "appearance",
      icon: <Face6Icon className={s.icon} />,
    },
    {
      name: "cookware",
      icon: <BlenderIcon className={s.icon} />,
    },
    {
      name: "containers",
      icon: <TakeoutDiningIcon className={s.icon} />,
    },
    {
      name: "furniture-and-house",
      icon: <HouseIcon className={s.icon} />,
    },
    {
      name: "birds-and-insects",
      icon: <BugReportIcon className={s.icon} />,
    },
    {
      name: "food",
      icon: <FastfoodIcon className={s.icon} />,
    },
  ],
};