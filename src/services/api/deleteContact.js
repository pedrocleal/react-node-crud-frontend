export async function deleteContact(id) {
  try {
    await fetch(`http://localhost:3030/contacts/${id}`, {
      method: 'DELETE',
    });
  } catch (error) {
    console.log(error);
  }
}
