import buscarRefugiosService from "../Ejemplos base/Services/buscarRefugiosService"
import RefugioRepository from "../Ejemplos base/Infraestructure/RefugioRepository"

describe('buscarRefugiosService', () => {
  it('debe retornar todos los refugios del repositorio', () => {
    const repository = new RefugioRepository();
    const service = buscarRefugiosService(repository);
    const refugios = service.obtenerTodosLosRefugios();
    
    expect(refugios.length).toBe(5);
  });
});