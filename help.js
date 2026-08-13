var searchBar = document.getElementById("searchBar");
var fixedSearchBar = document.getElementById("fixedSearcBar");

var formSearchBar = document.getElementById('formSearchBar');
var fixed = formSearchBar.offsetTop;

console.log(fixed)

window.addEventListener("scroll", () =>{
    if (window.pageYOffset > fixed){
        fixedSearchBar.classList.add("showSearchBar");
    }
    else{
        fixedSearchBar.classList.remove("showSearchBar");
    }
})

// help search functionality

var searchInput = document.getElementById('helpSearchInput');
var fixedSearchInput = document.getElementById('fixedSearchInput');

function filterAccordions(query) {
    var allItems = document.querySelectorAll('.accoHelp');
    var lowerQuery = query.toLowerCase().trim();
    
    allItems.forEach(function(section) {
        var headers = section.querySelectorAll('.accordion-button');
        var bodyItems = section.querySelectorAll('.accordion-body a');
        var sectionMatch = false;
        
        headers.forEach(function(header) {
            var text = header.textContent.toLowerCase();
            if (text.includes(lowerQuery)) {
                sectionMatch = true;
            }
        });
        
        bodyItems.forEach(function(item) {
            var text = item.textContent.toLowerCase();
            if (text.includes(lowerQuery)) {
                sectionMatch = true;
            }
        });
        
        if (lowerQuery === '') {
            section.classList.remove('hidden-item');
        } else if (sectionMatch) {
            section.classList.remove('hidden-item');
        } else {
            section.classList.add('hidden-item');
        }
    });
}

function syncSearch(source, target) {
    if (target && target.value !== source.value) {
        target.value = source.value;
    }
    filterAccordions(source.value);
}

if (searchInput) {
    searchInput.addEventListener('input', function() {
        syncSearch(this, fixedSearchInput);
    });
}

if (fixedSearchInput) {
    fixedSearchInput.addEventListener('input', function() {
        syncSearch(this, searchInput);
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

// explore topics smooth scroll

document.querySelectorAll('a[href="#accordionSection"]').forEach(function(link) {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.getElementById('accordionSection');
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// join netflix buttons - scroll to signup

document.querySelectorAll('a, button').forEach(function(btn) {
    if (btn.textContent.trim() === 'Join Netflix') {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const signupForm = document.getElementById('signupForm');
            if (signupForm) {
                signupForm.scrollIntoView({ behavior: 'smooth' });
                const emailInput = document.getElementById('floatingInput');
                if (emailInput) emailInput.focus();
            } else {
                showToast('Redirecting to sign up...', 'info');
            }
        });
    }
});

// popular topics links

document.querySelectorAll('a').forEach(function(link) {
    const text = link.textContent.trim();
    if (text === 'How to sign up for Netflix' || text === 'Plans and Pricing' || text === "Can't sign in to Netflix") {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            showToast('Search functionality coming soon!', 'info');
        });
    }
});

// contact us buttons

document.querySelectorAll('a, button').forEach(function(btn) {
    if (btn.textContent.trim() === 'Contact Us') {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            showToast('Contact form coming soon!', 'info');
        });
    }
});

// help center topic links - use search to find the topic

document.querySelectorAll('.accoHelp a[href="#"]').forEach(function(link) {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        var topic = this.textContent.trim();
        if (searchInput) {
            searchInput.value = topic;
            filterAccordions(topic);
            searchInput.focus();
        }
        if (fixedSearchInput) {
            fixedSearchInput.value = topic;
        }
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
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
