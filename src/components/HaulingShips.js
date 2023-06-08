import { useState } from "react"

export const HaulingShipList = ({ haulersArray }) => {
    const [hauler, changeHauler] = useState({shippingShips:[]})

    return <>
        <ul>
            {
                haulersArray.map(ship => <li
                    onClick={ () => changeHauler(ship) }
                    key={`ship-${ship.id}`}>
                        {ship.name}
                    </li>)
            }
        </ul>

        <div>
            <h4>Ships being hauled by {hauler.name}</h4>
            <ul>
            {
                hauler.shippingShips.map(ship => <li className="hauler__ship">
                    {ship.name}
                </li>)
            }
            </ul>
        </div>
    </>
}
