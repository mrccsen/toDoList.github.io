let input = document.querySelector("#input");
let btn = document.querySelector("#savebtn");
let ulLi = document.querySelector("#ulLi");
let changeNumber = 0;



btn.addEventListener("click", addLi);


    function addLi(event){

    //Do Not Reset Page Every Click On Button
        event.preventDefault();

        //İnput Value Control
        const inputValue = input.value.trim();
        if(inputValue === ""){
            let h2 = document.querySelector("#h2");
            h2.classList.add("text-danger");
            h2.innerHTML = "Boş Bırakmayınız!";
            setTimeout(() => {
                h2.classList.remove("text-danger");
                h2.innerHTML = "Yapılacaklar Listesi";
            }, 2000);
        }
        else{

        if(changeNumber %2=== 0){
        
            //Create Div for UL
                let newDiv = document.createElement("div");
                newDiv.style.background = "#FE2E64";
                newDiv.classList.add("d-flex");
                ulLi.appendChild(newDiv);

            //Added Check Button
                let newCheckDiv = document.createElement("div");
                let newCheckBtn = document.createElement("button");
                

                newCheckDiv.classList.add("p-2");
                newCheckBtn.classList.add("btn", "btn-success", "rounded-0", "border","border-dark","pb-2");
                newDiv.appendChild(newCheckDiv);
                newCheckDiv.appendChild(newCheckBtn);
                newCheckBtn.innerHTML = "✓";

            //Added Li Element
                let newLiDiv = document.createElement("div");
                let newLi = document.createElement("li");
                newDiv.appendChild(newLiDiv);
                newLiDiv.appendChild(newLi);
                newLiDiv.classList.add("p-2" ,"flex-grow-1", "text-center");
                newLi.classList.add("list-group-item", "bg-secondary-subtle", "border", "border-black", "rounded-5");
                newLi.innerHTML = input.value;

            //Added Delete Button
                let newDeleteDiv = document.createElement("div");
                let newDeleteButton = document.createElement("button");
                newDiv.appendChild(newDeleteDiv);
                newDeleteDiv.appendChild(newDeleteButton);
                newDeleteDiv.classList.add("p-2");
                newDeleteButton.classList.add("btn", "btn-danger", "rounded-0", "border","border-dark","pb-2");
                newDeleteButton.innerHTML = "X";

                changeNumber += 1;

            //İf Click On Check Button
                newCheckBtn.addEventListener("click", check)
                function check(event){
                    newLi.classList.toggle("bg-success") ;
                    newLi.classList.toggle("bg-secondary-subtle");
                }

            //İf Click On Delete Button
            
                newDeleteButton.addEventListener("click", dlte)
                function dlte(event){
                    ulLi.removeChild(newDiv);
                }

                //Alert Add List
                let h2 = document.querySelector("#h2");
                    h2.classList.add("text-success");
                    h2.innerHTML = "Yapılacak Listeye Eklendi!";
                    setTimeout(() => {
                        h2.classList.remove("text-success");
                        h2.innerHTML = "Yapılacaklar Listesi";
                    }, 2000);
            

        }else{

            //Create Div for UL
                let newDiv = document.createElement("div");
                newDiv.classList.add("d-flex");
                newDiv.style.background = "#01DFD7";
                ulLi.appendChild(newDiv);

            //Added Check Button
                let newCheckDiv = document.createElement("div");
                let newCheckBtn = document.createElement("button");
                newCheckDiv.classList.add("p-2");
                newCheckBtn.classList.add("btn", "btn-success", "rounded-0", "border","border-dark","pb-2");
                newDiv.appendChild(newCheckDiv);
                newCheckDiv.appendChild(newCheckBtn);
                newCheckBtn.innerHTML = "✓";

            //Added Li Element
                let newLiDiv = document.createElement("div");
                let newLi = document.createElement("li");
                newDiv.appendChild(newLiDiv);
                newLiDiv.appendChild(newLi);
                newLiDiv.classList.add("p-2" ,"flex-grow-1", "text-center");
                newLi.classList.add("list-group-item", "bg-secondary-subtle", "border", "border-black", "rounded-5",);
                newLi.innerHTML = input.value;

            //Added Delete Button
                let newDeleteDiv = document.createElement("div");
                let newDeleteButton = document.createElement("button");
                newDiv.appendChild(newDeleteDiv);
                newDeleteDiv.appendChild(newDeleteButton);
                newDeleteDiv.classList.add("p-2");
                newDeleteButton.classList.add("btn", "btn-danger", "rounded-0", "border","border-dark","pb-2");
                newDeleteButton.innerHTML = "X";

            //İf Click On Check Button
                newCheckBtn.addEventListener("click", check)
                function check(event){
                    newLi.classList.toggle("bg-success") ;
                    newLi.classList.toggle("bg-secondary-subtle");
                }
            //İf Click On Delete Button
                    newDeleteButton.addEventListener("click", dlte)
                    function dlte(event){
                        ulLi.removeChild(newDiv);
                    }
                
            changeNumber += 1;
            
            //Alert Add List
            let h2 = document.querySelector("#h2");
                    h2.classList.add("text-success");
                    h2.innerHTML = "Yapılacak Listeye Eklendi!";
                    setTimeout(() => {
                        h2.classList.remove("text-success");
                        h2.innerHTML = "Yapılacaklar Listesi";
                    }, 2000);

            
             }            
        }
        //İnput Value Reset
        input.value = "";
};