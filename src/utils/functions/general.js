export const sendWhatsAppMessage = (option, paquete = null) => {
  const phoneNumber = 523226886206;
  let message = '';

  if (option == 'PACKAGE') {
    const { titulo, velocidad } = paquete;

    message = `Hola, estoy interesado(a) en contratar el paquete de internet *${titulo}* de *${velocidad}Mbps* con REGA Telecom. Podrían contactarme por favor.`;
  } else if (option == 'SUPPORT') {
    message = `Hola REGA Telecom, quisiera solicitar una revisión sobre mi servicio de internet, por favor. Ya que presento *intermitencias o desconexión*.`;
  } else {
    message = `Hola, estoy interesado(a) en contratar servicio de internet con REGA Telecom. Podría brindarme más información por favor.`;
  }

  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  window.location.href = url;
};