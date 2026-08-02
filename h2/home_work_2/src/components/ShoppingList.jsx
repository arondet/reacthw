function ShoppingList({ items }) {
  if (items.length === 0) {
    return <p>Список покупок пуст</p>;
  }

  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

export default ShoppingList;