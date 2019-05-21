import React, { Component } from 'react'
import MovieContainer from './MovieContainer'

const data = [
  {
    vote_count: 4300,
    id: 89,
    video: false,
    vote_average: 7.7,
    title: 'Indiana Jones and the Last Crusade',
    popularity: 18.43,
    poster_path: '/4p1N2Qrt8j0H8xMHMHvtRxv9weZ.jpg',
    original_language: 'en',
    original_title: 'Indiana Jones and the Last Crusade',
    genre_ids: [12, 28],
    backdrop_path: '/vfvVuu1JdnEGcyZUj7VHrhhbeMj.jpg',
    adult: false,
    overview:
      "When Dr. Henry Jones Sr. suddenly goes missing while pursuing the Holy Grail, eminent archaeologist Indiana must team up with Marcus Brody, Sallah and Elsa Schneider to follow in his father's footsteps and stop the Nazis from recovering the power of eternal life.",
    release_date: '1989-05-24'
  },
  {
    vote_count: 3040,
    id: 268,
    video: false,
    vote_average: 7.1,
    title: 'Batman',
    popularity: 15.106,
    poster_path: '/kBf3g9crrADGMc2AMAMlLBgSm2h.jpg',
    original_language: 'en',
    original_title: 'Batman',
    genre_ids: [14, 28],
    backdrop_path: '/2blmxp2pr4BhwQr74AdCfwgfMOb.jpg',
    adult: false,
    overview:
      "The Dark Knight of Gotham City begins his war on crime with his first major enemy being the clownishly homicidal Joker, who has seized control of Gotham's underworld.",
    release_date: '1989-06-23'
  },
  {
    vote_count: 4337,
    id: 207,
    video: false,
    vote_average: 8.3,
    title: 'Dead Poets Society',
    popularity: 14.88,
    poster_path: '/3Ri2GReavqSHqWemlP6HYn8i2P9.jpg',
    original_language: 'en',
    original_title: 'Dead Poets Society',
    genre_ids: [18],
    backdrop_path: '/3mjgFRPcGfGrA6aQFsSMgYzJAbG.jpg',
    adult: false,
    overview:
      'At an elite, old-fashioned boarding school in New England, a passionate English teacher inspires his students to rebel against convention and seize the potential of every day, courting the disdain of the stern headmaster.',
    release_date: '1989-06-02'
  },
  {
    vote_count: 3013,
    id: 10144,
    video: false,
    vote_average: 7.3,
    title: 'The Little Mermaid',
    popularity: 12.398,
    poster_path: '/ivdzLXCVgPUyjphKbbB40z8FQp8.jpg',
    original_language: 'en',
    original_title: 'The Little Mermaid',
    genre_ids: [16, 10751],
    backdrop_path: '/h62PZCsfuiCD3JvkXmGqrUpnHJL.jpg',
    adult: false,
    overview:
      'This colorful adventure tells the story of an impetuous mermaid princess named Ariel who falls in love with the very human Prince Eric and puts everything on the line for the chance to be with him. Memorable songs and characters -- including the villainous sea witch Ursula.',
    release_date: '1989-11-17'
  },
  {
    vote_count: 751,
    id: 709,
    video: false,
    vote_average: 6.1,
    title: 'Licence to Kill',
    popularity: 12.26,
    poster_path: '/27EySoBH3oBuI6xat2QOquB9X8j.jpg',
    original_language: 'en',
    original_title: 'Licence to Kill',
    genre_ids: [12, 28, 53],
    backdrop_path: '/lNNTk5VpV8OtZlAm9nf4Jl1unAY.jpg',
    adult: false,
    overview:
      'James Bond and his American colleague Felix Leiter arrest the drug lord Sanchez who succeeds in escaping and takes revenge on Felix and his wife. Bond knows but just one thing: revenge.',
    release_date: '1989-07-07'
  },
  {
    vote_count: 1106,
    id: 16859,
    video: false,
    vote_average: 7.7,
    title: "Kiki's Delivery Service",
    popularity: 12.218,
    poster_path: '/f0QzflRlwX5dhEnzPqoVOsCt5Cy.jpg',
    original_language: 'ja',
    original_title: '魔女の宅急便',
    genre_ids: [16, 12, 18, 14],
    backdrop_path: '/fSbiMnUXJ6rrSuf3MN7pFqUtws4.jpg',
    adult: false,
    overview:
      'A young witch, on her mandatory year of independent life, finds fitting into a new community difficult while she supports herself by running an air courier service.',
    release_date: '1989-07-29'
  },
  {
    vote_count: 1635,
    id: 2978,
    video: false,
    vote_average: 6.4,
    title: 'Ghostbusters II',
    popularity: 11.833,
    poster_path: '/4nN0EYNbOWHJ9UO39maO5Kvcdfa.jpg',
    original_language: 'en',
    original_title: 'Ghostbusters II',
    genre_ids: [35, 14],
    backdrop_path: '/tDlsTDtC15kJd4vrkQkxqoW4Pse.jpg',
    adult: false,
    overview:
      'Five years after they defeated Gozer, the Ghostbusters are out of business. When Dana begins to have ghost problems again, the boys come out of retirement to aid her and hopefully save New York City from a new paranormal threat.',
    release_date: '1989-06-15'
  },
  {
    vote_count: 141,
    id: 28609,
    video: false,
    vote_average: 6.2,
    title: 'Dragon Ball Z: Dead Zone',
    popularity: 11.447,
    poster_path: '/57kpl8lcSWMWrKnltDlklbIU7Oa.jpg',
    original_language: 'ja',
    original_title: 'ドラゴンボールＺ オラの悟飯をかえせッ!!',
    genre_ids: [16],
    backdrop_path: '/ygDJnLg2YSTx7sqyXlsMFMmr246.jpg',
    adult: false,
    overview:
      'Gohan has been kidnapped! To make matters worse, the evil Garlic Jr. is gathering the Dragonballs to wish for immortality. Only then will Garlic Jr. be able to take over the Earth in order to gain revenge for the death of his father. Goku rushes to save Gohan, but arrives at the fortress just as Garlic Jr. summons the Eternal Dragon! Krillin and Piccolo try to help Goku, but their combined powers.',
    release_date: '1989-06-15'
  },
  {
    vote_count: 1409,
    id: 942,
    video: false,
    vote_average: 6.8,
    title: 'Lethal Weapon 2',
    popularity: 10.399,
    poster_path: '/7XAusKpFNv8x9sHpFLAS2lWCT8l.jpg',
    original_language: 'en',
    original_title: 'Lethal Weapon 2',
    genre_ids: [28, 12, 35, 80, 53],
    backdrop_path: '/7AwySjHxakk3yCItwtjQbYhWAOg.jpg',
    adult: false,
    overview:
      "In the opening chase, Martin Riggs and Roger Murtaugh stumble across a trunk full of Krugerrands. They follow the trail to a South African diplomat who's using his immunity to conceal a smuggling operation. When he plants a bomb under Murtaugh's toilet, the action explodes!",
    release_date: '1989-07-07'
  },
  {
    vote_count: 1475,
    id: 639,
    video: false,
    vote_average: 7.3,
    title: 'When Harry Met Sally...',
    popularity: 10.12,
    poster_path: '/anYI1fzx90PgjO9PY3JStJZJmQT.jpg',
    original_language: 'en',
    original_title: 'When Harry Met Sally...',
    genre_ids: [35, 10749, 18],
    backdrop_path: '/xd5SYDUhNVGLUeK2epbEjnVBpPN.jpg',
    adult: false,
    overview:
      "During their travels from Chicago to New York, Harry and Sally Will debate whether or not sex ruins a perfect relationship between a man and a woman. Eleven years later, and they're still no closer to finding the answer.",
    release_date: '1989-07-21'
  },
  {
    vote_count: 350,
    id: 10222,
    video: false,
    vote_average: 6.5,
    title: 'Kickboxer',
    popularity: 9.625,
    poster_path: '/8kNEhA31mXwUOuFuBGaN0T5oQwU.jpg',
    original_language: 'en',
    original_title: 'Kickboxer',
    genre_ids: [28, 53],
    backdrop_path: '/wEEKRZoRXh3FrIU0Hu5kc44lzwD.jpg',
    adult: false,
    overview:
      'If your enemy refuses to be humbled... Destroy him. Accompanied by his brother Kurt (Van Damme), American kickboxing champion Eric Sloane (Dennis Alexio), arrives in Thailand to defeat the Eastern warriors at their own sport. His opponent: ruthless fighter and Thai champion, Tong Po. Tong not only defeats Eric, he paralyzes him for life. Crazed with anger, Kurt vows revenge.',
    release_date: '1989-04-20'
  },
  {
    vote_count: 642,
    id: 9618,
    video: false,
    vote_average: 6.3,
    title: 'Tango & Cash',
    popularity: 9.395,
    poster_path: '/mHDDTtNMyDkjy807KmNsuSJyIQK.jpg',
    original_language: 'en',
    original_title: 'Tango & Cash',
    genre_ids: [28, 12, 35],
    backdrop_path: '/oeEBJtwDdB5kGumLwv8IvC9InMV.jpg',
    adult: false,
    overview:
      "Ray Tango and Gabriel Cash are narcotics detectives who, while both being extremely successful, can't stand each other. Crime Lord Yves Perret, furious at the loss of income that Tango and Cash have caused him, frames the two for murder. Caught with the murder weapon on the scene of the crime, the two have no alibi. Thrown into prison with most of the criminals they helped convict, it appears that they are going to have to trust each other if they are to clear their names and catch the evil Perret.",
    release_date: '1989-12-22'
  },
  {
    vote_count: 1143,
    id: 9354,
    video: false,
    vote_average: 6.2,
    title: 'Honey, I Shrunk the Kids',
    popularity: 9.333,
    poster_path: '/f5eFxKYAd7hN1BxYzBg9qL1SDRe.jpg',
    original_language: 'en',
    original_title: 'Honey, I Shrunk the Kids',
    genre_ids: [12, 35, 10751, 878],
    backdrop_path: '/5AhzhhWMD7VxjXjvr1Cx3BmPxyj.jpg',
    adult: false,
    overview:
      'The scientist father of a teenage girl and boy accidentally shrinks his and two other neighborhood teens to the size of insects. Now the teens must fight diminutive dangers as the father searches for them.',
    release_date: '1989-06-22'
  },
  {
    vote_count: 580,
    id: 2604,
    video: false,
    vote_average: 6.9,
    title: 'Born on the Fourth of July',
    popularity: 9.302,
    poster_path: '/iAUSzQNpxf9fX1EvhNbeguo6aVA.jpg',
    original_language: 'en',
    original_title: 'Born on the Fourth of July',
    genre_ids: [18, 10752],
    backdrop_path: '/t9MrNY0xM9U5JSe5vHN9z08UYty.jpg',
    adult: false,
    overview:
      'The biography of Ron Kovic. Paralyzed in the Vietnam war, he becomes an anti-war and pro-human rights political activist after feeling betrayed by the country he fought for.',
    release_date: '1989-12-20'
  },
  {
    vote_count: 428,
    id: 11974,
    video: false,
    vote_average: 6.7,
    title: "The 'Burbs",
    popularity: 9.156,
    poster_path: '/zPEECSo5ZOBr9oEmBLSVXcqndTO.jpg',
    original_language: 'en',
    original_title: "The 'Burbs",
    genre_ids: [35, 27, 53],
    backdrop_path: '/yCOTJnV7I0UcusTycv5bGEDQ5ll.jpg',
    adult: false,
    overview:
      "When secretive new neighbors move in next door, suburbanite Ray Peterson and his friends let their paranoia get the best of them as they start to suspect the newcomers of evildoings and commence an investigation. But it's hardly how Ray, who much prefers drinking beer, reading his newspaper and watching a ball game on the tube expected to spend his vacation.",
    release_date: '1989-02-17'
  },
  {
    vote_count: 880,
    id: 5825,
    video: false,
    vote_average: 7.2,
    title: "National Lampoon's Christmas Vacation",
    popularity: 9.069,
    poster_path: '/uh2sQFjRXCwexWcBtV7OEnL1c5G.jpg',
    original_language: 'en',
    original_title: "National Lampoon's Christmas Vacation",
    genre_ids: [35],
    backdrop_path: '/o5yflApN9GuOkmnv6O9l4z83U5F.jpg',
    adult: false,
    overview:
      "It's Christmas time and the Griswolds are preparing for a family seasonal celebration, but things never run smoothly for Clark, his wife Ellen and their two kids. Clark's continual bad luck is worsened by his obnoxious family guests, but he manages to keep going knowing that his Christmas bonus is due soon.",
    release_date: '1989-12-01'
  },
  {
    vote_count: 358,
    id: 11497,
    video: false,
    vote_average: 6.6,
    title: 'All Dogs Go to Heaven',
    popularity: 9.052,
    poster_path: '/fb6CRpryYQB5eqjohSnLbjHxJQK.jpg',
    original_language: 'en',
    original_title: 'All Dogs Go to Heaven',
    genre_ids: [18, 16, 10751, 35, 14],
    backdrop_path: '/pKaXWFXFYG2NDimnb4wsGsZSl6Q.jpg',
    adult: false,
    overview:
      "When a casino owning dog named Charlie is murdered by his rival Carface, he finds himself in Heaven basically by default since all dogs go to heaven. However, since he wants to get back at his killer, he cons his way back to the living with the warning that doing that damns him to Hell. Once back, he teams with his old partner, Itchy to prep his retaliation. He also stumbles on to an orphan girl who can talk to the animals, thus allowing him to get the inside info on the races to ensure his wins to finance his plans. However, all the while, he is still haunted by nightmares on what's waiting for him on the other side unless he can prove that he is worthy of Heaven again.",
    release_date: '1989-11-17'
  },
  {
    vote_count: 292,
    id: 10345,
    video: false,
    vote_average: 5.7,
    title: 'K-9',
    popularity: 8.942,
    poster_path: '/4SmGgyoIRzOqLI9M5lof2e00B16.jpg',
    original_language: 'en',
    original_title: 'K-9',
    genre_ids: [28, 35, 80],
    backdrop_path: '/cpeXyg83ONQCMGcTixIJ4pNcNlN.jpg',
    adult: false,
    overview:
      'The extravagant cop Michael Dooley needs some help to fight a drug dealer who has tried to kill him. A "friend" gives him a dog named Jerry Lee (Officer Lewis), who has been trained to smell drugs. With his help, Dooley sets out to put his enemy behind the bars, but Jerry Lee has a personality of his own and works only when he wants to. On the other hand, the dog is quite good at destroying Dooley\'s car, house and sex-life...',
    release_date: '1989-04-28'
  },
  {
    vote_count: 586,
    id: 2640,
    video: false,
    vote_average: 7.3,
    title: 'Heathers',
    popularity: 8.811,
    poster_path: '/38DHopfWHrWqYjphcBeAxOomled.jpg',
    original_language: 'en',
    original_title: 'Heathers',
    genre_ids: [53, 35, 18],
    backdrop_path: '/dw2v5NyQz8ehijKAA0Z1Mzj5CCh.jpg',
    adult: false,
    overview:
      'A girl who halfheartedly tries to be part of the "in crowd" of her school meets a rebel who teaches her a more devious way to play social politics: by killing the popular kids.',
    release_date: '1989-03-31'
  },
  {
    vote_count: 125,
    id: 11937,
    video: false,
    vote_average: 6.4,
    title: 'The Gods Must Be Crazy II',
    popularity: 8.751,
    poster_path: '/zdKMqYiy7s5eyITRf9Q19WtyBxQ.jpg',
    original_language: 'en',
    original_title: 'The Gods Must Be Crazy II',
    genre_ids: [28, 35],
    backdrop_path: '/mV0e23bsZrEU53hizWRQRGUvv6q.jpg',
    adult: false,
    overview:
      "Xixo is back again. This time, his children accidentally stow away on a fast-moving poachers' truck, unable to get off, and Xixo sets out to rescue them. Along the way, he encounters a couple of soldiers trying to capture each other and a pilot and passenger of a small plane, who are each having a few problems of their own.",
    release_date: '1989-07-01'
  }
]

class MovieList extends Component {
  render() {
    return (
      <div>
        Listing the Movies...
        {data.map(movie => {
          return (
            <MovieContainer
              title={movie.title}
              releaseDate={movie.release_date}
              posterUrl={movie.poster_path}
            />
          )
        })}
      </div>
    )
  }
}

export default MovieList
