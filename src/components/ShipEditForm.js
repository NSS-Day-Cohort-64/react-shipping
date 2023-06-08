import { useEffect, useState } from "react"
import settings from "../utils/settings.js"
import { useParams } from "react-router-dom"

export const ShipEditForm = () => {
    const [haulersArray, changeHaulersArrayState] = useState([])
    const [shipToEdit, changeEditingShip] = useState({})
    const { shipPK } = useParams()

    useEffect(() => {
        // Get all haulers for the <select> elements
        fetch(`${settings.localURL}/haulers`)
            .then(response => response.json())
            .then((haulers) => {
                changeHaulersArrayState(haulers)
            })

        // Get the individual ship to be edited
        fetch(`${settings.localURL}/shippingShips/${shipPK}`)
            .then(response => response.json())
            .then((ship) => {
                changeEditingShip(ship)
            })
    }, [])

    const editShip = (evt) => {
        evt.preventDefault()

        fetch(`${settings.localURL}/shippingShips/${shipPK}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(shipToEdit)
        })
            .then(response => response.json())
            .then((shipCreated) => {
                console.log(shipCreated)
            })
    }

    return <>
        <h1>Edit a ship</h1>

        <form>
            <input value={shipToEdit.name}
                onChange={(evt) => {
                    const copy = {...shipToEdit}
                    copy.name = evt.target.value
                    changeEditingShip(copy)
                }}
                type="text" placeholder="Name your ship..." />

            <select value={shipToEdit.haulerId} onChange={(evt) => {
                    const copy = {...shipToEdit}
                    copy.haulerId = parseInt(evt.target.value)
                    changeEditingShip(copy)
                }}>
                <option value="0">Pick a hauler...</option>
                {
                    haulersArray.map(hauler => <option value={hauler.id}>{hauler.name}</option>)
                }
            </select>

            <button onClick={editShip}>Edit Ship</button>
        </form>
    </>
}
