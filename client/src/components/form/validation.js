import validator from 'validator';

export const validate = (data, rules) => {
  let formFieldError = {};

  Object.keys(data).forEach(field => {
    // If a data field has a rule. If not, then skip.
    if (rules.hasOwnProperty(field)) {
      let value = data[field];
      let errors = [];

      if (rules[field].required && validator.isEmpty(value)) {
        errors.push('Masukkan data ke input ini.');
      }
      // If it's not empty, then proceed validating its values.
      if (!validator.isEmpty(value)) {
        // Check email format.
        if (rules[field].email && !validator.isEmail(value)) {
          errors.push('Masukkan email dengan format yang valid.');
        }
        // Comparing the value of multiple fields.
        if (
          rules[field].equals &&
          !validator.equals(value, data[rules[field].equals])
        ) {
          errors.push('Data tidak cocok.');
        }
      }

      if (errors.length > 0) {
        formFieldError[field] = errors;
      }
    }
  });

  return formFieldError;
};
