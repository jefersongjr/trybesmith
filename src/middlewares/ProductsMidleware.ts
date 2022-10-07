import ThrowException from './exceptions/ThrowException';

const productsValidate = (validate: string, variavel: string) => {
  if (!validate) throw new ThrowException(400, `"${variavel}" is required`);
  if (typeof validate !== 'string') throw new ThrowException(422, `"${variavel}" must be a string`);
  if (validate.length < 2) { 
    throw new ThrowException(422, `"${variavel}" length must be at least 3 characters long`);
  }
};

export default productsValidate;