import { useEffect, useState } from "react"
import settings from "../utils/settings.js"

export const ShippingShipForm = () => {
    const [haulersArray, changeHaulersArrayState] = useState([])
    const [newShip, changeNewShip] = useState({name: "", haulerId: 0})

    useEffect(() => {
        fetch(`${settings.localURL}/haulers`)
            .then(response => response.json())
            .then((haulers) => {
                changeHaulersArrayState(haulers)
            })
    }, [])

    const saveShip = (evt) => {
        evt.preventDefault()


        fetch(`${settings.localURL}/shippingShips`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newShip)
        })
            .then(response => response.json())
            .then((shipCreated) => {
                console.log(shipCreated)
            })
    }

    return <>
        <h1>Create a ship</h1>

        <form>
            <input value={newShip.name}
                onChange={(evt) => {
                    const copy = {...newShip}
                    copy.name = evt.target.value
                    changeNewShip(copy)
                }}
                type="text" placeholder="Name your ship..." />

            <select value={newShip.haulerId} onChange={(evt) => {
                    const copy = {...newShip}
                    copy.haulerId = parseInt(evt.target.value)
                    changeNewShip(copy)
                }}>
                <option value="0">Pick a hauler...</option>
                {
                    haulersArray.map(hauler => <option value={hauler.id}>{hauler.name}</option>)
                }
            </select>

            <button onClick={saveShip}>Save Ship</button>
        </form>
    </>
}
