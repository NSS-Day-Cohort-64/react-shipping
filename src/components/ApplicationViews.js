import { Outlet, Route, Routes } from "react-router-dom"
import { DockList } from "./DockList.js"
import { HaulingShipList } from "./HaulingShips.js"
import { ShippingShipList } from "./ShippingShipList.js"
import { AssignmentList } from "./Assignments.js"
import { ShippingShipForm } from "./ShippingShipForm.js"
import { ShipEditForm } from "./ShipEditForm.js"

export const ApplicationViews = ({ haulers }) => {
	return (
        <Routes>
            <Route path="/" element={
                <>
                    <h1>Shipping Ship Tracker</h1>
                    <div>Movin stuff around the world</div>

                    <Outlet />

                    The above information is brought to you by the 🍪 Cookie Monster 🍪
                </>
            }>

                <Route path="docks" element={<DockList />} />
                <Route path="haulers" element={<HaulingShipList haulersArray={haulers} />} />
                <Route path="shippers" element={<ShippingShipList />} />
                <Route path="assignments" element={<AssignmentList theHaulers={haulers} />} />
                <Route path="newship" element={<ShippingShipForm />} />
                <Route path="shipEdit/:shipPK" element={<ShipEditForm />} />

            </Route>
        </Routes>
    )
}
