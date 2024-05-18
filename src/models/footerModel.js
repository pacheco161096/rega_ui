import sectionModel from "./sectionsModel";

function footerModel(response) {
  const data = response.data; 
  const sections = data.map(section => new sectionModel(section))
  this.sections = sections ? sections : [];
}
export default footerModel;
