import { getSolicitudes } from '../Ejemplos base/solicitudesService';

describe('getSolicitudes', () => {
    beforeEach(() => {
    global.fetch = jest.fn();
  });

  afterEach(() => {
    jest.resetAllMocks();
  });
  
  it('debería llamar a fetch con la ruta /api/solicitudes', async () => {
    await getSolicitudes();
    expect(global.fetch).toHaveBeenCalledWith('/api/solicitudes');
  });
  
});