import crypto from 'crypto';

export const filterPageFromUrl = (url, page) => {
  return url.replace(new RegExp(page), '');
};

export const dashToSentence = string => {
  return string.replace(/-/g, ' ');
};

export const camelToSentence = camelString => {
  return camelString
    .replace(/([A-Z])/g, ' $1')
    .replace(/^./, match => match.toUpperCase());
};

export const generateRandomID = length => {
  return new Promise((resolve, reject) => {
    crypto.randomBytes(length, (err, buffer) =>
      resolve(buffer.toString('hex'))
    );
  });
};
