import styles from './menu.module.scss';
import classNames from 'classnames';

export interface MenuProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-menus-and-templates
 */
export const Menu = ({ className }: MenuProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={classNames('Wrapper', styles['bg-default'])}>
                <h2 className={styles.mainlogo}>CINEHOME</h2>
            </div>
            <nav className={styles.Navigaton}>
                <a href="/home" className={styles['Nav-item']}>
                    Home
                </a>
                <a href="/projects" className={styles['Nav-item']}>
                    Projects
                </a>
                <a href="/about" className={styles['Nav-item']}>
                    About
                </a>
                <a href="/contact" className={styles['Nav-item']}>
                    Contact Us
                </a>
            </nav>
        </div>
    );
};
