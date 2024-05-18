import axios from "axios";
import { loginSuccess, loginError, loginLoading } from "../redux/reducers/login-reducer";
import { invoiceSuccess, invoiceError, invoiceLoading } from '../redux/reducers/invoice-reducer'
import { SingleInvoiceSuccess, SingleInvoiceError, SingleInvoiceLoading } from '../redux/reducers/singleInvoice-reducer'
import {contactSuccess,contactError,contactLoading} from '../redux/reducers/contact-reducer'
import { supportSuccess, supportError, supportLoading } from '../redux/reducers/support-reducer'
import userModel from "../models/userModel";
import invoiceModel from "../models/invoiceModel";
import contactModel from "../models/contactModel";
import supportsModel from "../models/supportsModel";

 const baseUrlApi = 'https://api.regatelecom.mx';

const querys = {
  async postlogin (body,dispatch)  { 
    return await postApi(
      baseUrlApi+'/profile/sigin',
      dispatch,
      body,
      userModel, 
      loginSuccess,
      loginError,
      loginLoading,
      null,
      'POST'
    )
  },
  async postContact (body,dispatch)  { 
    return await postApi(
      baseUrlApi+'/support/contact',
      dispatch,
      body,
      contactModel, 
      contactSuccess,
      contactError,
      contactLoading,
      null,
      'POST'
    )
  },
  async postSupport (body,dispatch,token)  { 
    return await postApi(
      baseUrlApi+'/support/ticket',
      dispatch,
      body,
      supportsModel, 
      supportSuccess,
      supportError,
      supportLoading,
      {
        'Authorization':'Bearer ' + token
      },
      'POST'
    )
  },
  async getSupport (body,dispatch,token)  { 
    return await postApi(
      baseUrlApi+'/support/ticket/'+body,
      dispatch,
      body,
      supportsModel, 
      supportSuccess,
      supportError,
      supportLoading,
      {
        'Authorization':'Bearer ' + token
      },
      'GET'
    )
  },
  async getInvoice (body,dispatch,token,id) {
    return await postApi(
      baseUrlApi+`/invoices/search-invoice?id=${id}`,
      dispatch,
      null,
      invoiceModel, 
      invoiceSuccess,
      invoiceError,
      invoiceLoading,
      {
        'Authorization':'Bearer ' + token
      },
      'GET'
    )
  },
  async getSingleInvoice (body,dispatch,token,id,month,year) {
    return await postApi(
      baseUrlApi+`/invoices?id=${id}&month=${month}&year=${year}`,
      dispatch,
      null,
      invoiceModel, 
      SingleInvoiceSuccess,
      SingleInvoiceError,
      SingleInvoiceLoading,
      {
        'Authorization':'Bearer ' + token
      },
      'GET'
    )
  }
}

const postApi = async (url,dispatch,body,modelApi,action,actionError,actionLoading,headers,method) => {
  dispatch(actionLoading())
  const options = {
    method,
    headers,
    url,
    data:body
  }
  const result = await axios(options)
  .then(function(response){
    const data = new modelApi(response.data) // ejecutamos la funcion de modelo plural mandandole la data
    dispatch(action(data))
    return data
  }).catch(function(error){
    dispatch(actionError(error.response?.data))
    return Promise.reject(error.response?.data)
  });
  return result
}

export default querys;