import linkModel from "./linkModel";

function sectionsModel(data) {
  this.titulo = data.attributes?.titulo;
  this.links = data.attributes?.links.data.map(item => new linkModel(item))
}
export default sectionsModel;
