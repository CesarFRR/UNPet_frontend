import * as React from 'react';
import { Fragment } from 'react';
import { FaCreditCard } from 'react-icons/fa';

export function Donations() {
    return (
        <Fragment>
            <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
                <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
                    <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                        <div className="max-w-md mx-auto">
                            <div>
                                <FaCreditCard className="mx-auto h-12 w-auto text-indigo-500" />
                                <h2 className="text-center text-3xl font-extrabold text-gray-900">Ayúdanos a dar más oportunidades</h2>
                            </div>
                            <div className="divide-y divide-gray-200">
                                <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                                    <p>
                                        Si deseas hacer una donación, puedes hacerlo a través de los siguientes medios:
                                    </p>
                                    <ul className="list-disc space-y-2">
                                        <li className="flex items-start">
                                            <div className="flex-shrink-0">
                                                <svg className="h-6 w-6 text-green-500" viewBox="0 0 24 24" fill="none">
                                                    <path
                                                        d="M12 22C16.4183 22 20 18.4183 20 14C20 9.58172 16.4183 6 12 6C7.58172 6 4 9.58172 4 14C4 18.4183 7.58172 22 12 22Z"
                                                        stroke="currentColor"
                                                        strokeWidth="2"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                    <path
                                                        d="M22 12H18L15 21L9 3L6 12H2"
                                                        stroke="currentColor"
                                                        strokeWidth="2"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                </svg>
                                            </div>
                                            <p className="ml-3 text-green-500">
                                                <a href="https://paypal.me/UNPetDonaciones" target="_blank" rel="noopener noreferrer">
                                                    Paypal
                                                </a>
                                            </p>
                                        </li>
                                        <li className="flex items-start">
                                            <div className="flex-shrink-0">
                                                <svg className="h-6 w-6 text-green-500" viewBox="0 0 24 24" fill="none">
                                                    <path
                                                        d="M12 22C16.4183 22 20 18.4183 20 14C20 9.58172 16.4183 6 12 6C7.58172 6 4 9.58172 4 14C4 18.4183 7.58172 22 12 22Z"
                                                        stroke="currentColor"
                                                        strokeWidth="2"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                    <path
                                                        d="M22 12H18L15 21L9 3L6 12H2"
                                                        stroke="currentColor"
                                                        strokeWidth="2"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                </svg>
                                            </div>
                                            <p className="ml-3 text-green-500">
                                                <a href="https://www.nequi.com.co/" target="_blank" rel="noopener noreferrer">
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
        </Fragment>
    );
}

