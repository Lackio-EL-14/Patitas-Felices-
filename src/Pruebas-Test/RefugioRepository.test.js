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

  it('debe retornar lista única de departamentos', () => {
    const repository = new RefugioRepository();
    const departamentos = repository.obtenerDepartamentos();
    
    expect(departamentos).toContain('La Paz');
    expect(departamentos).toContain('Cochabamba');
    expect(departamentos).toContain('Santa Cruz');
    expect(departamentos).toContain('Tarija');
    expect(departamentos).toContain('Oruro');
    expect(departamentos).toContain('Potosí');
    expect(departamentos).toContain('Beni');
    expect(departamentos).toContain('Pando');
    expect(departamentos).toContain('Chuquisaca');
    expect(departamentos.length).toBe(9);
  });

  it('debe retornar departamentos sin duplicados', () => {
    const repository = new RefugioRepository();
    const departamentos = repository.obtenerDepartamentos();
    const departamentosUnicos = [...new Set(departamentos)];
    
    expect(departamentos.length).toBe(departamentosUnicos.length);
  });
});