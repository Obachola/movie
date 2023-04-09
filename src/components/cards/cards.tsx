import styles from './cards.module.scss';
import classNames from 'classnames';
import { Card } from '../card/card';

export interface CardsProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-cardss-and-templates
 */
export const Cards = ({ className }: CardsProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <Card
                movie={{
                    id: '121',
                    overview: 'Les amazones du Benin',
                    release_date: '2023',
                    title: 'Les Amazones',
                    vote_average: 4,
                }}
            />
        </div>
    );
};
