let body
        body = document.querySelector('body')
        body.style.overflow = 'hidden'
        let main
        main = document.querySelector('main')
        main.style.height = '100vh'
        main.style.display = 'flex'
        main.style.justifyContent = 'center'
        main.style.alignItems = 'center'
        main.style.boxShadow = '#c1c1c1 2px 0px 8px'
        main.style.flexDirection = 'column'
        main.style.gap = '1rem'

        let h1
        h1 = document.querySelector('h1')
        let section = document.querySelector('section')
        section.style.minWidth = 'auto'
        section.style.height = '5rem'
        section.style.padding = '0rem 2rem'
        section.style.display = 'flex'
        section.style.fontSize = '3rem'
        section.style.justifyContent = 'center'
        section.style.alignItems = 'center'
        section.style.boxShadow = '#c1c1c1 2px 0px 8px'
        section.style.margin = '0'
        section.style.textShadow = '#c1c1c1 2px 2px 1px'

        let p = document.querySelector('p')
        h1.textContent = 'Press any Keyboard key'
        p.style.width = '7.2rem'
        p.style.fontSize = '5rem'
        p.style.height = '8rem'
        p.style.display = 'flex'
        p.style.justifyContent = 'center'
        p.style.alignItems = 'center'
        p.style.margin = '0'
        p.style.color = 'green'
        p.style.boxShadow = '#c1c1c1 2px 0px 8px'
        p.style.textShadow = '#c1c1c1  2px 2px 1px'

        let span = document.querySelector('span')
        span.style.color = 'green'
        span.style.marginLeft = '0.5rem'
        body.addEventListener('keyup', (e) => {
            h1.textContent = 'You Pressed'
            span.textContent = e.key
            p.textContent = e.keyCode

        })
