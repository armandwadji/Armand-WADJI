import QueryString from "qs";

// Encode query params
const queryStringFormat = (params) => {
  return QueryString.stringify(params, { encodeValuesOnly: true });
};

// Convertisseur des données STRAPI en bon format
const flattenStrapiObject = (data) => {
  const isObject = (data) =>
    Object.prototype.toString.call(data) === "[object Object]";
  const isArray = (data) =>
    Object.prototype.toString.call(data) === "[object Array]";

  const flatten = (data) => {
    if (!data.attributes) return data;

    return {
      id: data.id,
      ...data.attributes,
    };
  };

  if (isArray(data)) {
    return data.map((item) => flattenStrapiObject(item));
  }

  if (isObject(data)) {
    if (isArray(data.data)) {
      data = [...data.data];
    } else if (isObject(data.data)) {
      data = flatten({ ...data.data });
    } else if (data.data === null) {
      data = null;
    } else {
      data = flatten(data);
    }

    for (const key in data) {
      data[key] = flattenStrapiObject(data[key]);
    }

    return data;
  }

  return data;
};

// Show le timestamp
const timestampPost = (date) => {
  const datePost = date;
  const today = new Date().getTime();

  // On calcule la difference entre le post et date actuel
  const timeDifference = today - datePost;

  // CONSTANTES DES TEMPS
  const SECONDE = 1000;
  const MINUTE = 60 * SECONDE;
  const HOUR = 60 * MINUTE;
  const DAY = 24 * HOUR;
  const WEEK = 7 * DAY;
  const MONTH = 30 * DAY;
  const YEAR = 12 * MONTH;

  //On calcule le nombres d'années
  let year = Math.floor(timeDifference / YEAR);
  let reste = timeDifference % YEAR;

  //On calcule nombres de mois
  let months = Math.floor(reste / MONTH);
  reste = reste % MONTH;

  //On calcule le nombres de semaines
  let weeks = Math.floor(reste / WEEK);
  reste = reste % WEEK;

  //on calcule le nombres de jours
  let day = Math.floor(reste / DAY);
  reste = reste % DAY;

  //on calcule le nombres d'heures
  let hour = Math.floor(reste / HOUR);
  reste = reste % HOUR;

  //on cacules le nombres de minutes
  let minutes = Math.floor(reste / MINUTE);
  reste = reste % MINUTE;

  // on calcule le nombres de secondes
  let secondes = Math.floor(reste / SECONDE);

  //on calcule les millisecondes qu'il nous reste
  reste = reste % 1000;

  //On stocke le temps converti dans un tableau d'objets (utile pour l'ordre d'itération)
  const times = [
    { an: year },
    { m: months },
    { s: weeks },
    { j: day },
    { h: hour },
    { min: minutes },
    { s: secondes },
  ];

  //On initialise la valeur retourné
  let returnValue = 0;

  for (const time of times) {
    for (const value in time) {
      if (time[value] > 0) {
        returnValue = `${time[value]} ${value}`;
        break;
      }
    }

    if (returnValue !== 0) {
      break;
    }
  }

  return returnValue;
};

const dateFormat = (date) => {
  const [year, month] = date.split("-");
  return [monthNumberToLetter(Number(month)), year].join(" ");
};

const monthNumberToLetter = (month) => {

  let result = "";

  switch (month) {
    case 1:
      result = " janv ";
      break;

    case 2:
      result = " fév ";
      break;

    case 3:
      result = " mars ";
      break;

    case 4:
      result = " avril ";
      break;

    case 5:
      result = " mai ";
      break;

    case 6:
      result = " juin ";
      break;

    case 7:
      result = " juil ";
      break;

    case 8:
      result = " août ";
      break;

    case 9:
      result = " sept ";
      break;

    case 10:
      result = " oct ";
      break;

    case 11:
      result = " nov ";
      break;

    case 12:
      result = " décembre ";
      break;
    default:
  }
  return result;
};

export { queryStringFormat, flattenStrapiObject, timestampPost, dateFormat };
