var data = [{
  "number": 1,
  "name": "Kai Greene",
  "age": 40,
  "citizenship": "USA",
  "height": "173 СЃРј",
  "weight": "136 РєРі",
  "image": "greene.jpg"
}, {
  "number": 2,
  "name": "Phill Hit",
  "age": 36,
  "citizenship": "USA",
  "height": "175 СЃРј",
  "weight": "119 РєРі",
  "image": "phill.jpg"
}, {
  "number": 3,
  "name": "dennis wolf",
  "age": 37,
  "citizenship": "Germany",
  "height": "182 СЃРј",
  "weight": "132 РєРі",
  "image": "dennis.jpg"
}, {
  "number": 4,
  "name": "Ronald Dean Coleman",
  "age": 42,
  "citizenship": "USA",
  "height": "180 СЃРј",
  "weight": "139 РєРі",
  "image": "Koulmen.jpg"
}, {
  "number": 5,
  "name": "Dexter Tyrone Jackson",
  "age": 46,
  "citizenship": "USA",
  "height": "168 СЃРј",
  "weight": "112 РєРі",
  "image": "jack.jpg"
}, {
  "number": 6,
  "name": "Arnold Alois Schwarzenegger",
  "age": 68,
  "citizenship": "USA",
  "height": "187",
  "weight": "101 РєРі",
  "image": "arnold.jpg"
}, {
  "number": 7,
  "name": "Branch Warren",
  "age": 36,
  "citizenship": "USA",
  "height": "170 СЃРј",
  "weight": "125 РєРі",
  "image": "brench.jpg"
}, {
  "number": 8,
  "name": "Franco Columbu",
  "age": 70,
  "citizenship": "Italy",
  "height": "164 СЃРј",
  "weight": "100 РєРі",
  "image": "colombo.jpg"
}, {
  "number": 9,
  "name": "Frank Zane",
  "age": 69,
  "citizenship": "USA",
  "height": "176 СЃРј",
  "weight": "96 РєРі",
  "image": "zane.jpg"
}];

function sort(data, field) {
  if (parseFloat(data[0][field])) {
    return data.sort(function(a, b) {
      return parseFloat(a[field]) - parseFloat(b[field])
    })
  } else {
    return data.sort(function(a,b){
      if ( a[field] < b[field] )
        return -1;
      if ( a[field] > b[field] )
        return 1;
      return 0;
    });
  }
}


function renderTable(data, id, header) {
  // create table element
  var table = document.createElement('table');
  if (header) {
    // create header element
    var caption = document.createElement('caption');
    table.textContent = header;
    // appent header element to the table
    table.appendChild(caption)
  }
  var headerRow = document.createElement('tr');
  table.appendChild(headerRow);

  //setup headers 
  for (var i in data[0]) {
    var headerCell = document.createElement('th');
    headerCell.textContent = i;
    headerRow.appendChild(headerCell);
    // closure for event handling
    (function(name) {
        headerCell.onclick = function(e) {
          sort(data, name);
          renderTable(data, id, header);
        }
      })(i);
    }


    data.forEach(function(rowData) {
      // create table row element
      var rowEl = document.createElement('tr');


      for (var i in rowData) {
        var cellEl = document.createElement('td');

        if (i == 'image') {
          var img = document.createElement('img');
          img.src = rowData[i];
          cellEl.appendChild(img);
          rowEl.appendChild(cellEl);
        } else {
          cellEl.textContent = rowData[i];
          rowEl.appendChild(cellEl);
        }
      }

      table.appendChild(rowEl);
    });

    document.getElementById(id).innerHTML = '';
    document.getElementById(id).appendChild(table);
    return table;

  }

  renderTable(data, 'table', 'Zalupa');
