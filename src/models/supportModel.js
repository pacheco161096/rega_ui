function supportModel (data) {
    this.id = data?.id;
    this.nombre = data?.nombre;
    this.idcliente = data?.idcliente;
    this.email = data?.email;
    this.phone = data?.phone;
    this.msg = data?.msg;
    this.estatus = data?.estatus;
    this.fecha = data?.date;
}

export default supportModel;