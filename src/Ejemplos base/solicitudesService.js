

async function getSolicitudes() {
    try {
        const response =  await fetch('/api/solicitudes');
        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error(error.message);
    }
}

export { getSolicitudes };