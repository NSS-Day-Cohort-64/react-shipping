import { useEffect, useState } from "react"


export const ShippingShipList = () => {
    const [ships, changeShipState] = useState([])

    const fetchShips = async () => {
        const response = await fetch("http://localhost:8088/shippingShips")
        const ships = await response.json()
        changeShipState(ships)
    }


    useEffect(() => {
        fetchShips()
    }, [])

    return <>
        <ul>
            {
                ships.map(ship => <li key={`ship-${ship.id}`}>{ship.name}</li>)
            }
        </ul>
    </>
}


