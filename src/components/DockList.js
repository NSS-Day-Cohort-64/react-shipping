import { useEffect, useState } from "react"


export const DockList = () => {
    const [docks, changeDockState] = useState([])

    const fetchDocks = async () => {
        const response = await fetch("http://localhost:8088/docks")
        const docks = await response.json()
        changeDockState(docks)
    }

    useEffect(() => {
        fetchDocks()
    }, [])

    return <>
        <ul>
            {
                docks.map(dock => <li key={`dock-${dock.id}`}>{dock.location}</li>)
            }
        </ul>
    </>
}
