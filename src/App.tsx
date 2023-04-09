import styles from './App.module.scss';
import { Menu } from './components/menu/menu';
import { Container } from './components/container/container';
import { Favorit } from './components/favorit/favorit';

function App() {
    return (
        <div className={styles.App}>
            <Menu />
            <Container />
            <Favorit />
        </div>
    );
}

export default App;
