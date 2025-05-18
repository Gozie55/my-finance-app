import "../assets/css/SearchInput.css"

interface SearchInputProps {
  placeholder: string
  style?: React.CSSProperties
}

const SearchInput = ({ placeholder, style }: SearchInputProps) => {
  return (
    <div className="search-container">
      <i className="bi bi-search search-icon"></i>
      <input type="text" className="search-input" placeholder={placeholder}
      style={style} />
    </div>
  )
}

export default SearchInput
