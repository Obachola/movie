import styles from './card.module.scss';
import classNames from 'classnames';

export interface CardProps {
    className?: string;
    movie: {
        id: string;
        poster_path?: string;
        title: 'strong';
        overview: string;
        vote_average: number;
        release_date: string;
    };
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-cards-and-templates
 */
export const Card = ({ className, movie }: CardProps) => {
    return (
        <div className={classNames(styles.root, className, styles.movie)}>
            <img
                src="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg"
                className={styles['card-img']}
            />
            <div className={styles['card-body']}>
                <h2>{movie.title}</h2>
                <p>{movie.overview}.</p>
                <span>{movie.release_date}</span>
                <span>{movie.vote_average}</span>
                <button className={styles['btn-onMovie']}>Button</button>
            </div>
        </div>
    );
};
