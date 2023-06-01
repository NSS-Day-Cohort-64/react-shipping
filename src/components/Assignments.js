export const AssignmentList = ({theHaulers}) => {
    return <>
        <ul>
            {
                theHaulers.map(hauler => <li key={`hauler-${hauler.id}`}>
                    {hauler.name} is hauling {hauler.shippingShips.map(s => s.name).join(", ")} and is docked at {hauler.dock.location}
                </li>)
            }
        </ul>
    </>
}


