import { Header } from "../Header/Header"
import { Search } from "../Search/Search"
import { TracksFilter } from "../TracksFilter/TracksFilter"
import { CenterBlockSkeleton } from "../CenterBlock/CenterBlockSkeleton"
import { SideBar } from "../SideBar/SideBar"
import playlistLoading from "../SideBar/playlistLoading.png"
import { Bar } from "../Bar/Bar"

export const Skeleton = () => {
  return (
    <div className="container">
      <main className="main">
        <nav className="main__nav nav">
          <Header />
        </nav>
        <div className="main__centerblock centerblock">
          <Search />
          <TracksFilter />
          <CenterBlockSkeleton />
        </div>
        <SideBar name={'Sergey.Ivanov'}
          imageList1={playlistLoading}
          imageList2={playlistLoading}
          imageList3={playlistLoading} />
      </main>
      <Bar />
      <footer className="footer"></footer>
    </div>
  )
}