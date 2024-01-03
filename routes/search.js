import express from 'express';

const router = express.Router();

const contacts = [
  { name: 'John Doe', email: 'john@example.com' },
  { name: 'Jane Doe', email: 'jane@example.com' },
  { name: 'Alice Smith', email: 'alice@example.com' },
  { name: 'Bob Williams', email: 'bob@example.com' },
  { name: 'Mary Harris', email: 'mary@example.com' },
  { name: 'David Mitchell', email: 'david@example.com' },
];

router.post('/search', (req, res) => {
  const searchTerm = req.body.search.toLowerCase();

  if (!searchTerm) {
    return res.send('<tr></tr>');
  }

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