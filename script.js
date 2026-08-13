let langBtn = document.getElementById('langBtn');
let langDrop = document.getElementById('langDrop');
let langSpan = document.getElementById('langSpan');
let langList = document.querySelectorAll('.langList');

let signupForm = document.getElementById('signupForm');
let restartForm = document.getElementById('restartForm');

function redirectToMedia(event) {
    event.preventDefault();
    window.location.href = 'media.html';
}

signupForm.addEventListener('submit', redirectToMedia);
restartForm.addEventListener('submit', redirectToMedia);

langBtn.addEventListener('click', () => {
    langDrop.classList.toggle("langDropShow");
})

langList.forEach(langList => langList.addEventListener('click', langSelectHandler));

function langSelectHandler(e){
    langSpan.innerText = e.target.innerText;
    langList.forEach((langList)=> langList.classList.remove("langActive"));

    this.classList.add("langActive");
    langDrop.classList.remove("langDropShow");
}



// accordion button starts

const accorDion = document.getElementsByClassName('accordionMain');

for(var i = 0; i < accorDion.length; i++){
    accorDion[i].addEventListener('click', function(){
        this.classList.toggle('accoShow');
    });
}



let langBtn3 = document.getElementById('langBtn3');
let langDrop3 = document.getElementById('langDrop3');
let langSpan3 = document.getElementById('langSpan3');
let langList3 = document.querySelectorAll('.langList3');

langBtn3.addEventListener('click', () => {
    langDrop3.classList.toggle("langDropShow3");
})

langList3.forEach(langList3 => langList3.addEventListener('click', langSelectHandler3));

function langSelectHandler3(elem){
    langSpan3.innerText = elem.target.innerText;
    langList3.forEach((langList3)=> langList3.classList.remove("langActive3"));

    this.classList.add("langActive3");
    langDrop3.classList.remove("langDropShow3");
}


// accordion button ends


// back to top button

const backToTopBtn = document.createElement('button');
backToTopBtn.id = 'backToTop';
backToTopBtn.innerHTML = '&#8593;';
backToTopBtn.title = 'Back to top';
document.body.appendChild(backToTopBtn);

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopBtn.classList.add('visible');
    } else {
        backToTopBtn.classList.remove('visible');
    }
});

// navbar scroll effect

const header = document.getElementById('header');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// scroll animations

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in-up').forEach(el => {
    observer.observe(el);
});

// form validation helpers

function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function showError(input, messageId, show) {
    const errorEl = document.getElementById(messageId);
    if (show) {
        input.classList.add('input-error');
        input.classList.remove('input-success');
        if (errorEl) {
            errorEl.classList.add('show');
            errorEl.textContent = errorEl.dataset.message || 'Please enter a valid value.';
        }
    } else {
        input.classList.remove('input-error');
        if (errorEl) errorEl.classList.remove('show');
    }
}

function showSuccess(input, messageId) {
    input.classList.remove('input-error');
    input.classList.add('input-success');
    const errorEl = document.getElementById(messageId);
    if (errorEl) errorEl.classList.remove('show');
}

// signup form validation

const emailInput = document.getElementById('floatingInput');
const signupError = document.getElementById('signupError');

if (emailInput) {
    emailInput.addEventListener('blur', function() {
        if (this.value.trim() === '') {
            showError(this, 'signupError', true);
            if (signupError) signupError.dataset.message = 'Email is required.';
        } else if (!validateEmail(this.value.trim())) {
            showError(this, 'signupError', true);
            if (signupError) signupError.dataset.message = 'Please enter a valid email address.';
        } else {
            showSuccess(this, 'signupError');
        }
    });

    emailInput.addEventListener('input', function() {
        if (this.classList.contains('input-error') && validateEmail(this.value.trim())) {
            showSuccess(this, 'signupError');
        }
    });
}

// restart form validation

const restartEmail = document.getElementById('restartEmail');
const restartError = document.getElementById('restartError');

if (restartEmail) {
    restartEmail.addEventListener('blur', function() {
        if (this.value.trim() === '') {
            showError(this, 'restartError', true);
            if (restartError) restartError.dataset.message = 'Email is required.';
        } else if (!validateEmail(this.value.trim())) {
            showError(this, 'restartError', true);
            if (restartError) restartError.dataset.message = 'Please enter a valid email address.';
        } else {
            showSuccess(this, 'restartError');
        }
    });

    restartEmail.addEventListener('input', function() {
        if (this.classList.contains('input-error') && validateEmail(this.value.trim())) {
            showSuccess(this, 'restartError');
        }
    });
}

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

function showToast(message, type = 'info') {
    const container = createToastContainer();
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
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

// explore topics button - scrolls to accordion section

document.querySelectorAll('a').forEach(function(link) {
    if (link.textContent.trim() === 'Explore Topics') {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const accordionSection = document.querySelector('.accordion-section');
            if (accordionSection) {
                accordionSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
});

// popular topics links - scroll to relevant section or show toast

document.querySelectorAll('a').forEach(function(link) {
    const text = link.textContent.trim();
    if (text === 'How to sign up for Netflix' || text === 'Plans and Pricing' || text === "Can't sign in to Netflix") {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            showToast('Search functionality coming soon!', 'info');
        });
    }
    if (text === 'Join Netflix') {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const signupForm = document.getElementById('signupForm');
            if (signupForm) {
                signupForm.scrollIntoView({ behavior: 'smooth' });
                const emailInput = document.getElementById('floatingInput');
                if (emailInput) emailInput.focus();
            }
        });
    }
});

// forgot password link

document.querySelectorAll('a').forEach(function(link) {
    if (link.textContent.trim() === 'Forgot password?') {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            showToast('Password reset link sent to your email!', 'success');
        });
    }
});

// was this helpful buttons

document.querySelectorAll('a').forEach(function(link) {
    if (link.textContent.trim() === 'Yes' || link.textContent.trim() === 'No') {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const text = this.textContent.trim();
            if (text === 'Yes') {
                showToast('Thanks for your feedback!', 'success');
            } else {
                showToast('We will improve this article.', 'info');
            }
        });
    }
});

// contact us button

document.querySelectorAll('a, button').forEach(function(btn) {
    if (btn.textContent.trim() === 'Contact Us') {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            showToast('Contact form coming soon!', 'info');
        });
    }
});

// apply button

document.querySelectorAll('a, button').forEach(function(btn) {
    if (btn.textContent.trim() === 'Apply') {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            showToast('Application portal coming soon!', 'info');
        });
    }
});

// newsroom link

document.querySelectorAll('a, button').forEach(function(btn) {
    if (btn.textContent.trim() === 'Newsroom') {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            showToast('Newsroom page coming soon!', 'info');
        });
    }
});

// footer placeholder links

var footerLinks = ['Investor Relations', 'Jobs', 'Way to watch', 'Terms of Use', 'Privacy', 
    'Cookie Preferences', 'Corporate Information', 'Speed Test', 'Legal Notices', 'Only on Netflix', 'Netflix India'];

footerLinks.forEach(function(text) {
    document.querySelectorAll('a').forEach(function(link) {
        if (link.textContent.trim() === text && link.getAttribute('href') === '#') {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                showToast(text + ' page coming soon!', 'info');
            });
        }
    });
});

