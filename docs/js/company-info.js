fetch('/company_footer.txt')
  .then(response => response.text())
  .then(text => {
    document.getElementById('company-info').innerText = text;
  })
  .catch(err => console.error('Failed to load company info:', err));
  