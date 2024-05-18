import supportModel from "./supportModel";

function supportsModel (response) {
    return response.map ( data => new supportModel(data) )
}

export default supportsModel;
