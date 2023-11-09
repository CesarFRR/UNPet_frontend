import { MdAccountCircle } from 'react-icons/md';


const User = ({ user }) => {
    console.log(user, user.username);
    return (
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                    {user.username}
                </h3>
                <p className="mt-1 max-w-2xl text-sm text-gray-500">
                    {user.email}
                </p>
                <p className="mt-1 max-w-2xl text-sm text-gray-500">
                    {user.localidad}
                </p>
            </div>
            <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
                <dl className="sm:divide-y sm:divide-gray-200">
                    <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 sm:py-5">
                        <dt className="text-sm font-medium text-gray-500">
                            Foto
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            {user.urlfoto ? (
                                <img className="h-8 w-8 rounded-full" src={user.urlfoto} alt="" />
                            ) : (
                                <MdAccountCircle className="h-8 w-8 text-gray-500" />
                            )}
                        </dd>
                    </div>
                </dl>
            </div>
        </div>
    );
};

export default User;
