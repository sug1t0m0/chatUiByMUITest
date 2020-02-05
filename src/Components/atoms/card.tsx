import * as React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Paper from "@material-ui/core/Paper";

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

  const a = new Array(100).fill(0).map(index => {
    return <div>aaa</div>;
  });

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
            <Button color="inherit">Icon1</Button>
            <Button color="inherit">Icon2</Button>
          </Toolbar>
        </AppBar>
        <div className={classes.contentBlock}>{a}</div>
      </Paper>
    </div>
  );
}
