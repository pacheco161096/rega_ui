function sliderModel(data) {
  this.titulo = data.attributes?.titulo;
  this.descripcion = data.attributes?.descripcion;
  this.boton = data.attributes?.activeButton ? data.attributes?.boton : null;
  this.imagen = data.attributes?.imagen?.data[0]?.attributes?.url
}
export default sliderModel;
