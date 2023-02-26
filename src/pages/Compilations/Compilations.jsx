import { Header } from '../../components/Header/Header';
import { Search } from '../../components/Search/Search';
import { Title } from '../../components/Title/Title';
import { CenterBlock } from '../../components/CenterBlock/CenterBlock';
import { Bar } from '../../components/Bar/Bar';
import { CenterBlockPlaylist } from '../../components/CenterBlock/CenterBlockPlaylist';

export const Compilations = (props) => {
    return (
        <div className="container">
            <main className="main">
                <nav className="main__nav nav">
                    <Header />
                </nav>
                <div className="main__centerblock centerblock">
                    <Search />
                    <Title title={props.title} />
                    <CenterBlock playlist={
                        <CenterBlockPlaylist />} />
                </div>
            </main>
            <footer className="footer"></footer>
            <Bar />
        </div>
    )
}