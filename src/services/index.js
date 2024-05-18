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

const baseUrlCMS = 'http://localhost:1337/api/'

const cms = {
  getSliders(language,dispatch){
    const url= baseUrlCMS+`sliders?populate=imagen&locale=${ language = 'es-mx' ? 'es-MX' : language }`
    getCms(url, sliderModel, dispatch,sliderSuccess)
  },
  getCards(language,dispatch){
    const url= baseUrlCMS+`cards?populate=icono&locale=${ language = 'es-mx' ? 'es-MX' : language }`
    getCms(url, cardsModel, dispatch,cardsSuccess)
  },
  getHogar(language,dispatch){
    const url= baseUrlCMS+`paquetes-hogar?locale=${ language = 'es-mx' ? 'es-MX' : language }`
    getCms(url, hogarModel, dispatch,hogarSuccess)
  },
  getNegocio(language,dispatch){
    const url= baseUrlCMS+`paquetes-negocio?locale=${ language = 'es-mx' ? 'es-MX' : language }`
    getCms(url, hogarModel, dispatch,negocioSuccess)
  },
  getPaquetes(language,dispatch){
    const url= baseUrlCMS+`paquetes?populate=%2A&locale=${ language = 'es-mx' ? 'es-MX' : language }`
    getCms(url, paquetesModel, dispatch, paquetesSuccess)
  },
  getTraslateCopy(language,dispatch){
    const url= baseUrlCMS+`traslate-copies?locale=${ language = 'es-mx' ? 'es-MX' : language }&pagination[pageSize]=1000`
    getCms(url,traslateCopies, dispatch,traslateCopySuccess)
  }, 
  getFooter(language,dispatch){
    const url= baseUrlCMS+`footers?populate=%2A&locale=${ language = 'es-mx' ? 'es-MX' : language }`
    getCms(url,footerModel, dispatch,footerSuccess)
  }, 
  getDocument(language,dispatch){
    const url= baseUrlCMS+`/documentos?populate=documento&locale=${ language = 'es-mx' ? 'es-MX' : language }`
    getCms(url, documentsModel , dispatch, documentsSuccess)
  }
}

const getCms = async (url, modelUi, dispatch,action) => {
  await axios.get(url)
  .then(function (response){
    const data = new modelUi(response.data) // ejecutamos la funcion de modelo plural mandandole la data
    dispatch(action(data))
  }).catch(function(error){
  });
}

export default cms;
