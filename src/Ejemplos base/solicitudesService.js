
/*export default async function getSolicitudes() {
  await fetch('/api/solicitudes');
}
*/
async function getSolicitudes() {
    const response =  await fetch('/api/solicitudes');
    const data = await response.json();
    return data;
}

export { getSolicitudes };