document.addEventListener("DOMContentLoaded", () => {
  const itemsData = document.getElementById("itemsData").textContent;
  const items = JSON.parse(itemsData);
  const input = document.getElementById("searchInput");
  const resultsDiv = document.getElementById("searchResults");

  input.addEventListener("input", () => {
    const searchTerm = input.value.toLowerCase();
    const filteredItems = items.filter(
      (item) =>
        item.title?.toLowerCase().includes(searchTerm) ||
        item.name?.toLowerCase().includes(searchTerm)
    );

    resultsDiv.innerHTML = filteredItems
      .map(
        (item) => `
      <div class="result-item">
        <p>${item.type}: ${item.title || item.name}</p>
        <p>${item.description || item.bio}</p>
      </div>
    `
      )
      .join("");
  });
});
