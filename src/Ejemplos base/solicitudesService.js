
/*export default async function getSolicitudes() {
  await fetch('/api/solicitudes');
}
*/
async function getSolicitudes() {
  return await fetch('/api/solicitudes');
}

export { getSolicitudes };