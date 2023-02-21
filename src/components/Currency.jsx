export default function Currency({ value }) {
  const brlCurrency = value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return <span>Price: {brlCurrency}</span>;
}
