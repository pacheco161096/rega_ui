function hogarModel(data) {
  this.titulo = data.data?.attributes?.titulo;
  this.descripcion = data.data?.attributes?.descripcion;
}

export default hogarModel;