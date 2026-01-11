// 教材リスト（ここに追加していく）
// ✅ 1つ追加するとカードが1枚増える

window.TOKUSHI_MATERIALS = [
  {
    id: "tool-001",
    title: "授業用ICT教材ポータル（今のページ）",
    subject: "ツール",
    unit: "ポータル",
    desc: "カード一覧で教材を探せる入口",
    tags: ["検索", "教科分け"],
    url: "./index.html",
    thumb: "", // サムネ入れるなら例： "./thumbs/tool-001.png"
    file: ""   // Keynote/PDFリンク入れるならここ
  },

  // ✅ 例：いまルートにある Create_tool2.html をカード化
  {
    id: "tool-002",
    title: "Create_tool2（今あるページ）",
    subject: "ツール",
    unit: "作成",
    desc: "既存ページをカードから開くテスト",
    tags: ["テスト"],
    url: "./Create_tool2.html",
    thumb: "",
    file: ""
  },

  // ✅ 例：toolsフォルダ内に教材があるならこう書ける
  // {
  //   id: "math-001",
  //   title: "数量：いくつ？（例）",
  //   subject: "算数",
  //   unit: "数量",
  //   desc: "みほんと おなじ を えらぶ",
  //   tags: ["2〜4択", "導入"],
  //   url: "./tools/math-001/index.html",
  //   thumb: "./thumbs/math-001.png",
  //   file: ""
  // },
];
