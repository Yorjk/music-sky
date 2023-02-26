import { Header } from '../../components/Header/Header';
import { Search } from '../../components/Search/Search';
import { TracksFilter } from '../../components/TracksFilter/TracksFilter';
import { CenterBlock } from '../../components/CenterBlock/CenterBlock';
import { SideBar } from '../../components/SideBar/SideBar';
import playlist1 from '../../components/SideBar/playlist01.png';
import playlist2 from '../../components/SideBar/playlist02.png';
import playlist3 from '../../components/SideBar/playlist03.png';
import { Bar } from '../../components/Bar/Bar';
import { Title } from '../../components/Title/Title';
import { CenterBlockPlaylist } from '../../components/CenterBlock/CenterBlockPlaylist';

export const Main = () => {
    return (
        <div className="container">
            <main className="main">
                <Header />
                <div className="main__centerblock centerblock">
                    <Search />
                    <Title title={'Треки'} />
                    <TracksFilter />
                    <CenterBlock playlist={
                        <CenterBlockPlaylist />} />
                </div>
                <SideBar name={'Sergey.Ivanov'}
                    imageList1={playlist1}
                    imageList2={playlist2}
                    imageList3={playlist3} />
            </main>
            <footer className="footer"></footer>
            <Bar track={'Dropin'}
                name={'Bobby Marleni'} />
        </div>
    )
}