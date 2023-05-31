import { useEffect, useState } from "react"

export const HaulingShipList = () => {
    // Step 1
    const [ ships, changeShipsState ] = useState([])

    useEffect(
        () => {
            // Step 3 and any time ships state changes
            console.log(ships)
        },
        [ships]
    )

    useEffect(
        () => {
            // Step 4
            fetch("http://localhost:8088/haulers")
                .then(response => response.json())
                .then(
                    (haulerArray) => changeShipsState(haulerArray)
                )
        },
        []
    )


    // Step 2 and then any time state changes
    return <>
        <ul>
            {
                ships.map(ship => <li key={`ship-${ship.id}`}>{ship.name}</li>)
            }
        </ul>
    </>
}
