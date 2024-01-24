import { useContext } from "react";
import { SongsContext } from "../../context/SongsContext";
import SongRow from '../songRow/SongRow'
import './style.scss'

function SongList() {
  const { songs, filteredSongs } = useContext(SongsContext)

  return (
    <table className='songs-list' aria-label='Songs list'>
        <thead>
            <tr>
                <th></th>
                <th>Song Name</th>
                <th>Artist Name</th>
                <th>Track</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            <SongRow songs={filteredSongs || songs} />
        </tbody>
    </table>
  )
}
export default SongList