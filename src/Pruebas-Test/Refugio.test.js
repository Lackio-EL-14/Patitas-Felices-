import Refugio from "../Ejemplos base/Domain/Refugio"

describe('Refugio', () => {
  it('debe crear un refugio con sus propiedades básicas', () => {
    const refugio = new Refugio(1, 'Refugio Huellitas', 'La Paz', ['Max', 'Luna'], 2);
    
    expect(refugio.id).toBe(1);
    expect(refugio.nombre).toBe('Refugio Huellitas');
    expect(refugio.departamento).toBe('La Paz');
    expect(refugio.mascotas).toEqual(['Max', 'Luna']);
    expect(refugio.capacidad).toBe(2);
  });
});