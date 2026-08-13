// learn more collapse starts

let learnMore = document.getElementById('learnMore');
let collapseDown = document.getElementById('collapseDown');

learnMore.addEventListener('click', function() {
    collapseDown.style.visibility = "visible";
    learnMore.style.visibility = "hidden";
    return true;
})

// learn more collapse ends

// password visibility toggle

const passwordInput = document.getElementById('floatingPassword');
const passwordLabel = document.querySelector('label[for="floatingPassword"]');

if (passwordInput && passwordLabel) {
    const toggleBtn = document.createElement('button');
    toggleBtn.type = 'button';
    toggleBtn.className = 'password-toggle';
    toggleBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>';
    passwordInput.parentElement.style.position = 'relative';
    passwordInput.parentElement.appendChild(toggleBtn);
    
    toggleBtn.addEventListener('click', function() {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        this.innerHTML = type === 'password' 
            ? '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>'
            : '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg>';
    });
}

let signInForm = document.getElementById('signInForm');

signInForm.addEventListener('submit', function (event) {
    event.preventDefault();
    
    const emailInput = document.getElementById('floatingInput');
    const passwordInput = document.getElementById('floatingPassword');
    const submitBtn = signInForm.querySelector('button[type="submit"]');
    
    let isValid = true;
    
    // Email validation
    if (!emailInput.value.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value.trim())) {
        emailInput.classList.add('input-error');
        emailInput.classList.remove('input-success');
        isValid = false;
    } else {
        emailInput.classList.remove('input-error');
        emailInput.classList.add('input-success');
    }
    
    // Password validation
    if (!passwordInput.value.trim() || passwordInput.value.length < 4) {
        passwordInput.classList.add('input-error');
        passwordInput.classList.remove('input-success');
        isValid = false;
    } else {
        passwordInput.classList.remove('input-error');
        passwordInput.classList.add('input-success');
    }
    
    if (isValid) {
        submitBtn.classList.add('loading');
        submitBtn.textContent = 'Signing In';
        
        setTimeout(function() {
            window.location.href = 'media.html';
        }, 1500);
    }
});

// language btn st

let langBtn = document.getElementById('langBtn2');
let langDrop = document.getElementById('langDrop2');
let langSpan = document.getElementById('langSpan2');
let langList = document.querySelectorAll('.langList2');

langBtn.addEventListener('click', () => {
    langDrop.classList.toggle("langDropShow2");
})

langList.forEach(langList => langList.addEventListener('click', langSelectHandler));

function langSelectHandler(e){
    langSpan.innerText = e.target.innerText;
    langList.forEach((langList)=> langList.classList.remove("langActive"));

    this.classList.add("langActive");
    langDrop.classList.remove("langDropShow2");
}

// language btn en

// toast notification system

function createToastContainer() {
    let container = document.querySelector('.toast-container');
    if (!container) {
        container = document.createElement('div');
        container.className = 'toast-container';
        document.body.appendChild(container);
    }
    return container;
}

function showToast(message, type) {
    type = type || 'info';
    const container = createToastContainer();
    const toast = document.createElement('div');
    toast.className = 'toast ' + type;
    toast.textContent = message;
    container.appendChild(toast);
    
    requestAnimationFrame(function() {
        toast.classList.add('show');
    });
    
    setTimeout(function() {
        toast.classList.remove('show');
        setTimeout(function() {
            if (toast.parentNode) {
                toast.parentNode.removeChild(toast);
            }
        }, 300);
    }, 3000);
}

// forgot password link

document.querySelectorAll('a').forEach(function(link) {
    if (link.textContent.trim() === 'Forgot password?') {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            showToast('Password reset link sent to your email!', 'success');
        });
    }
});

// sign up now link

document.querySelectorAll('a').forEach(function(link) {
    if (link.textContent.trim() === 'Sign Up Now.') {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            window.location.href = 'index.html';
        });
    }
});
