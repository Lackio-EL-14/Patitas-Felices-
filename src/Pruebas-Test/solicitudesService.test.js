import { getSolicitudes } from '../Ejemplos base/solicitudesService';

describe('getSolicitudes', () => {
    beforeEach(() => {
    global.fetch = jest.fn();
  });

  afterEach(() => {
    jest.resetAllMocks();
  });
  
  it('debería llamar a fetch con la ruta /api/solicitudes', async () => {
    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue([])
    });
    await getSolicitudes();
    expect(global.fetch).toHaveBeenCalledWith('/api/solicitudes');
  });

  it('debería retornar los datos en formato JSON', async () => {
    const mockData = [{ id: 1, nombre: 'Solicitud 1' }];
    global.fetch.mockResolvedValue({
        json: jest.fn().mockResolvedValue(mockData),
    });
    const result = await getSolicitudes();
    expect(result).toEqual(mockData);
    });

    it('debería lanzar un error si fetch falla', async () => {
        global.fetch.mockRejectedValue(new Error('Error de conexión'));
        await expect(getSolicitudes()).rejects.toThrow('Error de conexión');
    });


});