
const liskills = document.querySelector('#skl')
const liExp = document.querySelector('#ex')
const liEdu = document.querySelector('#ed')

console.log('clickme')

liskills.addEventListener('click', handleClick)
liExp.addEventListener('click', handleClick)
liEdu.addEventListener('click', handleClick)


function handleClick(e) {
    const t = e.target.id
    const lsi = ['#liExp', '#liEdu', '#liskills', '#skl', "#ex", "#ed"]
    for (const i of lsi) {
        document.querySelector(`${i}`).classList = ''
    }
    console.log(t)
    if ( t == 'ex'){        
        document.querySelector('#liExp').classList.toggle("active")
        document.querySelector(`#${t}`).classList.toggle("active") 
    }
    if ( t == 'ed'){   
        document.querySelector('#liEdu').classList.toggle("active") 
        document.querySelector(`#${t}`).classList.toggle("active") 

    }
    if ( t == 'skl'){  
        document.querySelector('#liskills').classList.toggle("active") 
        document.querySelector(`#${t}`).classList.toggle("active")     

    }
}