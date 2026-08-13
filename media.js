let svgSearch = document.getElementById('svgSearch');

let svgSearch2 = document.getElementById('svgSearch2');

let blackSearchBar = document.getElementById("blackSearchBar");

let blackSearchBarMedia = document.getElementById("blackSearchBarMedia");

let blackSearchBarMedia2 = document.getElementById("blackSearchBarMedia2");

let sBtn = document.querySelectorAll(".sBtn");


svgSearch.addEventListener('click', function(){
    blackSearchBar.style.width = "80%";
    blackSearchBar.style.opacity = "1";

    blackSearchBarMedia.style.width = "60%";
    blackSearchBarMedia.style.opacity = "1";

    for(var i = 0; i < sBtn.length; i++){
        sBtn[i].classList.add("opacityShow");
    }
})

let sBtn2 = document.querySelectorAll(".sBtn2");
svgSearch2.addEventListener('click', function(){

    blackSearchBarMedia2.style.width = "100%";
    blackSearchBarMedia2.style.opacity = "1";

    for(var a = 0; a < sBtn2.length; a++){
        sBtn2[a].classList.add("opacityShow2");
    }
})

function closeBtn(){
    blackSearchBar.style.width = "0%";
    blackSearchBar.style.transition = "all 0.3s ease";
    blackSearchBar.style.opacity = "0";

    blackSearchBarMedia.style.width = "0%";
    blackSearchBarMedia.style.transition = "all 0.3s ease";
    blackSearchBarMedia.style.opacity = "0";

    blackSearchBarMedia2.style.width = "0%";
    blackSearchBarMedia2.style.transition = "all 0.3s ease";
    blackSearchBarMedia2.style.opacity = "0";
}


function langSelector(){
    let engDropDown = document.getElementById("englishDropdown");

    engDropDown.style.transform = "translateY(0%)";
    engDropDown.style.opacity = "1";
    countDrop.style.transform = "translateY(-100%)";
    countDrop.style.opacity = "0"
    
}

function closeLangDrop(){
    var engDropDown = document.getElementById("englishDropdown");

    engDropDown.style.transform = "translateY(-100%)";
    engDropDown.style.opacity = "0";
}

let engDropDown = document.getElementById("englishDropdown");
let langItems = document.querySelectorAll(".langAnchor");
let langSpan = document.getElementById("langSpan");
let tick = document.getElementById("tickMark");


langItems.forEach(langItems => langItems.addEventListener("click", langHandler));

function langHandler(espan){
    langSpan.innerText = espan.target.innerText;
    // langItems.forEach((tick) => tick.classList.remove("tickShow"));
    


    this.classList.remove("tickShow");
}


var countDrop = document.getElementById("countryDropdown");

function countSelector(){
    countDrop.style.transform = "translateY(0%)"
    countDrop.style.opacity = "1"
    engDropDown.style.transform = "translateY(-100%)";
    engDropDown.style.opacity = "0";
    
}

function closeCountDrop(){
    countDrop.style.transform = "translateY(-100%)";
    countDrop.style.opacity = "0";
}


var countryDrop = document.getElementById("countSelectDrop");
var countrySpan = document.getElementById("countrySpan");
let innerList = document.querySelectorAll(".innerList");

function countSelectOpen(){
    countryDrop.classList.toggle("active");

}

innerList.forEach(innerList => innerList.addEventListener('click', countListHandler));


function countListHandler(espan){
    countrySpan.innerText = espan.target.innerText;
    innerList.forEach((innerList) => innerList.classList.remove("selected"));

    this.classList.add("selected");
    
};

var resDrop = document.getElementById("resDrop");

function resOpen(){
    resDrop.classList.toggle("resShow");
}



let monthBtn = document.getElementById("monthButton");
let monthList = document.getElementById("monthList");
var body = document.getElementById("body");

monthBtn.addEventListener("click", ()=> {
    monthList.classList.add("monthListShow");
    
})

let monthSpan = document.getElementById("monthSpan");
let monthListItem = document.querySelectorAll(".monthListItem");

monthListItem.forEach(monthListItem => monthListItem.addEventListener("click", monthHandler));

function monthHandler(mspan){
    monthSpan.innerText = mspan.target.innerText;
    monthList.classList.remove("monthListShow");
}



let showMoreBtn = document.getElementById("showMoreBtn");
let showMoreBtn2 = document.getElementById("showMoreBtn2");
let showHide = document.getElementById("showHide");
let showHide2 = document.getElementById("showHide2");
let span1 = document.getElementById("span1");
let span2 = document.getElementById("span2");
let span3 = document.getElementById("span3");
let span4 = document.getElementById("span4");

showMoreBtn.addEventListener("click", function() {
    showHide.classList.add("visible");
    span1.style.display = "none";
    span2.style.display = "block";
})
showMoreBtn2.addEventListener("click", function() {
    showHide2.classList.add("visible");
    span3.style.display = "none";
    span4.style.display = "block";
})

