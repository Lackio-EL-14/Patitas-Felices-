
import { subirFoto } from '../Ejemplos base/seguimientoService';

describe('seguimientoService', () => {
  it('debería recibir un archivo y devolver info de la foto', async () => {
    const archivoMock = { name: 'fido.jpg' };
    const resultado = await subirFoto(archivoMock);
    expect(resultado.name).toBe('fido.jpg');
  });
});
