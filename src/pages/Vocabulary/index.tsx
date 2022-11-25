import s from "./Vocabulary.module.scss";

import { Skeleton } from "@mui/material";
import { useState } from "react";

import { useGetVocabularyQuery } from "../../redux/vocabularyApi";
import empty from "../../assets/empty.svg";
import error_img from "../../assets/error.svg";
import { Letters } from "./Letters";

interface OwnProps {
  theme: string;
}

export const Vocabulary: React.FC<OwnProps> = ({ theme }) => {
  const isMostUseful = theme === "most-useful";
  const [letter, setLetter] = useState("0");
  const {
    data: vocabulary = [],
    isLoading,
    isError,
    error,
  } = useGetVocabularyQuery({
    theme: theme,
    letter: isMostUseful ? letter : "0",
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
              theme + " (" + vocabulary.length + ")"
            )}
          </h1>
          {isMostUseful ? (
            <Letters letter={letter} setLetter={setLetter} />
          ) : (
            ""
          )}
        </div>
        {vocabulary.length ? (
          <div className={s.table_wrapper}>
            <table>
              <tbody>
                <tr>
                  <th className={s.th_n}>№</th>
                  <th>Word</th>
                  <th>Translation</th>
                </tr>
                {vocabulary.map((el: any) => {
                  return (
                    <tr key={el.id}>
                      <td>{el.id + 1}</td>
                      <td>{el.word}</td>
                      <td>{el.translation}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
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
