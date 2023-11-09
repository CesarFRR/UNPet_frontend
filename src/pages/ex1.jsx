import { Fragment } from 'react';
import { FaPencil, FaGlobe, FaBolt } from 'react-icons/fa';

const cards = [
    {
        id: 1,
        title: 'Card 1',
        description: 'This is the description for card 1',
        image: 'https://source.unsplash.com/random/300x200',
    },
    {
        id: 2,
        title: 'Card 2',
        description: 'This is the description for card 2',
        image: 'https://source.unsplash.com/random/300x200',
    },
    {
        id: 3,
        title: 'Card 3',
        description: 'This is the description for card 3',
        image: 'https://source.unsplash.com/random/300x200',
    },
];

const Ex1 = () => {
    return (
        <div className="flex flex-wrap justify-center">
            {cards.map((card) => (
                <div key={card.id} className="max-w-sm rounded overflow-hidden shadow-lg m-4">
                    <img className="w-full" src={card.image} alt={card.title} />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">{card.title}</div>
                        <p className="text-gray-700 text-base">{card.description}</p>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                        <Fragment>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#tailwindcss</span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#react-icons</span>
                        </Fragment>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                        <FaPencil className="h-5 w-5 inline-block mr-2" />
                        <FaGlobe className="h-5 w-5 inline-block mr-2" />
                        <FaBolt className="h-5 w-5 inline-block" />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Ex1;
