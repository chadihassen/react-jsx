import React from 'react'
import Playerslist from './Playerslist'

function Players() {
    const players=[
    {src:"https://o.remove.bg/downloads/dcbd3f56-1045-4dad-b2cb-4ac16a4619b3/cristiano-ronaldo-al-nassr-removebg-preview.png",
        name:'Cristiano ronaldo',
        team:'Nassr saudi',
        nationality:'Portugal',
        jerseynumber:7,
        age:38,},
        { src:"https://o.remove.bg/downloads/6f73388a-da72-4491-8195-e0b06e252dfb/lionel-messi-psg-2223-1-removebg-preview.png",
        name:'Lionel Messi',
        team:'Miami',
        nationality:'Argentine',
        jerseynumber:10,
        age:36},
        { src:"https://o.remove.bg/downloads/bed864cf-7816-4adb-acb8-c1e334d9a8d0/erling-haaland-removebg-preview.png",
        name:'Earling Haland',
        team:'Manchester City',
        nationality:'Norvége',
        jerseynumber:9,
        age:23},
        { src:"https://o.remove.bg/downloads/f5e38f26-c40f-4ac3-a833-f71c1c509b80/deja-champion-du-monde-en-2018-a-seulement-19-ans-kylian-mbappe-a-l-occasion-de-se-hisser-parmi-les-plus-grands-joueurs-de-l-histoire-en-decrochant-deja-un-2-e-trophee-photo-sip-a-1671307891-removebg-.png",
        name:'Kylian Mbappé',
        team:'Paris Saint German',
        nationality:'France',
        jerseynumber:7,
        age:36}

    ]
    return (
        <div >
           <Playerslist players={players}/>
        </div>
    )
}

export default Players