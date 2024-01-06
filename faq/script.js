var reponse = document.querySelectorAll('.reponse'),
    question = document.querySelectorAll('.liner'),
    signe = document.querySelectorAll('.signe');

for (let index = 0; index < question.length; index++) {

    question[index].addEventListener("click", function () {


        if (reponse[index].style.display == "none") {

            for (let i = 0; i < reponse.length; i++) {

                signe[i].src = "images/icon-plus.svg";
                reponse[i].style.display = "none";

            }
            reponse[index].style.display = "block";
            signe[index].src = "images/icon-minus.svg";
        }

        else {

            signe[index].src = "images/icon-plus.svg";
            reponse[index].style.display = "none";
        }
    })

}




