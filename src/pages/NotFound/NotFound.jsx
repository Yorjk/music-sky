import { Bar } from "../../components/Bar/Bar"
import { Header } from "../../components/Header/Header"
import { Button } from "../../components/Login/Button"
import { Search } from "../../components/Search/Search"
import '../NotFound/NotFound.css'
import crying from '../NotFound/smile_crying.png'

export const NotFound = () => {
    return (
        <main className="main">
            <nav className="main__nav nav">
                <Header />
            </nav>
            <div className="main__centerblock centerblock">
                <Search />
                <div className="not_found">
                    <p className="not_found_404">404</p>
                    <p className="page_not_found">
                        Страница не найдена
                        <img src={crying} alt="smile_crying" />
                    </p>
                    <p className="not_found_info">
                        Возможно, она была удалена
                        или перенесена на другой адрес
                    </p>
                    <Button link={'/main'}
                        classname={'login_button'}
                        name={'Вернуться на главную'} />
                </div>
                <Bar />
            </div>
        </main>
    )
}