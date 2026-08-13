// FAQ search functionality

var searchInput = document.getElementById('faqSearchInput');

function filterFAQ(query) {
    var allDivs = document.querySelectorAll('.contentDiv');
    var lowerQuery = query.toLowerCase().trim();
    
    allDivs.forEach(function(div) {
        var text = div.textContent.toLowerCase();
        if (text.includes(lowerQuery)) {
            div.classList.remove('hidden-item');
        } else {
            div.classList.add('hidden-item');
        }
    });
}

if (searchInput) {
    searchInput.addEventListener('input', function() {
        filterFAQ(this.value);
    });
}

// smooth scroll for anchor links

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        var href = this.getAttribute('href');
        if (href && href !== '#') {
            e.preventDefault();
            var target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});

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

// join netflix buttons

document.querySelectorAll('a, button').forEach(function(btn) {
    if (btn.textContent.trim() === 'Join Netflix') {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            showToast('Redirecting to sign up...', 'info');
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

// related articles links

document.querySelectorAll('a').forEach(function(link) {
    const text = link.textContent.trim();
    if (text === 'Getting started with Netflix' || text === 'Billing and Payments' || 
        text === "Can't sign in to Netflix" || text === 'How to create, change, or delete profiles') {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            showToast('Article loading...', 'info');
        });
    }
});

// article inline links

document.querySelectorAll('.thinAnchor').forEach(function(link) {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        showToast('Related article coming soon!', 'info');
    });
});

// faq page nav links

document.querySelectorAll('a').forEach(function(link) {
    const text = link.textContent.trim();
    if (text === 'Help Center' && link.getAttribute('href') === '#') {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            window.location.href = 'help.html';
        });
    }
});

// footer placeholder links

var footerTexts = ['Terms of Use', 'Privacy', 'Cookie Preferences', 'Corporate Information'];

footerTexts.forEach(function(text) {
    document.querySelectorAll('a').forEach(function(link) {
        if (link.textContent.trim() === text && link.getAttribute('href') === '#') {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                showToast(text + ' page coming soon!', 'info');
            });
        }
    });
});
