import s from "./Comments.module.scss";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import teacher from "../../assets/teacher.jpg";

const messages = [
  {
    title: "Find your motivation",
    text: `Learning a language is always easier and more fun if you have a
    reason to do so. Be sure to remain focused on that reason, since
    it will help get you through the times when learning seems hard.
    Do you want to learn English to get a job? To travel? To impress
    somebody? Whatever your motivation is, be sure not to lose sight of that motivation`,
  },
  {
    title: "Practice, practice and once more practice",
    text: `There is an old saying that ‘practice makes perfect.’
    You should take every opportunity to use your English speaking skills.
    You can even practise speaking English when you are alone!`,
  },
  {
    title: `Use the language while you are learning English`,
    text: `Don’t be afraid of making mistakes. I know it’s easier said than done, but everybody makes mistakes, even native
    speakers! Don’t let this put you off. Even if you don’t know
    how to say something. Use simple expressions. Sometimes short and simple
    sentences will make you more comfortable and will help you put what you think
    into words`,
  },
];

export const Comments = () => {
  return (
    <div className={s.root}>
      <div className={s.inner}>
        <h1 className={s.title}>Helpful tips for English leaners</h1>
        <div className={s.main_tip}>
          <p>
            It would be excellent if we were able to program a foreign language
            into our brain, but the truth is that learning English takes a lot
            of hard work and dedication . But anyway everything is possible so
            believe in yourselves. You can do it!
          </p>
        </div>
        <div className={s.tips}>
          {messages.map((mess, index) => {
            return (
              <div className={s.tip} key={index}>
                <FormatQuoteIcon className={s.icon} />
                <div className={s.text}>
                  <h1>{mess.title}</h1>
                  <p>{mess.text}</p>
                </div>
                <div className={s.user}>
                  <img src={teacher} alt="" />
                  <div className={s.userInfo}>
                    <h1>Liliia</h1>
                    <p>Teacher</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
