import s from "./Vocabulary.module.scss";

import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";

interface OwnProps {
  letter: string;
  setLetter: (letter: string) => any;
}

const letters = [
  {
    letter: "A",
    value: "0",
  },
  {
    letter: "B",
    value: "1",
  },
  {
    letter: "C",
    value: "2",
  },
  {
    letter: "D",
    value: "3",
  },
  {
    letter: "E",
    value: "4",
  },
  {
    letter: "F",
    value: "5",
  },
  {
    letter: "G",
    value: "6",
  },
  {
    letter: "H",
    value: "7",
  },
  {
    letter: "I",
    value: "8",
  },
  {
    letter: "J",
    value: "9",
  },
  {
    letter: "K",
    value: "10",
  },
  {
    letter: "L",
    value: "11",
  },
  {
    letter: "M",
    value: "12",
  },
  {
    letter: "N",
    value: "13",
  },
  {
    letter: "O",
    value: "14",
  },
  {
    letter: "P",
    value: "15",
  },
  {
    letter: "Q",
    value: "16",
  },
  {
    letter: "R",
    value: "17",
  },
  {
    letter: "S",
    value: "18",
  },
  {
    letter: "T",
    value: "19",
  },
  {
    letter: "U",
    value: "20",
  },
  {
    letter: "V",
    value: "21",
  },
  {
    letter: "W",
    value: "22",
  },
  {
    letter: "Y",
    value: "23",
  },
];

export const Letters: React.FC<OwnProps> = ({ letter, setLetter }) => {
  const handleChange = (event: SelectChangeEvent) => {
    setLetter(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 0, p: 0, width: 100, height: 40 }} size="small">
        <InputLabel id="select-helper-label">Letter</InputLabel>
        <Select
          labelId="select-helper-label"
          className={s.select}
          value={letter}
          label="Letter"
          onChange={handleChange}
        >
          {letters.map((letter) => {
            return (
              <MenuItem
                value={letter.value}
                className={s.item}
                key={letter.value + letter.letter}
              >
                {letter.letter}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </div>
  );
};
