import documentModel from "./documentModel";

function documentsModel(response) {
  const data = response.data; 
  this.documents = data.map( card => new documentModel(card) )
}
export default documentsModel;
