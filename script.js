console.log("Validation Form");

//DOM 
document.addEventListener('DOMContentLoaded', function () {


    let submit = document.querySelector('#submit'); submit.addEventListener('click', validate);

    //VALIDATION FOR AND FALSE
    flag = 0;
    function validate() {
        if (flag == 0) {
            return true;
        } else {
            return false;
        }
    }
    let Firstname = document.querySelector('#Firstname');
    let check1 = document.querySelector(".check1");
    let namePattern = /^[a-zA-Z]+$/;

    //VALIDATION FOR FIRST NAME
    Firstname.addEventListener('input', First)
    function First() {
        if (!namePattern.test(Firstname.value)) {
            check1.innerText = "Please enter a valid name !";
            check1.style.color = 'red';
            flag = 1;
        } else {
            check1.innerText = "***";
            check1.style.color = 'green';
            flag = 0;
        }
    }

    let Lastname = document.querySelector('#Lastname');
    let check2 = document.querySelector('.check2');
    let LnamePattern = /^[a-zA-Z]+$/;

    //VALIDATION FOR LAST NAME
    Lastname.addEventListener('input', Last);

    function Last() {
        if (!LnamePattern.test(Lastname.value)) {
            check2.innerText = "Please enter a valid name !";
            check2.style.color = 'red';
            flag = 1;
            return false;
        } else {
            check2.innerText = "***";
            check2.style.color = 'green';
            flag = 0;
            return true;
        }
    }


    let number = document.querySelector('#number');
    let check3 = document.querySelector('.check3');

    //VALIDATION FOR NUMBER
    number.addEventListener('input', num);

    function num() {
        if (number.value.length > 10) {
            check3.innerText = "Please enter the valid number !";
            check3.style.color = 'red';
            flag = 1;
        } else {
            check3.innerText = "***";
            check3.style.color = 'green';
            flag = 0;
        }
    }

    let email2 = document.querySelector('#email2');
    let check7 = document.querySelector('.check7');

    //VALIDATION FOR EMAIL
    email2.addEventListener("input", next);
    function next() {
        if (!email2.value.match('[a-z0-9]+@[a-z]+\.[a-z]{2,3}')) {
            check7.innerText = "Please enter a valid email !";
            check7.style.color = "red";
            flag = 1;
            return false;
        } else {
            check7.innerText = "***";
            check7.style.color = 'green';
            flag = 0;
            return true;
        }
    }

    let gmail = document.querySelector('#email');
    let check4 = document.querySelector('.check4');

    //VALIDATION FOR 2ND MAIL
    gmail.addEventListener("input", mail);
    function mail() {
        if (!gmail.value.match('[a-z0-9]+@[a-z]+\.[a-z]{2,3}')) {
            check4.innerText = "Please enter a valid email !";
            check4.style.color = "red";
            flag = 1;
            return false;
        } else {
            check4.innerText = "***";
            check4.style.color = 'green';
            flag = 0;
        }
    }

    let img = document.querySelector('#img');
    img.addEventListener('click', Toggle);

    //SHOW / HIDE IMG FUNCTION
    function Toggle() {
        let pswd = document.querySelector('#pswd');
        let Att = pswd.getAttribute('type');
        if (Att === 'password') {
            pswd.setAttribute('type', 'text');
            img.src = "eye-open.png";
            flag = 0;
        } else {
            pswd.setAttribute('type', 'password');
            img.src = "EYE-CLOSE.png"
            flag = 0;
        }
    }

    let pswd = document.querySelector('#pswd');
    let pswd2 = document.querySelector('#pswd2');
    let check8 = document.querySelector('.check8')

    pswd.addEventListener('input', confirmchk);
    pswd2.addEventListener('input', confirmchk);

    function confirmchk() {
        if (pswd2.value.length > 0) {
            if (pswd.value !== pswd2.value) {
                check8.innerText = "Password does not match !";
                flag = 1;
                check8.style.color = "red";
            } else {
                check8.innerText = '***';
                check8.style.color = "green";
                flag = 0;
            }
        } else {
            check8.innerText = "please enter Confirm Password!"
            check8.style.color = "orange";
            flag = 1;
        }
    }

    let div1 = document.getElementsByClassName('div')[0];

    window.addEventListener('keyup', cap);
    function cap() {
        var cp = event.getModifierState('CapsLock');
        if (cp) {
            div1.innerText = 'Warning : CapsLock is On';
            div1.style.color = 'red';

        } else {
            div1.innerText = 'CapsLock : OFF';
            div1.style.color = 'green';

        }
    }


    pswd.addEventListener('input', validate1);

    function validate1() {

        let upper = document.querySelector('.upper');
        let lower = document.querySelector('.lower');
        let num = document.querySelector('.num');
        let spl = document.querySelector('.spl');
        let charlong = document.querySelector('.charlong');

        if (/[A-Z]/.test(pswd.value)) {
            upper.style.color = "green";
            flag = 0;
        } else {
            upper.style.color = "red";
            flag = 1;
        }

        if (/[a-z]/.test(pswd.value)) {
            lower.style.color = "green";
            flag = 0;
        } else {
            lower.style.color = "red";
            flag = 1;
        }

        if (/[0-9]/.test(pswd.value)) {
            num.style.color = "green";
            flag = 0;
        } else {
            num.style.color = "red";
            flag = 1;
        }

        if (/[-\#\$\.\%\&\@\!\+\=\<\>\*]/.test(pswd.value)) {
            spl.style.color = "green";
            flag = 0;
        } else {
            spl.style.color = "red";
            flag = 1;
        }

        if (pswd.value.length >= 8) {
            charlong.style.color = "green";
            flag = 0;
        } else {
            charlong.style.color = "red";
            flag = 1;
        }
    }



    let login = document.querySelector('#loginbtn');
    login.addEventListener('click', run);

    function run() {
        let Container = document.querySelector('#Container');

        if (Container.style.display != "none") {
            Container.style.display = 'none';
            Container2.style.display = 'block';
        } else {
            Container.style.display = 'block';
            Container2.style.display = 'none';
        }
    }

    let signinbtn = document.querySelector('#signinbtn');
    signinbtn.addEventListener('click', run);

    function run() {
        let Container2 = document.querySelector('#Container2');

        if (Container2.style.display != "none") {
            Container2.style.display = 'none';
            Container.style.display = 'block';
        } else {
            Container2.style.display = 'block';
            Container.style.display = 'none';
        }
    }


});
