function invoiceModel (data) {
  this.id = data?.id;
  this.idcliente = data?.idcliente;
  this.fecha = data?.fecha;
  this.idplan = data?.idplan;
  this.saldo = data?.saldo;
  this.recargo = data?.recargo;
  this.saldopendiente = data?.saldopendiente;
  this.saldototal = data?.saldototal;
  this.estatus = data?.estatus;
  this.oportuno = data?.oportuno;
  this.idInvoiceStripe = data?.idstripe;
}

export default invoiceModel;