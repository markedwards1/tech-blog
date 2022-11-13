const deleteBtn = document.getElementById('delete-button')

deleteBtn.addEventListener('click', delButtonHandler)

const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/get-post/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to delete');
      }
    }
  };