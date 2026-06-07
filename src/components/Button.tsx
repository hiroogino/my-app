type Props = {
  children: React.ReactNode
  onClick?: () => void
  color?: "primary" | "danger" | "success" | "secondary"
  size?: "sm" | "md" | "lg"
}

const colorStyles: Record<string, React.CSSProperties> = {
  primary: {
    backgroundColor: "var(--color-primary)",
    color: "white",
  },
  danger: {
    backgroundColor: "var(--color-danger)",
    color: "white",
  },
  success: {
    backgroundColor: "var(--color-success)",
    color: "white",
  },
  secondary: {
    backgroundColor: "var(--color-secondary)",
    color: "var(--color-text)",
  },
}

const sizeStyles: Record<string, React.CSSProperties> = {
  sm: { padding: "var(--spacing-sm) var(--spacing-md)", fontSize: "var(--font-sm)" },
  md: { padding: "var(--spacing-md) var(--spacing-lg)", fontSize: "var(--font-md)" },
  lg: { padding: "var(--spacing-lg) var(--spacing-xl)", fontSize: "var(--font-lg)" },
}

function Button({ children, onClick, color = "primary", size = "md" }: Props): JSX.Element {
  return (
    <button
      onClick={onClick}
      style={{
        ...colorStyles[color],
        ...sizeStyles[size],
        borderRadius: "var(--radius-md)",
        border: "none",
        cursor: "pointer",
        fontWeight: "bold",
      }}
    >
      {children}
    </button>
  )
}

export default Button