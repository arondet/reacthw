const citiesData = [
  {
    name: 'Токио',
    description:
      'Столица Японии, известная своими неоновыми огнями, многолюдностью и современной архитектурой.',
    imageUrl:
      'https://www.topmagazine.cz/wp-content/uploads/2021/06/tokio-1024x576.jpg',
    facts: [
      'Токио - самый населенный мегаполис в мире.',
      'Здесь расположена самая высокая башня в Японии - Токийская башня.',
      'В Токио проходят множество культурных событий и фестивалей.',
    ],
  },
  {
    name: 'Киото',
    description:
      'Город на острове Хонсю, известный своими многочисленными классическими буддийскими храмами, а также садами, императорскими дворцами, синтоистскими святилищами и традиционными деревянными домами.',
    imageUrl:
      'https://imgs.search.brave.com/V5xVvjU8GNhFI0FjU8qMjSzsYrnZBN1gEgnCH-7syQc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNjA2/MDAwMzYyL3J1LyVE/MSU4NCVEMCVCRSVE/MSU4MiVEMCVCRS8l/RDAlQkElRDAlQjgl/RDAlQkUlRDElODIl/RDAlQkUtJUQwJUJF/JUQxJTgxJUQwJUI1/JUQwJUJEJUQxJThD/JUQxJThFLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz1VU3J1/N2xKN2tRUXpRdVlR/Y29NTHdlaTIyYkNm/ZVBZMkVhbGRyZlJT/a1RzPQ',
    facts: [
      'В Киото насчитывается более 1600 буддийских храмов.',
      'Этот город был столицей Японии более тысячи лет.',
    ],
  },
  {
    name: 'Осака',
    description:
      'Город в центральной части острова Хонсю, известен своими современными достопримечательностями и активной ночной жизнью.',
    imageUrl:
      'https://imgs.search.brave.com/DKif1engS-lJWYyP5nAPjhB8zDPx2ACG0coFFqqg8vc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9mcy50/b25rb3N0aS5ydS9z/aXplZC9jMTYwMHgz/MjAvNWEvbGUvNWFs/ZXdsMXo3MjRnY3Nn/czg0OHdnd2d3cy5q/cGc',
    facts: [
      'Осака известна своим замком, который играл ключевую роль в объединении Японии в XVI веке.',
      'Город является кулинарной столицей Японии.',
    ],
  },
  {
    name: 'Хоккайдо',
    description:
      'Самый северный остров Японии, известный своей природой, снежными фестивалями и уникальной культурой.',
    imageUrl:
      'https://imgs.search.brave.com/K5MkZfRrRPV7O-dmtVHTX21U_S3mUMgd-q5KTl1O9xk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9qYXBh/bnN1bnJpc2UuY29t/L3Bvc3RzL2ltYWdl/cy8lRDAlOUUlRDEl/ODElRDElODIlRDEl/ODAlRDAlQkUlRDAl/QjIlMjAlRDAlQTUl/RDAlQkUlRDAlQkEl/RDAlQkElRDAlQjAl/RDAlQjklRDAlQjQl/RDAlQkVfMS53ZWJw',
    facts: [
      'Хоккайдо предлагает отличные условия для зимних видов спорта, особенно для лыжного спорта и сноубординга.',
      'Летом остров привлекает туристов своими цветущими лавандовыми полями.',
    ],
  },
  {
    name: 'Нагоя',
    description:
      'Город в центре Хонсю, известен своим отраслевым влиянием и историческими достопримечательностями.',
    imageUrl:
      'https://imgs.search.brave.com/-wasEg-pON0XBimt-zQ1KnBsHDoHdeXcP_LZydZEOoc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTAx/MjkzMDc1OC9ydS8l/RDElODQlRDAlQkUl/RDElODIlRDAlQkUv/JUQwJUJEJUQwJUIw/JUQwJUIzJUQwJUJF/JUQxJThGLSVEMSU4/RiVEMCVCRiVEMCVC/RSVEMCVCRCVEMCVC/OCVEMSU4Ri0zMS0l/RDAlQjglRDElOEUl/RDAlQkIlRDElOEYt/MjAxOC0lRDAlQjMl/RDAlQkUlRDElODAl/RDAlQkUlRDAlQjQl/RDElODElRDAlQkEl/RDAlQkUlRDAlQjkt/JUQwJUJGJUQwJUI1/JUQwJUI5JUQwJUI3/JUQwJUIwJUQwJUI2/LSVEMCVCRCVEMCVC/MCVEMCVCMyVEMCVC/RSVEMCVCOC0lRDEl/ODEtJUQxJTgyJUQw/JUI1JUQwJUJCJUQw/JUI1JUQwJUIxJUQw/JUIwJUQxJTg4JUQw/JUJEJUQxJThGLSVE/MCVCRCVEMCVCMCVE/MCVCMyVEMCVCRSVE/MSU4Ri0lRDAlQjIt/JUQwJUJGJUQwJUIw/JUQxJTgwJUQwJUJB/JUQwJUI1LSVEMCVC/RSVEMCVCNCVEMCVC/RSVEMSU4MCVEMCVC/OC0lRDAlQjItJUQx/JTgxJUQwJUIwJUQw/JUJBJUQwJUIwJUQx/JThELSVEMCVCRCVE/MCVCMCVEMCVCMyVE/MCVCRSVEMSU4Ri5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/bk9hZnF3b1hOWTE2/LVYwaHJBRmk3V3hx/dFh3a2J6X0s1cm44/cm9BbEJqUT0',
    facts: [
      'Нагоя - один из важнейших промышленных городов Японии, центр автомобилестроения.',
      'Здесь находится известный Нагойский замок с позолоченными дельфинами на крыше.',
    ],
  },
];

function CitySelector({ onSelectCity }) {
  return (
    <div style={{ textAlign: 'center', marginBottom: '20px' }}>
      <h2>Выберите город:</h2>
      <select
        onChange={(e) => onSelectCity(citiesData[e.target.value])}
        style={{
          padding: '5px 15px',
          borderRadius: '15px',
          border: '2px solid #2e8b57',
          background: '#a4d4a4',
        }}
      >
        {citiesData.map((city, index) => (
          <option key={city.name} value={index}>
            {city.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export { citiesData };
export default CitySelector;