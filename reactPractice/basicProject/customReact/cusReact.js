  
  const Root = document.getElementById('root')

//   Root.style.background = "blue"
  console.log(Root);
  

  const createElement = document.createElement("a")
  createElement.setAttribute("href", "https://google.com")
  createElement.setAttribute("target","_blank")
  createElement.innerHTML = "go to the google"

  Root.appendChild(createElement)


  console.log(createElement);
  