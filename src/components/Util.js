
// Importar la biblioteca moment.js
import moment from 'moment';

export function calcYearsAndMonths(fromDate, toDate) {
  // Calcular la diferencia en años y meses entre las dos fechas utilizando la función `diff` de moment.js
  let diff = moment(toDate).diff(moment(fromDate), 'years', true);
  
  // Calcular la cantidad de años completos entre las dos fechas
  let years = Math.floor(diff);
  
  // Calcular la cantidad de meses restantes
  // Primero, calcular la cantidad de años restantes después de quitar los años completos
  let remainingYears = diff - years;
  // Luego, calcular la cantidad de meses a partir de esos años restantes
  // Multiplicando la cantidad de años restantes por 12 para obtener la cantidad de meses
  let months = Math.round(remainingYears * 12);
  
  // Devolver los resultados en un objeto
  return {
    years: years,
    months: months
  };
}