import express from "express";
import axios from "axios";

const app = express();
const port = 3000;

let cockTile;

app.use(express.static('public'));

app.get("/", (req, res) => {
    res.render("index.ejs", { content: cockTile });
});
app.post("/submit", async (req, res) => {
    try {
        const response = await axios.get("https://thecocktaildb.com/api/json/v1/1/random.php");
        cockTile = response.data;
        console.log(cockTile.drinks[0]);

    } catch (error) {
        console.log(error);
    }
    res.redirect("/");
});

app.listen(port, () => {
    console.log('Server listening at port ' + port);
});