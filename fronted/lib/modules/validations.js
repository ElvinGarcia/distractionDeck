
function validateResponse(response) {
 if (response.ok) {
  return response.json();
 }
 throw Error(response.statusText);
}
