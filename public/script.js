document.getElementById('getPictureButton').addEventListener('click', () => {
    fetch('/api/picture')
      .then(response => response.json())
      .then(data => {
        const pictureData = data.data;
        const pictureHtml = `
          <h3>${pictureData.title}</h3>
          <img src="${pictureData.url}" alt="${pictureData.title}">
        `;
        document.getElementById('pictureContainer').innerHTML = pictureHtml;
        document.getElementById('greeting').textContent = data.greeting;
      })
      .catch(error => console.error('Error fetching NASA APOD:', error));
  });