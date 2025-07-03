const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const db = new sqlite3.Database('./pacientes.db');

app.use(cors());
app.use(bodyParser.json());


// Criação da tabela no banco de dados, caso não exista
db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS pacientes (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nome TEXT,
        idade INTEGER,
        telefone TEXT,
        endereco TEXT,
        sexo TEXT,
        sintomas TEXT
        )`);
});

// GET - Ler os dados dos pacientes no banco
app.get('/pacientes', (req, res) => {
    db.all(`SELECT * FROM pacientes`, [], (err, rows) => {
        if (err) {
            return res.status(500).json({error: err.message});
        }

        res.json(rows);
    });
});

// POST - Cadastro do novo paciente
app.post('/pacientes', (req, res) => {
    const { nome, idade, telefone, endereco, sexo, sintomas } = req.body;

    db.run(`INSERT INTO pacientes (nome, idade, telefone, endereco, sexo, sintomas)
        VALUES (?, ?, ?, ?, ?, ?)`, [nome, idade, telefone, endereco, sexo, sintomas], (err) => {
            if (err) {
                return res.status(500).json({error: err.message});
            } 

            res.json({ id: this.lastID });
        }
    );
});


// PUT - Atualização dos dados do paciente
app.put('/pacientes/:id', (req, res) => {
    const { id } = req.params;
    const { nome, idade, telefone, endereco, sexo, sintomas } = req.body;

    db.run(`UPDATE pacientes SET nome=?, idade=?, telefone=?, endereco=?, sexo=?, sintomas=? WHERE id=?`, 
        [nome, idade, telefone, endereco, sexo, sintomas, id], (err) => {
            if (err) {
                return res.status(500).json({error: err.message});
            } 

            res.json({ update: true });
    });
});

// DELETE - Excluir o registro do paciente
app.delete('/pacientes/:id', (req, res) => {
    const { id } = req.params;

    db.run(`DELETE FROM pacientes WHERE id=?`, id, (err) => {
        if (err) {
            return res.status(500).json({error: err.message});
        } 

        res.json({ delete: true });
    });
});

app.listen(3000, () => console.log('Servidor rondado no endereço http://localhost:3000'));