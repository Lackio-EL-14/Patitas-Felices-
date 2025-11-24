import buscarRefugiosService from "../Ejemplos base/Services/buscarRefugiosService"
import RefugioRepository from "../Ejemplos base/Infraestructure/RefugioRepository"

describe('buscarRefugiosService', () => {
  it('debe retornar todos los refugios del repositorio', () => {
    const repository = new RefugioRepository();
    const service = buscarRefugiosService(repository);
    const refugios = service.obtenerTodosLosRefugios();
    
    expect(refugios.length).toBe(10);
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
    
    expect(refugios.length).toBe(10);
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
    
    expect(service.filtrarPorDepartamento('').length).toBe(10);
    expect(service.filtrarPorDepartamento('Todos').length).toBe(10);
  });

  
  it('debe combinar filtros de nombre y departamento', () => {
    const repository = new RefugioRepository();
    const service = buscarRefugiosService(repository);
    const refugios = service.filtrarRefugios('Esperanza', 'La Paz');
    
    expect(refugios.length).toBe(1);
    expect(refugios[0].nombre).toContain('Esperanza');
    expect(refugios[0].departamento).toBe('La Paz');
  });

  it('debe combinar filtros y retornar vacío si no hay coincidencias', () => {
    const repository = new RefugioRepository();
    const service = buscarRefugiosService(repository);
    const refugios = service.filtrarRefugios('Huellitas', 'Cochabamba');
    
    expect(refugios.length).toBe(0);
  });

  it('debe filtrar refugios con capacidad mayor o igual a 3', () => {
    const repository = new RefugioRepository();
    const service = buscarRefugiosService(repository);
    const refugios = service.filtrarPorCapacidad(3);
    
    expect(refugios.length).toBe(3);
    refugios.forEach(refugio => {
      expect(refugio.capacidad).toBeGreaterThanOrEqual(3);
    });
  });

  it('debe filtrar refugios con capacidad mayor o igual a 4', () => {
    const repository = new RefugioRepository();
    const service = buscarRefugiosService(repository);
    const refugios = service.filtrarPorCapacidad(4);
    
    expect(refugios.length).toBe(1);
    expect(refugios[0].capacidad).toBe(4);
  });

  it('debe retornar todos los refugios si capacidad es null o undefined', () => {
    const repository = new RefugioRepository();
    const service = buscarRefugiosService(repository);
    
    expect(service.filtrarPorCapacidad(null).length).toBe(10);
    expect(service.filtrarPorCapacidad(undefined).length).toBe(10);
  });

    it('debe combinar todos los filtros: nombre, departamento y capacidad', () => {
    const repository = new RefugioRepository();
    const service = buscarRefugiosService(repository);
    const refugios = service.filtrarRefugiosCompleto('', 'La Paz', 3);
    
    expect(refugios.length).toBe(1);
    expect(refugios[0].nombre).toContain('Huellitas');
    expect(refugios[0].departamento).toBe('La Paz');
    expect(refugios[0].capacidad).toBeGreaterThanOrEqual(3);
  });

  it('debe retornar vacío cuando ningún refugio cumple todos los criterios', () => {
    const repository = new RefugioRepository();
    const service = buscarRefugiosService(repository);
    const refugios = service.filtrarRefugiosCompleto('', 'Tarija', 10);
    
    expect(refugios.length).toBe(0);
  });

  it('debe obtener mascotas de un refugio por su ID', () => {
    const repository = new RefugioRepository();
    const service = buscarRefugiosService(repository);
    const mascotas = service.obtenerMascotasDeRefugio(1);
    
    expect(mascotas).toEqual(['Firulais', 'Perrita', 'Maxito']);
    expect(mascotas.length).toBe(3);
  });

  it('debe retornar array vacío si el refugio no existe', () => {
    const repository = new RefugioRepository();
    const service = buscarRefugiosService(repository);
    const mascotas = service.obtenerMascotasDeRefugio(999);
    
    expect(mascotas).toEqual([]);
  });

  it('debe obtener mascotas de otro refugio por su ID', () => {
    const repository = new RefugioRepository();
    const service = buscarRefugiosService(repository);
    const mascotas = service.obtenerMascotasDeRefugio(2);
    
    expect(mascotas).toEqual(['Luna', 'Rocky']);
    expect(mascotas.length).toBe(2);
  });
});