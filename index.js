const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();

app.use(cors());
app.use(bodyparser.json());

// เชื่อมต่อฐานข้อมูล
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '12345',   // ใช้รหัสผ่านของ MySQL เราเอง
    database: 'dbworklog',  // เปลี่ยนให้ตรงกับชื่อ database ที่สร้างใน Workbench
    port: 3306
});

// ทดสอบการเชื่อมต่อ
db.connect(err => {
    if (err) {
        console.log(err, 'db err');
    }
    console.log('database connected..');
});


app.get('/worklogs', (req, res) => {
    let qr = 'select * from worklogs';

    db.query(qr, (err, results) => {
        if (err) {
            console.log(err, 'errors');
        }

        if (results.length > 0) {
            res.send({
                message: 'all worklogs data',
                data: results
            });
        } else {
            res.send({
                message: 'no data found'
            });
        }
    });

    console.log('get all worklogs');
});

// get single data
app.get('/worklogs/:id', (req, res) => {
    let gID = req.params.id;

    let qr = 'select * from worklogs where id = ' + gID;

    db.query(qr, (err, results) => {
        if (err) { console.log(err); }

        if (results.length > 0) {
            res.send({
                message: 'get single worklog',
                data: results
            });
        } else {
            res.send({
                message: 'data not found'
            });
        }
    });

    console.log(gID, 'get id =>');
});

// create data (เพิ่มบันทึกงาน)
app.post('/worklogs', (req, res) => {
    console.log(req.body, 'createdata');

    let title = req.body.title;
    let detail = req.body.detail;
    let work_date = req.body.work_date;  // รูปแบบ yyyy-MM-dd เช่น '2025-11-20'
    let hours = req.body.hours;
    let status = req.body.status;

    let qr = "insert into worklogs (title, detail, work_date, hours, status) " +
             "values ('" + title + "', '" + detail + "', '" + work_date + "', '" + hours + "', '" + status + "')";

    db.query(qr, (err, results) => {
        if (err) { console.log(err); }
        console.log(results, 'results');
        res.send({ message: 'worklog inserted' });
    });
});

// update data (แก้ไขบันทึกงาน)
app.put('/worklogs/:id', (req, res) => {
    console.log(req.body, 'updatedata');

    let gID = req.params.id;
    let title = req.body.title;
    let detail = req.body.detail;
    let work_date = req.body.work_date;
    let hours = req.body.hours;
    let status = req.body.status;

    let qr = "update worklogs set " +
             "title = '" + title + "', " +
             "detail = '" + detail + "', " +
             "work_date = '" + work_date + "', " +
             "hours = '" + hours + "', " +
             "status = '" + status + "' " +
             "where id = " + gID;

    db.query(qr, (err, results) => {
        if (err) { console.log(err); }
        res.send({ message: 'worklog updated' });
    });
});

// delete data (ลบบันทึกงาน)
app.delete('/worklogs/:id', (req, res) => {
    let gID = req.params.id;

    let qr = "delete from worklogs where id = " + gID;

    db.query(qr, (err, results) => {
        if (err) { console.log(err); }
        res.send({ message: 'worklog deleted' });
    });
});

// start server
app.listen(3000, () => {
    console.log('Server is Running..');
});
