const express = require('express');
const csv = require('csv-parser');
const fs = require('fs');

const app = express();

const csvFilePath = 'bank_branches.csv';

// Endpoint to get the bank list
app.get('/banks', (req, res) => {
    const banks = new Set();

    fs.createReadStream(csvFilePath)
        .pipe(csv())
        .on('data', (row) => {
            banks.add(row.bank_name);
        })
        .on('end', () => {
            const bankList = Array.from(banks);
            res.json(bankList);
        });
});

// Endpoint to get branch details for a specific bank
app.get('/banks/:bankName/branches', (req, res) => {
    const bankName = req.params.bankName;

    fs.createReadStream(csvFilePath)
        .pipe(csv())
        .on('data', (row) => {
            if (row.bank_name.toLowerCase() === bankName.toLowerCase()) {
                const branchDetails = {
                    ifsc: row.ifsc,
                    bank_id: row.bank_id,
                    branch: row.branch,
                    address: row.address,
                    city: row.city,
                    district: row.district,
                    state: row.state,
                    bank_name: row.bank_name,
                };
                res.json(branchDetails);
                return;
            }
        })
        .on('end', () => {
            res.status(404).json({ error: 'Bank not found' });
        });
});

// Handle invalid routes
app.use((req, res) => {
    res.status(404).json({ error: 'Invalid route' });
});

// Start the server
app.listen(5000, () => {
    console.log('Server started on port 5000');
});