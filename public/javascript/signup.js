async function signupFormHandler(event) {
  event.preventDefault();

  const name = document.querySelector('#name-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();
  const location = document.querySelector('#location-signup').value.trim();
  const age = document.querySelector('#age-signup').value.trim();
  const gender = document.querySelector('#gender-signup').value.trim();
  const language = document.querySelector('#language-signup').value.trim();

  if (name && email && password && location && age && gender && language) {
      const response = await fetch('/users/signup', {
          method: 'post',
          body: JSON.stringify({
              name,
              email,
              password,
              location,
              age,
              gender,
              language
          }),
          headers: { 'Content-Type': 'application/json' }
      });

      if (response.ok) {
          console.log('success');
          document.location.replace('/profile');
      } else {
          alert(response.statusText);
      }
  }
}

document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);
