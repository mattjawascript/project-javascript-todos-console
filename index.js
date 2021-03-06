const todos = [
  `Ngopi sampe pagi`,
  `Ngakak sambil jingkrak`,
  `Ngoding XOXO`,
  `Ngemil nasi`
];

const show = () => {
  const showTodos = data => {
    for (let index = 0; index < data.length; index++) {
      const item = data[index];

      console.log(`[${index + 1}] ${item}`);
    }
  };

  const searchTodos = (data, textToSearch) => {
    let newTodos = [];

    for (let index = 0; index < data.length; index++) {
      const item = data[index];

      const lowerCasedItem = item.toLowerCase();
      const lowerCasedText = textToSearch.toLowerCase();

      if (lowerCasedItem.includes(lowerCasedText)) {
        newTodos.push(item);
      }
    }

    return newTodos;
  };

  showTodos(todos);

  const textInput = prompt("What todo do you want to search?");
  const foundTodos = searchTodos(todos, textInput);

  showTodos(foundTodos);
};
