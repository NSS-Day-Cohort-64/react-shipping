import { useEffect, useState } from "react"


export const DockList = () => {
    const [docks, changeDockState] = useState([])

    const fetchDocks = async () => {
        const response = await fetch("http://localhost:8088/docks?_embed=haulers")
        const docks = await response.json()
        changeDockState(docks)
    }

    useEffect(() => {
        fetchDocks()
    }, [])

    return <>
        <ul>
            {
                docks.map(dock => <li
                    onClick={
                        () => {
                            const nameArray = dock.haulers.map(hauler => hauler.name)

                            dock.haulers.length == 0
                                ? window.alert(`The dock at ${dock.location} is idle.`)
                                : window.alert(`The dock at ${dock.location} is unloading ${nameArray.join(", ")}`)
                        }
                    }
                    key={`dock-${dock.id}`}>
                        {dock.location}
                    </li>)
            }
        </ul>
    </>
}
