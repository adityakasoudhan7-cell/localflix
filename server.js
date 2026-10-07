const express = require("express");
const path = require('path');
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Home / Test API
app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "LocalFix Backend is Running!"
    });
});

// Services API
app.get("/api/services", (req, res) => {
    const services = [
        {
            id: 1,
            name: "Electrician",
            price: 499,
            icon: "⚡"
        },
        {
            id: 2,
            name: "Plumber",
            price: 399,
            icon: "🔧"
        },
        {
            id: 3,
            name: "AC Repair",
            price: 599,
            icon: "❄️"
        },
        {
            id: 4,
            name: "RO Repair",
            price: 449,
            icon: "💧"
        },
        {
            id: 5,
            name: "Cleaning",
            price: 699,
            icon: "🧹"
        },
        {
            id: 6,
            name: "Appliance Repair",
            price: 499,
            icon: "🔌"
        }
    ];

    res.json({
        success: true,
        services: services
    });
});
app.use(express.static(path.join(__dirname, '../frontend')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/index.html'));
});
// Start server
app.listen(PORT, () => {
    console.log(`LocalFix Backend running at http://localhost:${PORT}`);
});
