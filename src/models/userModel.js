import paqueteModel from "./paqueteModel";

function userModel (data) {
    this.id = data?.id;
    this.name = data?.name;
    this.lastname = data?.lastname;
    this.user = data?.user;
    this.password = data?.password;
    this.email = data?.email;
    this.phone = data?.phone;
    this.estado = data?.estado;
    this.ciudad = data?.ciudad;
    this.calle = data?.calle;
    this.pais = data?.pais;
    this.noexterior = data?.noexterior;
    this.nointerior = data?.nointerior;
    this.colonia = data?.colonia;
    this.codigopostal = data?.codigopostal;
    this.plan = new paqueteModel(data.plan);
    this.token = data?.token;
    this.active = data?.active;
}
export default userModel; 