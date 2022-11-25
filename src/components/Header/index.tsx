import s from "./Header.module.scss";

import { NavLink } from "react-router-dom";
import Button from "@mui/material/Button";
import HomeIcon from "@mui/icons-material/HomeOutlined";
import PictureAsPdfOutlinedIcon from "@mui/icons-material/PictureAsPdfOutlined";

import { HeaderMenu } from "./Menu";
import { grammarMenu, vocabularyMenu } from "./MenuItems";

const pdf =
  "https://drive.google.com/drive/folders/1hV62J0YzGCEmtNkTbx9yWbAdft5RCiSo?usp=share_link";

const checkActive = (props: { isActive: boolean }) => {
  return props.isActive ? `${s.active}` : ``;
};

interface OwnProps {}

export const Header: React.FC<OwnProps> = () => {
  return (
    <div className={s.root}>
      <NavLink className={s.logo} to="/">
        <h1 className={s.first_title}>English</h1>
        <h1 className={s.second_title}>Blog</h1>
        <h1 className={s.dot}>.</h1>
      </NavLink>

      <div className={s.blog_items}>
        <NavLink className={checkActive} to="/">
          <Button className={s.item}>
            <HomeIcon className={s.icon} />
            Home
          </Button>
        </NavLink>
        <HeaderMenu menu={grammarMenu} />
        <HeaderMenu menu={vocabularyMenu} />
      </div>

      <div className={s.pdf}>
        <a href={pdf} target="_blank" rel="noreferrer">
          <PictureAsPdfOutlinedIcon className={s.pdf_icon} />
        </a>
      </div>
    </div>
  );
};
