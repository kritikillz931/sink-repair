import { getRequests } from "./dataAccess.js";

export const Requests = () => {
  const requests = getRequests();
  
  let html = `<ul>
  
  ${requests.map((request) => {
      return `<li>${request.description}</li>`;
    })}  
        
    </ul>
    `;
    
    console.log("# of requests: " + requests.length)
  return html;
};
