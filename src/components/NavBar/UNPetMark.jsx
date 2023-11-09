









function UNPetMark({logo}) {
    return (
        <>
            <div >
                <div className="flex-shrink-0 flex items-center">
                    <a href="/home" className="flex-shrink-0 flex items-center" >
                        <img className="block lg:hidden h-8 w-auto" src={logo} alt="UNPet logo" />
                        <img className="hidden lg:block h-8 w-auto" src={logo} alt="UNPet logo" />
                        <h1 className="text-white font-bold ml-2">UNPet</h1>
                    </a>
                </div>

            </div>
        </>
    );
}

export default UNPetMark;
