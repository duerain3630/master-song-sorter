const ARTISTS = {
  magdalena_bay: {
    title: "Magdalena Bay Song Sorter",
    logo: "images/magdalena-bay-logo.png",
    songs: [
      
      // Singles
      { name: "Voc Pop", image: "images/magdalena-bay/voc-pop.jpeg" },
      { name: "Head Over Heels", image: "images/magdalena-bay/head-over-heels.jpeg" },
      { name: "#wastehistime", image: "images/magdalena-bay/wastehistime.jpeg" },
      { name: "Neon", image: "images/magdalena-bay/neon.jpeg" },
      { name: "Set Me Off", image: "images/magdalena-bay/set-me-off.jpeg" },
      { name: "Redbone", image: "images/magdalena-bay/redbone.jpeg" },
      { name: "Drive Alone", image: "images/magdalena-bay/drive-alone.jpeg" },
      { name: "Move Slow", image: "images/magdalena-bay/move-slow.jpeg" },
      { name: "Waking Up", image: "images/magdalena-bay/waking-up.jpeg" },
      { name: "The Girls", image: "images/magdalena-bay/the-girls.jpeg" },
      { name: "Ghost", image: "images/magdalena-bay/ghost.jpeg" },
      { name: "Money Lover", image: "images/magdalena-bay/money-lover.jpeg" },
      { name: "Only If You Want It", image: "images/magdalena-bay/only-if-you-want-it.jpeg" },
      { name: "Mine", image: "images/magdalena-bay/mine.jpeg" },
      { name: "Venice", image: "images/magdalena-bay/venice.jpeg" },
      { name: "Good Intentions", image: "images/magdalena-bay/good-intentions.jpeg" },
      { name: "Killshot", image: "images/magdalena-bay/killshot.jpeg" },
      { name: "Oh Hell", image: "images/magdalena-bay/oh-hell.jpeg" },
      { name: "How to Get Physical", image: "images/magdalena-bay/how-to-get-physical.jpeg" },
      { name: "Airplane", image: "images/magdalena-bay/airplane.jpeg" },
      { name: "Live 4ever", image: "images/magdalena-bay/live-4ever.jpeg" },
      { name: "Woww", image: "images/magdalena-bay/woww.jpeg" },
      { name: "Hideaway", image: "images/magdalena-bay/hideaway.jpeg" },
      { name: "Sky2Fall", image: "images/magdalena-bay/sky2fall.jpeg" },
      { name: "Push Me Away", image: "images/magdalena-bay/push-me-away.jpeg" },
      { name: "Chaeri", image: "images/magdalena-bay/chaeri.jpeg" },
      { name: "Secrets (Your Fire)", image: "images/magdalena-bay/secrets-your-fire.jpeg" },
      { name: "You Lose!", image: "images/magdalena-bay/you-lose.jpeg" },
      { name: "Death & Romance", image: "images/magdalena-bay/death-romance.jpeg" },
      { name: "Image", image: "images/magdalena-bay/image.jpeg" },
      { name: "Tunnel Vision", image: "images/magdalena-bay/tunnel-vision.jpeg" },
      
      // mini mix, vol. 1
      { name: "Intro", image: "images/magdalena-bay/mini-mix-vol-1.jpeg" },
      { name: "Afternoon in Heaven", image: "images/magdalena-bay/mini-mix-vol-1.jpeg" },
      { name: "El Dorado", image: "images/magdalena-bay/mini-mix-vol-1.jpeg" },
      { name: "Turning Off the Rain", image: "images/magdalena-bay/mini-mix-vol-1.jpeg" },
      { name: "U Wanna Dance?", image: "images/magdalena-bay/mini-mix-vol-1.jpeg" },
      { name: "Nothing Baby", image: "images/magdalena-bay/mini-mix-vol-1.jpeg" },
      
      // A Little Rhythm and a Wicked Feeling
      { name: "Story", image: "images/magdalena-bay/a-little-rhythm-and-a-wicked-feeling.jpeg" },
      { name: "Stop & Go", image: "images/magdalena-bay/a-little-rhythm-and-a-wicked-feeling.jpeg" },
      
      // mini mix, vol. 2
      { name: "I Don’t Want to Cry Anymore", image: "images/magdalena-bay/mini-mix-vol-2.jpeg" },
      { name: "Body", image: "images/magdalena-bay/mini-mix-vol-2.jpeg" },
      { name: "Sky2Fall (Reprise)", image: "images/magdalena-bay/mini-mix-vol-2.jpeg" },
      
      // Mercurial World
      { name: "The End", image: "images/magdalena-bay/mercurial-world.jpeg" },
      { name: "Mercurial World", image: "images/magdalena-bay/mercurial-world.jpeg" },
      { name: "Dawning of the Season", image: "images/magdalena-bay/mercurial-world.jpeg" },
      { name: "Something for 2", image: "images/magdalena-bay/mercurial-world.jpeg" },
      { name: "Halfway", image: "images/magdalena-bay/mercurial-world.jpeg" },
      { name: "Hysterical Us", image: "images/magdalena-bay/mercurial-world.jpeg" },
      { name: "Prophecy", image: "images/magdalena-bay/mercurial-world.jpeg" },
      { name: "Follow the Leader", image: "images/magdalena-bay/mercurial-world.jpeg" },
      { name: "Domino", image: "images/magdalena-bay/mercurial-world.jpeg" },
      { name: "Dreamcatching", image: "images/magdalena-bay/mercurial-world.jpeg" },
      { name: "The Beginning", image: "images/magdalena-bay/mercurial-world.jpeg" },
      
      // Mercurial World (Deluxe)
      { name: "secret 1", image: "images/magdalena-bay/mercurial-world-deluxe.jpeg" },
      { name: "Unconditional", image: "images/magdalena-bay/mercurial-world-deluxe.jpeg" },
      { name: "secrets 2-9: medley", image: "images/magdalena-bay/mercurial-world-deluxe.jpeg" },
      { name: "secret 10", image: "images/magdalena-bay/mercurial-world-deluxe.jpeg" },
      { name: "secret 11", image: "images/magdalena-bay/mercurial-world-deluxe.jpeg" },
      { name: "secret 12", image: "images/magdalena-bay/mercurial-world-deluxe.jpeg" },
      { name: "All You Do", image: "images/magdalena-bay/mercurial-world-deluxe.jpeg" },
      { name: "secret 13", image: "images/magdalena-bay/mercurial-world-deluxe.jpeg" },
      { name: "secret 14", image: "images/magdalena-bay/mercurial-world-deluxe.jpeg" },
      { name: "secret 15", image: "images/magdalena-bay/mercurial-world-deluxe.jpeg" },
      
      // mini mix, vol. 3
      { name: "Slug Song", image: "images/magdalena-bay/mini-mix-vol-3.jpeg" },
      { name: "EXO", image: "images/magdalena-bay/mini-mix-vol-3.jpeg" },
      { name: "2 Wheel Drive", image: "images/magdalena-bay/mini-mix-vol-3.jpeg" },
      { name: "Top Dog", image: "images/magdalena-bay/mini-mix-vol-3.jpeg" },
      { name: "Tonguetwister", image: "images/magdalena-bay/mini-mix-vol-3.jpeg" },
      { name: "Wandering Eyes", image: "images/magdalena-bay/mini-mix-vol-3.jpeg" },
      { name: "Slug Song (Reprise)", image: "images/magdalena-bay/mini-mix-vol-3.jpeg" },
      
      // Imaginal Disk
      { name: "She Looked Like Me!", image: "images/magdalena-bay/imaginal-disk.jpeg" },
      { name: "Killing Time", image: "images/magdalena-bay/imaginal-disk.jpeg" },
      { name: "True Blue Interlude", image: "images/magdalena-bay/imaginal-disk.jpeg" },
      { name: "Fear, Sex", image: "images/magdalena-bay/imaginal-disk.jpeg" },
      { name: "Vampire in the Corner", image: "images/magdalena-bay/imaginal-disk.jpeg" },
      { name: "Watching T.V.", image: "images/magdalena-bay/imaginal-disk.jpeg" },
      { name: "Love is Everywhere", image: "images/magdalena-bay/imaginal-disk.jpeg" },
      { name: "Feeling DiskInserted?", image: "images/magdalena-bay/imaginal-disk.jpeg" },
      { name: "That’s My Floor", image: "images/magdalena-bay/imaginal-disk.jpeg" },
      { name: "Cry for Me", image: "images/magdalena-bay/imaginal-disk.jpeg" },
      { name: "Angel on a Satellite", image: "images/magdalena-bay/imaginal-disk.jpeg" },
      { name: "The Ballad of Matt & Mica", image: "images/magdalena-bay/imaginal-disk.jpeg" },
      
      // Nice Day: A Collection of Singles
      { name: "Second Sleep", image: "images/magdalena-bay/second-sleep.jpeg" },
      { name: "Star Eyes", image: "images/magdalena-bay/star-eyes.jpeg" },
      { name: "Human Happens", image: "images/magdalena-bay/human-happens.jpeg" },
      { name: "Paint Me a Picture", image: "images/magdalena-bay/paint-me-a-picture.jpeg" },
      { name: "Unoriginal", image: "images/magdalena-bay/unoriginal.jpeg" },
      { name: "Black-Eyed Susan Climb", image: "images/magdalena-bay/black-eyed-susan-climb.jpeg" },
      { name: "This is the World (I Made It for You)", image: "images/magdalena-bay/this-is-the-world-i-made-it-for-you.jpeg" },
      { name: "Nice Day", image: "images/magdalena-bay/nice-day.jpeg" }
    ]
  },

  niños_del_cerro: {
    title: "Niños del Cerro Song Sorter",
    logo: "images/ninos-del-cerro-logo.png",
    songs: [
      
      // Singles
      { name: "La Pajarería", image: "images/ninos-del-cerro/la-pajareria.jpeg" },
      { name: "Días Frescos", image: "images/ninos-del-cerro/la-pajareria.jpeg" },
      { name: "José de los Rayos", image: "images/ninos-del-cerro/jose-de-los-rayos.jpeg" },
      { name: "Contigo", image: "images/ninos-del-cerro/contigo.jpeg" },
      { name: "Flores, Labios, Dedos", image: "images/ninos-del-cerro/flores-labios-dedos.jpeg" },
      { name: "El Sueño Pesa", image: "images/ninos-del-cerro/el-sueno-pesa.jpeg" },
      { name: "Durmiendo en el Parque", image: "images/ninos-del-cerro/durmiendo-en-el-parque.jpeg" },
      { name: "Tembló", image: "images/ninos-del-cerro/temblo.jpeg" },
      { name: "Canto al Mediodía", image: "images/ninos-del-cerro/canto-al-mediodia.jpeg" },
      { name: "Seis de Enero", image: "images/ninos-del-cerro/seis-de-enero.jpeg" },    

      // Nonato Coo
      { name: "Nonato Coo", image: "images/ninos-del-cerro/nonato-coo.jpeg" },
      { name: "Ropa de Verano", image: "images/ninos-del-cerro/nonato-coo.jpeg" },
      { name: "Viste las Palabras", image: "images/ninos-del-cerro/nonato-coo.jpeg" },
      { name: "Capital", image: "images/ninos-del-cerro/nonato-coo.jpeg" },
      { name: "Nos Vemos Cómodos en Este Frío", image: "images/ninos-del-cerro/nonato-coo.jpeg" },
      { name: "Videojuego", image: "images/ninos-del-cerro/nonato-coo.jpeg" },
      { name: "Las Palmeras", image: "images/ninos-del-cerro/nonato-coo.jpeg" },

      // Lance
      { name: "Sufre", image: "images/ninos-del-cerro/lance.jpeg" },
      { name: "Las Distancias", image: "images/ninos-del-cerro/lance.jpeg" },
      { name: "Lance", image: "images/ninos-del-cerro/lance.jpeg" },
      { name: "El Susto y el Miedo", image: "images/ninos-del-cerro/lance.jpeg" },
      { name: "Javier y los Vientos", image: "images/ninos-del-cerro/lance.jpeg" },
      { name: "Melisa / Toronjil", image: "images/ninos-del-cerro/lance.jpeg" },

      // Cuauhtémoc
      { name: "Cuauhtémoc", image: "images/ninos-del-cerro/cuauhtemoc.jpeg" },
      { name: "El Sol en los Ojos", image: "images/ninos-del-cerro/cuauhtemoc.jpeg" },
      { name: "Sísifo", image: "images/ninos-del-cerro/cuauhtemoc.jpeg" },

      // Suave Pendiente
      { name: "Povidona", image: "images/ninos-del-cerro/suave-pendiente.jpeg" },
      { name: "Tentempié", image: "images/ninos-del-cerro/suave-pendiente.jpeg" },
      { name: "Miel", image: "images/ninos-del-cerro/suave-pendiente.jpeg" },
      { name: "Mi Modesta Ceguera Personal", image: "images/ninos-del-cerro/suave-pendiente.jpeg" },
      { name: "Sulamita", image: "images/ninos-del-cerro/suave-pendiente.jpeg" },
      { name: "Tamarugal", image: "images/ninos-del-cerro/suave-pendiente.jpeg" },
      { name: "Frío, Frío", image: "images/ninos-del-cerro/suave-pendiente.jpeg" },
      { name: "Esta Enorme Distancia", image: "images/ninos-del-cerro/suave-pendiente.jpeg" },
      { name: "Daniel", image: "images/ninos-del-cerro/suave-pendiente.jpeg" },
      { name: "Vía Contemplativa", image: "images/ninos-del-cerro/suave-pendiente.jpeg" },
      { name: "El Dulce en la Piel de Tu Nombre", image: "images/ninos-del-cerro/suave-pendiente.jpeg" },
      { name: "Mamire", image: "images/ninos-del-cerro/suave-pendiente.jpeg" },
      { name: "La Sombra Quieta", image: "images/ninos-del-cerro/suave-pendiente.jpeg" },
      { name: "Le Entrego Mi Alma al Vacío Como Una Ofrenda de Amor", image: "images/ninos-del-cerro/suave-pendiente.jpeg" },
      { name: "Noche Oscura", image: "images/ninos-del-cerro/suave-pendiente.jpeg" },

      // Alma Tadema
      { name: "Príapo (o Sísifo otra vez)", image: "images/ninos-del-cerro/alma-tadema.jpeg" },
      { name: "Pieza Oscura (Para Martín)", image: "images/ninos-del-cerro/alma-tadema.jpeg" },
      { name: "Aluvión", image: "images/ninos-del-cerro/alma-tadema.jpeg" },
      { name: "Un Río", image: "images/ninos-del-cerro/alma-tadema.jpeg" },
      { name: "Buen Dormir", image: "images/ninos-del-cerro/alma-tadema.jpeg" },
      { name: "Vinca", image: "images/ninos-del-cerro/alma-tadema.jpeg" },
      { name: "Narciso Negro", image: "images/ninos-del-cerro/alma-tadema.jpeg" },
      { name: "Cada Cosa en Su Lugar", image: "images/ninos-del-cerro/alma-tadema.jpeg" },
      { name: "Guardo Un Tesoro", image: "images/ninos-del-cerro/alma-tadema.jpeg" }
    ]
  }
};
