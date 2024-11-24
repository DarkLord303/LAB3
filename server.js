const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const postRoutes = require('./routes/postRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.set('view engine', 'ejs');

// Маршрути
app.use(postRoutes);  // Підключаємо маршрути для постів

// Основний маршрут
app.get('/', (req, res) => {
  res.render('index', { title: 'Головна сторінка' });
});

// Підключення до MongoDB Atlas
mongoose.connect('mongodb+srv://dmd94368:2004@darkclasster.rjk8t.mongodb.net/?retryWrites=true&w=majority&appName=DarkClasster')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error: ', err));

// Запуск сервера
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

