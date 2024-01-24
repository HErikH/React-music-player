import Select from "../ui/select/Select";
import { useContext, useState } from "react";
import { SongsContext } from "../../context/SongsContext";
import { GrPlayFill } from "react-icons/gr";
import { IoMdArrowDropdown } from "react-icons/io";
import { HiPlus } from "react-icons/hi";
import { CiSearch } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import { LuArrowUpDown } from "react-icons/lu";
import "./style.scss";

function Header() {
  const { songs, setFilteredSongs, controlFilters, setControlFilters } = useContext(SongsContext)
  const [isHeaderExpanded, setHeaderExpanded] = useState(false)

  function handleSearchChange(e) {
    // * Function for handle changes in input(search) tag and setting state in controlFilters
    // * filters songs by relying on search input(e.target.value) 
    // * and set the filtered result for filteredSongs 
    setControlFilters({search: e.target.value, select: ''})
    if (!e.target.value) return setFilteredSongs(false)
    const result = songs.filter((song) => {
      return (
        song.songName.toLowerCase().includes(e.target.value.toLowerCase()) ||
        song.artistName.toLowerCase().includes(e.target.value.toLowerCase())
      );
    });
    setFilteredSongs(result);
  }

  function handleSelectChange(filterBy) {
    // * Function for handle changes in select tag
    // * sorts songs by relying on selected filter
    // * and set the sorted result for filteredSongs 
    setControlFilters((draft) => {draft.select = filterBy})
    setFilteredSongs((prev) => {
      return [...(controlFilters.search ? prev : songs)].sort((a, b) => {
      return !isNaN(a[filterBy]) ? 
      a[filterBy] - b[filterBy] :
      a[filterBy].localeCompare(b[filterBy])
    })})
  }

  return (
    <header className="header" aria-label="Header">
    <div className={`header__wrapper${isHeaderExpanded ? ' header__wrapper_expanded' : ''}`}>
      <div className="play-add-container">
        <div className="wrapper play-wrapper">
          <button 
          className="button play-button" 
          aria-label="Play all songs"
          onClick={() => console.log('Play All')}
          >
            <GrPlayFill aria-hidden='true' />  
            Play All
          </button>
          <button 
          className="button dropdown-button" 
          aria-label="Dropdown"
          >
            <p className="divider"></p>
            <IoMdArrowDropdown aria-hidden='true' />
          </button>
        </div>
        <div className="wrapper add-wrapper">
          <button 
          className="button add-button" 
          aria-label="Add all songs to a queue"
          onClick={() => console.log('Add All')}
          >
            <HiPlus aria-hidden='true' />
            Add all
          </button>
          <button 
          className="button dropdown-button" 
          aria-label="Dropdown"
          >
            <p className="divider"></p>
            <IoMdArrowDropdown aria-hidden='true' />
          </button>
        </div>
      </div>
      <div className="filters-container"> 
        <div className="select-songs-filter">
        <div className="select-songs-filter__svg-wrapper">
          <LuArrowUpDown aria-label="Select the filter for songs" />
        </div>
        <Select 
        value={controlFilters?.select}
        onChange={handleSelectChange}
        options={[
          {value: 'trackNumber', name: 'Track number'},
          {value: 'songName', name: 'By name'},
          {value: 'artistName', name: 'Author'},
        ]}
        className='select-songs-filter__select'
        ariaLabel="Select the filter for songs"
        />
        </div>
        <div className="search-songs-filter">
          <CiSearch className="search-songs-filter__svg" />
          <input
            className="search-songs-filter__input"
            value={controlFilters?.search}
            onChange={handleSearchChange}
            type="search"
            placeholder="Filter"
            aria-label="Search song"
          />
        </div>
      </div>
      </div>
      <GiHamburgerMenu 
      role='button'
      aria-label="Expand the header"
      className="hamburger" 
      onClick={()=>setHeaderExpanded(!isHeaderExpanded)} 
      />
    </header>
  );
}
export default Header;
