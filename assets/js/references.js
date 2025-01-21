const referenceTable = document.querySelector(".pain");

const references = [
  {
    sl1: 1,
    name1 : "Daiyan Chowdhury",
        designation1 : "Technician, Arizona, USA",
        image1 : "",
        message1 : "Rafat built many websites for me.",
        

        sl2:2,
        name2 : "Al Jobaed",
        designation2 : "Senior Software Engineer, HawarIT, Bangladesh", 
        image2: "",
        message2 : "I worked with Sadat bhai in multiple projects and he was a great team player. He is a quick learner and has a good understanding of the technologies he works with. He is a good problem solver and has a good understanding of the fundamentals of programming.",
    },

    {
        sl1:3,
        name1 : "Mohammad Abdullah Al Prince",
        designation1 : "Team Lead & Software Architect, HawarIT, Bangladesh",
        image1 : "",
        message1 : "Sadat worked under my leadership in multiple projects. He is a quick learner and has a good understanding of the technologies he works with. He is a good problem solver and has a good understanding of the fundamentals of programming.",
        

        sl2:4,
        name2 : "Professor Dr. Hasanul Kabir",
        designation2 : "Professor & Head, Department of CSE, IUT, Bangladesh",
        image2 : "",
        message2 : "Rafat worked under my supervision for Computer Vision Lab where he did his thesis in Image Super Resolution. He is a hardworking and dedicated student. He has a good understanding of the fundamentals of programming and has a good problem-solving skill.",
  },
];

AOS.init();
const fillData = () => {
  let output = "";

  references.forEach(
    ({
      sl1,
      image1,
      name1,
      designation1,
      message1,
      absbox_for_linkedin1,
      sl2,
      image2,
      name2,
      designation2,
      message2,
      absbox_for_linkedin2,
    }) =>
      (output += `<tr data-aos="zoom-in-left"> 
                <td class="imgCol"><img src="${image1}" class="rImg"></td>
                <td class = "referenceTitleName">
                    <div>
                        <span class="imgResponsive">
                            <img src="${image1}" class="imgRes">
                        </span>
                    </div>
                    <img src="https://img.icons8.com/fluency/48/000000/quote-left.png"/>
                    <a href="#0" class="paperTitle"> ${name1} </a> 
                    <div> ${designation1} </div> <div class="rConferences">  
                        <div class="referenceY">${message1}</div>
                    </div>  
                </td>
            </tr> 
            
            <tr data-aos="zoom-in-left"> 
                       
                        <td class = "referenceTitleName">
                            <div>
                                <span class="imgResponsive">
                                    <img src="${image2}" class="imgRes">
                                </span>
                            </div>
                            <img src="https://img.icons8.com/fluency/48/000000/quote-left.png"/>
                            <a href="#0" class="paperTitle">${name2} </a> 
                            <div> ${designation2} </div> <div class="rConferences">
                                <div class="referenceY">${message2}</div>
                            </div>
                
                            
                            
                           
                        </td>
                        <td class="imgCol"><img src="${image2}" class="rImg1"></td>
                    </tr>`)
  );
  referenceTable.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", fillData);
