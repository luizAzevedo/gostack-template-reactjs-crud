import { ValidationError } from 'yup';

/**
 * tornar a tipagem dinamica devido a variedade de campos de uma aplicação
 * a palavra key é apenas uma referencia podendo ser qualquer coisa:
 * var, result, etc.
 */
interface IErrors {
  [key: string]: string;
}

export default function getValidationErrors(err: ValidationError): IErrors {
  const validationError: IErrors = {};

  err.inner.forEach(error => {
    validationError[error.path] = error.message;
  });

  return validationError;
}
