let display = () => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((users) => {
      let row = "";
      for (let user of users) {
        row =
          row +
          `<tr>
                   <td>${user.id}</td>
                   <td>${user.name}</td>
                   <td>${user.email}</td>
                   </tr>`;
      }
      document.getElementById("tableBody").innerHTML = row;
    })
    .catch((err) => {
      console.log("error fetching :", err);
    });
};
