const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const debounce = (func, wait, immediate) => {
  var timeout;
  return function () {
    var context = this,
      args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

export const formatNumber = (num) => {
  return num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
};

export const isDateBeforeToday = (date) => {
  return (
    new Date(new Date(date).toDateString()) <
    new Date(new Date().toDateString())
  );
};

export const formatDate = (date) => {
  let month = monthNames[new Date(date).getMonth()];
  let day = new Date(date).getDate();
  let year = new Date(date).getFullYear();

  return `${month} ${day}, ${year}`;
};
