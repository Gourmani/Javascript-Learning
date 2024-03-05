submit.addEventListener("click", (e) => {
    e.preventDefault();
    let titlec = title.value;
    let descc = desc.value;
    localStorage.setItem("todo", JSON.stringify([titlec, descc]));
  
    // Redirect to another page (change 'another-page.html' to the desired page)
    window.location.href = '84_form.html';
  });
  
  deleteBtn.addEventListener("click", (e) => {
    e.preventDefault();
    localStorage.removeItem("todo");
    todo.innerHTML = "";
  });
  