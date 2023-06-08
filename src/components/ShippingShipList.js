import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import settings from "../utils/settings.js"


export const ShippingShipList = () => {
    const [ships, changeShipState] = useState([])
    const [filteredShips, changeFilteredState] = useState([])
    const [searchText, changeSearchState] = useState("")
    const navigate = useNavigate()

    const fetchShips = async () => {
        const response = await fetch(`${settings.localURL}/shippingShips`)
        const ships = await response.json()
        changeShipState(ships)
    }

    useEffect(() => {
        changeFilteredState(ships)
    }, [ships])

    useEffect(
        () => {
            const filteredShips = ships.filter(
                ship => ship.name.toLowerCase().includes(searchText.toLowerCase())
            )
            changeFilteredState(filteredShips)
        },
        [searchText]
    )

    const deleteShip = (shipId) => {
        return fetch(`${settings.localURL}/shippingShips/${shipId}`, {
            method: "DELETE"
        })
            .then(fetchShips)
    }

    useEffect(() => {
        fetchShips()
    }, [])

    return <>
        <section style={{display:"flex"}}>
            <input type="text" placeholder="Find a ship..."
                value={searchText}
                onChange={
                    (changeEvent) => {
                        changeSearchState(changeEvent.target.value)
                    }
                }
            />
            <button onClick={() => navigate("/newship")}>Create a Ship</button>
        </section>
        <ul>
            {
                filteredShips.map(ship => <li key={`ship-${ship.id}`}>
                    {ship.name}
                    <button onClick={() => deleteShip(ship.id)}>Delete</button>
                    <button onClick={() => navigate(`/shipEdit/${ship.id}`)}>Edit</button>
                </li>)
            }
        </ul>
    </>
}


