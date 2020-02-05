import * as React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Paper from "@material-ui/core/Paper";
import { Chat } from "./chat";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    appBar: {
      borderRadius: "4px 4px 0 0 / 4px 4px 0 0"
    },
    contentBlock: {
      overflowY: "scroll",
      height: "300px"
    },
    paper: {},
    menuButton: {
      marginRight: theme.spacing(2)
    },
    title: {
      flexGrow: 1
    }
  })
);

export default function ButtonAppBar() {
  const classes = useStyles();

  const [checked, setChecked] = React.useState(false);
  const handleChange = () => {
    setChecked(prev => !prev);
  };

  const [count, setCount] = React.useState(0);
  const countUp = () => {
    setCount(count => ++count);
  };

  const a = new Array(10).fill(0).reduce((a, _, index: number) => {
    const isNew = index === count;
    if (index <= count) {
      a.push(<Chat countUp={countUp} key={index} isNew={isNew} />);
    }
    return a;
  }, []);

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <AppBar className={classes.appBar} position="static">
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              News
            </Typography>
            <FormControlLabel
              control={<Switch checked={checked} onChange={handleChange} />}
              label="Show"
            />
            <Button color="inherit">Icon1</Button>
            <Button color="inherit">Icon2</Button>
          </Toolbar>
        </AppBar>
        <div className={classes.contentBlock} id={"scroll-test"}>
          {a}
        </div>
      </Paper>
    </div>
  );
}
