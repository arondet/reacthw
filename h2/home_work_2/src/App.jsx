import Greeting from './components/Greeting';
import ShoppingList from './components/ShoppingList';
import OrderStatus from './components/OrderStatus';

function App() {
  // Задание 2: массив товаров
  const shoppingItems = ['Молоко', 'Хлеб', 'Яйца', 'Сыр'];

  // для проверки пустого списка можно временно раскомментировать:
  // const shoppingItems = [];

  // Задание 3: массив заказов
  const orders = [
    { orderId: 123, status: 'в пути' },
    { orderId: 124, status: 'обработан' },
    { orderId: 125, status: 'доставлен' },
  ];

  return (
    <div>
      {/* Задание 1 */}
      <Greeting name="Андрей" />

      {/* Задание 2 */}
      <h2>Список покупок</h2>
      <ShoppingList items={shoppingItems} />

      {/* Задание 3 */}
      <h2>Статусы заказов</h2>
      {orders.map((order) => (
        <OrderStatus
          key={order.orderId}
          orderId={order.orderId}
          status={order.status}
        />
      ))}
    </div>
  );
}

export default App;