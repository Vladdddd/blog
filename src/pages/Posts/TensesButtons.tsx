import { Button, ButtonGroup } from "@mui/material";
import s from "./Posts.module.scss";

interface OwnProps {
  tenseId: string;
  setTenseId: (tenseId: string) => any;
  tensesOptions: Array<any>;
}

export const TensesButtons: React.FC<OwnProps> = ({
  tenseId,
  setTenseId,
  tensesOptions,
}) => {
  const handleClick = (tense: string) => {
    if (
      tense === tensesOptions[0].id ||
      tense === tensesOptions[1].id ||
      tense === tensesOptions[2].id
    ) {
      setTenseId(tense);
    }
  };

  return (
    <ButtonGroup size="large" variant="outlined">
      {tensesOptions.map((option) => {
        return (
          <Button
            key={option.id}
            className={
              s.btn_filter + " " + (tenseId === option.id ? s.active : "")
            }
            onClick={() => handleClick(option.id)}
          >
            {option.name}
          </Button>
        );
      })}
    </ButtonGroup>
  );
};
