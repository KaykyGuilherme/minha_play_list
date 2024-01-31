const music = document.querySelector("audio")
const botton__play = document.querySelector(".play")
const botton__pause = document.querySelector(".pause")
const tempo__final = document.querySelector(".tempo__final")

const capa__music = document.querySelector("img")
const name__music = document.querySelector(".name__music")
const name__creat = document.querySelector(".name__creat")

const list__music = [
    {music: `src/mp3/ЭТО НОН СТОП.mp3`, 
    titulo:`REFLEX - NON STOP`, 
    artista: `(Remix by Lieless)`,
    capa: `src/imgs/gif__1.gif`},

    {music: `src/mp3/билборды -  рисую кровью (MAGAZ21 Remix).mp3`, 
    titulo:`билборды -  рисую кровью`, 
    artista: `(MAGAZ21 Remix)`,
    capa: `src/imgs/gif__2.gif`},

    {music: `src/mp3/Мария Чайковская (Mariya Chaykovskaya) - Целуй меня (Kiss Me) (dang remix) dang.mp3`, 
    titulo:` Целуй меня (Kiss Me)`, 
    artista: `(dang remix)`,
    capa: `src/imgs/gif__3.gif`},

    {music: `src/mp3/Полина Гагарина - Кукушка (Forgiven Remix) [NXC].mp3`, 
    titulo:`Полина Гагарина - Кукушка`, 
    artista: `(Forgiven Remix)`,
    capa: `src/imgs/gif__4.gif`},

    {music: `src/mp3/Cold Suhou - Ya Hochu K Tebe (Cold Suhou Remix).mp3`, 
    titulo:`Ya Hochu K Tebe`, 
    artista: `(Cold Suhou Remix)`,
    capa: `src/imgs/gif__5.gif`},
    ]

let numero__music = 0

const skip = document.querySelector(".skip")
const back = document.querySelector(".back")

skip.addEventListener("click", () =>{
    numero__music++
    if(numero__music > 4){ numero__music = 0 }
    trocarMusic()
})

back.addEventListener("click", () =>{
    numero__music--
    if(numero__music < 0){ numero__music = 4 }
    console.log(numero__music)
    trocarMusic()
})

botton__play.addEventListener("click", tocarMusica)
botton__pause.addEventListener("click", pararMusica)
music.addEventListener("timeupdate", autalizarBarra)


tempo__final.innerHTML = formatar__tempo(Math.floor(music.duration))

function tocarMusica(){
    music.play()

    music.style.display = "none"
    botton__play.style.display = "none"
    botton__pause.style.display = "block"
}

function pararMusica(){
    music.pause()

    botton__pause.style.display = "none"
    botton__play.style.display = "block"

}

function autalizarBarra(){
    const barra = document.querySelector(".barra")
    barra.style.width = Math.floor((music.currentTime / music.duration) * 100) + '%'

    const tempo__real = document.querySelector(".tempo__real")
    tempo__real.textContent = formatar__tempo(Math.floor(music.currentTime))
}

function formatar__tempo(segundos){
    let format__minutos = Math.floor(segundos / 60);
    let format__segundos = segundos % 60;
    if(format__segundos < 10){
        format__segundos = '0' + format__segundos;
    }

    return format__minutos+':'+format__segundos;
}

function trocarMusic(){
    botton__pause.style.display = "none"
    botton__play.style.display = "block"

    music.src = list__music[numero__music].music

    music.addEventListener('loadeddata', ()=>{
        capa__music.src = list__music[numero__music].capa
        name__music.textContent = list__music[numero__music].titulo
        name__creat.textContent = list__music[numero__music].artista

        tempo__final.innerHTML = formatar__tempo(Math.floor(music.duration))
    })
 
}