import { createContext } from "react";
import { useImmer } from "use-immer";
import songsData from "../data/songsData";

const audio = new Audio()

// * Main context which contains the songs list states and handles functionality

export const SongsContext = createContext({});

function SongsProvider({ children }) {
  /**
   * * Original state of songs list 
   * ! Don't mutate and change it(filter,sort...) 
   * ! Use the setter function (setSongs) only for pushing the new song
   */
  const [songs, setSongs] = useImmer(songsData); 
  /**
   * * Filtered songs this is the copy of the original songs list
   * * the filtration(filter, sort...) will be happen 
   * * by setting filteredSongs which will depended on the state of
   * * controlFilters (select and input(search) tags value) 
   */
  const [filteredSongs, setFilteredSongs] = useImmer(false);
  /**
   * * This state object(controlFilters) is responsible 
   * * for controlling tags select and input in the Header component
   * * also it will be reset to initial value after(API request) upload a new song 
   * * see the component MusicUploadForm
   */
  const [controlFilters, setControlFilters] = useImmer({
    select: '',
    search: '',
  })
  // * The state which includes the current song that is playing or pause
  const [currentSong, setCurrentSong] = useImmer(false)
  // * Boolean state which will determine the state(play or pause) of the current song
  const [isPlaying, setPlaying] = useImmer(false)

  function handleAudio(song) {
    /**
     * * Function that will control the current song, play, and pause state
     * * and relying on it will determine which song will be played or paused
     * @param {Object} song - contain information about song(trackNumber,src...)
     */
    if (currentSong.trackNumber != song.trackNumber) {
      setCurrentSong(song)
      setPlaying(true)
      audio.src = song.src
      audio.currentTime = 0
      audio.play()
      return
    }

    if (isPlaying) {
      audio.pause()
      setPlaying(false)
    } else {
      audio.play()
      setPlaying(true)
    }
  }

  return (
    <SongsContext.Provider value={{ 
      songs, 
      setSongs, 
      filteredSongs, 
      setFilteredSongs,
      controlFilters, 
      setControlFilters, 
      currentSong, 
      isPlaying, 
      handleAudio,
      }}>
      {children}
    </SongsContext.Provider>
  );
}

export default SongsProvider;
