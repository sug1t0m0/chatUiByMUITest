import * as React from "react";
import { generateBaloons, Baloon } from "../../logics/generateBaloons";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Paper from "@material-ui/core/Paper";
import { BaloonPaper } from "../molecules/baloonPaper";
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
      height: "150px"
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
  const resetCount = () => {
    setCount(0);
  };

  const [id, setId] = React.useState(0);

  const [ids, setIds] = React.useState([0]);
  const updateIds = (id: number) => {
    const nextIds = ids.concat(id);
    setIds(nextIds);
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
        "あれはは〇〇というものです",
        "あれについて何も知りたくないですね？"
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

  const BaloonPapers = ids.reduce((prevBaloonPapers, id, index) => {
    if (index < ids.length - 1) {
      const isNew = false;
      const baloons = generateBaloons(id, sampleMessags).map(
        (b, i): React.Element[] => (
          <BaloonPaper
            key={`${index}${i}`}
            {...{ baloon: b, isNew, countUp, setId, resetCount, updateIds }}
          />
        )
      );
      prevBaloonPapers.push(...baloons);
    } else {
      const baloons = generateBaloons(id, sampleMessags).reduce((pb, b, i) => {
        const isNew = i === count;
        if (i <= count) {
          pb.push(
            <BaloonPaper
              key={`${index}${i}`}
              {...{ baloon: b, isNew, countUp, setId, resetCount, updateIds }}
            />
          );
        }
        return pb;
      }, []);
      prevBaloonPapers.push(...baloons);
    }
    return prevBaloonPapers;
  }, []);
  console.log(BaloonPapers);

  console.warn(generateBaloons(id, sampleMessags));
  const messages = generateBaloons(id, sampleMessags).reduce(
    (prevElems, baloon, index: number) => {
      const isNew = index === count;
      if (index <= count) {
        prevElems.push(
          <BaloonPaper key={index} {...{ baloon, isNew, countUp, setId }} />
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
          {BaloonPapers}
        </div>
      </Paper>
    </div>
  );
}
