export async function addNewContact(contactData) {
  try {
    const response = await fetch('http://localhost:3030/contacts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(contactData),
    });
    return response.statusText;
  } catch (error) {
    console.log(error);
    return 1;
  }
}
