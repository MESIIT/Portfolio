function searchPortfolio() {
    var searchTerm = document.getElementById("searchInput").value.toLowerCase();
    var workItems = document.querySelectorAll('.work, .about, .skills, .service, .contact');
    var found = false;

    workItems.forEach(function (workItem) {
        var titleElement = workItem.querySelector('.layer h3, .contact h1, .service h3, .skills h3, .about h1');
        var descriptionElement = workItem.querySelector('.layer p, .service p, .about p');

        var title = titleElement ? titleElement.innerText.toLowerCase() : '';
        var description = descriptionElement ? descriptionElement.innerText.toLowerCase() : '';
        
        var isVisible = title.includes(searchTerm) || description.includes(searchTerm);

        workItem.style.display = isVisible ? "block" : "block";

        if (isVisible && !found) {
            found = true;
            workItem.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }

        console.log('Title:', title, 'Description:', description, 'IsVisible:', isVisible);
    });
}

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });

    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
}

function showPopup(imageSrc, title, description) {
    document.getElementById('popupImage').src = imageSrc;
    document.getElementById('imagePopup').style.display = 'flex';
}

function closePopup() {
    document.getElementById('imagePopup').style.display = 'none';
}

function submitForm() {
        event.preventDefault();
    
        const form = event.target;
        const data = new FormData(form);
    
        fetch(form.action, {
            method: 'POST',
            body: data,
        })
        .then(response => response.json())
        .then(result => {
            console.log(result); 
            alert("Form submitted successfully!"); 
            document.getElementById('forms').reset();
        })
        .catch(error => {
            console.error('Error submitting form:', error);
        });
    return false;
}
