function customRender(reactElement, container){
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children

//    if(reactElement.type == 'a'){
//     domElement.setAttribute('href', reactElement.props.href)
//     domElement.setAttribute('target', reactElement.props.target)
//    }
    for(const prop in reactElement.props){
        if(prop == 'children') continue;
        domElement.setAttribute(prop, reactElement.props[prop])
    }

   container.appendChild(domElement)
}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'click me to visit google'
}

const reactElement2 = {
    type: 'a',
    props: {
        href: 'https://react.dev',
        target: '_blank'
    },
    children: 'click me to visit react documentation'
}

const mainContainer = document.getElementById('root')

customRender(reactElement, mainContainer)
// customRender(reactElement2, mainContainer)
