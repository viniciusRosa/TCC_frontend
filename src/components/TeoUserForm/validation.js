import * as yup from 'yup';


const schema = yup.object().shape({
  school_name: yup.string().required('Este campo é obrigatório.'),
  street: yup.string().required('Este campo é obrigatório.'),
  number: yup.number('Este campo tem que ser um numero.').positive('Este campo tem que ser um numero.').integer('Este campo tem que ser um numero.').required('Este campo é obrigatório.'),
  district: yup.string().required('Este campo é obrigatório.'),
  complement: yup.string().required('Este campo é obrigatório.'),
  email: yup.string().required('Este campo é obrigatório.'),
  phone_number: yup.string().required('Este campo é obrigatório.'),

})

export default schema;
