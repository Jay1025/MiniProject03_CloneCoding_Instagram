export const getCookie = (name) => {
  let value = ";" + document.cookie;

  let parts = value.split(`; ${name}=`);

  if (parts.length === 2) {
    return parts.pop().split(";").shift();
  }
};

export const setCookie = (name, value, exp = 5) => {
  let date = new Date();
  date.setTime(date.getTime() + exp * 24 * 60 * 60 * 1000);
  // console.log(document.cookie);
  document.cookie = `${name}=${value}; expires=${date.toUTCString()}`;
  // console.log(document.cookie);
};

export const deleteCookie = (name) => {
  let date = new Date("1900-01-01").toUTCString();
  document.cookie = name + "=; expires=" + date;
};
