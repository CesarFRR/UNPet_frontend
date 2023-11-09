import { FaFacebook as FacebookIcon, FaInstagram as InstagramIcon, FaTwitter as TwitterIcon } from 'react-icons/fa';
import { GetHTMLText } from './HTMLText';
import { Link } from 'react-router-dom';


export function Legal({ title, description = 'Inserte descripción aqui', imageUrl, descriptionMd = '', listUrls }) {
    const htmlText = GetHTMLText(descriptionMd);
    return (
        <div className="max-w-7xl mx-auto mt-4">
            <div className="bg-white overflow-hidden shadow rounded-lg divide-y divide-gray-200" >
                <div className="flex justify-center px-4 py-5 sm:p-6 mx-auto">
                    
              
                        {descriptionMd !== '' ? (
                            <div class="mx-auto  max-w-xl" 
                            dangerouslySetInnerHTML={{ __html: GetHTMLText(descriptionMd) }} />
                        ) : (
                            <p>{description}</p>
                        )}
                
                </div>
                {listUrls && (
                    <div className="px-4 py-5 sm:p-6">
                        <h3 className="text-lg leading-6 font-medium text-gray-900">También puedes ver</h3>
                        <div className=" text-blue-500 m-4">
                            {listUrls.map((item, index) => (
                                <div key={index}>
                                    <Link to={item.url} className="mt-4 mb-2 text-lg text-center ">
                                        {item.name}
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
                {imageUrl && (
                    <div className="px-4 py-5 sm:p-6">
                        <img src={imageUrl} alt="Legal Info" className="max-w-md mx-auto" />
                    </div>
                )}
                <div className="px-4 py-4 sm:px-6">
                    <div className="flex justify-center space-x-6">
                        <a href="https://www.facebook.com/" target="_blank" rel="noopener" className="text-gray-400 hover:text-gray-500">
                            <span className="sr-only">Facebook</span>
                            <FacebookIcon className="h-6 w-6" aria-hidden="true" />
                        </a>
                        <a href="https://twitter.com/" target="_blank" rel="noopener" className="text-gray-400 hover:text-gray-500">
                            <span className="sr-only">Twitter</span>
                            <TwitterIcon className="h-6 w-6" aria-hidden="true" />
                        </a>
                        <a href="https://www.instagram.com/" target="_blank" rel="noopener" className="text-gray-400 hover:text-gray-500">
                            <span className="sr-only">Instagram</span>
                            <InstagramIcon className="h-6 w-6" aria-hidden="true" />
                        </a>
                    </div>
                    <p className="mt-4 text-center text-sm text-gray-500">
                        © {new Date().getFullYear()} UNPet. Todos los derechos reservados.
                    </p>
                </div>
            </div>
        </div>
    );
}
