document.body.onload = ()=>{
    const search = window.location.search
    const searchParams = new URLSearchParams( search.replace('?', '') )
    
    let texto1 = document.getElementById('texto1')
    let texto2 = document.getElementById('texto2')

    texto1.innerHTML = searchParams.get('texto1') || texto1.innerHTML;
    texto2.innerHTML = searchParams.get('texto2') || texto2.innerHTML;

    main()
}


// let textos = {}

// switch(searchParams.get('para')){
//     case 'a1':
//         textos = {
//             'p1': 'Hola amiga.'
//         }
//         break;
//     case 'a2':
//         break;
//     default:
//         break;
// }
// let canvasCont = document.getElementById('cont');
// let lienzo = document.getElementById('lienzo');
// let ctx = lienzo.getContext('2d')
// let imagen = new Image();
// imagen.src = './assets/flor2.svg';

let main = ()=>{
    // let resizeCanvas = ()=>{
    //     lienzo.width = canvasCont.clientWidth;
    // }

    // resizeCanvas();
    // window.onresize = ()=>{
    //     resizeCanvas();
    // }

    let listaFlores = document.getElementsByClassName('flor2')
    let posicionarFlores = ()=>{
        const ratio = 80;
        const ratioY = 20;

        let limit = listaFlores.length;
        let marginSize = 120;
        if(window.innerWidth < 1000){
            limit = 13;
            marginSize = 120;
        }
        // console.log(marginSize)
        let flipear;
        for(const [key, elem] of Object.entries(listaFlores)){
            // console.log(elem.dataset.x)
            if((key > limit && elem.dataset.x == '1') || (key > limit + 25 && elem.dataset.y)){
                continue;
            }
            flipear = Math.random() > 0.5? 1 : -1;
            let margenAleatorio = 50*Math.random()-25;
            elem.style.transform = `scaleX(${flipear}) translateX(${flipear*(elem.dataset.y*ratio - margenAleatorio - 100)}px) translateY(${elem.dataset.x*ratioY - margenAleatorio + marginSize}px)`;
        }
        
        // ctx.clearRect(0, 0, lienzo.width, lienzo.height);
        // for(let i=-1; i<20; i ++){
        //     for(let j=0; j <3; j++){
        //         let margenAleatorio = 50*Math.random() - 25;
        //         ctx.drawImage(imagen, i*ratio + margenAleatorio, j*ratio + margenAleatorio + 30, 176, 254 );
        //     }
        // }
    }
    posicionarFlores()
    const ratioAngle = 40;
    let alpha = []
    let fase = []
    
    let listaFlores1 = document.getElementsByClassName('flor1');
    for(let elem of listaFlores1){
        alpha.push(Math.random()*30);
        fase.push(0)
    }

    setInterval(()=>{
        posicionarFlores()
        for(let [key, elem] of Object.entries(listaFlores1)){
            alpha[key] += ratioAngle;
            elem.style.transform = `rotateZ(${alpha[key]}deg)`
        }
    }, 600)
}