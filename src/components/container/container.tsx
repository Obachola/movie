import styles from './container.module.scss';
import classNames from 'classnames';
import { Search } from '../search/search';
import { Card } from '../card/card';

export interface ContainerProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-containers-and-templates
 */
export const Container = ({ className }: ContainerProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.Container}>
                <Search />
                <Card />
            </div>
        </div>
    );
};
