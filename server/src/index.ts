import * as express from 'express';

const server = express();
const port = 8080;
const mysql = require('mysql');
const cors = require('cors');

server.use(cors());
server.use(express.json());

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: 'hipages',
    database: 'hipages'
});

db.connect((err) => {
    if (err) {
        console.log('Connection Error');
        console.log(err);
        return;
    }
    console.log('Connection Established');
});

server.get('/getLeads', (req, res) => {

    db.query("SELECT * FROM hipages.jobs", (err, result) => {
        if (err) {
            console.log(err);
        } else {
            console.log('db.query');
            res.send(result);
        }
    });
});

server.post('/setStatus', (req, res) => {
    const id = req.body.id;
    const status = req.body.status;

    db.query(
        "UPDATE hipages.jobs SET status = (?) WHERE id = (?);",
        [status, id],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send("Update successful");
            }
        }
    );
});

server.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});
