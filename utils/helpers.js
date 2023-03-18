module.exports = {
  format_date: (date) => {
    const isoDate = new Date(date).toISOString();
    const parts = isoDate.split('T')[0].split('-');
    return `${parts[1]}/${parts[2]}/${parts[0]}`;
  }
};
