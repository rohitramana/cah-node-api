// import http from 'http';
// import url from 'url';
// import { questions, answers } from './cards';

// var nStatic = require('node-static');
// var fileServer = new nStatic.Server('../loaderio-1212ad9a809c470d05da15ff7dea105c');

// const { floor: floor, random: random } = Math;
// const nquestions = questions.length, nanswers = answers.length;
// const question = () => { return questions[floor(random()*nquestions)] };
// const answer = () => { return answers[floor(random()*nanswers)] };
// const pick = () => { return { question: question(), answer: answer() } };

// http.createServer((req, res) => {
//   res.writeHead(200, 'Content-Type: application/json');

//   let path = url.parse(req.url).pathname;
//   if (path === '/question')
//     res.write(question());
//   else if (path === '/answer')
//     res.write(answer());
//   else if (path === '/pick')
//     res.write(JSON.stringify(pick()));
//   else if (path === '../loaderio-1212ad9a809c470d05da15ff7dea105c')
//     fileServer.serve(req, res);
//   else
//     res.write(`USAGE:
//                /question - get a random white card
//                /answer - get a random black card
//                /pick - get a question and answer randomly chosen`);

//   return res.end();

// }).listen(parseInt(process.env.PORT) || 5000);

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))