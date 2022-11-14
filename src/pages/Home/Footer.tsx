import s from "./Footer.module.scss";

import FacebookIcon from "@mui/icons-material/Facebook";
import MailIcon from "@mui/icons-material/Mail";

export const Footer = () => {
  return (
    <div className={s.root}>
      <p className={s.name}>© 2022 Ukraine EnglishBlog</p>
      <div className={s.contacts}>
        <p>liliyalyshtvan@gmail.com</p>
        <div className={s.border_right}></div>
        <p>+38 (096) 450 73 39</p>
      </div>
      <div className={s.social}>
        <FacebookIcon className={s.icon}/>
        <MailIcon className={s.icon}/>
      </div>
    </div>
  );
};
