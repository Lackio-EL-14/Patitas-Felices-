import RefugioRepository from "../Ejemplos base/Infraestructure/RefugioRepository"
describe('RefugioRepository', () => {
  it('debe retornar todos los refugios', () => {
    const repository = new RefugioRepository();
    const refugios = repository.obtenerTodos();
    
    expect(refugios).toBeDefined();
    expect(refugios.length).toBeGreaterThan(0);
  });

  it('debe retornar refugios con la estructura correcta', () => {
    const repository = new RefugioRepository();
    const refugios = repository.obtenerTodos();
    const primerRefugio = refugios[0];
    
    expect(primerRefugio).toHaveProperty('id');
    expect(primerRefugio).toHaveProperty('nombre');
    expect(primerRefugio).toHaveProperty('departamento');
    expect(primerRefugio).toHaveProperty('mascotas');
    expect(primerRefugio).toHaveProperty('capacidad');
  });
});