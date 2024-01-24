import { useContext } from "react";
import { SongsContext } from "../../context/SongsContext";
import { GrPlayFill, GrPauseFill } from "react-icons/gr";
import { RxDragHandleDots1 } from "react-icons/rx";
import { FaHeart, FaCheck  } from "react-icons/fa";
import { IoIosShareAlt, IoMdArrowDropdown  } from "react-icons/io";
import './style.scss'

function SongRow({songs}) {
  const { handleAudio, currentSong, isPlaying } = useContext(SongsContext)

  return (
    /**
     * * Rendering will be based on filteredSongs(if used filtration in UI) 
     * * otherwise by songs(if there is no filtration in UI) 
     * * the filtration of the songs will be done on filteredSongs state 
     * * based on original songs state(songs) but separately 
     * * it is done to prevent mutation of the original state of the songs list(songs)
     * @params {array of Objects} filteredSongs or original songs data 
     */
    songs?.map(song => {
        const { songName, artistName, trackNumber } = song
        const isCurrentTrack = currentSong?.trackNumber == trackNumber;

        return (
        <tr
        data-testid='songRow' 
        className={`song-row ${isCurrentTrack ? 'song-row_active' : ''}`} 
        key={trackNumber}
        aria-label='Song row'
        >
            <td>
                <RxDragHandleDots1 />
                {
                    isCurrentTrack && isPlaying ? 
                    <GrPauseFill
                    role='button' 
                    onClick={() => handleAudio(song)} 
                    aria-label='Pause the song' 
                    /> :
                    <GrPlayFill 
                    role='button' 
                    onClick={() => handleAudio(song)} 
                    aria-label='Play the song'
                    />
                }
            </td>
            <td>
                {songName}
            </td>
            <td>
                {artistName}
            </td>
            <td>
                {trackNumber}
            </td>
            <td>
                <FaHeart/>
                <FaCheck />
                <IoIosShareAlt />
                <IoMdArrowDropdown />
            </td>
        </tr>
        )
    })
  )
}
export default SongRow