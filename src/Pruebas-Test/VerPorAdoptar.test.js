import obtenerMascotas from "../Adopciones";

describe("Ver perritos en adopcion", () => {
    it("deberia retornar un arreglo", () => {
        const mascotas = obtenerMascotas();
        expect(Array.isArray(mascotas)).toBe(true);
    }); 
    
});