import axios from 'axios'

export async function fetchDataFromApi(file, setProgress) {
    /**
     * * Function will create FormData object
     * * which will contain the currently selected file - see the line(13-14)
     * * then will happen API post request to testing(can be changed to a real one) server - see the line(18)
     * * also it will handle progress bar relying on AXIOS method(onUploadProgress) - see the line(20)
     * @param {Object} file - File data from useFetchUploadedSong custom hook
     * @param {function} setProgress - state setter for progress bar
     * @returns {Object} data or error - data about the uploaded song
     */
    const fd = new FormData();
    fd.append("song", file);
    setProgress((prev) => {prev.started = true});
    
    try {
      let data = await axios.post("https://httpbin.org/post", fd, {
        onUploadProgress: function (progressEvent) {
          setProgress((prev) => {prev.pc = progressEvent.progress * 100});
        },
      });

      return data
    } catch (error) {
      return error
    } finally {
      setProgress((prev) => {prev.started = false});
    }
}