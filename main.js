const fs = require("fs");
fs.readFile("data.json", (err, data) => {
    if (err === null) {
        const jsonData = JSON.parse(data);
        const filteredData = jsonData.filter(enty => enty.parent === "BS3_BanksLiab");
        const outputText = filteredData.map(enty => `${entry.txten}:${entry.value}`).join('\n');
        console.log(data.toString());
    } else {
        console.log(err); 
    }
});   

fs.writeFile('output.txt', outputText, (err) => {
    if (err === null) {
        console.log("The file has been!");
    }  else {
        console.log(err);
    }
});   
 