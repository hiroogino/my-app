function Input({ value, onChange, onKeyDown, placeholder }) {
    return (
      <input
        type="text"
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
        placeholder={placeholder}
        className="border rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
    )
  }
  
  export default Input