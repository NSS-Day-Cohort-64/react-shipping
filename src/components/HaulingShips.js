export const HaulingShipList = ({ haulersArray }) => {
    return <>
        <ul>
            {
                haulersArray.map(ship => <li
                    onClick={
                        () => {
                            const nameArray = ship.shippingShips.map(shipship => shipship.name)
                            window.alert(`${ship.name} is hauling ${nameArray.join(", ")}`)
                        }
                    }
                    key={`ship-${ship.id}`}>
                        {ship.name}
                    </li>)
            }
        </ul>
    </>
}
