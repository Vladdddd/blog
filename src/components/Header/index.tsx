import s from "./Header.module.scss";

import { NavLink } from "react-router-dom";
import Button from "@mui/material/Button";
import HomeIcon from "@mui/icons-material/HomeOutlined";

import { HeaderMenu } from "./Menu";
import { grammarMenu, vocabularyMenu } from "./MenuItems";

const checkActive = (props: { isActive: boolean }) => {
  return props.isActive ? `${s.active}` : ``;
};

interface OwnProps {}

export const Header: React.FC<OwnProps> = () => {

  return (
    <div className={s.root}>
      <div className={s.blog}>
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
      </div>
    </div>
  );
};
