const referenceTable = document.querySelector(".pain");

const references = [
  {
    sl1: 1,
    name1 : "Daiyan Chowdhury",
        designation1 : "Mobile Repair Technician & Rising Entrepreneur, Arizona, USA",
        image1 : "",
        message1 : "Rafat built many websites together with me for many different clients. We also built Dhaka Guide website together to help people find their desired places in Dhaka. He has many innovative ideas regarding the absurd ideas I come up with.",
        

        sl2:2,
        name2 : "Al Jobaed",
        designation2 : "Senior Software Engineer, HawarIT, Bangladesh", 
        image2: "",
        message2 : "I worked with Sadat bhai in multiple projects and he was a great team player & very pleasant to work with. He also has great domain knowledge in the field of Revit and BIM." ,
    },

    {
        sl1:3,
        name1 : "Mohammad Abdullah Al Prince",
        designation1 : "Team Lead & Software Architect, HawarIT, Bangladesh",
        image1 : "",
        message1 : "Sadat worked under my leadership in multiple projects. He is a quick learner and has a good understanding of the technologies he works with. We worked together with Azure technologies to troubleshoot and fix the issues on production and he did a great job.",
        

        sl2:4,
        name2 : "Professor Dr. Hasanul Kabir",
        designation2 : "Professor & Head, Department of CSE, IUT, Bangladesh",
        image2 : "",
        message2 : "Rafat worked under my supervision for Computer Vision Lab where he did his thesis in Image Super Resolution. His research on Image Super Resolution explored many different models in multiple fields. He has a good understanding of Deep Learning algorithsm especially in the field of Computer Vision.",
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
