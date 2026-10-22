const searchInput = document.querySelector("#name-search");
const rows = [...document.querySelectorAll("#people-list tr")];
const emptyState = document.querySelector("#empty-state");

searchInput.addEventListener("input", () => {
  const query = searchInput.value.trim().toLocaleLowerCase();
  let visibleRows = 0;

  for (const row of rows) {
    const name = row.cells[0].textContent.toLocaleLowerCase();
    const matches = name.includes(query);
    row.hidden = !matches;
    if (matches) visibleRows += 1;
  }

  emptyState.style.display = visibleRows === 0 ? "block" : "none";
});
