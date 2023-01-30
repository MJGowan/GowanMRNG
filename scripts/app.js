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
                let displayName = students[rndNum].name;
                fivePeople(displayName);
            }
            
            function fivePeople(displayName){

                // the "" could be replaced with undefined, both work
                if(personFour.innerText != ""){
                    personFive.innerText = personFour.innerText;
                }
                if(personThree.innerText != ""){
                    personFour.innerText = personThree.innerText;
                }
                if(personTwo.innerText != ""){
                    personThree.innerText = personTwo.innerText;
                }
                if(personOne.innerText != ""){ 
                    personTwo.innerText = personOne.innerText;
                }
                    personOne.innerText = displayName;
                
                injectHere.innerHTML = displayName;
            }
        })



}