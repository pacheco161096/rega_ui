import axios from 'axios'
import sliderModel from '../models/slidersModel'
import cardsModel from '../models/cardsModel'
import hogarModel from '../models/hogarModel'
import paquetesModel from '../models/paquetesModel'
import footerModel from '../models/footerModel'
import documentsModel from '../models/documentsModel'
import { sliderSuccess } from '../redux/reducers/sliders-reducer'
import { cardsSuccess } from '../redux/reducers/cards-reducer'
import { hogarSuccess } from '../redux/reducers/paquetesHogar-reducer'
import { negocioSuccess } from '../redux/reducers/paquetesNegocio-reducer'
import { paquetesSuccess } from '../redux/reducers/paquetes-reducer'
import traslateCopies from '../models/traslateCopies'
import { traslateCopySuccess } from '../redux/reducers/traslateCopy-reducer'
import { footerSuccess } from '../redux/reducers/footer-reducer'
import { documentsSuccess } from '../redux/reducers/document-reducer'

const baseUrlCMS = 'https://monkfish-app-2et8k.ondigitalocean.app/api/'

const cms = {
  generateLocale(language) {
    return language === 'es-mx' ? 'es-MX' : language;
  },
  
  async getSliders(language, dispatch) {
    const url = `${baseUrlCMS}sliders?populate=imagen&locale=${this.generateLocale(language)}`;
    return await getCms(url, sliderModel, dispatch, sliderSuccess);
  },

  async getCards(language, dispatch) {
    const url = `${baseUrlCMS}cards?populate=icono&locale=${this.generateLocale(language)}`;
    return await getCms(url, cardsModel, dispatch, cardsSuccess);
  },

  async getHogar(language, dispatch) {
    const url = `${baseUrlCMS}paquetes-hogar?locale=${this.generateLocale(language)}`;
    return await getCms(url, hogarModel, dispatch, hogarSuccess);
  },

  async getNegocio(language, dispatch) {
    const url = `${baseUrlCMS}paquetes-negocio?locale=${this.generateLocale(language)}`;
    return await getCms(url, hogarModel, dispatch, negocioSuccess);
  },

  async getPaquetes(language, dispatch) {
    const url = `${baseUrlCMS}paquetes?populate=%2A&locale=${this.generateLocale(language)}`;
    return await getCms(url, paquetesModel, dispatch, paquetesSuccess);
  },

  async getTraslateCopy(language, dispatch) {
    const url = `${baseUrlCMS}traslate-copies?locale=${this.generateLocale(language)}&pagination[pageSize]=1000`;
    return await getCms(url, traslateCopies, dispatch, traslateCopySuccess);
  },

  async getFooter(language, dispatch) {
    const url = `${baseUrlCMS}footers?populate=%2A&locale=${this.generateLocale(language)}`;
    return await getCms(url, footerModel, dispatch, footerSuccess);
  },

  async getDocument(language, dispatch) {
    const url = `${baseUrlCMS}documentos?populate=documento&locale=${this.generateLocale(language)}`;
    return await getCms(url, documentsModel, dispatch, documentsSuccess);
  }
};

const getCms = async (url, modelUi, dispatch, action) => {
  try {
    const response = await axios.get(url);
    const data = new modelUi(response.data); // Creamos la instancia del modelo con los datos
    dispatch(action(data)); // Despachamos la acción con los datos procesados
    return 'success'; // Devolvemos el estado de éxito
  } catch (error) {
    console.error('Error fetching CMS data:', error); // Manejo del error
    return 'error'; // Devolvemos el estado de error
  }
};

export default cms;
