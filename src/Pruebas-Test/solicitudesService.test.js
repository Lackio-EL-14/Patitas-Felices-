import { getSolicitudes, getDetalleSolicitud, aprobarSolicitud, rechazarSolicitud } from '../Ejemplos base/Services/solicitudesService.js';

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

describe('getDetalleSolicitud', () => {
  beforeEach(() => {
    global.fetch = jest.fn();
  });

  it('debería llamar a la ruta correcta de detalle', async () => {
    const mockDetalle = { id: 1, nombre: 'Juan Perez' };
    global.fetch.mockResolvedValue({
      ok: true,
      json: async () => mockDetalle
    });

    const data = await getDetalleSolicitud(1);
    expect(global.fetch).toHaveBeenCalledWith('/api/solicitudes/1');
    expect(data).toEqual(mockDetalle);
  });

   it('debería lanzar error si fetch falla', async () => {
    global.fetch.mockRejectedValue(new Error('Error de conexión'));
    await expect(getDetalleSolicitud(1)).rejects.toThrow('Error de conexión');
  });
});

describe('aprobarSolicitud', () => {
  beforeEach(() => {
    global.fetch = jest.fn();
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('debería llamar a fetch con la ruta /api/solicitudes/:id/aprobar y método PUT y retornar el json', async () => {
    const mockResponse = { success: true };

    global.fetch.mockResolvedValue({
      ok: true,
      json: jest.fn().mockResolvedValue(mockResponse)
    });

    const result = await aprobarSolicitud(1);

    
    expect(global.fetch).toHaveBeenCalled();
    const calledUrl = global.fetch.mock.calls[0][0];
    const calledOpts = global.fetch.mock.calls[0][1];

    expect(calledUrl.endsWith('/api/solicitudes/1/aprobar')).toBe(true);
    expect(calledOpts).toMatchObject({ method: 'PUT' });

    expect(result).toEqual(mockResponse);
  });

  it('debería relanzar el error si fetch falla (comportamiento para Jest)', async () => {
    global.fetch.mockRejectedValue(new Error('Error de conexión'));
    await expect(aprobarSolicitud(1)).rejects.toThrow('Error de conexión');
  });

});

describe('rechazarSolicitud', () => {
  beforeEach(() => {
    global.fetch = jest.fn();
  });

  afterEach(() => {
    jest.resetAllMocks();
  });
  
  it('debería llamar a fetch con la ruta /api/solicitudes/:id/rechazar y método PUT y retornar el json', async () => {
    const mockResponse = { success: true };

    global.fetch.mockResolvedValue({
      ok: true,
      json: jest.fn().mockResolvedValue(mockResponse)
    });

    const result = await rechazarSolicitud(1);

    
    expect(global.fetch).toHaveBeenCalled();
    const calledUrl = global.fetch.mock.calls[0][0];
    const calledOpts = global.fetch.mock.calls[0][1];

    expect(calledUrl.endsWith('/api/solicitudes/1/rechazar')).toBe(true);
    expect(calledOpts).toMatchObject({ method: 'PUT' });

    expect(result).toEqual(mockResponse);
  });
  
  it('debería relanzar el error si fetch falla (comportamiento para Jest)', async () => {
    global.fetch.mockRejectedValue(new Error('Error de conexión'));
    await expect(rechazarSolicitud(1)).rejects.toThrow('Error de conexión');
  });
  
});
