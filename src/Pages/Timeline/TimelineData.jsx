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
        "With my college career being over, and limitless opportunities ahead of me I decieded to get back to working on my Website I Rearranged the format of everything added a new Sidebar and Color Scheme and made some whiteboard drawings of some ideas that I had",
      date: "December 18th",
      icon: <Heart/>,
    },
    {
      id: 6,
      title: "Timeline",
      location: "Rochester Hills, Michigan (My house)",
      description:
        "Today I worked on the timeline feature. Spent way too much time figuring out what a svg is and how to move it, until realizing I just had to add css to the div sorrounding the svg instead of the svg itself. Tommorow I am going to spend the day refactoring my CSS to syled components I came to this conclusion while looking up how to keep style between web and mobile.",
      date: "December 21st",
      icon: <Heart/>,
    },
    {
        id: 7,
        title: "Styled Components",
        location: "Rochester Hills, Michigan (My house)",
        description:
          "Got Started a little late today. Watched too many tik toks and was not feeling very powered. Did not have breakfast and ate pretty bad early in the day. I used /etc/hosts to block instagram and facebook on my laptop. '127.0.0.1  www.instagram.com' is how i did it. After I got started I created a sandbox tab. In the sandbox tab I followed along a youtube video about making a neon button in which I learned some very interesting things about 3d designing with CSS that i did not even know was possible. I also Redid the Topbar which is now named Navbar and the application today is much more friendly to different Sized Browsers, I also followed along a youtube tutorial to make a neon button and learned some of the 3d capabilities of CSS, I am excited to explore some more.",
        date: "December 22nd",
        icon: <Heart/>,
    },
    {
      id: 8,
      title: "Heroku Deployment",
      location: "Rochester Hills, Michigan (My house)",
      description:
      "I decided that I needed to prove to the world beyond my resume that I have abilities to do things, so even with a non-complete website I thought being able to deploy and show what I had worked atleast would show I have some skills and am devoted to improving them. Deploying on Heroku was a little tough the main roadblock I eventually found out was that I was running out of memory. I realized a few things, there is a way to create larger space on the heroku app by using the command 'heroku config:set NODE_OPTIONS='--max_old_space_size=2560' -a [app_name]' That changed my error to a timeout error and at this point I realized I was deploying in a development environment which I fixed by changing my start script in package.json from react-scripts start to serve -s build"
      ,
      date: "January 9th",
      icon:<Heart/>,
    }
  ];
  