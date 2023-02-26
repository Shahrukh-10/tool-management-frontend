import { use } from "react"
import { FaSearch } from "react-icons/fa"

function Search() {
  const [search, setSearch] = useState();

  const searchResult = async() => {
    const res = await searchLink(search)
  }
  return (
    <>
        <div className="searchField flex justify-center space-x-3">
            <input
              className="w-4/5 rounded-md h-10 outline-none pl-3 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-2"
              type="text"
              name=""
              id=""
            />
            <FaSearch color="white" size={28} onClick={search} />
          </div>
    </>
  )
}

export default Search