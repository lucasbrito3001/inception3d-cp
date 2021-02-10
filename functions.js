let cont = 0
let prevScrollpos = window.pageYOffset;

window.addEventListener('scroll',() => {
    const barra = document.querySelector('header')
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        barra.style.top = "0";
        barra.style.transition = '.4s'
    } else {
        barra.style.top = "-10vh";
    }
    prevScrollpos = currentScrollPos;
})

function overflow(){
    if(cont == 0){
        document.body.style.overflow = 'hidden'
        cont++
    } else{
        document.body.style.overflow = 'visible'
        cont = 0
    }
}

function mudarAdm(pessoa){
    const adm = document.querySelector('#pessoa')
    const cargo = document.querySelector('#cargo')
    const curso = document.querySelector('#curso')
    const depoimento = document.querySelector('#depoimento')
    const imgAdm = document.querySelector('img#img-adm')
    imgAdm.classList.add('img-adm')
    
    switch(pessoa){
        case 'ana':
            adm.innerHTML = 'Ana Leticia Delalibera Romero'
            cargo.innerHTML = 'Presidente'
            curso.innerHTML = 'Eng. de Controle e Automação'
            depoimento.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ab quis doloremque accusantium eos beatae necessitatibus ipsum rem deserunt. Facilis in voluptas vitae perferendis veritatis maxime repudiandae fuga blanditiis laboriosam! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur voluptatem eius atque sint nesciunt maiores fugiat distinctio eveniet ipsum necessitatibus! Veritatis nulla expedita libero nobis totam ullam illo non nihil?'
            imgAdm.src = 'analeticia.jpg'
            break

        case 'vitoria':
            adm.innerHTML = 'Vitoria Aparecida Beneton'
            cargo.innerHTML = 'Vice-Presidente'
            curso.innerHTML = 'Eng. de Controle e Automação'
            depoimento.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ab quis doloremque accusantium eos beatae necessitatibus ipsum rem deserunt. Facilis in voluptas vitae perferendis veritatis maxime repudiandae fuga blanditiis laboriosam! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur voluptatem eius atque sint nesciunt maiores fugiat distinctio eveniet ipsum necessitatibus! Veritatis nulla expedita libero nobis totam ullam illo non nihil?'
            imgAdm.src = 'vitoria.jpg'
            break
        
        case 'lara':
            adm.innerHTML = 'Lara Gabriely dos Santos'
            cargo.innerHTML = 'Gestora de Marketing'
            curso.innerHTML = 'Eng. de Controle e Automação'
            depoimento.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ab quis doloremque accusantium eos beatae necessitatibus ipsum rem deserunt. Facilis in voluptas vitae perferendis veritatis maxime repudiandae fuga blanditiis laboriosam! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur voluptatem eius atque sint nesciunt maiores fugiat distinctio eveniet ipsum necessitatibus! Veritatis nulla expedita libero nobis totam ullam illo non nihil?'
            imgAdm.src = 'lara.jpg'

            break

        case 'gutembergue':
            adm.innerHTML = 'Gutembergue Teles Junior'
            cargo.innerHTML = 'Gestor de Financeiro'
            curso.innerHTML = 'Eng. de Controle e Automação'
            depoimento.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ab quis doloremque accusantium eos beatae necessitatibus ipsum rem deserunt. Facilis in voluptas vitae perferendis veritatis maxime repudiandae fuga blanditiis laboriosam! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur voluptatem eius atque sint nesciunt maiores fugiat distinctio eveniet ipsum necessitatibus! Veritatis nulla expedita libero nobis totam ullam illo non nihil?'
            imgAdm.src = 'guto.jpg'

            break 

        case 'paulo':
            adm.innerHTML = 'Paulo Henrique Arizono'
            cargo.innerHTML = 'Gestor de Financeiro'
            curso.innerHTML = 'Eng. de Controle e Automação'
            depoimento.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ab quis doloremque accusantium eos beatae necessitatibus ipsum rem deserunt. Facilis in voluptas vitae perferendis veritatis maxime repudiandae fuga blanditiis laboriosam! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur voluptatem eius atque sint nesciunt maiores fugiat distinctio eveniet ipsum necessitatibus! Veritatis nulla expedita libero nobis totam ullam illo non nihil?'
            imgAdm.src = 'paulo.jpg'

            break 

        case 'alexandre':
            adm.innerHTML = 'Alexandre Crespo'
            cargo.innerHTML = 'Gestor de Comercial'
            curso.innerHTML = 'Eng. de Controle e Automação'
            depoimento.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ab quis doloremque accusantium eos beatae necessitatibus ipsum rem deserunt. Facilis in voluptas vitae perferendis veritatis maxime repudiandae fuga blanditiis laboriosam! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur voluptatem eius atque sint nesciunt maiores fugiat distinctio eveniet ipsum necessitatibus! Veritatis nulla expedita libero nobis totam ullam illo non nihil?'
            imgAdm.src = 'alexandre.jpg'
            break 
            
    }
}
