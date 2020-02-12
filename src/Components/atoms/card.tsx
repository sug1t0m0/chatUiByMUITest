import * as React from "react";
import { generateBaloons } from "../../logics/generateBaloons";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import { BaloonPaper } from "../molecules/baloonPaper";
import Loop from "@material-ui/icons/Loop";
import Clear from "@material-ui/icons/Clear";
import IconButton from "@material-ui/core/IconButton";
import classNames from "classnames";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    appBar: {
      borderRadius: "4px 4px 0 0 / 4px 4px 0 0",
      backgroundColor: "#1073bb"
    },
    contentBlock: {
      overflowY: "scroll",
      height: "250px",
      backgroundColor: "#E3F0FA"
    },
    paper: {},
    iconButton: {
      color: "#ffffff"
    },
    title: {
      flexGrow: 1
    }
  })
);

export default function ButtonAppBar() {
  const classes = useStyles();

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
      optionString: "",
      questionersMessageString: "",
      ownMessages: [
        "ようこそ、株式会社〇〇WEBサイトへ！\nお客様のご要望に合わせてサポートいたします。",
        "本日はどういったことにお悩みでしょうか？"
      ],
      options: [
        {
          id: 1,
          url: "id_1"
        },
        {
          id: 2,
          url: "id_2"
        },
        {
          id: 3,
          url: "id_3"
        }
      ]
    },
    {
      id: 1,
      optionString: "会社について知りたい",
      questionersMessageString: "会社について知りたい",
      ownMessages: [
        "株式会社〇〇にご興味をお持ちいただき、ありがとうございます。",
        "株式会社〇〇は業務用の〇〇を製造販売している会社です。"
      ],
      options: [
        {
          id: 4,
          url: "id_4"
        },
        {
          id: 5,
          url: "id_5"
        }
      ]
    },
    {
      id: 2,
      optionString: "発注・配達・納品について",
      questionersMessageString: "発注・配達・納品について",
      ownMessages: [
        "冷凍寿司にご興味をお持ちいただき、ありがとうございます。",
        "製品はドライアイスを同封し配送業者に依頼しお 届けとなります。"
      ],
      options: [
        {
          id: 7,
          url: "id_7"
        },
        {
          id: 8,
          url: "id_8"
        },
        {
          id: 9,
          url: "id_9"
        },
        {
          id: 10,
          url: "id_10"
        }
      ]
    },
    {
      id: 3,
      optionString: "商品について知りたい",
      questionersMessageString: "商品について知りたい",
      ownMessages: [
        "株式会社〇〇にご興味をお持ちいただき、ありがとうございます。",
        "ヒロノの業務用冷凍寿司は自然解凍が可能です。 巻寿司・てまり寿司などの各種お寿司を取り揃えております。"
      ],
      options: [
        {
          id: 11,
          url: "id_11"
        },
        {
          id: 12,
          url: "id_12"
        },
        {
          id: 13,
          url: "id_13"
        },
        {
          id: 14,
          url: "id_14"
        },
        {
          id: 15,
          url: "id_15"
        }
      ]
    },
    {
      id: 4,
      optionString: "会社情報が詳しく知りたい",
      questionersMessageString: "会社情報が詳しく知りたい",
      ownMessages: [
        "会社案内からご確認ください。ダウンロードページ にて会社情報をダウンロードできます。 "
      ],
      options: [
        {
          id: 6,
          url: "id_6"
        }
      ]
    },
    {
      id: 5,
      optionString: "営業日・営業時間は？",
      questionersMessageString: "営業日・営業時間は？",
      ownMessages: [
        "会社案内からご確認ください。受付業務は平日AM9時～PM3時までとなります。"
      ],
      options: [
        {
          id: 6,
          url: "id_6"
        }
      ]
    },
    {
      id: 6,
      optionString: "会社案内へ",
      questionersMessageString: "",
      ownMessages: [],
      options: []
    },
    {
      id: 7,
      optionString: "納品日・納品時間について知りたい",
      questionersMessageString: "納品日・納品時間について知りたい",
      ownMessages: [
        "出荷日は月曜日・水曜日・金曜日となります。",
        "納品は、出荷日から1日又は2日程度で納品となります。",
        "納品時間は〇〇運輸の納品時間指定をご確認ください。"
      ],
      options: []
    },
    {
      id: 8,
      optionString: "商品のリードタイムを教えてください",
      questionersMessageString: "商品のリードタイムを教えてください",
      ownMessages: [
        "出荷日前日の15時までにご注文ください。（繁忙期は別途ご案内いたします）",
        "在庫状況により出荷できない場合があるので発注はお早めにお願いします。"
      ],
      options: []
    },
    {
      id: 9,
      optionString: "配送会社の納品日指定で月曜日や日曜日の納品は可能ですか？",
      questionersMessageString:
        "配送会社の納品日指定で月曜日や日曜日の納品は可能ですか？",
      ownMessages: [
        "品質管理の為ドライアイス同梱しております。 ドライアイスは約2日で消失するので品質保証の対象は出荷日からの最短着日となります。"
      ],
      options: []
    },
    {
      id: 10,
      optionString: "個人での購入できますか？",
      questionersMessageString: "個人での購入できますか？",
      ownMessages: [
        "商品は全て業務用商品となります。表記が業務用表記の為申し訳ございませんが販売することはできません。"
      ],
      options: []
    },
    {
      id: 11,
      optionString: "製品規格書が欲しい",
      questionersMessageString: "製品規格書が欲しい",
      ownMessages: ["製品規格書は商品ページにて確認いただけます。"],
      options: [
        {
          id: 16,
          url: "id_16"
        }
      ]
    },
    {
      id: 12,
      optionString: "見積りが欲しい",
      questionersMessageString: "見積りが欲しい",
      ownMessages: ["見積り依頼からご依頼ください。"],
      options: [
        {
          id: 17,
          url: "id_17"
        }
      ]
    },
    {
      id: 13,
      optionString: "商品のロット・賞味期限が知りたい",
      questionersMessageString: "商品のロット・賞味期限が知りたい",
      ownMessages: ["商品ページでご確認ください。"],
      options: [
        {
          id: 18,
          url: "id_18"
        }
      ]
    },
    {
      id: 14,
      optionString: "解凍方法が知りたい",
      questionersMessageString: "解凍方法が知りたい",
      ownMessages: [
        "解凍方法のページをご覧ください。また、YouTubeでも詳しく説明しています。"
      ],
      options: [
        {
          id: 19,
          url: "id_19"
        }
      ]
    },
    {
      id: 15,
      optionString: "サンプルはもらえますか？",
      questionersMessageString: "サンプルはもらえますか？",
      ownMessages: [
        "無料サンプルをご用意しています。サンプル依頼ページからご依頼ください。 "
      ],
      options: [
        {
          id: 20,
          url: "id_20"
        }
      ]
    },
    {
      id: 16,
      optionString: "商品ページへ",
      questionersMessageString: "",
      ownMessages: [],
      options: []
    },
    {
      id: 17,
      optionString: "お見積り依頼へ",
      questionersMessageString: "",
      ownMessages: [],
      options: []
    },
    {
      id: 18,
      optionString: "商品ページへ",
      questionersMessageString: "",
      ownMessages: [],
      options: []
    },
    {
      id: 19,
      optionString: "解凍方法・動画一覧へ",
      questionersMessageString: "",
      ownMessages: [],
      options: []
    },
    {
      id: 20,
      optionString: "サンプル依頼ページへ",
      questionersMessageString: "",
      ownMessages: [],
      options: []
    }
  ];

  const BaloonPapers = ids.reduce((prevBaloonPapers, id, index) => {
    const activeId = ids[ids.length - 1];
    if (index < ids.length - 1) {
      const isNew = false;
      const baloons = generateBaloons(id, activeId, sampleMessags).map(
        (b, i): React.Element[] => (
          <BaloonPaper
            key={`${index}${i}`}
            {...{ baloon: b, isNew, countUp, setId, resetCount, updateIds }}
          />
        )
      );
      prevBaloonPapers.push(...baloons);
    } else {
      const baloons = generateBaloons(id, activeId, sampleMessags).reduce(
        (pb, b, i) => {
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
        },
        []
      );
      prevBaloonPapers.push(...baloons);
    }
    return prevBaloonPapers;
  }, []);
  console.log(BaloonPapers);

  const onClickLoop = () => {
    if (ids[ids.length - 1] !== 0) {
      updateIds(0);
      resetCount();
    }
  };

  return (
    <div className={classes.root}>
      <Paper className={classNames(classes.paper, "chat_like_ui")}>
        <AppBar
          className={classNames(classes.appBar, "header")}
          position="static"
        >
          <Toolbar>
            <Typography className={classes.title}>お問合せチャット</Typography>
            <IconButton
              className={classNames(classes.iconButton, "icon_button")}
            >
              <Loop onClick={onClickLoop} />
            </IconButton>
            <IconButton
              className={classNames(classes.iconButton, "icon_button")}
            >
              <Clear color="inherit" />
            </IconButton>
          </Toolbar>
        </AppBar>
        <div
          className={classNames(classes.contentBlock, "content_block")}
          id={"scroll-test"}
        >
          {BaloonPapers}
        </div>
      </Paper>
    </div>
  );
}
