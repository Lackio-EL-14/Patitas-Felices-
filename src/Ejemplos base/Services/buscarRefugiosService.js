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
    }, 
    filtrarPorDepartamento(departamento) {
      if (!departamento || departamento.trim() === '' || departamento === 'Todos') {
        return refugioRepository.obtenerTodos();
      }
      
      return refugioRepository.obtenerTodos().filter(refugio => 
        refugio.departamento === departamento
      );
    },
    filtrarPorCapacidad(capacidadMinima) {
      if (!capacidadMinima || capacidadMinima === null || capacidadMinima === undefined) {
        return refugioRepository.obtenerTodos();
      }
      
      return refugioRepository.obtenerTodos().filter(refugio => 
        refugio.capacidad >= capacidadMinima
      );
    },

    filtrarRefugios(nombre, departamento) {
      let refugios = refugioRepository.obtenerTodos();
      
      if (nombre && nombre.trim() !== '') {
        const nombreLowerCase = nombre.toLowerCase();
        refugios = refugios.filter(refugio => 
          refugio.nombre.toLowerCase().includes(nombreLowerCase)
        );
      }
      
      if (departamento && departamento.trim() !== '' && departamento !== 'Todos') {
        refugios = refugios.filter(refugio => 
          refugio.departamento === departamento
        );
      }
      
      return refugios;
    }
  };
}