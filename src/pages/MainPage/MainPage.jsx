import Header from "../../components/header/Header";
import SongList from "../../components/songList/SongList";
import MusicUploadForm from "../../components/musicUploadForm/MusicUploadForm";
import "./style.scss";

function MainPage() {
  return (
      <main className="main">
        <section className="main__wrapper">
          <Header />
          <SongList />
          <MusicUploadForm />
        </section>
      </main>
  );
}
export default MainPage;
