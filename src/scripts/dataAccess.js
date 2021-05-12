const applicationState = {
  requests: [],
  plumbers: [],
  completions: [],
};

const API = "http://localhost:8088";

export const fetchRequests = () => {
  return fetch(`${API}/requests`)
    .then((response) => response.json())
    .then((serviceRequests) => {
      // Store the external state in application state
      console.log("# of serviceRequests = " + serviceRequests.length);
      applicationState.requests = serviceRequests;
    });
};

export const getRequests = () => {
  return [...applicationState.requests];
};

export const sendRequest = (userServiceRequest) => {
  const fetchOptions = {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userServiceRequest),
  };

  return fetch(`${API}/requests`, fetchOptions)
    .then((response) => response.json())
    .then(() => {
      mainContainer.dispatchEvent(new CustomEvent("stateChanged"));
    });
};

export const deleteRequest = (id) => {
  return fetch(`${API}/requests/${id}`, { method: "DELETE" })
      .then(
          () => {
              mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
          }
      )
}
export const getPlumbers = () => {
  return [...applicationState.plumbers]
}

export const fetchPlumbers = () => {
  return fetch(`${API}/plumbers`)
    .then((response) => response.json())
    .then((plumberData) => {
      // Store the external state in application state
      applicationState.plumbers = plumberData;
    });
};

export const sendPlumbers = (userServiceRequest) => {
  const fetchOptions = {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userServiceRequest),
  }
  return fetch(`${API}/plumbers`, fetchOptions)
    .then((response) => response.json())
    .then(() => {
      mainContainer.dispatchEvent(new CustomEvent("stateChanged"));
    });
};

export const getCompletions = () => {
  return [...applicationState.completions]
}

export const fetchCompletions = () => {
  return fetch(`${API}/completions`)
    .then((response) => response.json())
    .then((completionData) => {
      // Store the external state in application state
      applicationState.completions = completionData
    });
};

export const saveCompletion = (userServiceRequest) => {
  const fetchOptions = {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userServiceRequest),
  }
  return fetch(`${API}/completions`, fetchOptions)
    .then((response) => response.json())
    .then(() => {
      mainContainer.dispatchEvent(new CustomEvent("stateChanged"));
    });
};