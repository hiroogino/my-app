import Button from "./Button"

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    color: {
      control: "select",
      options: ["primary", "danger", "success", "secondary"],
      description: "ボタンの色（デザイントークンに対応）",
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
      description: "ボタンのサイズ",
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

export const Primary = {
  args: {
    children: "プライマリ",
    color: "primary",
    size: "md",
  },
}

export const Danger = {
  args: {
    children: "デンジャー",
    color: "danger",
    size: "md",
  },
}

export const Success = {
  args: {
    children: "サクセス",
    color: "success",
    size: "md",
  },
}

export const Secondary = {
  args: {
    children: "セカンダリ",
    color: "secondary",
    size: "md",
  },
}

export const Small = {
  args: {
    children: "Small",
    color: "primary",
    size: "sm",
  },
}

export const Medium = {
  args: {
    children: "Medium",
    color: "primary",
    size: "md",
  },
}

export const Large = {
  args: {
    children: "Large",
    color: "primary",
    size: "lg",
  },
}