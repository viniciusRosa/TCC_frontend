import * as yup from 'yup';


// const schema = yup.object().shape({
//   school_name: yup.string().required('Este campo é obrigatório.'),
//   address: yup.string().required('Este campo é obrigatório.'),
//   number: yup.string().required('Este campo é obrigatório.'),
//   district: yup.string().required('Este campo é obrigatório.'),
//   complement: yup.string().nullable(),
//   // city: yup.string().required(),
//   uf: yup.string().required(),
//   // cep: yup.string().required(),
//   email: yup.string().required('Este campo é obrigatório.'),
//   phone_number: yup.string().required('Este campo é obrigatório.'),

// })

const schema = yup.object().shape({
  school_name: '',
  address: '',
  number: '',
  district: '',
  complement: '',
  // city: yup.string().required(),
  uf: '',
  // cep: yup.string().required(),
  email: '',
  phone_number: '',

})

export default schema;
