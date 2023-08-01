// Create web server
const express = require("express");
const app = express();
// Create port
const port = 3000;
// Create route
app.get("/", (req, res) => {
    res.send("Hello World!");
});
// Create route
app.get("/about", (req, res) => {
    res.send("About Me");
});
// Create route
app.get("/contact", (req, res) => {
    res.send("Contact Me");
});
// Create route
app.get("/skills", (req, res) => {
    let skills = ["HTML", "CSS", "Javascript", "React", "Node", "MongoDB"];
    res.send(skills);
});
// Create route
app.get("/comments", (req, res) => {
    let comments = [
        {
            username: "Todd",
            comment: "lololol"
        },
        {
            username: "Skyler",
            comment: "I hate you"
        },
        {
            username: "Sk8erBoi",
            comment: "Plz delete your account, Todd"
        },
        {
            username: "onlysayswoof",
            comment: "woof woof"
        }
    ];
    res.send(comments);
});
// Create route
app.get("/comments/:username", (req, res) => {
    let username = req.params.username;
    let comments = [
        {
            username: "Todd",
            comment: "lololol"
        },
        {
            username: "Skyler",
            comment: "I hate you"
        },
        {
            username: "Sk8erBoi",
            comment: "Plz delete your account, Todd"
        },
        {
            username: "onlysayswoof",
            comment: "woof woof"
        }
    ];
    let result = comments.filter((comment) => {
        return comment.username === username;
    });
    res.send(result);
});
// Create route
app.get("/comments/:username/:comment", (req, res) => {
    let username = req.params.username;
    let comments = [
        {
            username: "Todd",
            comment: "lololol"
        },
        {
            username: "Skyler",
            comment: "I hate you"
        },
        {
            username: "Sk8erBoi",
            comment: "Plz delete your account, Todd"
        },
        {
            username: "onlysayswoof",
            comment: "woof woof"
        }
    ];
    let result = comments.filter((comment) => {
        return comment.username === username;
    }
    );
    res.send(result);
});
