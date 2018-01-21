import axios from 'axios';

const fetchResources = () =>
axios.get('/api')
  .then(response => response.json())
  .catch(err => console.error(err));

const fetchOneResource = resourceId =>
axios.get(`/api/${resourceId}`)
  .then(response => response.json())
  .catch(err => console.error(err));

const postResource = resourceObject =>
axios.post('/api', {
    address: resourceObject.address,
    city: resourceObject.city,
    state: resourceObject.state,
    location: resourceObject.location,
    type: resourceObject.type,
    author: resourceObject.author,
    active: resourceObject.archive,
    details: resourceObject.details
  })
  .then(response => response.json())
  .catch(err => console.error(err));

const updateResource = (resourceId, updateObject) => {
    axios.put(`/api/${resourceId}`, {updateObject})
    .then(response => response.json())
    .cath(err => console.error(err));
}

const deleteResource = resourceId => {
    axios.delete(`/api/${resourceId}`)
    .then(response => response.json())
    .cath(err => console.error(err));
}

module.exports = {
fetchResources,
fetchOneResource,
postResource,
updateResource,
deleteResource
};