let janBtn = document.getElementById("january");
let febBtn = document.getElementById("february");
let marBtn = document.getElementById("march");
let aprBtn = document.getElementById("april");
let mayBtn = document.getElementById("may");

let febCard = document.getElementById("febCard");
let marchCard = document.getElementById("marchCard");

febBtn.addEventListener("click", () => {
    febCard.style.display = "block";
    marchCard.style.display = "none";
})
marBtn.addEventListener("click", () => {
    marchCard.style.display = "block";
    febCard.style.display = "none";
})


function sideBarOpen(){
    let sideBar = document.getElementById("sideBar");
    let openSide = document.getElementById("openSide");
    let closeSide = document.getElementById("closeSide");

    sideBar.style.transform = "translateX(0%)";
    closeSide.style.display = "block";
    openSide.style.display = "none";

}

function sideBarClose(){
    let sideBar = document.getElementById("sideBar");
    let openSide = document.getElementById("openSide");
    let closeSide = document.getElementById("closeSide");

        sideBar.style.transform = "translateX(-100%)";
        closeSide.style.display = "none";
        openSide.style.display = "block";
}

// let closeSideInner = document.getElementById("closeSideInner");
// let sideBar = document.getElementById("sideBar");

// closeSideInner.addEventListener("click", () => {
//     sideBar.style.transform = "translate(-100%)";
// })





// let navToggler = document.getElementById("navbar-toggler");

// navToggler.addEventListener("click", function(){
//     alert()
// })

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

// apply button

document.querySelectorAll('a, button').forEach(function(btn) {
    if (btn.textContent.trim() === 'Apply') {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            showToast('Application portal coming soon!', 'info');
        });
    }
});

// newsroom button

document.querySelectorAll('a, button').forEach(function(btn) {
    if (btn.textContent.trim() === 'Newsroom') {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            showToast('Newsroom page coming soon!', 'info');
        });
    }
});

// resources links

document.querySelectorAll('a').forEach(function(link) {
    const text = link.textContent.trim();
    if (text === 'Company Assets' || text === 'About Netflix') {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            showToast('Page coming soon!', 'info');
        });
    }
});

// title modal starts

window.addEventListener('load', function() {
    var modal = document.getElementById('titleModal');
    var modalVideo = document.getElementById('modalVideo');
    var modalTitle = document.getElementById('modalTitle');
    var modalDesc = document.getElementById('modalDesc');
    var modalMatch = document.getElementById('modalMatch');
    var modalYear = document.getElementById('modalYear');
    var modalClose = document.getElementById('modalClose');

    var titles = [
        { title: 'Stranger Things', desc: 'When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces, and one strange little girl.', match: '98%', year: '2016' },
        { title: 'The Witcher', desc: 'Geralt of Rivia, a mutated monster-hunter for hire, journeys toward his destiny in a turbulent world where people often prove more wicked than beasts.', match: '95%', year: '2019' },
        { title: 'Wednesday', desc: 'Wednesday Addams is sent to Nevermore Academy, where she must master her emerging psychic ability, solve a murder mystery, and navigate new relationships.', match: '96%', year: '2022' },
        { title: 'Money Heist', desc: 'Eight thieves take hostages and lock themselves in the Royal Mint of Spain as a criminal mastermind manipulates the police to carry out his plan.', match: '97%', year: '2017' },
        { title: 'Squid Game', desc: 'Hundreds of cash-strapped players accept a strange invitation to compete in childrens games. Inside, a tempting prize awaits with deadly high stakes.', match: '99%', year: '2021' },
        { title: 'The Crown', desc: 'This drama follows the political rivalries and romance of Queen Elizabeth IIs reign and the events that shaped the second half of the twentieth century.', match: '94%', year: '2016' },
        { title: 'Dark', desc: 'A family saga with a supernatural twist, set in a German town where the disappearance of two young children exposes the relationships among four families.', match: '96%', year: '2017' },
        { title: 'Black Mirror', desc: 'An anthology series exploring a twisted, high-tech multiverse where humanitys greatest innovations and darkest instincts collide.', match: '95%', year: '2011' }
    ];

    document.querySelectorAll('.card.bg-transparent').forEach(function(card, index) {
        card.style.cursor = 'pointer';
        card.addEventListener('click', function() {
            var data = titles[index % titles.length];
            var img = card.querySelector('img');
            var dateText = card.querySelector('.cardText');
            
            modalTitle.textContent = data.title;
            modalDesc.textContent = data.desc;
            modalMatch.textContent = data.match + ' Match';
            modalYear.textContent = data.year;
            
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
            
            modalVideo.currentTime = 0;
            modalVideo.play().catch(function(){});
        });
    });

    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = '';
        modalVideo.pause();
    }

    if (modalClose) {
        modalClose.addEventListener('click', closeModal);
    }

    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeModal();
            }
        });
    }

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
});

// title modal ends