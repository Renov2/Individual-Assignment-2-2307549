/* Hamburger Menu icon for nav bar (small screen devices)*/

const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click',() => {
        nav.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click',() => {
        nav.classList.remove('active');
    })
}

/*Login Button*/
const LoginButton = document.getElementById("loginBtn");
const paritionLeft = document.getElementById("partition-left");
const partitionRight_text1 =  document.getElementById("text1");
const partitionRight_text2 =  document.getElementById("text2");
const partitionRight = document.getElementById("partition-right");
console.log(partitionRight_text2);
console.log('nodeType:', partitionRight_text2 && partitionRight_text2.nodeType);

function login(){
        event.preventDefault();
        partitionRight.style.display = "flex";
        paritionLeft.style.display = "none";
        partitionRight_text1.textContent = "WELCOME BACK!.";
        partitionRight_text2.innerHTML = "<a style='color: var(--text-color-2)' href='store.html'>click <mark class='premium'>here</mark> to continue shopping </a>";
}

function register(){
        event.preventDefault();
        partitionRight.style.display = "flex";
        paritionLeft.style.display = "none";
        partitionRight_text1.innerHTML = "<h1 style='font-size: 1em;'>YOU'RE NOW A <mark class='premium'>MEMBER !</mark>.</h1>";
        partitionRight_text2.innerHTML = "<a style='color: var(--text-color-2);' href='store.html'>click <mark class='premium'>here</mark> to continue shopping </a>";
}


/*Cart UI*/
function closeCart(){
    document.getElementById("cart-container").style.right = "-100%";
}

function openCart(){
    document.getElementById("cart-container").style.right = "0%";
}