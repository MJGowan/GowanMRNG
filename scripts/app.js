Everything();

function Everything(){
fetch('./data.json').then(response => response.json()).then(
        data => {
            const students = data
            console.log(data);

            let injectHere = document.getElementById("injectHere");
            let randomBtn = document.getElementById("randomBtn");
            let personOne = document.getElementById("personOne");
            let personTwo = document.getElementById("personTwo");
            let personThree = document.getElementById("personThree");
            let personFour = document.getElementById("personFour");
            let personFive = document.getElementById("personFive");
            
            
            randomBtn.addEventListener("click", function(){
                generate();
            })
            
            function generate(){
                let rndNum = Math.floor(Math.random() * students.length);
                injectHere.innerHTML = students[rndNum].name; 
            }
        })


        
    













}