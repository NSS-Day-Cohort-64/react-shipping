import { useEffect, useState } from "react"


export const DockList = () => {
    const [docks, changeDockState] = useState([])
    const [loading, changeLoadingState] = useState("Loading...")

    const fetchDocks = async () => {
        const response = await fetch("http://localhost:8088/docks")
        const docks = await response.json()
        changeDockState(docks)
        changeLoadingState("Done loading")
    }

    useEffect(() => {
        fetchDocks()
    }, [])

    return <>
        <h2>{loading}</h2>
        <ul>
            {
                docks.map(dock => <li>{dock.location}</li>)
            }
        </ul>
    </>
}
