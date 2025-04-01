const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import CORS

const app = express();

// Enable CORS
app.use(cors());

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static files from the current directory
app.use(express.static(__dirname));

// MySQL Connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'reservation_system'
});

db.connect(err => {
    if (err) {
        console.error('Database connection failed:', err);
    } else {
        console.log('Connected to MySQL Database');
    }
});

// Route to handle form submission
app.post('/submit-reservation', (req, res) => {
    const { name, num_people } = req.body;

    if (!name || !num_people) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    const sql = 'INSERT INTO reservations (name, num_people) VALUES (?, ?)';
    db.query(sql, [name, num_people], (err, result) => {
        if (err) {
            console.error('Error inserting data:', err);
            return res.status(500).json({ error: 'Database error' });
        }
        res.json({ message: 'Reservation submitted successfully' });
    });
});

// Start the Server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
