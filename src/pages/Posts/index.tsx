import s from "./Posts.module.scss";

import { Post } from "../../components";
import no_data from "../../assets/empty.svg";
import { PostSkeleton } from "../../components/Post/Skeleton";
import Skeleton from "@mui/material/Skeleton";

type PostType = {
  createdAt: string;
  imageUrl: string;
  tags: Array<string>;
  text: string;
  title: string;
  user: any;
  updatedAt: string;
  viewsCount: number;
  _v: number;
  _id: string;
};

const posts: Array<PostType> = [
  {
    createdAt: "5 October 2022",
    imageUrl: "",
    tags: ["a", "b", "c"],
    text: "",
    title: "",
    user: {
      fullname: ""
    },
    updatedAt: "",
    viewsCount: 0,
    _v: 0,
    _id: "1"
  },
];

interface OwnProps {
  theme: string;
}

export const Posts: React.FC<OwnProps> = ({ theme }) => {
  const isLoading = false;
  return (
    <div className={s.root}>
      <div className={s.inner}>
        <h1 className={s.title}>
          {isLoading ? (
            <Skeleton variant="text" width={120} height={60} />
          ) : (
            theme + " (" + posts.length + ")"
          )}
        </h1>

        {isLoading ? (
          <div className={s.skeleton}>
            {[...Array(6)].map((el, index) => {
              return <PostSkeleton key={index} />;
            })}
          </div>
        ) : posts.length ? (
          <div className={s.posts}>
            {posts.map((post: PostType) => {
              return <Post key={post._id} post={post} id={null} />;
            })}
          </div>
        ) : (
          <div className={s.no_data}>
            {isLoading ? "" : <img src={no_data} alt="" />}
          </div>
        )}
      </div>
    </div>
  );
};
