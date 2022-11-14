import s from "./Post.module.scss";

import { useMemo } from "react";
import CreateRoundedIcon from "@mui/icons-material/CreateRounded";
import ListAltRoundedIcon from "@mui/icons-material/ListAltRounded";
import AvTimerRoundedIcon from "@mui/icons-material/AvTimerRounded";

type OwnProps = {
  post: any;
  id: string | null;
};

const cutText = (caption: string) => {
  return caption.length > 20 ? caption.slice(0, 20) + "..." : caption;
};

export const Post: React.FC<OwnProps> = ({ post, id }) => {
  const postTitle = useMemo(() => cutText(post ? post.title : ""), [post]);

  return (
    <div className={s.root}>
      <div className={s.inner}>
        <div className={s.top}>
          <h1 className={s.title}>{postTitle}</h1>
          <div className={s.border_title}></div>
        </div>
        <div className={s.creation}>
          <div className={s.caption}>
            <CreateRoundedIcon />
            <h1>Form</h1>
          </div>
          <div className={s.border}></div>
          <div className={s.main_text + " " + s.container}>
            <div className={s.verbs}>
              <div className={s.verb}>
                <b>+</b>
                <p> {post.verb[0]}</p>
              </div>
              <div className={s.verb}>
                <b>?</b>
                <p> {post.verb[1]}</p>
              </div>
              <div className={s.verb}>
                <b>-</b>
                <p> {post.verb[2]}</p>
              </div>
            </div>
          </div>
        </div>
        <div className={s.border_block}></div>

        <div className={s.examples}>
          <div className={s.caption}>
            <ListAltRoundedIcon />
            <h1>Examples</h1>
          </div>
          <div className={s.border}></div>
          <div className={s.main_text}>
            <p>{post.example}</p>
          </div>
        </div>
        <div className={s.border_block}></div>

        <div className={s.markers}>
          <div className={s.caption}>
            <AvTimerRoundedIcon />
            <h1>Markers</h1>
          </div>
          <div className={s.border}></div>
          <div className={s.main_text}>
            <p>{post.markers}</p>
          </div>
        </div>
        <div className={s.border_block}></div>
        <div className={s.learn_more}>
          <a href={post.url} target="_blank" rel="noreferrer">
            <button className={s.btn}>Learn more</button>
          </a>
        </div>
      </div>
    </div>
  );
};

/*
return (
    <div className={s.root}>
      <div className={s.inner}>
        <div className={s.top}>
          <h1 className={s.title}>{postTitle}</h1>
          <p className={s.explain}>{post.text}</p>
        </div>
        <div className={s.border_title}></div>
        <div className={s.description}>
          <div className={s.desc_item}>
            <CheckIcon className={s.icon} />
            <p>{post.verb}</p>
          </div>
          <div className={s.desc_item}>
            <CheckIcon className={s.icon} />
            <p>{post.markers}</p>
          </div>
          <div className={s.desc_item}>
            <CheckIcon className={s.icon} />
            <p>{post.example}</p>
          </div>
        </div>
        <div className={s.learn_more}>
          <a href={post.url} target="_blank" rel="noreferrer">
            <button className={s.btn}>Learn more</button>
          </a>
        </div>
      </div>
    </div>
  );
*/
