import { useState, useEffect } from 'react';
import { createPet, deletePet, updatePet, getPetById } from '../api/pets.api';
import { useNavigate, useParams } from 'react-router-dom';
import { FaTrash, FaCheck } from 'react-icons/fa';

export function PetFormPage() {
    const [name, setName] = useState('');
    const [race, setRace] = useState('');
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();
    const params = useParams();

    useEffect(() => {
        async function loadPet() {
            if (params.id) {
                const { data } = await getPetById(params.id);
                setName(data.name);
                setRace(data.race);
            }
        }
        loadPet();
    }, []);

    const onSubmit = async (event) => {
        event.preventDefault();
        const data = { name, race };
        if (params.id) {
            console.log(data);
            await updatePet(params.id, data);
        } else {
            const res = await createPet(data);
            console.log(res);
        }
        // Auto redireccionamiento
        navigate('/pets');
    };

    const onDelete = async () => {
        const accepted = window.confirm('seguro?');
        if (accepted) {
            await deletePet(params.id);
        }
    };

    return (
        <div>
            <form onSubmit={onSubmit}>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Nombre</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                    {errors.name && <span>el nombre es requerido</span>}
                </div>
                <div className="mb-4">
                    <label htmlFor="race" className="block text-gray-700 font-bold mb-2">Raza</label>
                    <select
                        id="race"
                        name="race"
                        value={race}
                        onChange={(event) => setRace(event.target.value)}
                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    >
                        <option value="" disabled selected>Selecciona una raza</option>
                        <option value="Gato">Gato</option>
                        <option value="Perro">Perro</option>
                    </select>
                    {errors.race && <span>la raza es requerida</span>}
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-flex items-center"
                >
                    Crear
                    <FaCheck className="w-5 h-5 ml-2" />
                </button>
            </form>
            {params.id && (
                <button
                    onClick={onDelete}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-4 inline-flex items-center"
                >
                    Eliminar
                    <FaTrash className="w-5 h-5 ml-2" />
                </button>
            )}
        </div>
    );
}
