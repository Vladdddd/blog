import s from "./Welcome.module.scss";

import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export const Welcome = () => {
  return (
    <div className={s.root}>
      <div className={s.background}></div>
      <div className={s.inner}>
        <div className={s.text}>
          <h1 className={s.title}>
            <span className={s.name}>
              English<span className={s.secondary}>Blog</span>.
            </span>{" "}
            is a free website for English learners
          </h1>
          <h1 className={s.explanation}>
            You can improve your English story, English vocabulary, English
            grammar, English speaking, English writing, English idioms
          </h1>
          <Button className={s.try_button} variant="contained">
            <Link to="/posts/tenses">Get started</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
