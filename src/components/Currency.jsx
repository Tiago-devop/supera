export default function Currency({value}) {
  const brlCurrency = value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return <h4>Price: <span>{brlCurrency}</span></h4>
}
