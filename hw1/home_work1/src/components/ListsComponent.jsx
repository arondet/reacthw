function ListsComponent() {
  return (
    <div className="lists-block">
      <h2>Неупорядоченный список</h2>
      <ul>
        <li>Первый пункт</li>
        <li>Второй пункт</li>
        <li>
          Третий пункт (со вложенным списком)
          <ul>
            <li>Вложенный пункт 3.1</li>
            <li>Вложенный пункт 3.2</li>
          </ul>
        </li>
      </ul>

      <h2>Упорядоченный список</h2>
      <ol>
        <li>Шаг первый</li>
        <li>Шаг второй</li>
        <li>
          Шаг третий (со вложенным списком)
          <ol>
            <li>Подшаг 3.1</li>
            <li>Подшаг 3.2</li>
          </ol>
        </li>
      </ol>
    </div>
  );
}

export default ListsComponent;