console.clear()

/* 
SWITCH (panasus i IF)
 */

const diena =7;

switch (diena) {
    case 1:
        console.log('pirmadienis');
            break;

    case 2:
        console.log('antradienis');
            break;

    case 3:
        console.log('treciadienis');
            break;

    case 4:
        console.log('ketvirtadienis');
            break;

    case 5:
         console.log('penktadienis');
            break;
    case 6:
        console.log('sestadienis');
            break;
        
    case 7:
        console.log('sekmadienis');
            break;
        
    default:
        console.log('tokios dienos savaiteje nera');
        break;
}
        // ARBA

    const day = 3;

        switch (day) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                console.log('darbo diena');
                    break;

            case 6:
            case 7:
                console.log('savaitgalis');
                     break;

            default:
                console.log('tokios dienos savaiteje nera');
                    break;
                    
}

const dDay = 9

if (dDay === 1 || dDay === 2 || dDay === 3 || dDay === 4 || dDay === 5) {
        console.log('darbo diena');
} else if (dDay === 6 || dDay === 7) {
        console.log('savaitgalis');
} else {
    console.log('tokios dienos savaiteje nera');
}

console.log('--------------------');

const gamybosEtapas = 1;

switch (gamybosEtapas) {
        case 1:
            console.log('pasiimti puodeli');

        case 2:
            console.log('isideti arbatos (pakelis/arbatzoles)');
        
        case 3:
            console.log('isideti cukraus/saldikliu/medaus');
        
        case 4:
            console.log('issipilti vandens');
        
        case 5:
            console.log('gerti');
            break;
        
        default:
            console.log('tokio etapo nera');
            break;
}

console.log('----------------------------');


const stotele = 'Parko';

switch (stotele) {
    case 'Parko':
        console.log('Parko stotele');

    case 'Geniu':
        console.log('Geniu stotele');

    case 'Tremtiniu':
        console.log('Tremtiniu stotele');

    case 'Rudens':
        console.log('Rudens stotele');
        break;

    case 'Karaliaus Mindaugo':
        console.log('Karaliaus Mindaugo stotele');

    case 'Zaliasis Tiltas':
        console.log('Zaliasis Tiltas stotele');
        break;

    default:
        console.log('Tokios stoteles nera.');
        break;
}