import { Link } from "react-router-dom";
import SearchInput from "./SearchInput";

const Header = () => {
  return (
    <div className="flex items-center justify-between px-4 border-b bottom-3 h-14 bg-slate-300">
     <div className="flex items-center space-x-2 text-sm">
      <Link to="/" className="text-lg font-bold">Npm Registry</Link>
     </div>
     <div className="w-full max-w-xl ml-4">
      <SearchInput></SearchInput>
     </div>
    </div>
  )
}

export default Header
