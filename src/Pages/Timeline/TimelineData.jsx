import Heart from "./Heart"
export const timelineElements = [
    {
      id: 1,
      title: "Time at Norma Group",
      location: "Auburn Hills, Michigan",
      description:
        "During my Internship at Norma Group I worked closely with the Director of Research and Development on a Flask, React Web application. I worked a lot on my own as I was the only Computer Science Focused employee working on the project. This Experience helped me realize what it takes to create and learn in an independent environment. The Internship also gave me a big boost in confidence as I finally was able to see how all my knowledge obtained at Michigan State University could be applied. It also gave me an Idea of how I could possibly create web applications as I found out how backend, frontend and Databases interact as well as how to host them on Microsoft Azure ",
      date: "July 2021 - September 2021",
      icon: <Heart/>,
    },
    {
      id: 2,
      title: "Capstone Project-(Lockheed Martin Space)",
      location: "East Lansing, Michigan",
      description:
        "The Most Interesting Class I had at Michigan State was my Capstone. My Capstone had me working directly with members of Lockheed Martin Space out of Colorado. The project my team and I were assigned was working on an web application Appstore for their satellites. The tech stack for the application was Flask, React, Docker, Jenkins, PostgreSQL, Nexus Repository Manager, Conan C++ Package Manager. I had alot of fun working on this project with my team often spending 40+ hours in the lab, It felt like a real job which I liked alot. I learned alot from my peers on this project that made me excited to begin my career as well as work on my won personal projects, thus this website came into existence.",
      date: "September 2021 - December 2021",
      icon: <Heart/>,
    },
    {
      id: 3,
      title: "Creation of this Website",
      location: "East Lansing, Michigan",
      description:
        "In November of 2021, with a recent boost in confidence for my Programming abilities I decieded I needed to start working on a project of my own. I Opened up a new project in Visual Studio Code, setup a Flask Backend and React Frontend, and a Free Azure Web Server.",
      date: "November 2021",
      icon: <Heart/>,
    },
    {
      id: 5,
      title: "A new beginning",
      location: "East Lansing, Michigan",
      description:
        "With my college career being over, and limitless opportunities ahead of me I decided to get back to working on my website. I rearranged the format of everything and added a new sidebar and color scheme. I also made some whiteboard drawings of some ideas that I had.",
      date: "December 18th",
      icon: <Heart/>,
    },
    {
      id: 6,
      title: "Timeline",
      location: "Rochester Hills, Michigan (My house)",
      description:
        "Today I worked on the timeline feature. I Spent way too much time figuring out what a svg is and how to move it, until realizing I just had to add CSS to the div surrounding the svg instead of the svg itself. Tomorrow I am going to spend the day refactoring my CSS to styled components. I came to this conclusion while looking up how to keep style between web and mobile.",
      date: "December 21st",
      icon: <Heart/>,
    },
    {
        id: 7,
        title: "Styled Components",
        location: "Rochester Hills, Michigan (My house)",
        description:
          "Got Started a little late today. Watched too many tik toks and was not feeling very powered, did not have breakfast and ate pretty bad early in the day. I used /etc/hosts to block instagram and facebook on my laptop. The command '127.0.0.1  www.instagram.com' transfers any attempt to reach instagram with localhost. Afterwards, I created a sandbox tab. In the sandbox tab, I followed along a youtube video about making a neon button in which I learned some very interesting things about 3D designing with CSS that I didn't even know were possible. I also redid the Top Bar which is now named Navbar and the application today is much more friendly to different sized browsers.",
        date: "December 22nd",
        icon: <Heart/>,
    },
    {
      id: 8,
      title: "Heroku Deployment",
      location: "Rochester Hills, Michigan (My house)",
      description:
      "Today, I decided to deploy my website. I do not have money to spend, and the website right now is not too heavy, so I decided to go with a free hosting service. I landed on Heroku. Deploying on Heroku was a little tough, the main roadblock I eventually discovered, I was running out of memory. I realized a few things, there is a way to create larger space on the Heroku app by using the command 'heroku config:set NODE_OPTIONS='--max_old_space_size=2560' -a [app_name]' This changed my error to a timeout error and at this point I realized I was deploying in a development environment. I fixed this by changing my start script in package.json from react-scripts start to serve -s build"
      ,
      date: "January 9th",
      icon:<Heart/>,
    }
  ];
  