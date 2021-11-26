const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors()) 
app.use(express.json());
const port = 5000;

app.get('/', (req, res) => {
    res.send("Hello From My Second Node Server wowwwww")
});


const users = [
    { id: 0, name: "sahik", email: "sahikahsan88@gmail.com", phone: "012486752" },
    { id: 1, name: "ahsan", email: "sahikahsan88@gmail.com", phone: "012486752" },
    { id: 2, name: "akid", email: "sahikahsan88@gmail.com", phone: "012486752" },
    { id: 3, name: "akil", email: "sahikahsan88@gmail.com", phone: "012486752" },
    { id: 4, name: "sam", email: "sahikahsan88@gmail.com", phone: "012486752" }

]

app.get("/users", (req, res) => {
    const search = req.query.search;
    //use query parameter  
    if (search) {
        const searchResult = users.filter(user => user.name.toLowerCase().includes(search));
        res.send(searchResult);
    }
    else{
        res.send(users);
    }
    res.send(users)
});

// app method
app.post("/users", (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log("hitting the post", req.body)
    // res.send(JSON.stringify(newUser));
    res.json(newUser);
})

// dynamic api
app.get("/users/:id", (req, res) => {
    const id = req.params.id;
    const user = users[id];
    res.send(user);
});

app.get("fruits/", (req, res) => {
    res.send("Mangoes", "Oranges", "Banana")
})

app.get("/fruits/mangoes/fazli", (req,res) => {
    res.send("Suger");
})

app.listen(port, () => {
    console.log("listening on port", port);
});