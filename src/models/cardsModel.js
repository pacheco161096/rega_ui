import cardModel from "./cardModel";

function cardsModel(response) {
    const data = response.data;
    this.cards = data.map( card => new cardModel(card) )
}

export default cardsModel;