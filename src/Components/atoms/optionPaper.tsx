import * as React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { BaloonOption } from "../../logics/generateBaloons";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: "flex"
    },
    paper: (props: Props) => {
      return {
        margin: `${theme.spacing(1)}px`,
        backgroundColor: "#ff2222",
        width: "70%",
        cursor: "pointer"
      };
    }
  })
);

interface Props {
  baloonOption: BaloonOption;
  setId: (id: number) => void;
}
export const OptionPaper: React.FC<Props> = (props: Props) => {
  const classes = useStyles(props);
  return (
    <Paper
      className={classes.paper}
      onClick={() => props.setId(props.baloonOption.id)}
    >
      <Typography>{props.baloonOption.optionString}</Typography>
    </Paper>
  );
};
