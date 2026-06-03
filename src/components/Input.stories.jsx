import Input from "./Input"

export default {
  title: "Components/Input",
  component: Input,
  argTypes: {
    placeholder: {
      control: "text",
      description: "プレースホルダーのテキスト",
    },
    value: {
      control: "text",
      description: "入力欄の値",
    },
    onChange: {
      action: "changed",
      description: "入力イベント",
    },
    onKeyDown: {
      action: "keydown",
      description: "キーボードイベント",
    },
  },
}

export const Default = {
  args: {
    placeholder: "テキストを入力",
    value: "",
  },
}

export const Search = {
  args: {
    placeholder: "名前で検索",
    value: "",
  },
}

export const WithValue = {
  args: {
    placeholder: "新しいユーザー名",
    value: "Hiroyuki Ogino",
  },
}