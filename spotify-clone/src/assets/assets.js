import backwardIcon from './backward_icon.png';
import spotify_logo from './spotify_logo.png'
import searchIcon1 from './search.png';
import libraryIcon1 from './lib.svg';
import card1Img from './card1img.jpeg';
import card2Img from './card2img.jpeg';
import card3Img from './card3img.jpeg';
import card4Img from './card4img.jpeg';
import card5Img from './img16.jpg';
import card6Img from './card6img.jpeg';
import img9 from './img9.jpg'
import img11 from './img11.jpg'
import img15 from './img15.jpg'

import forwardIcon from './forward_icon.png';
import libraryIcon from './library_icon.png';
import logo from './logo.png';
import playMusicBar from './play_musicbar.png';
import playerIcon1 from './player_icon1.png';
import playerIcon2 from './player_icon2.png';
import playerIcon3 from './player_icon3.png';
import playerIcon4 from './player_icon4.png';
import playerIcon5 from './player_icon5.png';
import MainContent5 from './Main content-5.svg';
import Component2 from './Component 2.svg';
import Component2_1 from './Component 2-1.svg';
import Component3 from './Component 3.svg';
import Component3_1 from './Component 3-1.svg';
import Component4 from './Component 4.svg';
import MainContent from './Main content.svg';
import MainContent1 from './Main content-1.svg';
import MainContent2 from './Main content-2.svg';
import MainContent3 from './Main content-3.svg';
import MainContent4 from './Main content-4.svg';
import homeIcon from './State=Default.svg'
import searchIcon from './searchIcon.svg'
import h2 from './State=Default-1.svg'
import playlist from './State=Default.svg'
import p2 from './State=Hover-1.svg'
import homeIcon1 from './home.png'

import made from './fig1/made.svg';
import AboutIcon from './fig1/About.svg';
import AddToPlaylistIcon from './fig1/Add_to_playlist.svg';
import AddToQueueIcon from './fig1/Add_to_queue.svg';
import ConnectDeviceIcon from './fig1/Connect_to_a_device.svg';
import FullScreenIcon from './fig1/Full_screen.svg';
import GoToRadioIcon from './fig1/Go_to_radio.svg';
import HideSongIcon from './fig1/Hide_song.svg';
import LikeIcon from './fig1/Like.svg';
import LyricsIcon from './fig1/Lyrics.svg';
import QueueIcon from './fig1/Queue.svg';
import RepeatIcon from './fig1/Repeat.svg';
import ReportAbuseIcon from './fig1/Report.svg';
import ShareIcon from './fig1/Share.svg';
import SleepTimerIcon from './fig1/Sleep_timer.svg';
import SongCreditsIcon from './fig1/Song_credits.svg';
import ViewAlbumIcon from './fig1/View_album.svg';
import ViewArtistIcon from './fig1/View_artist.svg';
import VolumeIcon from './fig1/Volume.svg';
import clock_icon from './image.png'
import pause_icon from './pause.png'
import play_icon from './play.png'
import tear from './tear.jpg'
import aots from './aots.png'
import happier from './happier.jpg'
import heyjudeimg from './heyjudeimg.jpg'
import theclimbimg from './theclimbimg.png'
import shboomimg from './shboomimg.jpg'

import heyjude from './The Beatles - Hey Jude.mp3'
import Happier from './Ed Sheeran - Happier.mp3';
import Teardrops from './TeardropsonMyGuitar.mp3';
import AllOfTheStars from './Ed Sheeran - All Of The Stars.mp3';
import shboom from './Sh-Boom (Life Could Be a Dream) - Billy Williams Quartet.mp3'
import theclimb from './01TheClimb.mp3'


export const assets ={
    theclimbimg,
    shboomimg,
    heyjudeimg,
    theclimb,
    shboom,
    heyjude,
    happier,
    aots,
    tear,
    play_icon,
    pause_icon,
    clock_icon,
    spotify_logo,
    homeIcon1,
    searchIcon1,
    libraryIcon1,
    made,
    AboutIcon, 
    AddToPlaylistIcon, 
    AddToQueueIcon, 
    ConnectDeviceIcon, 
    FullScreenIcon, 
    GoToRadioIcon, 
    HideSongIcon, 
    LikeIcon, 
    LyricsIcon, 
    QueueIcon, 
    RepeatIcon, 
    ReportAbuseIcon, 
    ShareIcon, 
    SleepTimerIcon, 
    SongCreditsIcon, 
    ViewAlbumIcon, 
    ViewArtistIcon, 
    VolumeIcon,
    searchIcon,
    homeIcon,
    playlist,
    Happier,
    Teardrops,
    AllOfTheStars,
    MainContent5,
    MainContent4,
    MainContent3,
    MainContent2,
    MainContent1,
    MainContent,
    Component2,
    Component2_1,
    Component3,
    Component3_1,
    Component4,
    backwardIcon,
    card1Img,
    card2Img,
    card3Img,
    card4Img,
    card5Img,
    card6Img,
    img9,
    img15,
    img11,

    forwardIcon,
    libraryIcon,
    logo,
    playMusicBar,
    playerIcon2,
    playerIcon1,
    playerIcon3,
    playerIcon4,
    playerIcon5

}

export const albumsData = [{
    id:0,
    name: "Top 50 Global" ,
    image: card1Img,
    desc: "Your weekly update of the most played tracks",
    bgColor: "#2a4365"

},
{
    id:1,
    name: "Top 50 India",
    image: card6Img,
    desc:"Your weekly update of most played tracks",
    bgColor: "#742a2a"

},
{
    id:2,
    name: "Top songs Global",
    image: card5Img,
    desc: "Your weekly update of most played tracks",
    bgColor: "#B57EDC"

},
{
    id:3,
    name: "Top 50 songs India",
    image: img9,
    desc: "Your weekly update of most played tracks",
    bgColor: "#22543d"

},
{
    id:4,
    name: "Mega Hit Mix",
    image: img11,
    desc: "Your weekly update of most played tracks",
    bgColor: "22543d"

},

// {
//     id:5,
//     name: "Happy Favourites",
//     image: img15,
//     desc: "Your weekly update of most played tracks",
//     bgColor: "#FBEC5D"

// },

]

// ##11.50 yt

export const songsData = [
    {
    id:0,
    name: "Happier",
    image:happier,
    file: Happier, //mp3 file,
    desc: "Put a smile on your face with these happy tunes",
    duration: "3:00"
        
    },
    {id:1,
    name: "Teardrops on My Guitar",
    image:tear,
    file: Teardrops,
    desc: "Put a smile on your face with these happy tunes",
    duration: "3:00"
},

     {id:2,
    name: "All Of The Stars",
    image:aots,
    file: AllOfTheStars,
    desc: "Put a smile on your face with these happy tunes",
    duration: "3:00"
},

{  id:3,
    name: "Hey Jude",
    image:heyjudeimg,
    file: heyjude,
    desc: "Put a smile on your face with these happy tunes",
    duration: "3:00"
},
{  id:4,
    name: "Sh-Boom",
    image:shboomimg,
    file: shboom,
    desc: "Put a smile on your face with these happy tunes",
    duration: "3:00"
},
{  id:5,
    name: "The Climb",
    image:theclimbimg,
    file: theclimb,
    desc: "Put a smile on your face with these happy tunes",
    duration: "3:00"
}
]