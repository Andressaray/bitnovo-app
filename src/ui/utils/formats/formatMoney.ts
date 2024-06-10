const formatMoney = (value: number) => {
  return new Intl.NumberFormat('de-DE', {
    style: 'decimal',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
};
export default formatMoney;
