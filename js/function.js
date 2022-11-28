function openNav(){
	var sideBar = document.getElementById("nav_mobile");
	sideBar.style.visibility = "visible";
	sideBar.style.width = "75%";
	sideBar.style.opacity = "0.95";
	sideBar.style.transitionDuration = "1s";

	var openButton = document.getElementById("icon_menu_open");
	openButton.style.display = "none";

	var closeButton = document.getElementById("icon_menu_close");
	closeButton.style.display = "block";
}

function closeNav(){
	var sideBar = document.getElementById("nav_mobile");
	sideBar.style.visibility = "hidden";
	sideBar.style.width = "0%";
	sideBar.style.transitionDuration = "1s";

	var openButton = document.getElementById("icon_menu_open");
	openButton.style.display = "block";

	var closeButton = document.getElementById("icon_menu_close");
	closeButton.style.display = "none";
}

function openMedio(){
	var content = document.getElementById("full_view_medio");

	if(content.style.display === 'block'){
		content.style.display = "none";
	}
	else{
		content.style.display = "block";
	}
}

function openTecno(){
	var content = document.getElementById("full_view_tecno");

	if(content.style.display === 'block'){
		content.style.display = "none";
	}
	else{
		content.style.display = "block";
	}
}

function openSuperior(){
	var content = document.getElementById("full_view_superior");

	if(content.style.display === 'block'){
		content.style.display = "none";
	}
	else{
		content.style.display = "block";
	}
}

function openTools(){
	var content = document.getElementById("full_view_tools");

	if(content.style.display === 'block'){
		content.style.display = "none";
	}
	else{
		content.style.display = "block";
	}
}

function openLanguage(){
	var content = document.getElementById("full_view_language");

	if(content.style.display === 'block'){
		content.style.display = "none";
	}
	else{
		content.style.display = "block";
	}
}

function openBase(){
	var content = document.getElementById("full_view_database");

	if(content.style.display === 'block'){
		content.style.display = "none";
	}
	else{
		content.style.display = "block";
	}
}
///////////////////////////////////////////////
class TypeWriter {
  constructor(txtElement, words, wait = 3000) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = '';
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
  }

  type() {
    // Current index of word
    const current = this.wordIndex % this.words.length;
    // Get full text of current word
    const fullTxt = this.words[current];

    // Check if deleting
    if(this.isDeleting) {
      // Remove char
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      // Add char
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    // Insert txt into element
    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

    // Initial Type Speed
    let typeSpeed = 500;

    if(this.isDeleting) {
      typeSpeed /= 2;
    }

    // If word is complete
    if(!this.isDeleting && this.txt === fullTxt) {
      // Make pause at end
      typeSpeed = this.wait;
      // Set delete to true
      this.isDeleting = true;
    } else if(this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      // Move to next word
      this.wordIndex++;
      // Pause before start typing
      typeSpeed = 500;
    }

    setTimeout(() => this.type(), typeSpeed);
  }
}


// Init On DOM Load
document.addEventListener('DOMContentLoaded', init);

// Init App
function init() {
  const txtElement = document.querySelector('.txt-type');
  const words = JSON.parse(txtElement.getAttribute('data-words'));
  const wait = txtElement.getAttribute('data-wait');
  // Init TypeWriter
  new TypeWriter(txtElement, words, wait);
}
