import { ServiceForm } from "./ServiceForm.js"
import { Requests } from "./Requests.js"

export const ClownService = () => {
    return `
        <h1>Boots and Lollipop</h1>
        <section class="serviceForm">
            ${ServiceForm()}
        </section>

        <section class="serviceRequests">
            <h2>Service Requests</h2>
            ${Requests()}
        </section>
    `
}
