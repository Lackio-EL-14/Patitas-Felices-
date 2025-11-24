import buscarRefugiosService from "../Ejemplos base/Services/buscarRefugiosService"
import RefugioRepository from "../Ejemplos base/Infraestructure/RefugioRepository"

describe('buscarRefugiosService', () => {
  it('debe retornar todos los refugios del repositorio', () => {
    const repository = new RefugioRepository();
    const service = buscarRefugiosService(repository);
    const refugios = service.obtenerTodosLosRefugios();
    
    expect(refugios.length).toBe(5);
  });
  it('debe filtrar refugios por nombre exacto', () => {
    const repository = new RefugioRepository();
    const service = buscarRefugiosService(repository);
    const refugios = service.filtrarPorNombre('Refugio Huellitas Felices');
    
    expect(refugios.length).toBe(1);
    expect(refugios[0].nombre).toBe('Refugio Huellitas Felices');
  });

  it('debe filtrar refugios por nombre parcial', () => {
    const repository = new RefugioRepository();
    const service = buscarRefugiosService(repository);
    const refugios = service.filtrarPorNombre('Huellitas');
    
    expect(refugios.length).toBe(1);
    expect(refugios[0].nombre).toContain('Huellitas');
  });

  it('debe ser insensible a mayúsculas y minúsculas', () => {
    const repository = new RefugioRepository();
    const service = buscarRefugiosService(repository);
    const refugios = service.filtrarPorNombre('huellitas');
    
    expect(refugios.length).toBe(1);
    expect(refugios[0].nombre).toContain('Huellitas');
  });

  it('debe retornar array vacío si no encuentra coincidencias', () => {
    const repository = new RefugioRepository();
    const service = buscarRefugiosService(repository);
    const refugios = service.filtrarPorNombre('NoExiste');
    
    expect(refugios.length).toBe(0);
  });

  it('debe retornar todos los refugios si el nombre está vacío', () => {
    const repository = new RefugioRepository();
    const service = buscarRefugiosService(repository);
    const refugios = service.filtrarPorNombre('');
    
    expect(refugios.length).toBe(5);
  });

  it('debe filtrar refugios por departamento "La Paz"', () => {
    const repository = new RefugioRepository();
    const service = buscarRefugiosService(repository);
    const refugios = service.filtrarPorDepartamento('La Paz');
    
    expect(refugios.length).toBe(2);
    refugios.forEach(refugio => {
      expect(refugio.departamento).toBe('La Paz');
    });
  });

  it('debe filtrar refugios por departamento "Cochabamba"', () => {
    const repository = new RefugioRepository();
    const service = buscarRefugiosService(repository);
    const refugios = service.filtrarPorDepartamento('Cochabamba');
    
    expect(refugios.length).toBe(1);
    expect(refugios[0].departamento).toBe('Cochabamba');
  });

  it('debe retornar todos los refugios si el departamento está vacío o es "Todos"', () => {
    const repository = new RefugioRepository();
    const service = buscarRefugiosService(repository);
    
    expect(service.filtrarPorDepartamento('').length).toBe(5);
    expect(service.filtrarPorDepartamento('Todos').length).toBe(5);
  });
});