
import Header from '../Header/Header.jsx';
import Footer from '../Footer/Footer.jsx';
import { Outlet } from 'react-router-dom';

// Это основной элемент который отображается на экране
// Именно в него включены и heder и main и footer а так же он является 
// основой для других страниц (ну в целом там что подвал что шапка не 
// меняются, так что изменяться, ну в основном, так что будет меняться 
// только main точнее - его содержимое)


const Index = () => {
    return(
        <>
            <header>
                <Header></Header>
            </header>
            <main>
                < Outlet />
            </main>
            <footer>
                < Footer />
            </footer>
        </>
    );
};

export default Index;