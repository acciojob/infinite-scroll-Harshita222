// Function to generate list items
function generateListItems(count) {
  const list = document.getElementById('infi-list');
  for (let i = 1; i <= count; i++) {
    const li = document.createElement('li');
    li.textContent = 'Item ' + i;
    list.appendChild(li);
  }
}

// Initial population of list with 10 items
generateListItems(10);

// Scroll event listener
window.addEventListener('scroll', function() {
  // Calculate the height of the window plus the scrolled amount
  const windowHeight = window.innerHeight;
  const scrolledAmount = window.scrollY;
  const windowHeightWithScroll = windowHeight + scrolledAmount;

  // Calculate the total height of the document
  const totalHeight = document.documentElement.scrollHeight;

  // Check if the user has scrolled to the bottom
  if (windowHeightWithScroll >= totalHeight - 100) {
	      generateListItems(2);
  }
});
