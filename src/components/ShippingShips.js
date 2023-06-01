import { useEffect, useState } from "react"
import { AssignmentList } from "./Assignments.js"
import { DockList } from "./DockList.js"
import { HaulingShipList } from "./HaulingShips.js"
import { ShippingShipList } from "./ShippingShipList.js"
import "./main.css"

export const ShippingShips = () => {
    const [haulers, changeHaulerState] = useState([])

    const fetchHaulers = async () => {
        const response = await fetch("http://localhost:8088/haulers?_embed=shippingShips&_expand=dock")
        const haulers = await response.json()
        changeHaulerState(haulers)
    }


    useEffect(() => {
        fetchHaulers()
    }, [])


    return <>
        <h1>Shipping Ship Tracker</h1>
        <article className="details">
            <section className="detail--column list details__cities">
                <h2>Hauling Ships</h2>
                <HaulingShipList haulersArray={haulers} />

            </section>
            <section className="detail--column list details__walkers">
                <h2>Shipping Ships</h2>
                <ShippingShipList />

            </section>
            <section className="detail--column list details__pets">
                <h2>Docks</h2>
                <DockList />

            </section>
        </article>

        <article className="assignments">
            <h2>Current Assignments</h2>
            <AssignmentList theHaulers={haulers} />
        </article>
    </>
}