
// Part 1: Getting Started

// Select and cache the <main> element in a variable named mainEl.
let mainEl = document.querySelector('main');
// Set the background color of mainEl to the value stored in the --main-bg CSS custom property.
// Hint: Assign a string that uses the CSS var() function like this: 'var(--main-bg)'.
mainEl.style.backgroundColor = 'var(--main-bg)';
// Set the content of mainEl to <h1>DOM Manipulation</h1>. There are a variety of ways to do this; pick whichever one that you think works best in this situation.
mainEl.innerHTML = '<h1>DOM Manipulation</h1>';
// Add a class of flex-ctr to mainEl.
// Hint: Use the Element.classList API.
mainEl.classList.add('flex-ctr');

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
  { 
    text: 'about', 
    href: '/about' 
  },
  { 
    text: 'catalog', 
    href: '#', 
    subLinks: [
      { text: 'all', href: '/catalog/all' },
      { text: 'top selling', href: '/catalog/top' },
      { text: 'search', href: '/catalog/search' }
    ]
  },
  { 
    text: 'orders', 
    href: '#', 
    subLinks: [
      { text: 'new', href: '/orders/new' },
      { text: 'pending', href: '/orders/pending' },
      { text: 'history', href: '/orders/history' }
    ]
  },
  { 
    text: 'account', 
    href: '#', 
    subLinks: [
      { text: 'profile', href: '/account/profile' },
      { text: 'sign out', href: '/account/signout' }
    ]
  }
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

//SECTION 2

// Part 3: Creating the Submenu
// Select and cache the <nav id="sub-menu"> element in a variable named subMenuEl.
let subMenuEl = document.querySelector('#sub-menu');
// Set the height subMenuEl element to be "100%".
subMenuEl.style.height = '100%';
// Set the background color of subMenuEl to the value stored in the --sub-menu-bg CSS custom property.
subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)';
// Add the class of flex-around to the subMenuEl element.
subMenuEl.classList.add('flex-around');
// Set the CSS position property of subMenuEl to the value of absolute.
subMenuEl.style.position = 'absolute';
// Set the CSS top property of subMenuEl to the value of 0.
subMenuEl.style.top = '0';

// Part 4: Adding Menu Interaction
// Select and cache the all of the <a> elements inside of topMenuEl in a variable named topMenuLinks.
let topMenuLinks = topMenuEl.querySelectorAll('a');
// Attach a delegated 'click' event listener to topMenuEl.
topMenuEl.addEventListener('click', function(e){
  // The first line of code of the event listener function should call the event object's preventDefault() method.
    e.preventDefault();
    // The second line of code of the function should immediately return if the element clicked was not an <a> element.
    if(e.target.tagName !== 'A'){
      return;
      // Log the content of the <a> to verify the handler is working.
    } else{
      console.log(e.target.textContent)
      // The event listener should add the active class to the <a> element that was clicked, unless it was already active, in which case it should remove it.
      if(e.target.classList.contains('active')){
        e.target.classList.remove('active');
        subMenuEl.style.top = '0';
      } else{
        e.target.classList.add('active');
        console.log(e.target);
            // If the clicked <a> element's "link" object within menuLinks has a subLinks property (all do, except for the "link" object for ABOUT), set the CSS top property of subMenuEl to 100%

            //over-engineered but keeping it because why not
            for(let menuLink of menuLinks){
              if(menuLink.text === e.target.textContent){
                if(menuLink.subLinks){
                  subMenuEl.style.top = '100%';
                } else{
                  // If the ABOUT link is clicked, an <h1>About</h1> should be displayed.
                  mainEl.innerHTML = '<h1>About</h1>';
                  subMenuEl.style.top = '0';
                }

              }
            }
          buildSubmenu(e.target.textContent);
          }
      // The event listener should remove the active class from each other <a> element in topMenuLinks - whether the active class exists or not.
      // Hint: Removing a non-existent class from an element does not cause an error!
      for(let topMenuLink of topMenuLinks){
        if(topMenuLink.text !== e.target.text){
          topMenuLink.classList.remove('active')
        }
      }
    
    
    }
})

function buildSubmenu(topLink){
  // Clear the current contents of subMenuEl.
  subMenuEl.innerHTML = '';
  // Iterate over the subLinks array, passed as an argument, and for each "link" object:
  let linkMatch = menuLinks.find(link => link.text === topLink);
  if(linkMatch.subLinks){
    for(let subLink of linkMatch.subLinks){
      // Create an <a> element.
      let subLinkElm = document.createElement('a');
      // Add an href attribute to the <a>, with the value set by the href property of the "link" object.
      subLinkElm.setAttribute('href', subLink.href);
      // Set the element's content to the value of the text property of the "link" object.
      subLinkElm.textContent = subLink.text;
      // Append the new element to the subMenuEl.
      subMenuEl.append(subLinkElm);
    }
  }
return;
}
// Attach a delegated 'click' event listener to subMenuEl.
subMenuEl.addEventListener('click', function(e){
  // The first line of code of the event listener function should call the event object's preventDefault() method.
  e.preventDefault();
  // The second line of code within the function should immediately return if the element clicked was not an <a> element.
  if(e.target.tagName !== 'A'){
    return;
  } else{
    // Log the content of the <a> to verify the handler is working.
    console.log(e.target.textContent);
    // Next, the event listener should set the CSS top property of subMenuEl to 0.
    subMenuEl.style.top = '0';
    // Remove the active class from each <a> element in topMenuLinks.
    topMenuLinks.forEach(function(topMenuLink){
      topMenuLink.classList.remove('active');

    })
      // Update the contents of mainEl, within an <h1>, to the contents of the <a> element clicked within subMenuEl.
      mainEl.innerHTML = `<h1>${e.target.textContent}</h1>`;
  }
})







// If the ABOUT link is clicked, an <h1>About</h1> should be displayed.