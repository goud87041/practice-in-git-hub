  
  const RootElement = document.getElementById('root')

// //   Root.style.background = "blue"
//   console.log(Root);
  

//   const createElement = document.createElement("a")
//   createElement.setAttribute("href", "https://google.com")
//   createElement.setAttribute("target","_blank")
//   createElement.innerHTML = "go to the google"

//   Root.appendChild(createElement)


//   console.log(createElement);


function createElement(RootElement,randerElemnt) {
    const takeTag = document.createElement(randerElemnt.type)
    // takeTag.setAttribute("href" , randerElemnt.props.href)
    // takeTag.setAttribute("target",randerElemnt.props.target)

    for (const prop in randerElemnt.props) {
              takeTag.setAttribute(prop ,randerElemnt.props[prop])
    }

    takeTag.innerHTML = randerElemnt.text 

    RootElement.appendChild(takeTag)
}
  

const randerElemnt = {
    type : "a",
    props : {
        href  : "https://google.com",
        target : "_blank"
    },
    text : "click visit website !"
}

createElement(RootElement , randerElemnt);