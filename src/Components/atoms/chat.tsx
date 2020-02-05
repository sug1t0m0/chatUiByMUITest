import React, { useEffect } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grow from "@material-ui/core/Grow";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: "flex"
    },
    paper: {
      margin: `${theme.spacing(1)}px ${theme.spacing(1)}px ${theme.spacing(
        1
      )}px auto`,
      width: "70%"
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
  countUp: () => void;
}
export const Chat: React.FC<Props> = (props: Props) => {
  const classes = useStyles();
  useEffect(() => {
    const target = document.getElementById("scroll-test");
    target.scrollTop = target.scrollHeight;
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
          style={{ transformOrigin: "0 0 0" }}
          {...{ timeout: 900 }}
        >
          <Paper elevation={4} className={classes.paper}>
            <p>ああああああああああああ</p>
          </Paper>
        </Grow>
      ) : (
        <Paper elevation={4} className={classes.paper}>
          <p>ああああああああああああ</p>
        </Paper>
      )}
    </div>
  );
};
