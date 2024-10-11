const express = require('express');
const app = express();
const cors = require('cors');


app.use(cors());


app.get('/', (req, res) => {
    res.send("Woooohh! our app is Deployed!!!")
})

const PORT = 3000

app.listen(PORT, () => {
    console.log("App is running at", PORT)
})