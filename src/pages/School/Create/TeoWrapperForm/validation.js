import * as yup from 'yup';

const schema = yup.object().shape({
  name: yup.string().required('Este campo é obrigatório.'),
  address: yup.string().required('Este campo é obrigatório.'),
  number: yup.string().required('Este campo é obrigatório.'),
  district: yup.string(),
  complement: yup.string(),
  city: yup.string().required('Este campo é obrigatório.'),
  uf: yup.string().required('Este campo é obrigatório.'),
  email: yup.string().email('Insira um email válido').required('Este campo é obrigatório.'),
})

// const schema = yup.object().shape({
//   school_name: '',
//   address: '',
//   number: '',
//   district: '',
//   complement: '',
//   uf: '',
//   email: '',
//   phone_number: '',

// })

export default schema;
