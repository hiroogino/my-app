function Button({ children, onClick, color = "blue" }) {
    const colors = {
      blue: "bg-blue-600 hover:bg-blue-700",
      red: "bg-red-500 hover:bg-red-600",
      green: "bg-green-500 hover:bg-green-600",
      yellow: "bg-yellow-400 hover:bg-yellow-500",
    }
  
    return (
      <button
        onClick={onClick}
        className={`text-white px-4 py-2 rounded text-sm ${colors[color]}`}
      >
        {children}
      </button>
    )
  }
  
  export default Button