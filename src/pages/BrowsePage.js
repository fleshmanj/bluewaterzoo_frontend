import {useEffect} from "react";
import Item from "../components/Item";
import {useUserContext} from "../hooks/useUserContext";

const BrowsePage = (category) => {
    const {pets, dispatch} = useUserContext();

    useEffect(() => {
        const fetchPets = async () => {
            console.log("Fetching pets of type: " + category.category);
            const response = await fetch("/petsAPI/type/" + category.category);
            const data = await response.json();
            if (response.status !== 200) {
                console.log("Error fetching pets");
            } else {
                dispatch({type: 'SET_PETS', payload: data});
            }
        }
        fetchPets();
    }, [category, dispatch]);
    return (
        <div className={"browse"}>
            <div className={"pets"}>
                {pets && pets
                    // .filter(pet => pet.type === category) // Only pass pets that match the category
                    .map(pet => (
                        <Item key={pet.id} item={pet}/> // Make sure to use a unique key for each child
                    ))}

            </div>
        </div>
    )
}
export default BrowsePage;