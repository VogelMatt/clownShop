import { fetchCompletions, fetchRequests } from "./dataAccess.js"
import { ClownService } from "./ClownService.js"
import { fetchClowns } from "./dataAccess.js"

export const mainContainer = document.querySelector("#container")

const render = () => {
    fetchRequests()
    .then(() => fetchClowns())
    .then(() => fetchCompletions())
    .then(
        () => {
            mainContainer.innerHTML = ClownService()
        }
    )
}
render()

mainContainer.addEventListener(
    "stateChanged", 
    () => {
        console.log("AAA")
        render();
    }
)
