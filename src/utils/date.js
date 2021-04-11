export function convertDate(date){
  let cDate = new Date(date)

  let dd = cDate.getDate();
  if (dd < 10) dd = '0' + dd;

  let mm = cDate.getMonth() + 1;
  if (mm < 10) mm = '0' + mm;

  let yy = cDate.getFullYear();

  return dd + '.' + mm + '.' + yy;
};
