const dateToMonth = (date) => {
  const months = ['', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  if (typeof date !== 'string') {
    return new TypeError('Argument is not a string.')
  }
  //  Inputs a date in DD/MM/YYYY format, extracts MM and gets the month name from months const
  return months[parseInt(date.split('/')[1])]
}
