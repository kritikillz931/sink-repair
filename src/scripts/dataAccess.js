const applicationState = {
  requests:  []
}

const API = "http://localhost:8088"

export const fetchRequests = () => {
    return fetch(`${API}/requests`)
        .then(response => response.json())
        .then(
            (serviceRequests) => {
                // Store the external state in application state
                console.log("# of serviceRequests = " + serviceRequests.length)
                applicationState.requests = serviceRequests
            }
        )
}

export const getRequests = () => {
  return [...applicationState.requests]
}
