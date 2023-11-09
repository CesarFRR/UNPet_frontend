
import { FaExclamationCircle, FaCheckCircle, FaInfoCircle, FaTimes } from 'react-icons/fa';
import { RiErrorWarningLine } from 'react-icons/ri';
import { useState } from 'react';
import { MdTitle } from 'react-icons/md';

const Modal = ({ type='',title='', onClose = () => {}, onAccept = () => {} , children}) => {
    const [isOpen, setIsOpen] = useState(true);
    
    let icon;
    switch (type) {
        case 'error':
            icon = <RiErrorWarningLine />;
            break;
        case 'warning':
            icon = <FaExclamationCircle />;
            break;
        case 'success':
            icon = <FaCheckCircle />;
            break;
        case 'info':
            icon = <FaInfoCircle />;
            break;
        default:
            icon = null;
    }

    const handleClose = () => {
        setIsOpen(false);
        onClose();
    };
    const handleAccept = () => {
        setIsOpen(false);
        onAccept();
    }
 

    return (
        <>
            {isOpen && (
                <div className="fixed z-10 inset-0 overflow-y-auto">
                    <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                        </div>

                        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

                        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                <div className="sm:flex sm:items-start">
                                    {icon && <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">{icon}</div>}
                                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                        {title!='' && <h2 className="text-lg leading-6 font-medium text-gray-900">{title}</h2>}
                                        <h3 className="text-lg leading-6 font-medium text-gray-900">{children}</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                                <button onClick={handleClose} type="button" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm">
                                    Acceptar
                                </button>

                            </div>
                            <button onClick={handleClose} className="absolute top-0 right-0 m-3 text-gray-500 hover:text-gray-800">
                                <FaTimes />
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Modal;
