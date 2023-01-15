let name = "Shoaib";
let age = 25;
let job = 'web developer';
let city = 'Karachi';

let html;

html = `
    <ul>
        <li>Name: ${name}</li>
        <li>Age: ${age}</li>
        <li>Job: ${job}</li>
        <li>City: ${city}</li>
    </ul>
`

document.body.innerHTML = html