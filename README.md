<h1>Frontend-приложение для размещения постов</h1>

<h2><a href="https://posts-theta-six.vercel.app/" target="_blank">Рабочее приложение на vercel</a></h2>

<h2>Стек</h2>
<p>React - typescript, react-hook-form,  |  Redux, rtk-query  |  tailwind css</p>

<h2>Основные функции приложения</h2>
<ul>
  <li>Просмотр доступных постов</li>
  <li>Добавление постов в избранное</li>
  <li>Добавление постов</li>
  <li>Удаление постов</li>
  <li>Просмотр страницы поста</li>
  <li>Сортировка постов
    <ul>
      <li>Все посты / Избранные</li>
      <li>Поиск
        <ul>
          <li>По названию</li>
          <li>По содержимому</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<h2>Запуск приложения</h2>
<ul>
  <li>
    Для запуска на локальном сервере: <code>npm run dev</code>
  </li>
  <li>
    Для сборки: <code>npm run build</code>
  </li>
</ul>

<h2>Дополнительная информация</h2>
<p>В качестви API использовался <a href="https://jsonplaceholder.typicode.com/">sonplaceholder api</a>. Поэтому все посты изначально берутся по данному <a href="https://jsonplaceholder.typicode.com/posts">пути</a>. Из-за этого, при обновлении страницы все внесённые изменения обнуляются.</p>
