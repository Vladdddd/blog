import { Link } from "react-router-dom";
import s from "./Post.module.scss";

import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import IconButton from "@mui/material/IconButton";
import { useMemo } from "react";

type OwnProps = {
  post: any;
  id: string | null;
};

const cutText = (caption: string) => {
  return caption.length > 20 ? caption.slice(0, 20) + "..." : caption;
};

export const Post: React.FC<OwnProps> = ({ post, id }) => {
  const postTitle = useMemo(() => cutText(post ? post.title : ""), [post]);
  const createdAt = post.createdAt.slice(0, 10);

  return (
    <div className={s.root}>
      {post.imageUrl ? (
        <img src={`${process.env.REACT_APP_API_URL}${post.imageUrl}`} alt="" />
      ) : (
        ""
      )}

      <div className={s.description}>
        <Link to={`/posts/${post._id}`}>
          <h1 className={s.title}>{postTitle}</h1>
        </Link>
        <div className={s.user}>
          <p className={s.user_item}>
            <PersonOutlineOutlinedIcon className={s.text_icon} />
            <span className={s.text_item}>{post.user.fullName}</span>
          </p>
          <p className={s.user_item}>
            <AccessTimeOutlinedIcon className={s.text_icon} />
            <span className={s.text_item}>{createdAt}</span>
          </p>
        </div>

        <div className={s.border}></div>
      </div>

      <div className={s.bottom}>
        <p>Elementary - Upper Intermediate</p>
        <Link to={`/posts/${post._id}`}>
          <IconButton className={s.arrow_icon}>
            <EastOutlinedIcon />
          </IconButton>
        </Link>
      </div>
    </div>
  );
};
