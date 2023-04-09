import { createBoard } from '@wixc3/react-board';
import { Card } from '../../../components/card/card';

export default createBoard({
    name: 'Card',
    Board: () => (
        <Card
            movie={{
                overview: 'Benin Republic legend comes to a new revelation',
                release_date: '2023',
                title: 'Les Amazones',
                vote_average: 5,
                id: '',
            }}
        />
    ),
});
