const ARTISTS = {
  magdalena_bay: {
    title: "Magdalena Bay Song Sorter",
    logo: "images/magdalena-bay/magdalena-bay-logo.png",
    songs: [
      
      // Singles
      { name: "Voc Pop", image: "images/magdalena-bay/voc-pop.jpeg" },
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

      // daypop
      { name: "Head Over Heels", image: "images/magdalena-bay/head-over-heels.jpeg" },
      { name: "#wastehistime", image: "images/magdalena-bay/wastehistime.jpeg" },
      { name: "Set Me Off", image: "images/magdalena-bay/set-me-off.jpeg" },
      { name: "Waking Up", image: "images/magdalena-bay/waking-up.jpeg" },

      // nightpop
      { name: "Neon", image: "images/magdalena-bay/neon.jpeg" },
      { name: "Redbone", image: "images/magdalena-bay/redbone.jpeg" },
      { name: "Drive Alone", image: "images/magdalena-bay/drive-alone.jpeg" },
      { name: "Move Slow", image: "images/magdalena-bay/move-slow.jpeg" },

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
      { name: "Hysterical Us", image: "images/magdalena-bay/mercurial-world.jpeg" },
      { name: "The End", image: "images/magdalena-bay/mercurial-world.jpeg" },
      { name: "Mercurial World", image: "images/magdalena-bay/mercurial-world.jpeg" },
      { name: "Dawning of the Season", image: "images/magdalena-bay/mercurial-world.jpeg" },
      { name: "Something for 2", image: "images/magdalena-bay/mercurial-world.jpeg" },
      { name: "Halfway", image: "images/magdalena-bay/mercurial-world.jpeg" },
      { name: "Prophecy", image: "images/magdalena-bay/mercurial-world.jpeg" },
      { name: "Follow the Leader", image: "images/magdalena-bay/mercurial-world.jpeg" },
      { name: "Domino", image: "images/magdalena-bay/mercurial-world.jpeg" },
      { name: "Dreamcatching", image: "images/magdalena-bay/mercurial-world.jpeg" },
      { name: "The Beginning", image: "images/magdalena-bay/mercurial-world.jpeg" },
      
      // Mercurial World (Deluxe)
      { name: "All You Do", image: "images/magdalena-bay/mercurial-world-deluxe.jpeg" },
      { name: "Unconditional", image: "images/magdalena-bay/mercurial-world-deluxe.jpeg" },
      { name: "secret 1", image: "images/magdalena-bay/mercurial-world-deluxe.jpeg" },
      { name: "secrets 2-9: medley", image: "images/magdalena-bay/mercurial-world-deluxe.jpeg" },
      { name: "secret 10", image: "images/magdalena-bay/mercurial-world-deluxe.jpeg" },
      { name: "secret 11", image: "images/magdalena-bay/mercurial-world-deluxe.jpeg" },
      { name: "secret 12", image: "images/magdalena-bay/mercurial-world-deluxe.jpeg" },
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

  ninos_del_cerro: {
    title: "Niños del Cerro Song Sorter",
    logo: "images/ninos-del-cerro/ninos-del-cerro-logo.png",
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
  },
  
  kero_kero_bonito: {
    title: "Kero Kero Bonito Song Sorter",
    logo: "images/kero-kero-bonito/kero-kero-bonito-logo.png",
    songs: [
      
      // Singles
      { name: "Weapons Grade", image: "images/kero-kero-bonito/weapons-grade.jpeg" },
      { name: "Coursework Story", image: "images/kero-kero-bonito/coursework-story.jpeg" },
      { name: "(Getting To) The Top", image: "images/kero-kero-bonito/getting-to-the-top.jpeg" },
      { name: "Ms. World", image: "images/kero-kero-bonito/ms-world.jpeg" },
      { name: "Laser Quest", image: "images/kero-kero-bonito/laser-quest.jpeg" },
      { name: "Fortune Teller", image: "images/kero-kero-bonito/fortune-teller.jpeg" },
      { name: "Wherever You Go", image: "images/kero-kero-bonito/wherever-you-go.jpeg" },
      { name: "Why Aren’t You Dancing?", image: "images/kero-kero-bonito/why-arent-you-dancing.jpeg" },
      { name: "Astronomy for Two", image: "images/kero-kero-bonito/why-arent-you-dancing.jpeg" },
      { name: "Bonito Shopping", image: "images/kero-kero-bonito/bonito-shopping.jpeg" },
      { name: "Fans (Are So Cool)", image: "images/kero-kero-bonito/fans-are-so-cool.jpeg" },
      { name: "Flamingo", image: "images/kero-kero-bonito/flamingo.jpeg" },
      { name: "Build It Up", image: "images/kero-kero-bonito/build-it-up.jpeg" },
      { name: "Picture This", image: "images/kero-kero-bonito/picture-this.jpeg" },
      { name: "Chicken", image: "images/kero-kero-bonito/chicken.jpeg" },
      { name: "Lipslap", image: "images/kero-kero-bonito/lipslap.jpeg" },
      { name: "Break", image: "images/kero-kero-bonito/break.jpeg" },
      { name: "Graduation", image: "images/kero-kero-bonito/graduation.jpeg" },
      { name: "Trampoline", image: "images/kero-kero-bonito/trampoline.jpeg" },
      { name: "Forever Summer Holiday", image: "images/kero-kero-bonito/forever-summer-holiday.jpeg" },
      { name: "Only Acting", image: "images/kero-kero-bonito/only-acting.jpeg" },
      { name: "Time Today", image: "images/kero-kero-bonito/time-today.jpeg" },
      { name: "Make Believe", image: "images/kero-kero-bonito/make-believe.jpeg" },
      { name: "World Tour 2018", image: "images/kero-kero-bonito/make-believe.jpeg" },
      { name: "Swimming", image: "images/kero-kero-bonito/swimming-the-open-road.jpeg" },
      { name: "The Open Road", image: "images/kero-kero-bonito/swimming-the-open-road.jpeg" },
      { name: "When the Fires Come", image: "images/kero-kero-bonito/when-the-fires-come.jpeg" },
      { name: "It’s Bugsnax!", image: "images/kero-kero-bonito/its-bugsnax.jpeg" },
      { name: "The Princess and the Clock", image: "images/kero-kero-bonito/the-princess-and-the-clock.jpeg" },
      { name: "The Sneaker Dance", image: "images/kero-kero-bonito/the-sneaker-dance.jpeg" },

      // Intro Bonito
      { name: "Bonito Intro", image: "images/kero-kero-bonito/bonito-intro.jpeg" },
      { name: "Intro Bonito", image: "images/kero-kero-bonito/intro-bonito.jpeg" },
      { name: "Sick Beat", image: "images/kero-kero-bonito/sick-beat.jpeg" },
      { name: "My Party", image: "images/kero-kero-bonito/my-party.jpeg" },
      { name: "Cat vs. Dog - English Version", image: "images/kero-kero-bonito/cat-vs-dog-english-version.jpeg" },
      { name: "Kero Kero Bonito", image: "images/kero-kero-bonito/kero-kero-bonito.jpeg" },
      { name: "Babies (Are So Strange)", image: "images/kero-kero-bonito/babies-are-so-strange.jpeg" },
      { name: "Bonito Jingle", image: "images/kero-kero-bonito/bonito-jingle.jpeg" },
      { name: "Homework", image: "images/kero-kero-bonito/homework.jpeg" },
      { name: "Pocket Crocodile", image: "images/kero-kero-bonito/pocket-crocodile.jpeg" },
      { name: "Cat vs. Dog - Japanese Version", image: "images/kero-kero-bonito/cat-vs-dog-japanese-version.jpeg" },
      { name: "Park Song", image: "images/kero-kero-bonito/park-song.jpeg" },
      { name: "Let’s Go to the Forest", image: "images/kero-kero-bonito/lets-go-to-the-forest.jpeg" },
      { name: "Small Town", image: "images/kero-kero-bonito/small-town.jpeg" },
      { name: "I’d Rather Sleep", image: "images/kero-kero-bonito/id-rather-sleep.jpeg" },

      // Bonito Generation
      { name: "Waking Up", image: "images/kero-kero-bonito/waking-up.jpeg" },
      { name: "Heard a Song", image: "images/kero-kero-bonito/heard-a-song.jpeg" },
      { name: "Fish Bowl", image: "images/kero-kero-bonito/fish-bowl.jpeg" },
      { name: "Big City", image: "images/kero-kero-bonito/big-city.jpeg" },
      { name: "Try Me", image: "images/kero-kero-bonito/try-me.jpeg" },
      { name: "Paintbrush", image: "images/kero-kero-bonito/paintbrush.jpeg" },
      { name: "Hey Parents", image: "images/kero-kero-bonito/hey-parents.jpeg" },
      
      // TOTEP
      { name: "The One True Path", image: "images/kero-kero-bonito/totep.jpeg" },
      { name: "You Know How It Is", image: "images/kero-kero-bonito/totep.jpeg" },
      { name: "Cinema", image: "images/kero-kero-bonito/totep.jpeg" },

      // Time 'n' Place
      { name: "Outside", image: "images/kero-kero-bonito/time-n-place.jpeg" },
      { name: "Flyway", image: "images/kero-kero-bonito/time-n-place.jpeg" },
      { name: "Dump", image: "images/kero-kero-bonito/time-n-place.jpeg" },
      { name: "Dear Future Self", image: "images/kero-kero-bonito/time-n-place.jpeg" },
      { name: "Visiting Hours", image: "images/kero-kero-bonito/time-n-place.jpeg" },
      { name: "If I’d Known", image: "images/kero-kero-bonito/time-n-place.jpeg" },
      { name: "Sometimes", image: "images/kero-kero-bonito/time-n-place.jpeg" },
      { name: "Rest Stop", image: "images/kero-kero-bonito/time-n-place.jpeg" },

      // Civilisation I
      { name: "Battle Lines", image: "images/kero-kero-bonito/civilisation-i.jpeg" },
      { name: "The River", image: "images/kero-kero-bonito/civilisation-i.jpeg" },

      // Civilisation II
      { name: "21/04/20", image: "images/kero-kero-bonito/civilisation-ii.jpeg" },
      { name: "Well Rested", image: "images/kero-kero-bonito/civilisation-ii.jpeg" },

      // Civilisation
      { name: "Gateway", image: "images/kero-kero-bonito/civilisation.jpeg" }
    ]
  },
  
  george_clanton: {
    title: "George Clanton Song Sorter",
    logo: "images/george-clanton/george-clanton-logo.png",
    songs: [
      
      // Singles
      { name: "Never Late Again", image: "images/george-clanton/never-late-again.jpeg" },
      { name: "Wonder Gently", image: "images/george-clanton/wonder-gently.jpeg" },
      { name: "Make It Forever", image: "images/george-clanton/make-it-forever.jpeg" },
      { name: "Dumb", image: "images/george-clanton/dumb.jpeg" },
      { name: "Crash Pad", image: "images/george-clanton/crash-pad-king-for-a-day.jpeg" },
      { name: "King for a Day", image: "images/george-clanton/crash-pad-king-for-a-day.jpeg" },
      { name: "Out of the Blue", image: "images/george-clanton/under-your-window-out-of-the-blue.jpeg" },
      { name: "Under Your Window", image: "images/george-clanton/under-your-window-out-of-the-blue.jpeg" },
      { name: "Aurora Summer", image: "images/george-clanton/aurora-summer.jpeg" },
      { name: "George & Nick (Guitar Arpeggio Jam)", image: "images/george-clanton/aurora-summer.jpeg" },
      { name: "I Been Young", image: "images/george-clanton/i-been-young.jpeg" },
      { name: "Justify Your Life", image: "images/george-clanton/justify-your-life.jpeg" },
      { name: "Vapor King / SubReal", image: "images/george-clanton/vapor-king-subreal.jpeg" },
      { name: "Summer 2000 Baby", image: "images/george-clanton/summer-2000-baby-take-a-trip.jpeg" },
      { name: "Take a Trip", image: "images/george-clanton/summer-2000-baby-take-a-trip.jpeg" },

      // 100% Electronica
      { name: "Keep a Secret", image: "images/george-clanton/100-electronica.jpeg" },
      { name: "Did I Flounder?", image: "images/george-clanton/100-electronica.jpeg" },
      { name: "Purity", image: "images/george-clanton/100-electronica.jpeg" },
      { name: "Bleed", image: "images/george-clanton/100-electronica.jpeg" },
      { name: "Warmspot", image: "images/george-clanton/100-electronica.jpeg" },
      { name: "It Makes the Babies Want to Cry", image: "images/george-clanton/wonder-gently.jpeg" },
      { name: "Innocence", image: "images/george-clanton/100-electronica.jpeg" },
      { name: "Kill You in Bed", image: "images/george-clanton/100-electronica.jpeg" },

      // Slide
      { name: "Livin’ Loose", image: "images/george-clanton/slide.jpeg" },
      { name: "Tie Me Down", image: "images/george-clanton/slide.jpeg" },
      { name: "Blast Off", image: "images/george-clanton/slide.jpeg" },
      { name: "Slide", image: "images/george-clanton/slide.jpeg" },
      { name: "Monster", image: "images/george-clanton/slide.jpeg" },
      { name: "You Lost Me There", image: "images/george-clanton/slide.jpeg" },
      { name: "Encore", image: "images/george-clanton/slide.jpeg" },
      { name: "Walk Slowly", image: "images/george-clanton/slide.jpeg" },
      
      // George Clanton and Nick Hexum
      { name: "Driving in My Car", image: "images/george-clanton/george-clanton-and-nick-hexum.jpeg" },
      { name: "Topanga State of Mind", image: "images/george-clanton/george-clanton-and-nick-hexum.jpeg" },
      { name: "Time of Wandering (Prelude)", image: "images/george-clanton/george-clanton-and-nick-hexum.jpeg" },
      { name: "Time of Wandering", image: "images/george-clanton/george-clanton-and-nick-hexum.jpeg" },
      { name: "Shouldn’ta Done That", image: "images/george-clanton/george-clanton-and-nick-hexum.jpeg" },

       // 100% Electronica (Deluxe)
      { name: "Make You Cry", image: "images/george-clanton/100-electronica-deluxe.jpeg" },
      { name: "Persuasion", image: "images/george-clanton/100-electronica-deluxe.jpeg" },
      { name: "Notice Me", image: "images/george-clanton/100-electronica-deluxe.jpeg" },

      // Ooh Rap I Ya
      { name: "Everything I Want", image: "images/george-clanton/ooh-rap-i-ya.jpeg" },
      { name: "Punching Down", image: "images/george-clanton/ooh-rap-i-ya.jpeg" },
      { name: "You Hold the Key and I Found It", image: "images/george-clanton/ooh-rap-i-ya.jpeg" },
      { name: "F.U.M.L.", image: "images/george-clanton/ooh-rap-i-ya.jpeg" },
      { name: "Ooh Rap I Ya", image: "images/george-clanton/ooh-rap-i-ya.jpeg" },
      { name: "For You, I Will", image: "images/george-clanton/ooh-rap-i-ya.jpeg" },
      
      // Fauxllennium
      { name: "Everything Blue", image: "images/george-clanton/fauxllennium.jpeg" },
      { name: "Fauxllennium", image: "images/george-clanton/fauxllennium.jpeg" },
      { name: "Butterflies", image: "images/george-clanton/fauxllennium.jpeg" },
      { name: "The Sweet Life", image: "images/george-clanton/fauxllennium.jpeg" },
      { name: "Yesterday’s World", image: "images/george-clanton/fauxllennium.jpeg" },

      // Fauxllennium (Deluxe)
      { name: "Monday, Monday", image: "images/george-clanton/fauxllennium-deluxe.jpeg" },
      { name: "Yr Not Invited", image: "images/george-clanton/fauxllennium-deluxe.jpeg" },
      { name: "Poison Ooze", image: "images/george-clanton/fauxllennium-deluxe.jpeg" },
      { name: "Ketamine Girl", image: "images/george-clanton/fauxllennium-deluxe.jpeg" },
      { name: "Messy Hair", image: "images/george-clanton/fauxllennium-deluxe.jpeg" },
      { name: "I’m Not Real", image: "images/george-clanton/fauxllennium-deluxe.jpeg" }
    ]
  },
  
  pinkpantheress: {
    title: "PinkPantheress Song Sorter",
    logo: "images/pinkpantheress/pinkpantheress-logo.png",
    songs: [
      
      // Singles
      { name: "Just a waste", image: "images/pinkpantheress/just-a-waste.jpeg" },
      { name: "Met You", image: "images/pinkpantheress/met-you.jpeg" },
      { name: "Pain", image: "images/pinkpantheress/pain.jpeg" },
      { name: "Attracted to You", image: "images/pinkpantheress/attracted-to-you.jpeg" },
      { name: "Time with me", image: "images/pinkpantheress/time-with-me.jpeg" },
      { name: "Break It Off", image: "images/pinkpantheress/break-it-off.jpeg" },
      { name: "Noticed I cried", image: "images/pinkpantheress/noticed-i-cried.jpeg" },
      { name: "Last valentines", image: "images/pinkpantheress/last-valentines.jpeg" },
      { name: "Passion", image: "images/pinkpantheress/passion.jpeg" },
      { name: "Just for me", image: "images/pinkpantheress/just-for-me.jpeg" },
      { name: "Where you are", image: "images/pinkpantheress/where-you-are.jpeg" },
      { name: "Picture in my mind", image: "images/pinkpantheress/picture-in-my-mind.jpeg" },
      { name: "Do you miss me?", image: "images/pinkpantheress/do-you-miss-me.jpeg" },
      { name: "Boy’s a liar", image: "images/pinkpantheress/boys-a-liar.jpeg" },
      { name: "Angel", image: "images/pinkpantheress/angel.jpeg" },
      { name: "Turn Your Phone Off", image: "images/pinkpantheress/turn-your-phone-off.jpeg" },
      { name: "Mosquito", image: "images/pinkpantheress/mosquito.jpeg" },
      { name: "Turn it up", image: "images/pinkpantheress/turn-it-up.jpeg" },
      { name: "Tonight", image: "images/pinkpantheress/tonight.jpeg" },
      { name: "Stateside", image: "images/pinkpantheress/stateside.jpeg" },
      { name: "Illegal", image: "images/pinkpantheress/illegal.jpeg" },
      { name: "Close to you", image: "images/pinkpantheress/close-to-you.jpeg" },

      // to hell with it
      { name: "I must apologise", image: "images/pinkpantheress/to-hell-with-it.jpeg" },
      { name: "Reason", image: "images/pinkpantheress/to-hell-with-it.jpeg" },
      { name: "All my friends know", image: "images/pinkpantheress/to-hell-with-it.jpeg" },
      { name: "Nineteen", image: "images/pinkpantheress/to-hell-with-it.jpeg" },

      // Take me home
      { name: "Take me home", image: "images/pinkpantheress/take-me-home.jpeg" },

      // Heaven knows
      { name: "Another life", image: "images/pinkpantheress/heaven-knows.jpeg" },
      { name: "True romance", image: "images/pinkpantheress/heaven-knows.jpeg" },
      { name: "The aisle", image: "images/pinkpantheress/heaven-knows.jpeg" },
      { name: "Nice to meet you", image: "images/pinkpantheress/heaven-knows.jpeg" },
      { name: "Bury me", image: "images/pinkpantheress/heaven-knows.jpeg" },
      { name: "Internet baby - interlude", image: "images/pinkpantheress/heaven-knows.jpeg" },
      { name: "Ophelia", image: "images/pinkpantheress/heaven-knows.jpeg" },
      { name: "Feel complete", image: "images/pinkpantheress/heaven-knows.jpeg" },
      { name: "Blue", image: "images/pinkpantheress/heaven-knows.jpeg" },
      { name: "Feelings", image: "images/pinkpantheress/heaven-knows.jpeg" },
      { name: "Capable of love", image: "images/pinkpantheress/heaven-knows.jpeg" },

      // Fancy That
      { name: "Girl Like Me", image: "images/pinkpantheress/fancy-that.jpeg" },
      { name: "Stars", image: "images/pinkpantheress/fancy-that.jpeg" },
      { name: "Intermission", image: "images/pinkpantheress/fancy-that.jpeg" },
      { name: "Noises", image: "images/pinkpantheress/fancy-that.jpeg" },
      { name: "Nice to Know You", image: "images/pinkpantheress/fancy-that.jpeg" },
      { name: "Romeo", image: "images/pinkpantheress/fancy-that.jpeg" }
    ]
  },

  gorillaz: {
    title: "Gorillaz Song Sorter",
    logo: "images/gorillaz/gorillaz-logo.png",
    songs: [

      // Gorillaz
      { name: "Clint Eastwood", image: "images/gorillaz/clint-eastwood.jpeg" },
      { name: "Re-Hash", image: "images/gorillaz/gorillaz.jpeg" },
      { name: "5/4", image: "images/gorillaz/gorillaz.jpeg" },
      { name: "Tomorrow Comes Today", image: "images/gorillaz/tomorrow-comes-today-1.jpeg" },
      { name: "New Genius (Brother)", image: "images/gorillaz/gorillaz.jpeg" },
      { name: "Man Research (Clapper)", image: "images/gorillaz/gorillaz.jpeg" },
      { name: "Punk", image: "images/gorillaz/gorillaz.jpeg" },
      { name: "Sound Check (Gravity)", image: "images/gorillaz/gorillaz.jpeg" },
      { name: "Double Bass", image: "images/gorillaz/gorillaz.jpeg" },
      { name: "Rock the House", image: "images/gorillaz/rock-the-house.jpeg" },
      { name: "19-2000", image: "images/gorillaz/19-2000.jpeg" },
      { name: "Latin Simone (Qué Pasa Contigo)", image: "images/gorillaz/gorillaz.jpeg" },
      { name: "Starshine", image: "images/gorillaz/gorillaz.jpeg" },
      { name: "Slow Country", image: "images/gorillaz/gorillaz.jpeg" },
      { name: "M1 A1", image: "images/gorillaz/gorillaz.jpeg" },

      // G-Sides
      { name: "Dracula", image: "images/gorillaz/g-sides.jpeg" },
      { name: "The Sounder", image: "images/gorillaz/g-sides.jpeg" },
      { name: "Faust", image: "images/gorillaz/g-sides.jpeg" },
      { name: "Ghost Train", image: "images/gorillaz/g-sides.jpeg" },
      { name: "Hip Albatross", image: "images/gorillaz/g-sides.jpeg" },
      { name: "Left Hand Suzuki Method", image: "images/gorillaz/g-sides.jpeg" },
      { name: "12D3", image: "images/gorillaz/g-sides.jpeg" },
      { name: "911", image: "images/gorillaz/911.jpeg" },
      { name: "Film Music", image: "images/gorillaz/tomorrow-comes-today-2.jpeg" },

      // Demon Days
      { name: "Feel Good Inc.", image: "images/gorillaz/feel-good-inc.jpeg" },
      { name: "Intro", image: "images/gorillaz/demon-days.jpeg" },
      { name: "Last Living Souls", image: "images/gorillaz/demon-days.jpeg" },
      { name: "Kids With Guns", image: "images/gorillaz/kids-with-guns.jpeg" },
      { name: "O Green World", image: "images/gorillaz/demon-days.jpeg" },
      { name: "Dirty Harry", image: "images/gorillaz/dirty-harry.jpeg" },
      { name: "El Mañana", image: "images/gorillaz/el-manana.jpeg" },
      { name: "Every Planet We Reach is Dead", image: "images/gorillaz/demon-days.jpeg" },
      { name: "November Has Come", image: "images/gorillaz/demon-days.jpeg" },
      { name: "All Alone", image: "images/gorillaz/demon-days.jpeg" },
      { name: "White Light", image: "images/gorillaz/demon-days.jpeg" },
      { name: "DARE", image: "images/gorillaz/dare.jpeg" },
      { name: "Fire Coming Out of the Monkey’s Head", image: "images/gorillaz/demon-days.jpeg" },
      { name: "Don’t Get Lost in Heaven", image: "images/gorillaz/demon-days.jpeg" },
      { name: "Demon Days", image: "images/gorillaz/demon-days.jpeg" },

      // D-Sides
      { name: "Samba at 13", image: "images/gorillaz/samba-at-13.jpeg" },
      { name: "68 State", image: "images/gorillaz/d-sides-1.jpeg" },
      { name: "People", image: "images/gorillaz/d-sides-1.jpeg" },
      { name: "Hongkongaton", image: "images/gorillaz/d-sides-1.jpeg" },
      { name: "We Are Happy Landfill", image: "images/gorillaz/d-sides-1.jpeg" },
      { name: "Hong Kong", image: "images/gorillaz/d-sides-1.jpeg" },
      { name: "Highway (Under Construction)", image: "images/gorillaz/d-sides-1.jpeg" },
      { name: "Rockit", image: "images/gorillaz/d-sides-1.jpeg" },
      { name: "The Swagga", image: "images/gorillaz/d-sides-1.jpeg" },
      { name: "Bill Murray", image: "images/gorillaz/d-sides-1.jpeg" },
      { name: "Murdoc is God", image: "images/gorillaz/d-sides-1.jpeg" },
      { name: "Spitting Out the Demons", image: "images/gorillaz/d-sides-1.jpeg" },
      { name: "Stop the Dams", image: "images/gorillaz/d-sides-1.jpeg" },
      { name: "Film Trailer Music", image: "images/gorillaz/d-sides-2.jpeg" },

      // Plastic Beach
      { name: "Stylo", image: "images/gorillaz/stylo.jpeg" },
      { name: "Orchestral Intro", image: "images/gorillaz/plastic-beach-1.jpeg" },
      { name: "Welcome to the World of the Plastic Beach", image: "images/gorillaz/plastic-beach-1.jpeg" },
      { name: "White Flag", image: "images/gorillaz/white-flag.jpeg" },
      { name: "Rhinestone Eyes", image: "images/gorillaz/rhinestone-eyes.jpeg" },
      { name: "Superfast Jellyfish", image: "images/gorillaz/plastic-beach-1.jpeg" },
      { name: "Empire Ants", image: "images/gorillaz/plastic-beach-3.jpeg" },
      { name: "Glitter Freeze", image: "images/gorillaz/plastic-beach-3.jpeg" },
      { name: "Some Kind of Nature", image: "images/gorillaz/plastic-beach-3.jpeg" },
      { name: "On Melancholy Hill", image: "images/gorillaz/on-melancholy-hill.jpeg" },
      { name: "Broken", image: "images/gorillaz/plastic-beach-3.jpeg" },
      { name: "Sweepstakes", image: "images/gorillaz/plastic-beach-4.jpeg" },
      { name: "Plastic Beach", image: "images/gorillaz/plastic-beach-4.jpeg" },
      { name: "To Binge", image: "images/gorillaz/plastic-beach-4.jpeg" },
      { name: "Cloud of Unknowing", image: "images/gorillaz/plastic-beach-4.jpeg" },
      { name: "Pirate Jet", image: "images/gorillaz/plastic-beach-4.jpeg" },
      { name: "Pirate’s Progress", image: "images/gorillaz/plastic-beach-2.jpeg" },
      { name: "Three Hearts, Seven Seas, Twelve Moons", image: "images/gorillaz/plastic-beach-2.jpeg" },
      { name: "Doncamatic", image: "images/gorillaz/doncamatic.jpeg" },

      // The Fall
      { name: "Phoner to Arizona", image: "images/gorillaz/the-fall.jpeg" },
      { name: "Revolving Doors", image: "images/gorillaz/revolving-doors-amarillo.jpeg" },
      { name: "Hillbilly Man", image: "images/gorillaz/the-fall.jpeg" },
      { name: "Detroit", image: "images/gorillaz/the-fall.jpeg" },
      { name: "Shy-Town", image: "images/gorillaz/the-fall.jpeg" },
      { name: "Little Pink Plastic Bags", image: "images/gorillaz/the-fall.jpeg" },
      { name: "The Joplin Spider", image: "images/gorillaz/the-fall.jpeg" },
      { name: "The Parish of Space Dust", image: "images/gorillaz/the-fall.jpeg" },
      { name: "The Snake in Dallas", image: "images/gorillaz/the-fall.jpeg" },
      { name: "Amarillo", image: "images/gorillaz/revolving-doors-amarillo.jpeg" },
      { name: "The Speak It Mountains", image: "images/gorillaz/the-fall.jpeg" },
      { name: "Aspen Forest", image: "images/gorillaz/the-fall.jpeg" },
      { name: "Bobby in Phoenix", image: "images/gorillaz/the-fall.jpeg" },
      { name: "California & The Slipping of the Sun", image: "images/gorillaz/the-fall.jpeg" },
      { name: "Seattle Yodel", image: "images/gorillaz/the-fall.jpeg" },
      { name: "DoYaThing", image: "images/gorillaz/doyathing.jpeg" },

      // Humanz
      { name: "Saturnz Barz", image: "images/gorillaz/saturnz-barz.jpeg" },
      { name: "Ascension", image: "images/gorillaz/ascension.jpeg" },
      { name: "Andromeda", image: "images/gorillaz/andromeda.jpeg" },
      { name: "We Got the Power", image: "images/gorillaz/we-got-the-power.jpeg" },
      { name: "Let Me Out", image: "images/gorillaz/humanz-1.jpeg" },
      { name: "The Apprentice", image: "images/gorillaz/humanz-2.jpeg" },
      { name: "Intro: I Switched My Robot Off", image: "images/gorillaz/humanz-1.jpeg" },
      { name: "Strobelite", image: "images/gorillaz/humanz-1.jpeg" },
      { name: "Momentz", image: "images/gorillaz/humanz-1.jpeg" },
      { name: "Interlude: The Non-Conformist Oath", image: "images/gorillaz/humanz-1.jpeg" },
      { name: "Submission", image: "images/gorillaz/humanz-1.jpeg" },
      { name: "Charger", image: "images/gorillaz/humanz-1.jpeg" },
      { name: "Interlude: Elevator Going Up", image: "images/gorillaz/humanz-1.jpeg" },
      { name: "Busted and Blue", image: "images/gorillaz/humanz-1.jpeg" },
      { name: "Interlude: Talk Radio", image: "images/gorillaz/humanz-1.jpeg" },
      { name: "Carnival", image: "images/gorillaz/humanz-1.jpeg" },
      { name: "Interlude: Penthouse", image: "images/gorillaz/humanz-1.jpeg" },
      { name: "Sex Murder Party", image: "images/gorillaz/humanz-1.jpeg" },
      { name: "She’s My Collar", image: "images/gorillaz/humanz-1.jpeg" },
      { name: "Interlude: The Elephant", image: "images/gorillaz/humanz-1.jpeg" },
      { name: "Hallelujah Money", image: "images/gorillaz/humanz-1.jpeg" },
      { name: "Interlude: New World", image: "images/gorillaz/humanz-2.jpeg" },
      { name: "Halfway to the Halfway House", image: "images/gorillaz/humanz-2.jpeg" },
      { name: "Out of Body", image: "images/gorillaz/humanz-2.jpeg" },
      { name: "Ticker Tape", image: "images/gorillaz/humanz-2.jpeg" },
      { name: "Circle of Friendz", image: "images/gorillaz/humanz-2.jpeg" },
      { name: "Sleeping Powder", image: "images/gorillaz/andromeda.jpeg" },
      { name: "Garage Palace", image: "images/gorillaz/garage-palace.jpeg" },
      { name: "Long Beach", image: "images/gorillaz/humanz-3.jpeg" },
      { name: "Colombians", image: "images/gorillaz/humanz-3.jpeg" },
      { name: "Duetz", image: "images/gorillaz/humanz-3.jpeg" },
      { name: "Midnite Float", image: "images/gorillaz/humanz-3.jpeg" },
      { name: "Grilling With His Face", image: "images/gorillaz/humanz-3.jpeg" },
      { name: "Five Whales in a Dream", image: "images/gorillaz/humanz-3.jpeg" },
      { name: "Phoenix on the Hill", image: "images/gorillaz/humanz-3.jpeg" },
      { name: "Tranzformer", image: "images/gorillaz/humanz-3.jpeg" },

      // The Now Now
      { name: "Humility", image: "images/gorillaz/the-now-now.jpeg" },
      { name: "Lake Zurich", image: "images/gorillaz/the-now-now.jpeg" },
      { name: "Sorcererz", image: "images/gorillaz/the-now-now.jpeg" },
      { name: "Fire Flies", image: "images/gorillaz/the-now-now.jpeg" },
      { name: "Hollywood", image: "images/gorillaz/the-now-now.jpeg" },
      { name: "Tranz", image: "images/gorillaz/tranz.jpeg" },
      { name: "Kansas", image: "images/gorillaz/the-now-now.jpeg" },
      { name: "Idaho", image: "images/gorillaz/the-now-now.jpeg" },
      { name: "Magic City", image: "images/gorillaz/the-now-now.jpeg" },
      { name: "One Percent", image: "images/gorillaz/the-now-now.jpeg" },
      { name: "Souk Eye", image: "images/gorillaz/the-now-now.jpeg" },

      // Song Machine, Season One: Strange Timez
      { name: "Song Machine Theme Tune", image: "images/gorillaz/song-machine-season-one-strange-timez-1.jpeg" },
      { name: "Momentary Bliss", image: "images/gorillaz/momentary-bliss.jpeg" },
      { name: "Désolé", image: "images/gorillaz/desole.jpeg" },
      { name: "Aries", image: "images/gorillaz/aries.jpeg" },
      { name: "How Far?", image: "images/gorillaz/how-far.jpeg" },
      { name: "Friday 13th", image: "images/gorillaz/friday-13th.jpeg" },
      { name: "Pac-Man", image: "images/gorillaz/pac-man.jpeg" },
      { name: "The Pink Phantom", image: "images/gorillaz/the-pink-phantom.jpeg" },
      { name: "Strange Timez", image: "images/gorillaz/strange-timez.jpeg" },
      { name: "The Valley of the Pagans", image: "images/gorillaz/the-valley-of-the-pagans.jpeg" },
      { name: "The Lost Chord", image: "images/gorillaz/song-machine-season-one-strange-timez-1.jpeg" },
      { name: "Chalk Tablet Towers", image: "images/gorillaz/song-machine-season-one-strange-timez-1.jpeg" },
      { name: "Dead Butterflies", image: "images/gorillaz/song-machine-season-one-strange-timez-1.jpeg" },
      { name: "Opium", image: "images/gorillaz/song-machine-season-one-strange-timez-2.jpeg" },
      { name: "Simplicity", image: "images/gorillaz/song-machine-season-one-strange-timez-2.jpeg" },
      { name: "Severed Head", image: "images/gorillaz/song-machine-season-one-strange-timez-2.jpeg" },
      { name: "With Love to an Ex", image: "images/gorillaz/song-machine-season-one-strange-timez-2.jpeg" },
      { name: "MLS", image: "images/gorillaz/song-machine-season-one-strange-timez-2.jpeg" },
      { name: "Taxi Back to 80s Reykjavík", image: "images/gorillaz/song-machine-season-one-strange-timez-3.jpeg" },

      // Meanwhile
      { name: "Meanwhile", image: "images/gorillaz/meanwhile.jpeg" },
      { name: "Jimmy Jimmy", image: "images/gorillaz/meanwhile.jpeg" },
      { name: "Déjà Vu", image: "images/gorillaz/meanwhile.jpeg" },

      // Cracker Island
      { name: "Cracker Island", image: "images/gorillaz/cracker-island-1.jpeg" },
      { name: "New Gold", image: "images/gorillaz/new-gold.jpeg" },
      { name: "Baby Queen", image: "images/gorillaz/baby-queen.jpeg" },
      { name: "Skinny Ape", image: "images/gorillaz/skinny-ape.jpeg" },
      { name: "Silent Running", image: "images/gorillaz/silent-running.jpeg" },
      { name: "Oil", image: "images/gorillaz/cracker-island-2.jpeg" },
      { name: "The Tired Influencer", image: "images/gorillaz/cracker-island-2.jpeg" },
      { name: "Tarantula", image: "images/gorillaz/cracker-island-2.jpeg" },
      { name: "Tormenta", image: "images/gorillaz/cracker-island-2.jpeg" },
      { name: "Possession Island", image: "images/gorillaz/cracker-island-2.jpeg" },
      { name: "Captain Chicken", image: "images/gorillaz/cracker-island-3.jpeg" },
      { name: "Controllah", image: "images/gorillaz/cracker-island-3.jpeg" },
      { name: "Crocadillaz", image: "images/gorillaz/cracker-island-3.jpeg" },

      // The Mountain
      { name: "The Happy Dictator", image: "images/gorillaz/the-happy-dictator.jpeg" },
      { name: "The Manifesto", image: "images/gorillaz/the-manifesto.jpeg" },
      { name: "The God of Lying", image: "images/gorillaz/the-god-of-lying.jpeg" },
      { name: "Damascus", image: "images/gorillaz/damascus.jpeg" },
      { name: "The Hardest Thing", image: "images/gorillaz/the-hardest-thing.jpeg" },
      { name: "Orange County", image: "images/gorillaz/orange-county.jpeg" },
      { name: "The Mountain", image: "images/gorillaz/the-mountain.jpeg" },
      { name: "The Moon Cave", image: "images/gorillaz/the-mountain.jpeg" },
      { name: "The Empty Dream Machine", image: "images/gorillaz/the-mountain.jpeg" },
      { name: "The Plastic Guru", image: "images/gorillaz/the-mountain.jpeg" },
      { name: "Delirium", image: "images/gorillaz/the-mountain.jpeg" },
      { name: "The Shadowy Light", image: "images/gorillaz/the-mountain.jpeg" },
      { name: "Casablanca", image: "images/gorillaz/the-mountain.jpeg" },
      { name: "The Sweet Prince", image: "images/gorillaz/the-mountain.jpeg" },
      { name: "The Sad God", image: "images/gorillaz/the-mountain.jpeg" },
      { name: "Bolly Noir", image: "images/gorillaz/the-mountain.jpeg" },
      { name: "Noah’s Descendants", image: "images/gorillaz/the-mountain.jpeg" },
      { name: "Meri Sapno Ki Rani", image: "images/gorillaz/the-mountain.jpeg" },
    ]
  }
};
