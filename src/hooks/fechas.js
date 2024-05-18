import { DateTime,Interval } from 'luxon';

/*const getDiasRestan = () => {
    const now = DateTime.now(); //Obtenemos la fecha actual
    const later = DateTime.local(now.c.year, now.c.month + 1 ,1 ); // Obtenemos el año acutal, el mes actual  + 1 para obener la fecha proxima de corte
    const i = Interval.fromDateTimes(now, later); // Con Interval calculamos el tiempo que hay de la fecha inicial a la proxima
   //setDate( Math.ceil(i.length('days')) ) // Obetenemos cuantos dias faltan y usamos la fucion Math.ceil para redondear la entero mas proximo
  }*/

  export const getYear = () => {
    const now = DateTime.now();
    const year = now.c.year;
    return year;
  }
  export const getMonth = () => {
    const now = DateTime.now();
    const month = now.c.month;
    return month;
  }