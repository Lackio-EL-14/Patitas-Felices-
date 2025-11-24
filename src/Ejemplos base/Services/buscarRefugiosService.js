export default function buscarRefugiosService(refugioRepository) {
  return {
    obtenerTodosLosRefugios() {
      return refugioRepository.obtenerTodos();
    }
  };
}