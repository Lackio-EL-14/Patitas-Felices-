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
    },
    filtrarRefugiosCompleto(nombre, departamento, capacidadMinima) {
      let refugios = refugioRepository.obtenerTodos();
      
      // Filtrar por nombre si existe
      if (nombre && nombre.trim() !== '') {
        const nombreLowerCase = nombre.toLowerCase();
        refugios = refugios.filter(refugio => 
          refugio.nombre.toLowerCase().includes(nombreLowerCase)
        );
      }
      
      // Filtrar por departamento si existe y no es "Todos"
      if (departamento && departamento.trim() !== '' && departamento !== 'Todos') {
        refugios = refugios.filter(refugio => 
          refugio.departamento === departamento
        );
      }
      
      // Filtrar por capacidad si existe
      if (capacidadMinima && capacidadMinima !== null && capacidadMinima !== undefined) {
        refugios = refugios.filter(refugio => 
          refugio.capacidad >= capacidadMinima
        );
      }
      
      return refugios;
    }
  };
}