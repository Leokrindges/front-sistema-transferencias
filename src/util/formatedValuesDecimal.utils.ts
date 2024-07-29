export function formattedValuesDecimal(value: string) {
  const number = parseFloat(value.replace(/[^0-9,-]/g, "").replace(",", "."));
  if (isNaN(number)) return "";

  return number.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}
