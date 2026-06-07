export default {
    title: "Design Tokens/Overview",
  }
  
  // カラートークン
  const colors = [
    { name: "primary", value: "var(--color-primary)", hex: "#2563eb" },
    { name: "primary-hover", value: "var(--color-primary-hover)", hex: "#1d4ed8" },
    { name: "danger", value: "var(--color-danger)", hex: "#ef4444" },
    { name: "danger-hover", value: "var(--color-danger-hover)", hex: "#dc2626" },
    { name: "success", value: "var(--color-success)", hex: "#22c55e" },
    { name: "success-hover", value: "var(--color-success-hover)", hex: "#16a34a" },
    { name: "secondary", value: "var(--color-secondary)", hex: "#e2e8f0" },
    { name: "text", value: "var(--color-text)", hex: "#181a24" },
    { name: "text-muted", value: "var(--color-text-muted)", hex: "#6b7280" },
  ]
  
  // スペーシングトークン
  const spacings = [
    { name: "spacing-sm", value: "var(--spacing-sm)", size: "0.5rem / 8px" },
    { name: "spacing-md", value: "var(--spacing-md)", size: "1rem / 16px" },
    { name: "spacing-lg", value: "var(--spacing-lg)", size: "1.5rem / 24px" },
    { name: "spacing-xl", value: "var(--spacing-xl)", size: "2rem / 32px" },
  ]
  
  // フォントサイズトークン
  const fontSizes = [
    { name: "font-sm", value: "var(--font-sm)", size: "0.875rem / 14px" },
    { name: "font-md", value: "var(--font-md)", size: "1rem / 16px" },
    { name: "font-lg", value: "var(--font-lg)", size: "1.25rem / 20px" },
    { name: "font-xl", value: "var(--font-xl)", size: "1.5rem / 24px" },
    { name: "font-2xl", value: "var(--font-2xl)", size: "2rem / 32px" },
  ]
  
  // カラー一覧
  export const Colors = () => (
    <div style={{ padding: "2rem" }}>
      <h2 style={{ marginBottom: "1rem", fontSize: "1.25rem", fontWeight: "bold" }}>
        カラートークン
      </h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1rem" }}>
        {colors.map((color) => (
          <div key={color.name} style={{ border: "1px solid #e2e8f0", borderRadius: "0.5rem", overflow: "hidden" }}>
            <div style={{ backgroundColor: color.value, height: "80px" }} />
            <div style={{ padding: "0.75rem" }}>
              <p style={{ fontWeight: "bold", fontSize: "0.875rem" }}>--color-{color.name}</p>
              <p style={{ color: "#6b7280", fontSize: "0.75rem" }}>{color.hex}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
  
  // スペーシング一覧
  export const Spacing = () => (
    <div style={{ padding: "2rem" }}>
      <h2 style={{ marginBottom: "1rem", fontSize: "1.25rem", fontWeight: "bold" }}>
        スペーシングトークン
      </h2>
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        {spacings.map((spacing) => (
          <div key={spacing.name} style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <div
              style={{
                backgroundColor: "var(--color-primary)",
                height: "1rem",
                width: spacing.value,
                minWidth: "4px",
              }}
            />
            <div>
              <p style={{ fontWeight: "bold", fontSize: "0.875rem" }}>--{spacing.name}</p>
              <p style={{ color: "#6b7280", fontSize: "0.75rem" }}>{spacing.size}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
  
  // フォントサイズ一覧
  export const Typography = () => (
    <div style={{ padding: "2rem" }}>
      <h2 style={{ marginBottom: "1rem", fontSize: "1.25rem", fontWeight: "bold" }}>
        タイポグラフィトークン
      </h2>
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        {fontSizes.map((font) => (
          <div key={font.name} style={{ display: "flex", alignItems: "center", gap: "1rem", borderBottom: "1px solid #e2e8f0", paddingBottom: "1rem" }}>
            <span style={{ fontSize: font.value, fontWeight: "bold", minWidth: "200px" }}>
              あいうえお Aa
            </span>
            <div>
              <p style={{ fontWeight: "bold", fontSize: "0.875rem" }}>--{font.name}</p>
              <p style={{ color: "#6b7280", fontSize: "0.75rem" }}>{font.size}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )