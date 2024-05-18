function cardModel(data) {
    this.icono = data.attributes?.icono?.data?.attributes?.url;
    this.titulo = data.attributes?.titulo;
    this.description = data.attributes?.description;
    this.button = data.attributes?.activeButton ? data.attributes?.button : null;
}

export default cardModel;