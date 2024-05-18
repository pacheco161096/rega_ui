import caracteristicaModel from "./caracteristicaModel";

function caracteristicasModel(data) {
  this.texto = data.map(caracteristica => new caracteristicaModel(caracteristica))
}
export default caracteristicasModel;
