import caracteristica from "./caracteristicaModel";

function paqueteModel(data) {
  this.titulo = data.attributes?.titulo;
  this.velocidad = data.attributes?.velocidad;
  this.tipo = data.attributes?.tipo;
  this.categoria = data.attributes?.categoria;
  this.precio = data.attributes?.precio;
  this.caracteristicas = data.attributes?.caracteristicas.data.map(item => new caracteristica(item))
  this.id = data.id;
  this.recargo = data.attributes?.recargo;
  this.folio = data.attributes?.folio;
}
export default paqueteModel;
