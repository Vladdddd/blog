import s from "./Posts.module.scss";

import Skeleton from "@mui/material/Skeleton";
import { useState } from "react";

import { TensesButtons } from "./TensesButtons";
import { Post } from "../../components";
import empty from "../../assets/empty.svg";
import error_img from "../../assets/error.svg";
import { PostSkeleton } from "../../components/Post/Skeleton";
import { useGetThemePostsQuery } from "../../redux/postsApi";

type PostType = {
  example: string;
  title: string;
  theme: string;
  verb: string;
  text: string;
  markers: string;
  _id: number;
};

interface OwnProps {
  theme: string;
}

const tensesOptions = [
  { id: "0", name: "Past" },
  { id: "1", name: "Present" },
  { id: "2", name: "Future" },
];

const otherThemes: any = {
  prepositions: "3",
  adjectives: "4",
  nouns: "5",
  numerals: "6",
};

export const Posts: React.FC<OwnProps> = ({ theme }) => {
  const [tenseId, setTenseId] = useState(tensesOptions[0].id);
  const {
    data: posts = [],
    isLoading,
    isError,
    error,
  } = useGetThemePostsQuery({
    theme: theme === "tenses" ? tenseId : otherThemes[theme],
  });

  if (isError) {
    console.warn(error);
  }

  return (
    <div className={s.root}>
      <div className={s.inner}>
        <div className={s.top}>
          <h1>
            {isLoading ? (
              <Skeleton variant="text" width={120} height={60} />
            ) : (
              theme + " (" + posts.length + ")"
            )}
          </h1>
          <div className={s.filter}>
            {theme === "tenses" ? (
              <TensesButtons
                tenseId={tenseId}
                setTenseId={setTenseId}
                tensesOptions={tensesOptions}
              />
            ) : (
              ""
            )}
          </div>
        </div>

        {isLoading ? (
          <div className={s.skeleton}>
            {[...Array(6)].map((el, index) => {
              return <PostSkeleton key={index} />;
            })}
          </div>
        ) : posts.length ? (
          <div className={s.posts}>
            {posts.map((post: PostType) => {
              return theme === "tenses" ? (
                <Post key={post._id} post={post} id={null} />
              ) : theme === "prepositions" ? (
                <div>Prepositions</div>
              ) : (
                ""
              );
            })}
          </div>
        ) : (
          <div className={s.no_data}>
            {isLoading ? (
              ""
            ) : isError ? (
              <img src={error_img} alt="" />
            ) : (
              <img src={empty} alt="" />
            )}
          </div>
        )}
      </div>
    </div>
  );
};
