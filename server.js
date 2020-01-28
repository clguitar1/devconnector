const express = require('express');
const connectDB = require('./config/db');

const app = express();

connectDB();

app.use(express.json({ extended: false }));

app.use('/api/auth', require('./routes/api/auth.routes'));
app.use('/api/posts', require('./routes/api/posts.routes'));
app.use('/api/profile', require('./routes/api/profile.routes'));
app.use('/api/users', require('./routes/api/users.routes'));

app.get('/', (req, res) => {
  res.send('API is running...');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
