export const HaulingShipList = ({ haulersArray }) => {
    return <>
        <ul>
            {
                haulersArray.map(ship => <li key={`ship-${ship.id}`}>{ship.name}</li>)
            }
        </ul>
    </>
}
