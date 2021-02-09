import * as yup from 'yup';


const schema = yup.object().shape({
  school_name: yup.string().required('Este campo é obrigatório.'),
  address: yup.string().required('Este campo é obrigatório.'),
  number: yup.string().required('Este campo é obrigatório.'),
  district: yup.string().required('Este campo é obrigatório.'),
  complement: yup.string().nullable(),
  email: yup.string().required('Este campo é obrigatório.'),
  phone_number: yup.string().required('Este campo é obrigatório.'),

})

export default schema;
