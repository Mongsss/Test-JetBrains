export function convertDate(date){
  const cDate = new Date(date);  
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  return days[cDate.getDay()];
};
