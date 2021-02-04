import * as yup from 'yup';


const schema = yup.object().shape({
  schoolName: yup.string().required(),
  email: yup.string().email().required(),
})

export default schema;
