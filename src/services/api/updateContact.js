export async function updateContact({ name, phone, id }) {
  try {
    const response = await fetch(`http://localhost:3030/contacts/${id}`, {
      method: 'PUT',
      body: JSON.stringify({ name, phone }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response;
  } catch (error) {
    console.log(error);
    return 1;
  }
}
