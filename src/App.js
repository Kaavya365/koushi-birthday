import React, { useState, useEffect, useRef } from 'react';
import { Heart, Sparkles, Star, Music, Camera, Users, Home as HomeIcon, BookOpen, Video } from 'lucide-react';

const KoushiBirthdayWebsite = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [activeSurvivalSection, setActiveSurvivalSection] = useState(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const contentRef = useRef(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

// The secret password - change this to whatever you want!
const SECRET_PASSWORD = 'EverybodyLovesKoushi';

const handlePasswordSubmit = (e) => {
  e.preventDefault();
  if (password.toLowerCase() === SECRET_PASSWORD.toLowerCase()) {
    setIsAuthenticated(true);
    setError('');
  } else {
    setError('INCORRECT PASSWORD!');
    setPassword('');
    setTimeout(() => setError(''), 2000);
  }
};

  useEffect(() => {
    const handleScroll = () => {
      if (contentRef.current) {
        const scrollTop = contentRef.current.scrollTop;
        const scrollHeight = contentRef.current.scrollHeight - contentRef.current.clientHeight;
        const progress = scrollHeight > 0 ? scrollTop / scrollHeight : 0;
        setScrollProgress(progress);
      }
    };

    const container = contentRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, []);

  if (!isAuthenticated) {
  return (
    <div className="website-container">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&family=VT323&display=swap');

        :root {
          --purple-dark: #6B4C8A;
          --purple-main: #9D72CC;
          --purple-light: #B88FD9;
          --purple-lighter: #D4A5F3;
          --cream: #F5F1E8;
          --brown-dark: #3E2723;
          --brown-light: #8D6E63;
        }

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          overflow: hidden;
          image-rendering: pixelated;
          image-rendering: -moz-crisp-edges;
          image-rendering: crisp-edges;
        }

        .website-container {
          width: 100vw;
          height: 100vh;
          background: 
            repeating-linear-gradient(
              0deg,
              rgba(155, 114, 204, 0.03) 0px,
              rgba(155, 114, 204, 0.03) 1px,
              transparent 1px,
              transparent 2px
            ),
            repeating-linear-gradient(
              90deg,
              rgba(155, 114, 204, 0.03) 0px,
              rgba(155, 114, 204, 0.03) 1px,
              transparent 1px,
              transparent 2px
            ),
            linear-gradient(135deg, #E6D5FF 0%, #F5F1E8 50%, #E6D5FF 100%);
          font-family: 'VT323', monospace;
          color: var(--brown-dark);
          position: relative;
          overflow: hidden;
        }

        .floating-shapes {
          position: fixed;
          width: 100%;
          height: 100%;
          overflow: hidden;
          pointer-events: none;
          z-index: 1;
        }

        .shape {
          position: absolute;
          opacity: 0.4;
          animation: twinkle 3s infinite ease-in-out;
          font-size: 24px;
          filter: drop-shadow(2px 2px 0px rgba(107, 76, 138, 0.3));
        }

        .shape:nth-child(1) { top: 15%; left: 10%; animation-delay: 0s; }
        .shape:nth-child(2) { top: 60%; left: 85%; animation-delay: 1s; }
        .shape:nth-child(3) { top: 35%; left: 70%; animation-delay: 2s; }
        .shape:nth-child(4) { top: 75%; left: 15%; animation-delay: 1.5s; }

        @keyframes twinkle {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.2); }
        }

        @keyframes popIn {
          0% {
            opacity: 0;
            transform: scale(0.8);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        .password-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
          padding: 2rem;
          position: relative;
          z-index: 10;
        }

        .password-box {
          background: var(--cream);
          border: 4px solid var(--brown-dark);
          padding: 3rem;
          max-width: 500px;
          width: 100%;
          box-shadow: 
            inset -4px -4px 0 rgba(0, 0, 0, 0.15),
            8px 8px 0 var(--purple-main);
          animation: popIn 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }

        .password-title {
          font-family: 'Press Start 2P', cursive;
          font-size: 24px;
          text-align: center;
          color: var(--purple-dark);
          margin-bottom: 1rem;
          line-height: 1.6;
          text-shadow: 2px 2px 0 var(--purple-lighter);
        }

        .password-subtitle {
          font-family: 'VT323', monospace;
          font-size: 20px;
          text-align: center;
          color: var(--brown-dark);
          margin-bottom: 2rem;
        }

        .password-form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .password-input {
          font-family: 'VT323', monospace;
          font-size: 24px;
          padding: 1rem;
          border: 4px solid var(--brown-dark);
          background: white;
          text-align: center;
          letter-spacing: 2px;
          transition: all 0.2s ease;
        }

        .password-input:focus {
          outline: none;
          border-color: var(--purple-main);
          box-shadow: inset 0 0 0 2px var(--purple-light);
        }

        .password-button {
          font-family: 'Press Start 2P', cursive;
          font-size: 14px;
          padding: 1rem 2rem;
          background: var(--purple-main);
          color: var(--cream);
          border: 4px solid var(--brown-dark);
          cursor: pointer;
          transition: all 0.2s ease;
          box-shadow: 
            inset -2px -2px 0 rgba(0, 0, 0, 0.2),
            4px 4px 0 var(--brown-dark);
        }

        .password-button:hover {
          background: var(--purple-light);
          transform: translate(-2px, -2px);
          box-shadow: 
            inset -2px -2px 0 rgba(0, 0, 0, 0.2),
            6px 6px 0 var(--brown-dark);
        }

        .password-button:active {
          transform: translate(2px, 2px);
          box-shadow: 
            inset 2px 2px 0 rgba(0, 0, 0, 0.3),
            2px 2px 0 var(--brown-dark);
        }

        .password-error {
          font-family: 'Press Start 2P', cursive;
          font-size: 12px;
          color: #ff6b6b;
          text-align: center;
          animation: shake 0.5s ease;
          text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.3);
        }

        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-10px); }
          75% { transform: translateX(10px); }
        }

        .password-hint {
          font-family: 'VT323', monospace;
          font-size: 16px;
          text-align: center;
          color: var(--brown-light);
          margin-top: 1rem;
        }

        .pixel-heart {
          font-size: 48px;
          text-align: center;
          margin-bottom: 2rem;
          animation: pulse 2s ease infinite;
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.3); }
        }
      `}</style>

      <div className="floating-shapes">
        <div className="shape">⭐</div>
        <div className="shape">💜</div>
        <div className="shape">✨</div>
        <div className="shape">🌟</div>
      </div>

      <div className="password-container">
        <div className="password-box">
          <div className="pixel-heart">💜</div>
          <h1 className="password-title">ENTER PASSWORD</h1>
          <p className="password-subtitle">This special place is protected</p>
          
          <form onSubmit={handlePasswordSubmit} className="password-form">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="•••"
              className="password-input"
              autoFocus
            />
            
            {error && <div className="password-error">{error}</div>}
            
            <button type="submit" className="password-button">
              ENTER
            </button>
          </form>
          
        </div>
      </div>
    </div>
  );
}

  const survivalSections = [
    {
      id: 'family',
      name: 'Family',
      icon: HomeIcon,
      color: '#D4A5F3',
      description: 'Your roots, your home, your heart',
      emoji: '🏡',
      images: [
        `${process.env.PUBLIC_URL}/images/family1.jpeg`,
        `${process.env.PUBLIC_URL}/images/family2.jpeg`,
        `${process.env.PUBLIC_URL}/images/family3.jpeg`,
        `${process.env.PUBLIC_URL}/images/family4.jpeg`,
        `${process.env.PUBLIC_URL}/images/family5.jpeg`,
      ]
    },
    {
      id: 'friends-home',
      name: 'Friends from Home',
      icon: Users,
      color: '#B88FD9',
      description: 'Where it all began',
      emoji: '🌻',
      images: [
        `${process.env.PUBLIC_URL}/images/test.jpeg`,
        `${process.env.PUBLIC_URL}/images/sfriends1.jpeg`,
        `${process.env.PUBLIC_URL}/images/sfriends2.jpeg`,
        `${process.env.PUBLIC_URL}/images/sfriends3.jpeg`,
        `${process.env.PUBLIC_URL}/images/sfriends4.jpeg`,
        `${process.env.PUBLIC_URL}/images/sfriends5.jpeg`,
        `${process.env.PUBLIC_URL}/images/sfriends6.jpeg`,
        `${process.env.PUBLIC_URL}/images/sfriends7.jpeg`,
      ]
    },
    {
      id: 'friends-college',
      name: 'College Friends',
      icon: Camera,
      color: '#9D72CC',
      description: 'New chapters, new memories',
      emoji: '⭐',
      images: [
        `${process.env.PUBLIC_URL}/images/cfriends.jpeg`,
        `${process.env.PUBLIC_URL}/images/cfriends1.jpeg`,
        `${process.env.PUBLIC_URL}/images/cfriends2.jpeg`,
        `${process.env.PUBLIC_URL}/images/cfriends3.jpeg`,
        `${process.env.PUBLIC_URL}/images/cfriends4.jpeg`,
        `${process.env.PUBLIC_URL}/images/cfriends5.jpeg`,
        `${process.env.PUBLIC_URL}/images/cfriends6.jpeg`,
        `${process.env.PUBLIC_URL}/images/cfriends7.jpeg`,
        `${process.env.PUBLIC_URL}/images/cfriends8.jpeg`,
        `${process.env.PUBLIC_URL}/images/cfriends9.jpeg`,
        `${process.env.PUBLIC_URL}/images/cfriends10.jpeg`,
        `${process.env.PUBLIC_URL}/images/cfriends11.jpeg`
      ]
    },
    {
      id: 'playlists',
      name: 'Your Playlists',
      icon: Music,
      color: '#C89FE8',
      description: 'Music for every mood',
      emoji: '🎵',
      playlists: [
        {
          name: 'For her <3',
          description: 'Dedicated to you',
          embedUrl: 'https://open.spotify.com/embed/playlist/5HEMK4ms7r5Wfy4CZBas6x?utm_source=generator',
          mood: '✨ Ours'
        },
        {
          name: 'Blue Hour',
          description: 'Let it all out, it\'s okay',
          embedUrl: 'https://open.spotify.com/embed/playlist/3HfJ3YIxueVVS0nkQYLbDj?utm_source=generator',
          mood: '😢 Emotional'
        },
        {
          name: 'Hot Girl Hours',
          description: 'That Girl Energy',
          embedUrl: 'https://open.spotify.com/embed/playlist/3slKdZNwK5dQ6xdVFwpXCR?utm_source=generator',
          mood: '🌙 Queen'
        },
        {
          name: 'Sunlit Hours',
          description: 'Completely Glazed',
          embedUrl: 'https://open.spotify.com/embed/playlist/2eKIQEKufFit1bbt5wwmyN?utm_source=generator',
          mood: '✨ Golden'
        },
        {
          name: 'Taylor Hours',
          description: 'Windows down, volume up',
          embedUrl: 'https://open.spotify.com/embed/playlist/7I4NewjCruQ3YY7VYQWQsb?utm_source=generator',
          mood: '🌙 Stannnn'
        },
        {
          name: 'The Weekend Hours',
          description: 'Just Relax',
          embedUrl: 'https://open.spotify.com/embed/playlist/10OaSUno3NHZS9KwVWq4Hv?utm_source=generator',
          mood: '🏡 Chilllll'
        }
      ]
    },
    {
      id: 'shows',
      name: 'Favorite Show Clips',
      icon: Video,
      color: '#A67AC7',
      description: 'Comfort content on repeat',
      emoji: '📺',
      shows: [
        {
          name: 'Friends',
          videoUrl: 'https://www.youtube.com/embed/Lhpu3GdlV3w?si=WUD8GNVT4qctuFF9',
          description: 'The ones that make you laugh'
        },
        {
          name: 'Jujutsu Kaisen',
          videoUrl: 'https://www.youtube.com/embed/Ukbry7xP6Q4?si=Tj4uxvg4BuM5PNz9',
          description: 'Your Favourite'
        },
        {
          name: 'Derry Girls',
          videoUrl: 'https://www.youtube.com/embed/5J211yVWIzg?si=089WWWLLen4twqnp',
          description: 'The Funniest!!'
        },
        {
          name: 'Arcane',
          videoUrl: 'https://www.youtube.com/embed/LZos5_nL8S8?si=N3rRoRdpGk4OpoJZ',
          description: 'Our Show ehehehe'
        },
        {
          name: 'Harry Potter',
          videoUrl: 'https://www.youtube.com/embed/K7flEBPuQmY?si=osos0a8kt2Pxz-GZ',
          description: "'You're a wizard, Koushi'"
        }
      ]
    },
    {
      id: 'future-messages',
      name: 'Birthday Messages',
      icon: BookOpen,
      color: '#BF94E1',
      description: 'From us, to you',
      emoji: '💌',
      messages: [
        {
          title: 'The one from Lohia',
          content: 'Happy 19th LOML!!!! I love you so fucking much. Thank you for always being there for me. You are such an important person in my life that now I can’t image my life without you. I really wish I could be there with you to celebrate your day like last year😭. I miss youuu soo very much my love. Desperately hoping to meet you soon my husband!🥹',
          locked: false
        },
        {
          title: 'The one from Tamanna',
          content: 'HAPPYYY birthday koushhhhhh. Thank you for always being around!! Whahhh I miss you and your motivational talks. I loveeee youuuu 💗💗💗',
          locked: false
        },
        {
          title: 'The one from Tanisyaa',
          content: 'Happy 19th birthday to one if my favourite persons🥳🎉 It’s crazy how long we’ve known each other. So many memories and laughs in between. I’m really grateful we’ve grown up together and Thank you for always being there, no matter what.You make life funnier and better just by being in it.I love youu soo muchh🥰♥️',
          locked: false
        },
        {
          title: 'The one from Jeenal',
          content: 'Happy Birthday to my koushiii 💖 Thanks for being my partner in crime and my safe place. Thanks for all the laughs, secrets, and chaos. The one person who can irritate me to the point where i start screaming but cannot be mad for a long time.. I love you soo much and i miss you ❤️❤️❤️❤️',
          locked: false
        },
        {
          title: 'The one from Ridhi',
          content: 'Happy 19th to the eldest of our gang 🎂🤍 From childhood memories to our Wonderla days, you’ve been my safe place. Thank you for keeping my secrets and for being someone I can trust blindly. Missing you so much today… forever grateful for you 💫💖',
          locked: false
        },
        {
          title: 'The one from Suchi',
          content: 'You know what you mean to me right Koushiii? I hope you have a healthy and happy life aheadd. I love you so so much. Have a great 19th❤️  -Your Shuchh',
          locked: false
        },
        {
          title: 'The one from Jayani',
          content: 'Hi Koushii!! Wishing you a very happy and sweet 19th ! A girl with the brightest smile and the warmest hug ! The one who glides through situations like waves in the ocean..always coming back stronger and braver even when life takes a step back ! Never a dull moment with you ! I’ll be with you through all your thick and thin. Smile :) One of the greatest assets you carry wherever you go. No matter how hard things get everything will be okay one day ! Cheers to all the crazy talks and late night conversations ! The way you notice things even when we drift a little is something so special about you !! Thank you for always being there for me ! I love you 🫶🏻',
          locked: false
        },
        {
          title: 'The one from Avanthika',
          content: 'Koushiiii- Nahhhh -- My KAARUPAATIII chelloo😭 Happyyyy BIRTHDAYYY BBG why is everyone telling me ur 19 already ?! Wdym we are in kalej ?! Noo WE R STILL 16 sitting in that last bench in schl laughing for no reason and standing outside shuba’s class koochame illama ( yess well always be that )☹️ Anyways, I LOVE YOU SOOO F MUCH ( even tho I’ll never say that to ur face 🥰) Well the  rest we’ll talk in our room ( since we now live together 😈) Boiiiii ',
          locked: false
        },
        {
          title: 'The one from Gopika',
          content: 'Happy Birthday koushiiii Sometimes I forget that not everyone gets a friend like you someone who has been there all along. I’m so grateful that you’ve been part of my college life and life in general and it couldn’t have been better. I keep thinking about our cuddle sessions, late nights,  trips, dumb jokes, and how those moment says everything about us. No matter what was going on, you’re always there considerate,caring, and completely yourself. You’ve always had this way of making things feel lighter, even when they weren’t. And always there to cheer me up during my lows. I’m soooooooo grateful to have u in my life, I don’t even know how I’ll get through my demotivated days without you, but you’re always there and always will be my comfort person. Thank you for loving me the way you do with patience,love, and a bond that never wavers. Thank you for being there for me always. Even during our gym sessions you push me to perform my fullest and give the best company.You’ve shaped my life more than you probably realize. I hope this year gives you the same kind of love and support you give so freely to everyone around you. You deserve all the happiness in the world, and moments that remind you how important you are especially to me. No matter where life takes us, you are my person. Always have been. Always will be. Happy Birthday. I love you more than words can say. — Gopika 💗',
          locked: false
        },
        {
          title: 'The one from Pozhil',
          content: 'Heyyy Koushiii, So bbg ur turning 19!!?? All the best for your peak rom-com year and love you loads!!! I’m sure you  miss ur hometown friends but I hope we gave u a home away from home…. And thanks for letting me crash at ur bed love ya mwahhhh!!! And happiest birthdayyy everrr bbg!! Love you sooo muchhhh!!!',
          locked: false
        },
        {
          title: 'The one from Madhu',
          content: "HAPPY BIRTHDAY KOUSHII!!! it feels very unreal that you have turned 19 because in my eyes u are literally a kid trying to figure out life that too with the t shirt and shorts 🥹. I still remember the first day I saw you,you had this smile that would make any person happy and I was lucky enough to see that smile in my first day which made me feel lighter 😊. It's not only your smile that's special but also the way you make people feel that they are important is incredible🤌. Remember the night before math end sem you sat and taught me math like a saviour(you were)😭 not only that but you  also you comforted me phaaa that heart🛐 .you have  such a good heart and soul and it's beyond your conscience to Even realise how much of a sweet person you are. I am so glad and thankful that I got to be friends with a person like you and to share my college days with and my kids are honestly soo lucky to have an aunt like you 😎. This day and in all the days you are reading this i want you to know that you have a person a call away to speak with and who will always call you as a special person in her life🥰. Once again Happy birthday sweet heart🫶 i wish and pray that you will become a person you dream of becoming one day and I will get to see you through🫂💓💌",
          locked: false
        },
        {
          title: 'The one from Avantika',
          content: 'Hi bbg, Avantika here happyyyy birthday cutieeee i love u soo much my day one . Ur literally the first person I spoke to on campus and I’m soo happyyyy i did . My first sight of u was ur ass and omg that moment i knew I had to friend u up . With the way u helped me and spoke it was love at first sight . I still remember how we laugh about ur cork and apo i knew we were so ment to be I’m never gonna leave u bby ur stuck with me forever hehe . We are just two different people in the same font and I think that’s what I love the most about us mwahhhhh happyy birthday again bestie I love u too much',
          locked: false
        },
        {
          title: 'The one from Kaavya',
          content: "To the love of my life, You are genuinely my angel sent from heaven. Your smile has this magical way of making everyone’s world instantly feel lighter, softer, and a little more hopeful. Just a single hug from you can make all my weights disappear, like nothing bad ever existed in the first place. You have taught me so much in such a short period of time, but more than anything, you’ve taught me how to be kinder—to myself, to others, and to the world. The patience you carry, the love you give, and the way you show up for the people you care about is something that can’t really be put into words. I am so so so grateful and honoured to have you in my life and to call you my friend. You make life feel safer, warmer, and so much more joyful just by being in it. You’re my forever gym bro—the one person I know I’ll always show up with, pushing through workouts, hyping each other up, and laughing even when everything hurts. And no matter how busy life gets, I know we’ll always find our way back to our binge sessions and sleepovers (provided that there's a bigger bed 😭). Those moments with you, doing absolutely nothing and everything at the same time, mean more to me than you know. You’re my koala bear, my safe space, my constant. You make me so insanely happy. You make me laugh in a way no one else ever has, the kind of laughter that leaves my heart full. I can be completely myself, unfiltered, unguarded, and at peace. Since you get what you give, I hope this little corner of the internet makes you feel even a fraction of the love you pour into all of us every single day. Happy Birthday, my angel. Love you to the ends of the universe and back—always.",
          locked: false
        }
      ]
    }
  ];

  const SurvivalCard = ({ section, onClick }) => {
    const Icon = section.icon;
    return (
      <div
        onClick={() => onClick(section)}
        className="survival-card pixel-card"
        style={{ '--card-color': section.color }}
      >
        <div className="pixel-corners">
          <div className="corner top-left"></div>
          <div className="corner top-right"></div>
          <div className="corner bottom-left"></div>
          <div className="corner bottom-right"></div>
        </div>
        <div className="card-content">
          <div className="survival-emoji">{section.emoji}</div>
          <h3 className="survival-title">{section.name}</h3>
          <p className="survival-description">{section.description}</p>
          <div className="press-start">[ PRESS TO OPEN ]</div>
        </div>
      </div>
    );
  };

  const CollageSection = ({ section, onClose }) => {
    return (
      <div className="detail-overlay" onClick={onClose}>
        <div className="detail-content pixel-window" onClick={e => e.stopPropagation()} style={{ '--window-color': section.color }}>
          <div className="window-header">
            <div className="window-title">
              <span className="window-emoji">{section.emoji}</span>
              {section.name}
            </div>
            <button className="close-button pixel-button" onClick={onClose}>×</button>
          </div>
          
          <div className="window-body">
            <p className="window-subtitle">{section.description}</p>
            
            <div className="collage-grid">
              {section.images.map((img, idx) => (
                <div key={idx} className="collage-item pixel-frame" style={{ animationDelay: `${idx * 0.1}s` }}>
                  <img src={img} alt={`${section.name} ${idx + 1}`} className="collage-image" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  const PlaylistSection = ({ section, onClose }) => {
    return (
      <div className="detail-overlay" onClick={onClose}>
        <div className="detail-content pixel-window playlist-window" onClick={e => e.stopPropagation()} style={{ '--window-color': section.color }}>
          <div className="window-header">
            <div className="window-title">
              <span className="window-emoji">{section.emoji}</span>
              {section.name}
            </div>
            <button className="close-button pixel-button" onClick={onClose}>×</button>
          </div>
          
          <div className="window-body">
            <p className="window-subtitle">{section.description}</p>
            
            <div className="playlist-grid">
              {section.playlists.map((playlist, idx) => (
                <div key={idx} className="playlist-card pixel-frame" style={{ animationDelay: `${idx * 0.1}s` }}>
                  <div className="playlist-header">
                    <span className="playlist-mood">{playlist.mood}</span>
                  </div>
                  <h3 className="playlist-name">{playlist.name}</h3>
                  <p className="playlist-description">{playlist.description}</p>
                  <div className="playlist-embed">
                    <iframe
                      src={playlist.embedUrl}
                      width="100%"
                      height="152"
                      frameBorder="0"
                      allowFullScreen=""
                      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                      loading="lazy"
                      title={playlist.name}
                    ></iframe>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  const ShowsSection = ({ section, onClose }) => {
    return (
      <div className="detail-overlay" onClick={onClose}>
        <div className="detail-content pixel-window shows-window" onClick={e => e.stopPropagation()} style={{ '--window-color': section.color }}>
          <div className="window-header">
            <div className="window-title">
              <span className="window-emoji">{section.emoji}</span>
              {section.name}
            </div>
            <button className="close-button pixel-button" onClick={onClose}>×</button>
          </div>
          
          <div className="window-body">
            <p className="window-subtitle">{section.description}</p>
            
            <div className="shows-grid">
              {section.shows.map((show, idx) => (
                <div key={idx} className="show-card pixel-frame" style={{ animationDelay: `${idx * 0.1}s` }}>
                  <h3 className="show-name">{show.name}</h3>
                  <p className="show-description">{show.description}</p>
                  <div className="video-embed">
                    <iframe
                      src={show.videoUrl}
                      width="100%"
                      height="315"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      title={show.name}
                    ></iframe>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  const FutureMessagesSection = ({ section, onClose }) => {
    const [openMessage, setOpenMessage] = useState(null);

    return (
      <div className="detail-overlay" onClick={onClose}>
        <div className="detail-content pixel-window messages-window" onClick={e => e.stopPropagation()} style={{ '--window-color': section.color }}>
          <div className="window-header">
            <div className="window-title">
              <span className="window-emoji">{section.emoji}</span>
              {section.name}
            </div>
            <button className="close-button pixel-button" onClick={onClose}>×</button>
          </div>
          
          <div className="window-body">
            <p className="window-subtitle">{section.description}</p>
            
            <div className="messages-grid">
              {section.messages.map((message, idx) => (
                <div key={idx} className="message-card" style={{ animationDelay: `${idx * 0.1}s` }}>
                  <div 
                    className={`letter-envelope pixel-card ${openMessage === idx ? 'opened' : ''}`}
                    onClick={() => setOpenMessage(openMessage === idx ? null : idx)}
                  >
                    <div className="envelope-seal">💌</div>
                    <div className="envelope-title">{message.title}</div>
                    <div className="envelope-prompt">[ CLICK TO {openMessage === idx ? 'CLOSE' : 'OPEN'} ]</div>
                  </div>
                  {openMessage === idx && (
                    <div className="message-content pixel-frame">
                      <div className="message-text">{message.content}</div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="website-container">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&family=VT323&display=swap');

        :root {
          --purple-dark: #6B4C8A;
          --purple-main: #9D72CC;
          --purple-light: #B88FD9;
          --purple-lighter: #D4A5F3;
          --cream: #F5F1E8;
          --brown-dark: #3E2723;
          --brown-light: #8D6E63;
          --pixel-size: 4px;
        }

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          overflow: hidden;
          image-rendering: pixelated;
          image-rendering: -moz-crisp-edges;
          image-rendering: crisp-edges;
        }

        .website-container {
          width: 100vw;
          height: 100vh;
          background: 
            repeating-linear-gradient(
              0deg,
              rgba(155, 114, 204, 0.03) 0px,
              rgba(155, 114, 204, 0.03) 1px,
              transparent 1px,
              transparent 2px
            ),
            repeating-linear-gradient(
              90deg,
              rgba(155, 114, 204, 0.03) 0px,
              rgba(155, 114, 204, 0.03) 1px,
              transparent 1px,
              transparent 2px
            ),
            linear-gradient(135deg, #E6D5FF 0%, #F5F1E8 50%, #E6D5FF 100%);
          font-family: 'VT323', monospace;
          color: var(--brown-dark);
          position: relative;
          overflow: hidden;
        }

        /* Pixel Stars Background */
        .floating-shapes {
          position: fixed;
          width: 100%;
          height: 100%;
          overflow: hidden;
          pointer-events: none;
          z-index: 1;
        }

        .shape {
          position: absolute;
          opacity: 0.4;
          animation: twinkle 3s infinite ease-in-out;
          font-size: 24px;
          filter: drop-shadow(2px 2px 0px rgba(107, 76, 138, 0.3));
        }

        .shape:nth-child(1) { top: 15%; left: 10%; animation-delay: 0s; }
        .shape:nth-child(2) { top: 60%; left: 85%; animation-delay: 1s; }
        .shape:nth-child(3) { top: 35%; left: 70%; animation-delay: 2s; }
        .shape:nth-child(4) { top: 75%; left: 15%; animation-delay: 1.5s; }

        @keyframes twinkle {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.2); }
        }

        /* Progress Bar */
        .progress-bar {
          position: fixed;
          top: 0;
          left: 0;
          height: 8px;
          background: 
            repeating-linear-gradient(
              90deg,
              var(--purple-main) 0px,
              var(--purple-main) 4px,
              var(--purple-light) 4px,
              var(--purple-light) 8px
            );
          transition: width 0.3s ease;
          z-index: 1000;
          box-shadow: 0 2px 0 var(--purple-dark);
          image-rendering: pixelated;
        }

        /* Navigation - Stardew Style */
        .navigation {
          position: fixed;
          top: 20px;
          left: 50%;
          transform: translateX(-50%);
          padding: 0;
          display: flex;
          gap: 0;
          z-index: 100;
          background: var(--cream);
          border: 4px solid var(--brown-dark);
          box-shadow: 
            inset -4px -4px 0 rgba(0, 0, 0, 0.2),
            4px 4px 0 var(--purple-main);
        }

        .logo {
          font-family: 'Press Start 2P', cursive;
          font-size: 16px;
          padding: 16px 24px;
          color: var(--purple-dark);
          background: var(--cream);
          border-right: 4px solid var(--brown-dark);
          text-shadow: 2px 2px 0 var(--purple-light);
        }

        .nav-links {
          display: flex;
          gap: 0;
        }

        .nav-link {
          background: var(--cream);
          border: none;
          border-right: 4px solid var(--brown-dark);
          font-family: 'Press Start 2P', cursive;
          font-size: 12px;
          color: var(--brown-dark);
          cursor: pointer;
          padding: 16px 24px;
          transition: all 0.1s ease;
          position: relative;
        }

        .nav-link:last-child {
          border-right: none;
        }

        .nav-link:hover {
          background: var(--purple-lighter);
          transform: translateY(-2px);
        }

        .nav-link:active {
          transform: translateY(1px);
          box-shadow: inset 2px 2px 0 rgba(0, 0, 0, 0.3);
        }

        .nav-link.active {
          background: var(--purple-main);
          color: var(--cream);
          box-shadow: inset 2px 2px 0 rgba(0, 0, 0, 0.3);
        }

        .content-area {
          position: absolute;
          top: 100px;
          left: 0;
          right: 0;
          bottom: 0;
          overflow-y: auto;
          padding: 2rem;
          z-index: 10;
        }

        .content-area::-webkit-scrollbar {
          width: 16px;
        }

        .content-area::-webkit-scrollbar-track {
          background: var(--cream);
          border: 4px solid var(--brown-dark);
        }

        .content-area::-webkit-scrollbar-thumb {
          background: var(--purple-main);
          border: 4px solid var(--brown-dark);
        }

        .content-area::-webkit-scrollbar-thumb:hover {
          background: var(--purple-light);
        }

        /* Hero Section */
        .hero-section {
          text-align: center;
          padding: 2rem;
          animation: fadeInUp 0.8s ease;
          max-width: 900px;
          margin: 0 auto;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .hero-title {
          font-family: 'Press Start 2P', cursive;
          font-size: 48px;
          margin-bottom: 2rem;
          color: var(--purple-dark);
          text-shadow: 
            4px 4px 0 var(--purple-light),
            8px 8px 0 var(--purple-main);
          line-height: 1.6;
          animation: bounce 2s ease-in-out infinite;
        }

        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        .hero-subtitle {
          font-family: 'Press Start 2P', cursive;
          font-size: 20px;
          color: var(--purple-main);
          margin-bottom: 2rem;
          text-shadow: 2px 2px 0 var(--purple-lighter);
        }

        .hero-message {
          font-family: 'VT323', monospace;
          font-size: 24px;
          color: var(--brown-dark);
          max-width: 700px;
          margin: 0 auto 3rem;
          line-height: 1.6;
          background: var(--cream);
          padding: 24px;
          border: 4px solid var(--brown-dark);
          box-shadow: 4px 4px 0 var(--purple-light);
        }

        .icons-container {
          display: flex;
          gap: 2rem;
          justify-content: center;
          margin-top: 3rem;
        }

        .icon-pulse {
          font-size: 48px;
          animation: pulse 2s ease infinite;
          filter: drop-shadow(4px 4px 0 var(--purple-main));
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.3); }
        }

        /* Survival Cards - RPG Style */
        .survival-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          padding: 2rem;
          max-width: 1200px;
          margin: 0 auto;
        }

        .survival-card {
          position: relative;
          background: var(--cream);
          border: 4px solid var(--brown-dark);
          padding: 0;
          cursor: pointer;
          transition: all 0.2s ease;
          box-shadow: 
            inset -4px -4px 0 rgba(0, 0, 0, 0.15),
            4px 4px 0 var(--card-color);
          animation: fadeInUp 0.6s ease backwards;
        }

        .survival-card:hover {
          transform: translate(-4px, -4px);
          box-shadow: 
            inset -4px -4px 0 rgba(0, 0, 0, 0.15),
            8px 8px 0 var(--card-color);
        }

        .survival-card:active {
          transform: translate(2px, 2px);
          box-shadow: 
            inset -2px -2px 0 rgba(0, 0, 0, 0.15),
            2px 2px 0 var(--card-color);
        }

        .card-content {
          padding: 32px 24px;
          text-align: center;
        }

        .survival-emoji {
          font-size: 64px;
          margin-bottom: 16px;
          filter: drop-shadow(4px 4px 0 var(--purple-light));
        }

        .survival-title {
          font-family: 'Press Start 2P', cursive;
          font-size: 18px;
          color: var(--purple-dark);
          margin-bottom: 12px;
          text-shadow: 2px 2px 0 var(--purple-lighter);
        }

        .survival-description {
          font-family: 'VT323', monospace;
          font-size: 20px;
          color: var(--brown-dark);
          margin-bottom: 16px;
        }

        .press-start {
          font-family: 'Press Start 2P', cursive;
          font-size: 10px;
          color: var(--purple-main);
          animation: blink 1.5s infinite;
        }

        @keyframes blink {
          0%, 49% { opacity: 1; }
          50%, 100% { opacity: 0; }
        }

        .survival-card:nth-child(1) { animation-delay: 0.1s; }
        .survival-card:nth-child(2) { animation-delay: 0.2s; }
        .survival-card:nth-child(3) { animation-delay: 0.3s; }
        .survival-card:nth-child(4) { animation-delay: 0.4s; }
        .survival-card:nth-child(5) { animation-delay: 0.5s; }
        .survival-card:nth-child(6) { animation-delay: 0.6s; }

        /* Pixel Window Modals */
        .detail-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(62, 39, 35, 0.85);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          animation: fadeIn 0.3s ease;
          padding: 2rem;
          overflow-y: auto;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .pixel-window {
          background: var(--cream);
          border: 4px solid var(--brown-dark);
          max-width: 1000px;
          width: 100%;
          max-height: 85vh;
          overflow-y: auto;
          animation: popIn 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
          box-shadow: 
            inset -4px -4px 0 rgba(0, 0, 0, 0.15),
            8px 8px 0 var(--window-color);
        }

        @keyframes popIn {
          0% {
            opacity: 0;
            transform: scale(0.8);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        .window-header {
          background: var(--window-color);
          border-bottom: 4px solid var(--brown-dark);
          padding: 16px 24px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .window-title {
          font-family: 'Press Start 2P', cursive;
          font-size: 16px;
          color: var(--cream);
          text-shadow: 2px 2px 0 var(--brown-dark);
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .window-emoji {
          font-size: 24px;
          filter: drop-shadow(2px 2px 0 var(--brown-dark));
        }

        .close-button {
          background: var(--cream);
          border: 4px solid var(--brown-dark);
          width: 40px;
          height: 40px;
          font-family: 'Press Start 2P', cursive;
          font-size: 20px;
          color: var(--brown-dark);
          cursor: pointer;
          transition: all 0.1s ease;
          box-shadow: inset -2px -2px 0 rgba(0, 0, 0, 0.15);
        }

        .close-button:hover {
          background: #ff6b6b;
          color: var(--cream);
        }

        .close-button:active {
          box-shadow: inset 2px 2px 0 rgba(0, 0, 0, 0.3);
        }

        .window-body {
          padding: 24px;
        }

        .window-subtitle {
          font-family: 'VT323', monospace;
          font-size: 22px;
          color: var(--brown-dark);
          text-align: center;
          margin-bottom: 24px;
          padding: 12px;
          background: rgba(157, 114, 204, 0.1);
          border: 2px solid var(--purple-light);
        }

        /* Collage Grid */
        .collage-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
          gap: 16px;
        }

        .collage-item {
          animation: fadeInUp 0.5s ease backwards;
        }

        .pixel-frame {
          background: var(--cream);
          border: 4px solid var(--brown-dark);
          box-shadow: 
            inset -2px -2px 0 rgba(0, 0, 0, 0.15),
            4px 4px 0 var(--purple-light);
          overflow: hidden;
          transition: transform 0.2s ease;
        }

        .pixel-frame:hover {
          transform: translate(-2px, -2px);
          box-shadow: 
            inset -2px -2px 0 rgba(0, 0, 0, 0.15),
            6px 6px 0 var(--purple-main);
        }

        .collage-image {
          width: 100%;
          height: 200px;
          object-fit: cover;
          display: block;
        }

        /* Playlist Cards */
        .playlist-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 20px;
        }

        .playlist-card {
          padding: 16px;
          animation: fadeInUp 0.5s ease backwards;
        }

        .playlist-header {
          margin-bottom: 12px;
        }

        .playlist-mood {
          font-family: 'Press Start 2P', cursive;
          font-size: 14px;
          color: var(--purple-dark);
          background: var(--purple-lighter);
          padding: 8px 12px;
          display: inline-block;
          border: 2px solid var(--brown-dark);
        }

        .playlist-name {
          font-family: 'Press Start 2P', cursive;
          font-size: 14px;
          color: var(--purple-dark);
          margin: 12px 0 8px;
          line-height: 1.6;
        }

        .playlist-description {
          font-family: 'VT323', monospace;
          font-size: 18px;
          color: var(--brown-dark);
          margin-bottom: 12px;
        }

        .playlist-embed {
          border: 4px solid var(--brown-dark);
          overflow: hidden;
        }

        /* Show Cards */
        .shows-grid {
          display: grid;
          gap: 24px;
        }

        .show-card {
          padding: 20px;
          animation: fadeInUp 0.5s ease backwards;
        }

        .show-name {
          font-family: 'Press Start 2P', cursive;
          font-size: 18px;
          color: var(--purple-dark);
          margin-bottom: 12px;
          text-shadow: 2px 2px 0 var(--purple-lighter);
        }

        .show-description {
          font-family: 'VT323', monospace;
          font-size: 20px;
          color: var(--brown-dark);
          margin-bottom: 16px;
        }

        .video-embed {
          border: 4px solid var(--brown-dark);
          overflow: hidden;
          box-shadow: 4px 4px 0 var(--purple-light);
        }

        /* Message Envelopes */
        .messages-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 24px;
        }

        .message-card {
          animation: fadeInUp 0.5s ease backwards;
        }

        .letter-envelope {
          background: var(--cream);
          border: 4px solid var(--brown-dark);
          padding: 24px;
          cursor: pointer;
          text-align: center;
          transition: all 0.2s ease;
          box-shadow: 
            inset -4px -4px 0 rgba(0, 0, 0, 0.15),
            4px 4px 0 var(--purple-main);
        }

        .letter-envelope:hover {
          transform: translate(-2px, -2px);
          box-shadow: 
            inset -4px -4px 0 rgba(0, 0, 0, 0.15),
            6px 6px 0 var(--purple-main);
        }

        .letter-envelope.opened {
          background: var(--purple-lighter);
        }

        .envelope-seal {
          font-size: 48px;
          margin-bottom: 16px;
          filter: drop-shadow(2px 2px 0 var(--purple-main));
        }

        .envelope-title {
          font-family: 'Press Start 2P', cursive;
          font-size: 12px;
          color: var(--brown-dark);
          margin-bottom: 16px;
          line-height: 1.8;
        }

        .envelope-prompt {
          font-family: 'Press Start 2P', cursive;
          font-size: 8px;
          color: var(--purple-main);
          animation: blink 1.5s infinite;
        }

        .message-content {
          margin-top: 16px;
          padding: 24px;
          animation: fadeInUp 0.4s ease;
        }

        .message-text {
          font-family: 'VT323', monospace;
          font-size: 20px;
          color: var(--brown-dark);
          line-height: 1.6;
        }

        .hidden {
          display: none;
        }

        /* Mobile Responsive */
        @media (max-width: 768px) {
          .hero-title {
            font-size: 24px;
            text-shadow: 
              2px 2px 0 var(--purple-light),
              4px 4px 0 var(--purple-main);
          }

          .hero-subtitle {
            font-size: 14px;
          }

          .hero-message {
            font-size: 18px;
            padding: 16px;
          }

          .navigation {
            top: 10px;
            flex-direction: column;
            width: 90%;
          }

          .logo {
            font-size: 12px;
            padding: 12px;
            border-right: none;
            border-bottom: 4px solid var(--brown-dark);
          }

          .nav-links {
            flex-direction: column;
          }

          .nav-link {
            font-size: 10px;
            padding: 12px;
            border-right: none;
            border-bottom: 4px solid var(--brown-dark);
          }

          .nav-link:last-child {
            border-bottom: none;
          }

          .content-area {
            top: 140px;
            padding: 1rem;
          }

          .survival-grid {
            grid-template-columns: 1fr;
            gap: 16px;
            padding: 1rem;
          }

          .survival-title {
            font-size: 14px;
          }

          .survival-description {
            font-size: 16px;
          }

          .collage-grid {
            grid-template-columns: 1fr;
          }

          .playlist-grid {
            grid-template-columns: 1fr;
          }

          .messages-grid {
            grid-template-columns: 1fr;
          }

          .window-title {
            font-size: 12px;
          }

          .pixel-window {
            max-height: 80vh;
          }
        }
      `}</style>

      {/* Floating Stars */}
      <div className="floating-shapes">
        <div className="shape">⭐</div>
        <div className="shape">💜</div>
        <div className="shape">✨</div>
        <div className="shape">🌟</div>
      </div>

      {/* Progress bar */}
      <div className="progress-bar" style={{ width: `${scrollProgress * 100}%` }} />

      {/* Navigation */}
      <nav className="navigation">
        <div className="logo">KOUSHI 💜</div>
        <div className="nav-links">
          <button
            className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
            onClick={() => setActiveSection('home')}
          >
            HOME
          </button>
          <button
            className={`nav-link ${activeSection === 'survival-kit' ? 'active' : ''}`}
            onClick={() => setActiveSection('survival-kit')}
          >
            SURVIVAL KIT
          </button>
        </div>
      </nav>

      {/* Content Area */}
      <div className="content-area" ref={contentRef}>
        {activeSection === 'home' && (
          <div className="hero-section">
            <h1 className="hero-title">HAPPY BIRTHDAY KOUSHI!</h1>
            <h2 className="hero-subtitle">Your Personal Survival Kit</h2>
            <p className="hero-message">
              This corner of the internet is yours - filled with memories, music, comfort, and 
              everything you need when life gets overwhelming. No matter where you are in the world, 
              you can come back here anytime. Click "SURVIVAL KIT" to explore!
            </p>
            <div className="icons-container">
              <span className="icon-pulse">✨</span>
              <span className="icon-pulse" style={{ animationDelay: '0.5s' }}>💜</span>
              <span className="icon-pulse" style={{ animationDelay: '1s' }}>⭐</span>
            </div>
          </div>
        )}

        {activeSection === 'survival-kit' && (
          <div>
            <div className="hero-section">
              <h1 className="hero-title">YOUR SURVIVAL KIT</h1>
              <p className="hero-message">
                Everything you need, all in one place. Click each section to explore.
              </p>
            </div>
            <div className="survival-grid">
              {survivalSections.map(section => (
                <SurvivalCard key={section.id} section={section} onClick={setActiveSurvivalSection} />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Detail Modals */}
      {activeSurvivalSection && (activeSurvivalSection.id === 'family' || activeSurvivalSection.id === 'friends-home' || activeSurvivalSection.id === 'friends-college') && (
        <CollageSection section={activeSurvivalSection} onClose={() => setActiveSurvivalSection(null)} />
      )}

      {activeSurvivalSection && activeSurvivalSection.id === 'playlists' && (
        <PlaylistSection section={activeSurvivalSection} onClose={() => setActiveSurvivalSection(null)} />
      )}

      {activeSurvivalSection && activeSurvivalSection.id === 'shows' && (
        <ShowsSection section={activeSurvivalSection} onClose={() => setActiveSurvivalSection(null)} />
      )}

      {activeSurvivalSection && activeSurvivalSection.id === 'future-messages' && (
        <FutureMessagesSection section={activeSurvivalSection} onClose={() => setActiveSurvivalSection(null)} />
      )}
    </div>
  );
};

export default KoushiBirthdayWebsite;
