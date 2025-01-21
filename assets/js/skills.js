AOS.init();

//  Tech Stacks cards

const techStackCards = document.querySelector(".techstack-box");
const techStack = [
  {
    langImage: "assets/images/techstack-page/csharp.png",
    langName: "C#",
    langDesc: "<li>C# is a general-purpose, multi-paradigm programming language encompassing strong typing, lexically scoped, imperative, declarative, functional, generic, object-oriented, and component-oriented programming disciplines.</li>",
  },
  {
    langImage: "assets/images/techstack-page/dotnet.png",
    langName: ".NET",
    langDesc: "<li>.NET is a free, cross-platform, open-source developer platform for building many different types of applications.</li>",
  },
  {
    langImage: "assets/images/techstack-page/blazor.png",
    langName: "Blazor",
    langDesc: "<li>Blazor is a framework for building interactive client-side web UI with .NET.</li>",
  },
  {
    langImage: "assets/images/techstack-page/azure.png",
    langName: "Azure",
    langDesc: "<li>Azure is a cloud computing service created by Microsoft for building, testing, deploying, and managing applications and services through Microsoft-managed data centers.</li>",
  },
  {
    langImage: "assets/images/techstack-page/python.png",
    langName: "Python",
    langDesc: "<li>Python is an interpreted, high-level, general-purpose programming language.</li>",
  },
  {
    langImage: "assets/images/techstack-page/django.avif",
    langName: "Django",
    langDesc: "<li>Django is a high-level Python web framework that encourages rapid development and clean, pragmatic design.</li>",
  },
  {
    langImage: "assets/images/techstack-page/pytorch.png",
    langName: "Pytorch",
    langDesc: "<li>PyTorch is an open source machine learning library based on the Torch library.</li>",
  },
  {
    langImage: "assets/images/techstack-page/typescript.png",
    langName: "Typescript",
    langDesc: "<li>TypeScript is a strict syntactical superset of JavaScript that adds optional static typing to the language.</li>",
  },
  {
    langImage: "assets/images/techstack-page/angular.png",
    langName: "Angular",
    langDesc: "<li>Angular is a platform and framework for building single-page client applications using HTML and TypeScript.</li>",
  },
  {
    langImage: "assets/images/techstack-page/react.png",
    langName: "React",
    langDesc: "<li>React is an open-source, front end, JavaScript library for building user interfaces or UI components.</li>",
  },
  {
    langImage: "assets/images/techstack-page/dart.png",
    langName: "Dart",
    langDesc: "<li>Dart is a client-optimized programming language for apps on multiple platforms.</li>",
  },
  {
    langImage: "assets/images/techstack-page/flutter.png",
    langName: "Flutter",
    langDesc: "<li>Flutter is an open-source UI software development kit created by Google.</li>",
  },
  {
    langImage: "assets/images/techstack-page/git.png",
    langName: "Git",
    langDesc: "<li>Git is a distributed version-control system for tracking changes in source code during software development.</li>",
  },
  {
    langImage: "assets/images/techstack-page/docker.png",
    langName: "Docker",
    langDesc: "<li>Docker is a set of platform as a service products that use OS-level virtualization to deliver software in packages called containers.</li>",
  },
  {
    langImage: "assets/images/techstack-page/node.png",
    langName: "NodeJS",
    langDesc: "<li>Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser.</li>",
  },
  {
    langImage: "assets/images/techstack-page/nestjs.svg",
    langName: "NestJS",
    langDesc: "<li>NestJS is a framework for building efficient, scalable Node.js server-side applications.</li>",
  },
  {
    langImage: "assets/images/techstack-page/sqlserver.png",
    langName: "SQL Server",
    langDesc: "<li>Microsoft SQL Server is a relational database management system developed by Microsoft.</li>",
  },
  {
    langImage: "assets/images/techstack-page/postgresql.png",
    langName: "PostgreSQL",
    langDesc: "<li>PostgreSQL, also known as Postgres, is a free and open-source relational database management system emphasizing extensibility and SQL compliance.</li>",
  },
  {
    langImage: "assets/images/techstack-page/postgis.png",
    langName: "PostGIS",
    langDesc: "<li>PostGIS is an open-source software program that adds support for geographic objects to the PostgreSQL object-relational database.</li>",
  },
  {
    langImage: "assets/images/techstack-page/mongodb.png",
    langName: "MongoDB",
    langDesc: "<li>MongoDB is a source-available cross-platform document-oriented database program.</li>",
  },
  {
    langImage: "assets/images/techstack-page/firebase.png",
    langName: "Firebase",
    langDesc: "<li>Firebase is a platform developed by Google for creating mobile and web applications.</li>",
  },
  {
    langImage: "assets/images/techstack-page/html.png",
    langName: "HTML5",
    langDesc: "<li>HTML5 is a markup language used for structuring and presenting content on the World Wide Web.</li>",
  },
  {
    langImage: "assets/images/techstack-page/css.png",
    langName: "CSS3",
    langDesc: "<li>CSS3 is the latest evolution of the Cascading Style Sheets language and aims at extending CSS2.</li>",
  },
  {
    langImage: "assets/images/techstack-page/bootstrap.png",
    langName: "Bootstrap",
    langDesc: "<li>Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development.</li>",
  },
  {
    langImage: "assets/images/techstack-page/tailwind.png",
    langName: "Tailwind",
    langDesc: "<li>Tailwind CSS is a utility-first CSS framework for rapidly building custom user interfaces.</li>",
  },
  {
    langImage: "assets/images/techstack-page/radzen.svg",
    langName: "Radzen",
    langDesc: "<li>Radzen is a rich design component library for creating Blazor components quickly.</li>",
  },
  {
    langImage: "assets/images/techstack-page/materialui.png",
    langName: "MaterialUI",
    langDesc: "<li>Material-UI is a set of React components that implement Google's Material Design specification.</li>",
  },
  {
    langImage: "assets/images/techstack-page/figma.avif",
    langName: "Figma",
    langDesc: "<li>Figma is a vector graphics editor and prototyping tool which is primarily web-based.</li>",
  }
]    
const displayTechStacksCards = () => {
  const entireCardTemplate =
  techStack.map((stack)=> {
      return `        
    <div class="row page-content techstackcards" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="0" data-aos-duration="400"> 
        <div class="tech_card">
            <div class="card_img">
                <img src ="${stack.langImage}" class="featured_image">
            </div>
            <div class="card_header">
                <header>
                    <div class="text-center langName">
                        <h4>${stack.langName}</h4>
                    </div>
                </header>
                <ul class="description">
                ${stack.langDesc}
            </ul>
            </div>
        </div>
    </div>
      `}).join('');
  techStackCards.innerHTML = entireCardTemplate;
};
// displayTechStacksCards(techStack)
document.addEventListener("DOMContentLoaded", displayTechStacksCards);
