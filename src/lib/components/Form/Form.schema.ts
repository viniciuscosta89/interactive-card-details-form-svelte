import { z } from 'zod';
import isCreditCard  from "validator/lib/isCreditCard";

const onlyNumbersRegex = /^[0-9]*$/;

export const schema = z.object({
  cardholderName: z
    .string()
    .min(4, { message: 'Can’t be blank' })
    .max(27),

  cardNumber: z    
    .string({
      invalid_type_error: 'Wrong format, numbers only',
      required_error: 'Can’t be blank'
    })
    .length(16, { message: 'Must have 16 digits' })
    .refine(isCreditCard, {
      message: 'Must be a valid credit card number'
    })
    .refine(value => onlyNumbersRegex.test(value), 'Wrong format, numbers only'),

  cardExpireDateMonth: z    
    .string({
      invalid_type_error: 'Wrong format, numbers only',
      required_error: 'Can’t be blank'
    })
    .length(2, { message: 'Must have 2 digits' })
    .refine(value => onlyNumbersRegex.test(value), 'Wrong format, numbers only'),

  cardExpireDateYear: z    
    .string({
      invalid_type_error: 'Wrong format, numbers only',
      required_error: 'Can’t be blank'
    })
    .length(2, { message: 'Must have 2 digits' })
    .refine(value => onlyNumbersRegex.test(value), 'Wrong format, numbers only'),

  cvcCode: z
    .string({
      invalid_type_error: 'Wrong format, numbers only',
      required_error: 'Can’t be blank'
    })
    .length(3, { message: 'Must have 3 digits' })
    .refine(value => onlyNumbersRegex.test(value), 'Wrong format, numbers only')
}).required();