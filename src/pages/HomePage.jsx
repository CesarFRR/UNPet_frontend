import LeftBar from '../components/LeftBar';
import Feed from '../components/Feed/Feed';
import { useMediaQuery } from 'react-responsive';
import ScrollList from './testPosts';



const posts = [
    {
        id: 1,
        title: 'Mi primer post',
        content: 'Este es mi primer post en UNPet!',
        username: 'Juan Perez',
        date: '2021-10-01',
        likes: 10,
        comments: 17,
        urlfoto: 'https://dummyimage.com/600x400/d1d1d1/5b62c7.jpg&text=Juan%20Perez'
    },
    {
        id: 2,
        title: 'Mi primer post2',
        content: 'Este es mi primer post en UNPet!',
        username: 'Juan Perez',
        date: '2021-10-01',
        likes: 10,
        comments: 17,
        urlfoto: 'https://dummyimage.com/600x400/d1d1d1/5b62c7.jpg&text=Juan%20Perez'
    },
    {
        id: 3,
        title: 'Mi primer post3',
        content: 'Este es mi primer post en UNPet!',
        username: 'Juan Perez',
        date: '2021-10-01',
        likes: 10,
        comments: 17,
        urlfoto: 'https://dummyimage.com/600x400/d1d1d1/5b62c7.jpg&text=Juan%20Perez'
    },
    {
        id: 4,
        title: 'Mi primer post4',
        content: 'Este es mi primer post en UNPet!',
        username: 'Juan Perez',
        date: '2021-10-01',
        likes: 10,
        comments: 17,
        urlfoto: 'https://dummyimage.com/600x400/d1d1d1/5b62c7.jpg&text=Juan%20Perez'
    },
    {
        id: 5,
        title: 'Mi primer post5',
        content: 'Este es mi primer post en UNPet!',
        username: 'Juan Perez',
        date: '2021-10-01',
        likes: 10,
        comments: 17,
        urlfoto: 'https://dummyimage.com/600x400/d1d1d1/5b62c7.jpg&text=Juan%20Perez'
    },
]
const data = {
    count: 5,
    next: 'siguiente',
    previous: 'anterior',
    results: posts
}



console.log(data)
export const HomePage = () => {
    const isDesktopOrLaptop = useMediaQuery({ minDeviceWidth: 800 });


    return (
        <div className="flex justify-between  w-full overflow-y-auto">
            <div className='sticky top-0'>
                {isDesktopOrLaptop && <LeftBar />}
            </div>
            <div className="max-w-2xl mx-auto ">
                <h2 className="text-3xl font-bold text-center mb-4">¡Bienvenido a UNPet!</h2>
                <p className="text-center mb-8">Entregando nuevas oportunidades</p>
                <ScrollList></ScrollList>
            </div>
        </div>
    );
};

export default HomePage;





// {
//     id: 2,
//     title: 'Mi segundo post',
//     content: 'Este es mi segundo post en UNPet!',
//     author: 'Maria Rodriguez',
//     date: '2021-10-02',
//     likes: 5,
//     authorImg: 'https://dummyimage.com/600x400/d1d1d1/5b62c7.jpg&text=Maria%20Rodriguez'
// },
// {
//     id: 3,
//     title: 'Mi tercer post',
//     content: 'Este es mi tercer post en UNPet!',
//     author: 'Pedro Gomez',
//     date: '2021-10-03',
//     likes: 2,
//     authorImg: 'https://dummyimage.com/600x400/d1d1d1/5b62c7.jpg&text=Pedro%20Gomez'
// }
// ];
