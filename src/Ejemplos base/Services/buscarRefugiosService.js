export default function buscarRefugiosService(refugioRepository) {
  return {
    obtenerTodosLosRefugios() {
      return refugioRepository.obtenerTodos();
    },
    filtrarPorNombre(nombre) {
      if (!nombre || nombre.trim() === '') {
        return refugioRepository.obtenerTodos();
      }
      
      const nombreLowerCase = nombre.toLowerCase();
      return refugioRepository.obtenerTodos().filter(refugio => 
        refugio.nombre.toLowerCase().includes(nombreLowerCase)
      );
    }
  };
}