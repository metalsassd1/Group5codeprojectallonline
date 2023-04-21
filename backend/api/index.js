var express = require('express');
var cors = require('cors');
var app = express();

const mysql = require('mysql2/promise');
const connection = mysql.createConnection({
    host: 'aws.connect.psdb.cloud',
    user: '69lhyoonb5ds1avs2upy',
    password: 'pscale_pw_xXmnk6bAEPAJl2VpudfhbsHqC5KuzDMxskMGDJmUQsr',
    database: 'allonline_s',
    port: 3306,
    ssl: {
        rejectUnauthorized: false
    }
})

app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(cors())

//UpdateStatus
app.put('/UpdateStatus', async (req, res) => {
    const paymentStatus = req.body.paymentStatus;
    const LoansID = req.body.LoansID

    const conn = await connection;
    const Update = await conn.query('update Payment set paymentStatus = ? WHERE LoansID = ?', [paymentStatus, LoansID]);
    if (Update[0].affectedRows === 0) {
        return res.status(404).json({ Status: "404", Message: "Not Fround LoansID" });
    }
    res.status(200).send({ Status: "200", Message: "UpdateStatus Success" });
})

//สมัครPaylater
app.post('/Payment', async (req, res) => {
    const id = req.body.id;
    const id_card = req.body.id_card;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const address = req.body.address;
    const password = req.body.password;

    const conn = await connection;
    await conn.query('INSERT into UserPaylater (id,id_card,firstName,lastName,address,password) values (?,?,?,?,?,?)', [id, id_card, firstName, lastName, address, password]);
    res.status(200).json({ Status: "200", Message: "Success" });
});

// get UserAllonline
app.get('/UserAllonline', async (req, res) => {
    const number = req.body.number

    const conn = await connection;
    const users = await conn.query("select * FROM UserAllonline WHERE `number` = ?", [number])
    res.json(result = users[0]);
});

//แสดงสินค้า
app.get('/Product_397020010', async (req, res) => {
    const conn = await connection;
    const Product = await conn.query("SELECT * from Product WHERE productID = 397020010")
    res.json(result = Product[0]);
});

app.get('/Product_401468010', async (req, res) => {
    const conn = await connection;
    const Product = await conn.query("SELECT * from Product WHERE productID = 401468010 ")
    res.json(result = Product[0]);
});

app.get('/Product_440140010', async (req, res) => {
    const conn = await connection;
    const Product = await conn.query("SELECT * from Product WHERE productID = 440140010 ")
    res.json(result = Product[0]);
});

app.get('/Product_451204010', async (req, res) => {
    const conn = await connection;
    const Product = await conn.query("SELECT * from Product WHERE productID = 451204010 ")
    res.json(result = Product[0]);
});

app.get('/Product_451205010', async (req, res) => {
    const conn = await connection;
    const Product = await conn.query("SELECT * from Product WHERE productID = 451205010 ")
    res.json(result = Product[0]);
});

app.get('/Product_484300010', async (req, res) => {
    const conn = await connection;
    const Product = await conn.query("SELECT * from Product WHERE productID = 484300010 ")
    res.json(result = Product[0]);
});

app.get('/Product_492554010', async (req, res) => {
    const conn = await connection;
    const Product = await conn.query("SELECT * from Product WHERE productID = 492554010 ")
    res.json(result = Product[0]);
});

app.get('/Product_499861010', async (req, res) => {
    const conn = await connection;
    const Product = await conn.query("SELECT * from Product WHERE productID = 499861010 ")
    res.json(result = Product[0]);
});

app.get('/Product_503994010', async (req, res) => {
    const conn = await connection;
    const Product = await conn.query("SELECT * from Product WHERE productID = 503994010 ")
    res.json(result = Product[0]);
});

app.get('/Product_510759010', async (req, res) => {
    const conn = await connection;
    const Product = await conn.query("SELECT * from Product WHERE productID = 510759010 ")
    res.json(result = Product[0]);
});

app.get('/Product_519101010', async (req, res) => {
    const conn = await connection;
    const Product = await conn.query("SELECT * from Product WHERE productID = 519101010 ")
    res.json(result = Product[0]);
});

app.get('/Product_521893010', async (req, res) => {
    const conn = await connection;
    const Product = await conn.query("SELECT * from Product WHERE productID = 521893010 ")
    res.json(result = Product[0]);
});

app.get('/Product_521897010', async (req, res) => {
    const conn = await connection;
    const Product = await conn.query("SELECT * from Product WHERE productID = 521897010 ")
    res.json(result = Product[0]);
});

app.get('/Product_521901010', async (req, res) => {
    const conn = await connection;
    const Product = await conn.query("SELECT * from Product WHERE productID = 521901010 ")
    res.json(result = Product[0]);
});

app.get('/Product_541291010', async (req, res) => {
    const conn = await connection;
    const Product = await conn.query("SELECT * from Product WHERE productID = 541291010 ")
    res.json(result = Product[0]);
});

app.get('/Product_557185010', async (req, res) => {
    const conn = await connection;
    const Product = await conn.query("SELECT * from Product WHERE productID = 557185010 ")
    res.json(result = Product[0]);
});

app.get('/Product_563412010', async (req, res) => {
    const conn = await connection;
    const Product = await conn.query("SELECT * from Product WHERE productID = 563412010 ")
    res.json(result = Product[0]);
});

app.get('/Product_563414010', async (req, res) => {
    const conn = await connection;
    const Product = await conn.query("SELECT * from Product WHERE productID = 563414010 ")
    res.json(result = Product[0]);
});

app.get('/Product_569993010', async (req, res) => {
    const conn = await connection;
    const Product = await conn.query("SELECT * from Product WHERE productID = 569993010 ")
    res.json(result = Product[0]);
});

app.get('/Product_582742010', async (req, res) => {
    const conn = await connection;
    const Product = await conn.query("SELECT * from Product WHERE productID = 582742010 ")
    res.json(result = Product[0]);
});

// สร้างแผนการชำระเงิน



//ประวัติย่อ 
app.get('/UserPaylater', async (req, res) => {
    const conn = await connection;
    const users = await conn.query("SELECT * from UserPaylater")
    res.json(result = users[0]);
});

app.listen(3400, function () {
    console.log("Server is running at port 3400")
});
