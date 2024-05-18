import sliderModel from "./sliderModel";

function slidersModel(response) {
  const data = response.data; 
  this.sliders = data.map(slider => new sliderModel(slider))
}
export default slidersModel;
