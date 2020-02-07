import * as React from "react";
import { generateBaloons } from "../../logics/generateBaloons";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Paper from "@material-ui/core/Paper";
import { BaloonPaper } from "../molecules/baloon";
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
  const sampleMessags = [
    {
      id: 0,
      optionString: "これはなに？",
      questionersMessageString: "これはなんですか？",
      ownMessages: [
        "これは〇〇というものです",
        "これについて何が知りたいですか？"
      ],
      options: [
        {
          id: 1,
          url: "id_1"
        },
        {
          id: 2,
          url: "id_2"
        }
      ]
    },
    {
      id: 1,
      optionString: "あれはなに？",
      questionersMessageString: "あれはなんですか？",
      ownMessages: [
        "これは〇〇というものです",
        "これについて何が知りたいですか？"
      ],
      options: []
    },
    {
      id: 2,
      optionString: "それはなに？",
      questionersMessageString: "それはなんですか？",
      ownMessages: ["それは〇〇というものです", "終わります"],
      options: []
    }
  ];

  console.warn(generateBaloons(0, sampleMessags));
  const messages = generateBaloons(0, sampleMessags).reduce(
    (prevElems, baloon, index: number) => {
      const isNew = index === count;
      if (index <= count) {
        prevElems.push(
          <BaloonPaper key={index} {...{ baloon, isNew, countUp }} />
        );
      }
      return prevElems;
    },
    []
  );

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
          {messages}
        </div>
      </Paper>
    </div>
  );
}
