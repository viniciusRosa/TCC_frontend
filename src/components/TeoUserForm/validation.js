import * as yup from 'yup';


const schema = yup.object().shape({
  schoolName: yup.string().required('Este campo é obrigatório.'),
  rua: yup.string().required('Este campo é obrigatório.'),
  numero: yup.number('Este campo tem que ser um numero.').positive('Este campo tem que ser um numero.').integer('Este campo tem que ser um numero.').required('Este campo é obrigatório.'),
  bairro: yup.string().required('Este campo é obrigatório.'),
  complemento: yup.string().required('Este campo é obrigatório.'),
  email: yup.string().required('Este campo é obrigatório.'),
  telefone: yup.string().required('Este campo é obrigatório.'),

})

export default schema;
