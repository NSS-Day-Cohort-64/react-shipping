import { DockList } from "./DockList.js"
import { HaulingShipList } from "./HaulingShips.js"
import { ShippingShipList } from "./ShippingShipList.js"

export const ShippingShips = () => {

    return <>
        <h1>Shipping Ship Tracker</h1>
        <article className="details">
            <section className="detail--column list details__cities">
                <h2>Hauling Ships</h2>
                <HaulingShipList />

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
        </article>
    </>
}