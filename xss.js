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
  return response.text();
})
.then(json => {
	console.log(json)
	const regex = /[a-zA-Z0-9]{8}-([a-zA-Z0-9]{4}-){3}[a-zA-Z0-9]{12}/;
	let x = regex.exec(json);
  console.log(x[0])
  const url = '../../../my-account/update-mobile-phone';
  const formData = new URLSearchParams();
	formData.append('CSRFToken', x[0]);
	formData.append('mobilePhone', '1234567890');

  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: formData
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.text();
  })
  .then(data => {
    console.log('Mobile phone is updated with response:', data);
  })
  .catch(error => {
    console.error('Error updating mobile phone:', error);
  });
})
.catch(error => {
  console.error('Error getting CSRF token from email page:', error);
});

