import React, { useEffect } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grow from "@material-ui/core/Grow";
import { Baloon } from "../../logics/generateBaloons";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: "flex"
    },
    paper: (props: Props) => {
      return {
        margin: props.baloon.isOwn
          ? `${theme.spacing(1)}px ${theme.spacing(1)}px ${theme.spacing(
              1
            )}px auto`
          : `${theme.spacing(1)}px auto ${theme.spacing(1)}px ${theme.spacing(
              1
            )}px `,
        backgroundColor: props.baloon.isOwn ? "#ffcccc" : "#ccffcc",
        width: "70%"
      };
    },
    svg: {
      width: 100,
      height: 100
    },
    polygon: {
      fill: theme.palette.common.white,
      stroke: theme.palette.divider,
      strokeWidth: 1
    }
  })
);

interface Props {
  isNew: boolean;
  baloon: Baloon;
  countUp: () => void;
}
export const BaloonPaper: React.FC<Props> = (props: Props) => {
  const classes = useStyles(props);
  useEffect(() => {
    const target = document.getElementById("scroll-test");
    if (target) {
      target.scrollTop = target.scrollHeight;
    }
    if (props.isNew) {
      setTimeout(props.countUp, 1000);
    }
    return undefined;
  }, []);

  return (
    <div className={classes.container}>
      {/* Conditionally applies the timeout prop to change the entry speed. */}
      {props.isNew ? (
        <Grow
          in={true}
          style={{ transformOrigin: props.baloon.isOwn ? "100% 0 0" : "0 0 0" }}
          {...{ timeout: 900 }}
        >
          <Paper elevation={4} className={classes.paper}>
            <Typography>{props.baloon.messageString}</Typography>
            {/* {本当はここにオプションを表示する} */}
          </Paper>
        </Grow>
      ) : (
        <Paper elevation={4} className={classes.paper}>
          <Typography>{props.baloon.messageString}</Typography>
          {/* {本当はここにオプションを表示する} */}
        </Paper>
      )}
    </div>
  );
};
