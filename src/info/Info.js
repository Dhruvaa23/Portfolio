import self from "../img/self.jpeg"
import mock1 from "../img/mock1.jpg"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.jpeg"
import mock5 from "../img/mock5.png"
import { Download } from "@mui/icons-material"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */

/* 
This variable will change the layout of the website from multipage to single, scrollable page
*/
export let singlePage = false;

/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Dhruvika",
    lastName: "Rajput",
    initials: "DR", // the example uses first and last, but feel free to use three or more if you like.
    position: "a Full Stack Developer",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '💻',
            text: 'Fueled by curiosity & code'
        },
        {
            emoji: '🌎',
            text: 'Based in Gujarat, India'
        },
        {
            emoji: "🎓",
            text: "B.Tech CSE Student @ ITM (SLS) Baroda University"
        },
        {
            emoji: "📧",
            text: "rajputdhruva10@gmail.com"
        }
    ],
    socials: [
        {
            link: "mailto:rajputdhruva10@gmail.com",
            icon: 'fa fa-envelope',
            label: 'email'
        },
        
        {
            link: "https://github.com/Dhruvaa23",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/dhruvika-rajput-024b0b291/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        }
        
// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    ],
    bio: <p>
    a B.Tech Computer Science student at 
  <b> ITM (SLS) Baroda University</b>. Growing up in Gujarat, I've always been 
  curious about technology and how it shapes the world around us. That curiosity 
  turned into passion, and today I enjoy learning, experimenting, and improving 
  my skills in the field of programming and software development.
  <br /><br />
  I love working on <b>web development</b> and <b>software engineering</b>, 
  exploring both the creative side of design and the logical side of coding. 
  For me, programming is not just about solving problems, but also about creating 
  meaningful experiences and continuously learning new ways to innovate.
  <br /><br />
  Outside the world of code, I enjoy exploring new ideas, keeping up with tech 
  trends, and finding inspiration in everyday experiences. I believe in growth 
  through curiosity, creativity, and consistency — values that drive me forward 
  as I build my career in technology.
</p>
,
    skills:
        {
            proficientWith: ['javascript', 'react','java', 'git', 'github', 'bootstrap', 'html5', 'css3', 'figma'],
            exposedTo: ['nodejs', 'python', 'opencv','expressjs']
        }
    ,
   
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "Carbon Certificate Management System",
            using : "SAP ABAP",
             //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "report.pdf", 
            Download,// this should be a link to the **repository** of the project, where the code is hosted.
            image: mock1
        },
        {
            title: "Property Management System",
            using:"MERN Stack",
            
            source: "https://github.com/Dhruvaa23/Property_Managementt",
            image: mock2
        },
        {
            title: "Cheating Servillience System",
            using:"OPEN CV",
            
            source: "https://github.com/Dhruvaa23/Real-Time-Cheating-Detection-System-",
            image: mock3
        },
        {
            title: "Food Order App",
            using :"MERN Stack",
            
            source: "https://youtu.be/XcXZ8Iso4jE",
            image: mock4
        },
        {
            title: "Multipurpose Chatbot",
            using :"SAP Waston Studio",
           
            source: "https://youtu.be/UOdhLbUy7as",
            image: mock5
        }
    ]
}