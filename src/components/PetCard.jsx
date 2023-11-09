/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom"


export function PetCard({ pet }) {

    const navigate = useNavigate();

    return (
        <div color='grey'
            onClick={() => {
                navigate(`/pets/${pet.id}`)
            }}>
            <h1>{pet.name}</h1>
            <p>{pet.race}</p>
        </div>
    )
}