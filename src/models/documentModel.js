function documentModel(response) {
  const data = response.attributes; 
  this.texto = data?.texto;
  this.documento = data?.documento?.data[0]?.attributes?.url;
}
export default documentModel;
