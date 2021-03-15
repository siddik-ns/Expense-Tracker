const formatDate = (date) => {
  console.log(date)
  const d = new Date(date);
  let month = exectDate(`${d.getMonth() + 1}`);
  let day = exectDate(`${d.getDate()}`);
  const year = d.getFullYear();

  return [year, month, day].join('-')
};

const exectDate = (date) => {
  if (date.length < 2) return `0${date}`;
  return date;
}

export default formatDate;