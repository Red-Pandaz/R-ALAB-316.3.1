
// Part 1: Getting Started

// Select and cache the <main> element in a variable named mainEl.
let mainE1 = document.querySelector('main');
// Set the background color of mainEl to the value stored in the --main-bg CSS custom property.
// Hint: Assign a string that uses the CSS var() function like this: 'var(--main-bg)'.
mainE1.style.backgroundColor = 'var(--main-bg)';
// Set the content of mainEl to <h1>DOM Manipulation</h1>. There are a variety of ways to do this; pick whichever one that you think works best in this situation.
mainEl.innerHTML = '<h1> DOM Manipulation</h1>';
// Add a class of flex-ctr to mainEl.
// Hint: Use the Element.classList API.
mainE1.classList.add('flex-ctr');

// Part 2: Creating a Menu Bar

// Select and cache the <nav id="top-menu"> element in a variable named topMenuEl.
let topMenuEl = document.querySelector('#top-menu');
// Set the height of the topMenuEl element to be 100%.
topMenuEl.style.height = '100%';
// Set the background color of topMenuEl to the value stored in the --top-menu-bg CSS custom property.
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';
// Add a class of flex-around to topMenuEl.
topMenuEl.classList.add('flex-around');

// Part 3: Adding Menu Buttons

var menuLinks = [
  { text: 'about', href: '/about' },
  { text: 'catalog', href: '/catalog' },
  { text: 'orders', href: '/orders' },
  { text: 'account', href: '/account' },
];

// Iterate over the entire menuLinks array and for each "link" object:
for(let menuLink of menuLinks){
    // Create an <a> element.
    let newLink = document.createElement('a');
    // Set the new element's content to the value of the text property of the "link" object.
    newLink.setAttribute('href', `${menuLink.href}`);
    // Set the new element's content to the value of the text property of the "link" object.
    newLink.textContent = `${menuLink.text}`;
    // Append the new element to the topMenuEl element.
    topMenuEl.append(newLink);
};

// Select and cache the <nav id="sub-menu"> element in a variable named subMenuEl.
let subMenuEl = document.querySelector('#sub-menu')
// Set the height subMenuEl element to be "100%".
subMenuEl.style.height = '100%'
// Set the background color of subMenuEl to the value stored in the --sub-menu-bg CSS custom property.
topMenuEl.style.backgroundColor = 'var(--sub-menu-bg)';
// Add the class of flex-around to the subMenuEl element.
subMenuEl.classList.add('flex-around')


