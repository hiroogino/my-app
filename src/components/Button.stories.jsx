import Button from "./Button"

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    color: {
      control: "select",
      options: ["blue", "red", "green", "yellow"],
      description: "ボタンの色",
    },
    children: {
      control: "text",
      description: "ボタンのテキスト",
    },
    onClick: {
      action: "clicked",
      description: "クリックイベント",
    },
  },
}

export const Blue = {
  args: {
    children: "追加",
    color: "blue",
  },
}

export const Red = {
  args: {
    children: "削除",
    color: "red",
  },
}

export const Green = {
  args: {
    children: "保存",
    color: "green",
  },
}

export const Yellow = {
  args: {
    children: "編集",
    color: "yellow",
  },
}