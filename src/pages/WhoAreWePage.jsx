import DevCard from '../components/DevCard';

const developers = [
    {
        name: 'César Fabián Rincón Robayo',
        role: 'Backend Developer',
        image: 'https://i.imgur.com/BdurSVm.png',
        bio: 'Estudiante de ingeniería de sistemas y computación, se ha encargado del Backend del proyecto',
        facebook: 'https://www.facebook.com/cesarfabian.rinconrobayo/',
        mail: 'crinconro@unal.edu.co',
        instagram: 'https://www.instagram.com/cesar343rincon/?next=%2F#',
        github: 'https://github.com/CesarFRR'
    },
    {
        name: 'David Mateo Ballesteros',
        role: 'Frontend Developer',
        image: 'https://i.imgur.com/KaSvaMB.jpg',
        bio: 'Estudiante de ingeniería de sistemas y computación de la Universidad Nacional',
        mail: 'dballesterosb@unal.edu.co',
        github: 'https://github.com/FascistWeeb'
    },
    {
        name: 'Juan David Ramírez Torres',
        role: 'Full Stack Developer',
        image: 'https://media.licdn.com/dms/image/C4E03AQFUXpq4V-LFdg/profile-displayphoto-shrink_800_800/0/1660250201603?e=1704326400&v=beta&t=rcue-vwOFf0qpJTiXjHP8QgZSanrz0zQMOpa2N9y6as',
        bio: 'Estudiante de ingeniería de sistemas y computación, ha aportado principalmente al Frontend',
        mail: 'jdramirezt@unal.edu.co',
        github: 'https://github.com/jdavidrt'
    },
    {
        name: 'Manuel Eduardo Diaz Sabogal',
        role: 'Database Analyst',
        image: 'https://i.imgur.com/UZtkbQ7.png',
        bio: 'Estudiante de ingeniería de sistemas',
        mail: 'mdiazsa@unal.edu.co',
        github: 'https://github.com/ManuelEDS'
    },
    {
        name: 'Carlos Javier Camacho Cely',
        role: 'Frontend Developer',
        image: 'https://i.imgur.com/dbPlyEy.jpg',
        bio: 'Estudiante de ingeniería de sistemas',
        mail: 'cacamacho@unal.edu.co',
        github: 'https://github.com/ManuelEDS'
    },
];


function WhoAreWePage() {
    console.log(developers[0]);
    return (
        <div className="container mx-auto px-4 lg:max-w-7xl">

            <div className="container mx-auto px-4 md:max-w-3xl">

                <h1 className="text-4xl text-center my-4">
                    ¿Quiénes somos?
                </h1>
                <br />
                <br />


                <h2 className="text-3xl my-4 h5-title">
                    UNPet: Tu Compañero de Adopción de Mascotas
                </h2>

                <p className="text-base my-4 left-align">
                    En UNPet, somos un grupo de apasionados desarrolladores estudiantes de la Universidad Nacional con un objetivo claro: hacer una diferencia en la vida de las mascotas y las personas que desean darles un hogar amoroso.
                </p>
                <br />
                <h2 className="text-3xl my-4 right-align">
                    Nuestra Misión
                </h2>

                <p className="text-base my-4 right-align">
                    Nuestra misión en UNPet es simple pero poderosa: darle visibilidad a las fundaciones de adopción de mascotas y ayudar a los usuarios a encontrar la mascota perfecta que se adapte a su estilo de vida y necesidades. Creemos en el poder de la adopción responsable, y estamos comprometidos a conectar a personas cariñosas con las mascotas que necesitan un nuevo hogar.
                </p>
                <br />

                <h2 className="text-3xl my-4 right-align">
                    Lo que nos impulsa
                </h2>

                <p className="text-base my-4 right-align">
                    En UNPet, estamos impulsados por el amor por los animales y el deseo de hacer del mundo un lugar mejor para ellos. Entendemos que las fundaciones de adopción de mascotas son la voz de los que no pueden hablar, y nuestro objetivo es amplificar esa voz. Creemos que cada mascota merece un hogar lleno de amor y cuidado, y estamos decididos a hacer que esto sea una realidad para tantas mascotas como sea posible.
                </p>
                <br />



                <h2 className="text-3xl my-4 right-align">
                    Nuestro Compromiso
                </h2>

                <p className="text-base my-4 right-align">
                    Estamos comprometidos con la transparencia, la ética y la seguridad en todas nuestras interacciones. Trabajamos estrechamente con fundaciones y refugios de mascotas para garantizar que todos los perfiles de mascotas sean precisos y que los usuarios puedan confiar en la información que encuentren en nuestra plataforma.
                </p>
                <br />


                <h2 className="text-3xl my-4 right-align">
                    Únete a la Comunidad UNPet
                </h2>

                <p className="text-base my-4 right-align">
                    Si compartes nuestra pasión por los animales y crees en la adopción responsable, te invitamos a unirte a nuestra comunidad. Ya seas una fundación de adopción, un amante de las mascotas en busca de un nuevo compañero peludo o simplemente alguien interesado en apoyar nuestra causa, esperamos que te sientas inspirado por lo que hacemos en UNPet.
                </p>
                <br />

                <p className="text-base my-4 right-align">
                    Juntos, podemos marcar la diferencia en la vida de las mascotas y hacer que el mundo sea un lugar más cálido y amoroso para todos. ¡Bienvenido a UNPet!
                </p>
                <br />
                <br />
                <br />
            </div>
            <div className="grid grid-cols-5 gap-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-auto m-5">
                {developers.map((developer, index) => (
                    <DevCard
                        key={index}
                        name={developer.name}
                        skills={developer.role + ', ' + developer.bio}
                        photo={developer.image}
                        fb={developer.facebook}
                        mail={developer.mail}
                        inst={developer.instagram}
                        gh={developer.github}
                    />
                ))}
            </div>

        </div>
    );
}

export default WhoAreWePage;





