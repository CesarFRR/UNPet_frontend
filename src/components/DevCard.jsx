import { FaGithub } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const DevCard = ({ name, skills, photo, mail = '#', gh = '#' }) => {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-full" src={photo} alt={name} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{name}</div>
                <p className="text-gray-700 text-base">{skills}</p>
            </div>
            <div className="px-6 pt-4 pb-4">
                <div className="mt-2 flex justify-center sticky bottom-0" >
                    <a href={gh} target="_blank" rel="noopener noreferrer" className="mr-4">
                        <FaGithub className="h-6 w-6" />
                    </a>
                    <a href={'mailto:' + mail} target="_blank" rel="noopener noreferrer">
                        <MdEmail className="h-6 w-6" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default DevCard;
