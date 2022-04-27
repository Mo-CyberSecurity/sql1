function changeCompany(text) {
  document.getElementById("input").value = text;
}

function redirect() {
  let inputValue = document.getElementById("input").value
  let phoneElement = document.querySelector('.phone')
  let messageElement = document.getElementById("message")
  if (inputValue) {
    fetch('/api/?company=' + inputValue)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (data.status === 200) {
          phoneElement.innerHTML = ''
          for (let i = 0; i < data.data.length; i++) {
            for (key in data.data[i]) {
              let row = document.createElement('tr')
              row.innerHTML = `<td coldspan="2">${key
                } - ${data.data[i][key]}</td>`
              phoneElement.appendChild(row)
            }
            let row = document.createElement('tr')
            phoneElement.appendChild(document.createElement('div'))
          }
          console.log(data)
          messageElement.innerHTML = data.data.length
        }
        if (data.status === 404) {
          messageElement.innerHTML = data.data.sqlMessage
          console.log(data)
        }
      });
  }
}