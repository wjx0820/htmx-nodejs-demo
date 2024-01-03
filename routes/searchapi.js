import express from 'express';

const router = express.Router();

router.post('/search/api', async(req, res) => {
  const searchTerm = req.body.search.toLowerCase();

  if (!searchTerm) {
    return res.send('<tr></tr>');
  }

  const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const contacts = await response.json();

  const searchResults = contacts.filter((contact) => {
    const name = contact.name.toLowerCase();
    const email = contact.email.toLowerCase();

    return name.includes(searchTerm) || email.includes(searchTerm);
  });

  setTimeout(() => {
    const searchResultHtml = searchResults
      .map(
        (contact) => `
      <tr>
        <td><div class="my-4 p-2 text-center">${contact.name}</div></td>
        <td><div class="my-4 p-2 text-center">${contact.email}</div></td>
      </tr>
    `
      )
      .join('');

    res.send(searchResultHtml);
  }, 1000);
});


export default router;