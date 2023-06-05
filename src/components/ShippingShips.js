import { useEffect, useState } from "react"
import { AssignmentList } from "./Assignments.js"
import { DockList } from "./DockList.js"
import { HaulingShipList } from "./HaulingShips.js"
import { ShippingShipList } from "./ShippingShipList.js"
import "./main.css"
import { NavBar } from "./NavBar.js"
import { ApplicationViews } from "./ApplicationViews.js"
import { BrowserRouter as Router } from 'react-router-dom';

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

    return <Router>
        <NavBar />
        <ApplicationViews haulers={haulers} />
    </Router>

}
