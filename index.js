// Add event listeners to each day
for (let i = 1; i <= 24; i++) {
  const day = document.getElementById(`day${i}`);
  const content = document.getElementById(`content${i}`);

  day.addEventListener('click', () => {
    // Hide all day contents
    const allContents = document.querySelectorAll('.day-content');
    allContents.forEach((el) => {
      el.style.display = 'none';
    });

    // Display the content of the clicked day
    content.style.display = 'block';
  });
}

