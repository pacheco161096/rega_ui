import paqueteModel from "./paqueteModel";

function paquetesModel(response) {
  const data = response.data; 
  const paquetes = data.map(paquete => new paqueteModel(paquete))
  const paquetesHogar = paquetes ? paquetes.filter(paquete => paquete.tipo ==="hogar") : []
  const paquetesNegocio = paquetes ? paquetes.filter(paquete => paquete.tipo ==="negocio") : []
  this.paquetes = {
    paquetesHogar,
    paquetesNegocio
  }
}
export default paquetesModel;
