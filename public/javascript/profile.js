const newProjectForm = document.querySelector('.new-project-form');
newProjectForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  // Get the values from the form inputs
  const title = document.querySelector('#project-title').value.trim();
  const post_text = document.querySelector('#project-description').value.trim();
  const location = document.querySelector('#project-location').value.trim();
  const date = document.querySelector('#project-date').value.trim();
  const category = document.querySelector('#project-category').value.trim();
  const contact_info = document.querySelector('#project-contact-info').value.trim();

  // Check if the required fields are not empty
  if (title && post_text && location && date && category && contact_info) {
    try {
      // Send a POST request to create a new post
      const response = await fetch('/api/posts', {
        method: 'POST',
        body: JSON.stringify({
          title,
          post_text,
          location,
          date,
          category,
          contact_info,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to create post');
      }
    } catch (err) {
      console.error(err);
      alert('Failed to create post');
    }
  }
});

// Add event listeners to delete buttons
const deleteButtons = document.querySelectorAll('.btn-danger');
deleteButtons.forEach((button) => {
  button.addEventListener('click', async (e) => {
    const id = e.target.getAttribute('data-id');

    try {
      // Send a DELETE request to delete the post with the given id
      const response = await fetch(`/api/posts/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to delete post');
      }
    } catch (err) {
      console.error(err);
      alert('Failed to delete post');
    }
  });
});
