import { useImmer } from "use-immer";
import useFetchUploadedSong from "../../hooks/useFetchUploadedSong";
import "./style.scss";

function MusicUploadForm() {
  const [selectedSongName, setSelectedSongName] = useImmer('The song is not chosen'); 
  const [file, setFile] = useImmer(false);
  // * function(asyncFetchData) for get uploaded song data after click(handleUpload)
  // * getting status(msg) about process and progress for the progress bar 
  // * data from custom hook
  const {asyncFetchData, msg, progress} = useFetchUploadedSong(file)

  function handleUpload(e) {
    e.preventDefault()
    asyncFetchData()
  }

  return (
    <>
      <form 
      className="music-upload-form" 
      aria-label="Song upload form"
      data-testid='musicUploadForm'
      >
        <div className="upload-wrapper">
        <label 
        role='button'
        className="select-song" 
        htmlFor="file-input"
        >
          Select Song
        </label>
        <p className="selected-song-name">
          {selectedSongName}
        </p>
        <input
          id="file-input"
          onChange={(e) => {
            setFile(e.target.files[0])
            setSelectedSongName(
              e.target.files[0]?.name.substring(0, 15) || 
              'The song is not chosen'
            )
          }}
          type="file"
          name="fileInput"
          accept=".mp3, .wav"
        />
        <button 
        className="upload-song" 
        onClick={handleUpload}
        data-testid='uploadButton'
        >
          Upload
        </button>
        </div>

        <div className="progress-wrapper">
        {progress.started && (
          <progress className="progress" value={progress.pc} max="100">
          </progress>
        )}
        {msg && <p data-testid='uploadStatus' className="msg">{msg}</p>}
        </div>
      </form>
    </>
  );
}

export default MusicUploadForm;
