import * as React from "react";
import { useEffect } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grow from "@material-ui/core/Grow";
import { Baloon } from "../../logics/generateBaloons";
import Typography from "@material-ui/core/Typography";
import { OptionPaper } from "../atoms/optionPaper";
import classNames from "classnames";
import { StageSpinner } from "react-spinners-kit";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: "flex"
    },
    paper: (props: Props) => {
      return {
        margin: props.baloon.isOwn
          ? `${theme.spacing(1)}px  auto ${theme.spacing(1)}px ${theme.spacing(
              1
            )}px`
          : `${theme.spacing(1)}px ${theme.spacing(1)}px ${theme.spacing(
              1
            )}px auto`,
        padding: `${theme.spacing(1)}px`,
        backgroundColor: props.baloon.isOwn
          ? "rgba(255,255,255,1)"
          : "rgba(249, 227, 170, 1)",
        maxWidth: "70%",
        textAlign: "left"
      };
    }
  })
);

interface Props {
  isNew: boolean;
  baloon: Baloon;
  countUp: () => void;
  setId: (id: number) => void;
  updateIds: (id: number) => void;
  resetCount: () => void;
}
export const BaloonPaper: React.FC<Props> = (props: Props) => {
  const classes = useStyles(props);
  const [isLoading, setIsLoading] = React.useState(true);
  useEffect(() => {
    const target = document.getElementById("scroll-test");
    if (props.isNew) {
      setTimeout(() => {
        if (target) {
          target.scrollTop = target.scrollHeight;
        }
      }, 200);
      setTimeout(() => {
        setIsLoading(false);
      }, 1600);
      setTimeout(() => {
        if (target) {
          target.scrollTop = target.scrollHeight;
        }
      }, 2400);
      if (props.baloon.isOwn) {
        setTimeout(props.countUp, 2400);
      } else {
        setTimeout(props.countUp, 800);
      }
    }
    return undefined;
  }, []);
  console.log(props.baloon);

  return (
    <div className={classes.container}>
      {/* Conditionally applies the timeout prop to change the entry speed. */}
      {props.isNew ? (
        isLoading && props.baloon.isOwn ? (
          <Grow
            in={true}
            key={0}
            style={{
              transformOrigin: props.baloon.isOwn ? "0 0 0" : "100% 0 0"
            }}
            {...{ timeout: 200 }}
          >
            <Paper
              elevation={4}
              className={classNames(classes.paper, "balloon_paper", {
                is_own: props.baloon.isOwn
              })}
            >
              <StageSpinner size={30} color="#1073bb" loading={isLoading} />
            </Paper>
          </Grow>
        ) : (
          <Grow
            in={true}
            key={1}
            style={{
              transformOrigin: props.baloon.isOwn ? "0 0 0" : "100% 0 0"
            }}
            {...{ timeout: 800 }}
          >
            <Paper
              elevation={4}
              className={classNames(classes.paper, "balloon_paper", {
                is_own: props.baloon.isOwn
              })}
            >
              <Typography>{props.baloon.messageString}</Typography>
              {props.baloon.baloonOptions.map((baloonOption, i) => {
                return (
                  <OptionPaper
                    {...{
                      key: i,
                      baloonOption,
                      setId: props.setId,
                      updateIds: props.updateIds,
                      resetCount: props.resetCount
                    }}
                  />
                );
              })}
            </Paper>
          </Grow>
        )
      ) : (
        <Paper
          elevation={4}
          className={classNames(classes.paper, "balloon_paper", {
            is_own: props.baloon.isOwn
          })}
        >
          <Typography>{props.baloon.messageString}</Typography>
          {props.baloon.baloonOptions.map((baloonOption, i) => {
            return (
              <OptionPaper
                {...{
                  key: i,
                  baloonOption,
                  setId: props.setId,
                  updateIds: props.updateIds,
                  resetCount: props.resetCount
                }}
              />
            );
          })}
        </Paper>
      )}
    </div>
  );
};
