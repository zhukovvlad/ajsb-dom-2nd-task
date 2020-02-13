// Our data
let data = [
  {
    id: 26, title: 'Побег из Шоушенка', imdb: 9.30, year: 1994,
  },
  {
    id: 25, title: 'Крёстный отец', imdb: 9.20, year: 1972,
  },
  {
    id: 27, title: 'Крёстный отец 2', imdb: 9.00, year: 1974,
  },
  {
    id: 1047, title: 'Тёмный рыцарь', imdb: 9.00, year: 2008,
  },
  {
    id: 223, title: 'Криминальное чтиво', imdb: 8.90, year: 1994,
  },
];

//  Definition of sort functions
function sortId(a, b) {
  return a.id - b.id;
}

function sortIdDescend(a, b) {
  return b.id - a.id;
}

function sortTitle(a, b) {
  const titleA = a.title.toLowerCase();
  const titleB = b.title.toLowerCase();

  if (titleA < titleB) {
    return -1;
  }
  if (titleA > titleB) {
    return 1;
  }
  return 0;
}

function sortTitleDescend(a, b) {
  const titleA = a.title.toLowerCase();
  const titleB = b.title.toLowerCase();
  if (titleA > titleB) {
    return -1;
  }
  if (titleA < titleB) {
    return 1;
  }
  return 0;
}

function sortImdb(a, b) {
  return a.imdb - b.imdb;
}

function sortImdbDescend(a, b) {
  return b.imdb - a.imdb;
}

function sortYear(a, b) {
  return a.year - b.year;
}

function sortYearDescend(a, b) {
  return b.year - a.year;
}

const sortArray = [
  sortId,
  sortIdDescend,
  sortTitle,
  sortTitleDescend,
  sortImdb,
  sortImdbDescend,
  sortYear,
  sortYearDescend,
];

setInterval(() => {
  for (const meth of sortArray) {
    console.log(meth);
    data = data.sort(meth);

    const tableEl = document.getElementsByTagName('tbody');

    while (tableEl[0].firstChild) {
      tableEl[0].removeChild(tableEl[0].firstChild);
    }

    data.forEach((item) => {
      const row = document.createElement('tr');
      tableEl[0].appendChild(row);
      for (const el in item) {
        if (Object.prototype.hasOwnProperty.call(item, el)) {
          const ceil = document.createElement('td');
          ceil.setAttribute('class', 'ceil');
          ceil.innerHTML = item[el];
          row.appendChild(ceil);
        }
      }
    });
  }
}, 2000);


/*
  data = data.sort(method);

  const tableEl = document.getElementsByTagName('tbody');

  while (tableEl[0].firstChild) {
    tableEl[0].removeChild(tableEl[0].firstChild);
  }

  data.forEach((item) => {
    const row = document.createElement('tr');
    tableEl[0].appendChild(row);
    for (const el in item) {
      if (Object.prototype.hasOwnProperty.call(item, el)) {
        const ceil = document.createElement('td');
        ceil.setAttribute('class', 'ceil');
        ceil.innerHTML = item[el];
        row.appendChild(ceil);
      }
    }
  });
});


data = data.sort(sortImdb);

const tableEl = document.getElementsByTagName('tbody');

data.forEach((item) => {
  const row = document.createElement('tr');
  tableEl[0].appendChild(row);
  for (const el in item) {
    if (Object.prototype.hasOwnProperty.call(item, el)) {
      const ceil = document.createElement('td');
      ceil.setAttribute('class', 'ceil');
      ceil.innerHTML = item[el];
      row.appendChild(ceil);
    }
  }
});
*/
