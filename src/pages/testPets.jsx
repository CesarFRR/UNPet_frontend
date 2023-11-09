import { useState, useEffect } from 'react';
import {
        getPets,
        createPet,
        getPetById,
        updatePet,
        deletePet,
        getOrganizationPets,
} from '../api/pets.api';

function TextPosts() {
    const [pets, setPets] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const petsData = await getPets();
                setPets(petsData);
            } catch (error) {
                console.log('error en getpets--> '+error);
                setError(error.message);
            }
        }
        fetchData();
    }, []);

    return (
        <div>
            {error && <p>{error}</p>}
            <ul>
                {pets.map((pet) => (
                    <li key={pet.id}>{pet.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default TextPosts;
