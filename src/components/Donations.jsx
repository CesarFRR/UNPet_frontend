import { Fragment } from 'react';
import { FaCreditCard } from 'react-icons/fa';

export function Donations() {
    return (
        <Fragment>
            <div className="maxn-h-screen bg-gray-100 py-10 flex flex-col justify-center sm:py-35">
                <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
                    <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                        <div className="max-w-md mx-auto">
                            <div>
                                <FaCreditCard className="mx-auto h-12 w-auto text-indigo-500" />
                                <h2 className="text-center text-3xl font-extrabold text-gray-900">Ayúdanos a dar más oportunidades</h2>
                            </div>
                            <div className="divide-y divide-gray-200 align-center">
                                <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                                    <p>
                                        Si deseas hacer una donación, puedes hacerlo a través de los siguientes medios:
                                    </p>
                                    <ul className="list-disc space-y-2 align-center">
                                        <li className="flex items-start">
                                            <div className="max-w-md mx-auto">
                                                <img src="https://i.imgur.com/PWBTXDu.png" href="https://paypal.me/UNPetDonaciones" width="200px" alt="Nequi" />
                                            </div>
                                        </li>
                                        <li className="flex items-start">
                                            <p className="ml-3 text-green-500">
                                                <a className="max-w-md mx-auto" href="https://paypal.me/UNPetDonaciones" target="_blank" rel="noopener noreferrer">
                                                    Paypal
                                                </a>
                                            </p>
                                        </li>
                                        <li className="flex items-start justify-center">
                                            <div className="flex-shrink-0">
                                                <img src="https://i.imgur.com/lxXHnCW.png" width="200px" alt="Nequi" />
                                            </div>
                                        </li>
                                        <li className="flex items-start align-center">
                                            <p className="text-center ml-3 text-green-500">
                                                <a target="_blank" rel="noopener noreferrer">
                                                    Nequi
                                                </a>
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment >
    );
}

