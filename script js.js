
var resumedetails = {
    name: "SACHIN DAS",
    location:"VIKHROLI",
    emailId: "sdas66479@gmail.com",
    contacts: 7400259385,
   summary: "Educated and highly motivated computer engineering graduate with afoundation in software development,proficient in multiple programming languages including python c++ and java Experience in colleges,project-based learning with a focus on developing innovative solutions through teamwork and independent,projects",
        
   workExperience: "2 years in sales , 1 year in process associate",
    education: [
        {
            college: "vidya mandir",
            course_college: "S.S.C",
            course_complete_at: "2016",
            course_score: "56",
            course_score_unit: "%",
            course_duration: {
                from: "2015",
                to: "2016"
            }
        },
        {
            college: "vikas college of science,arts and commerce",
            course_college: "H.S.C",
            course_complete_at: "2018",
            course_score: "45",
            course_score_unit: "%",
            course_duration: {

                from: "2018",
                to: "2019"
            },
        },
        {
            college: "vikas college of science,arts and commerce",
            course_college: "B.com",
            course_complete_at: "2022",
            course_score: "7.3",
            course_score_unit: "CGPA",
            course_duration: {
                from: "2021",
                to: "2022"

            },
        }
    ],


    skills: [
        "html",
        "css",
        "js"
    ],
    personalInformation: [{
        DateofBirth: new Date("8/8/2001"),
        Nationality: "INDIAN",
        GENDER: "MALE"

    }
    ]



}
console.log("                                "+resumedetails.name);
console.log("                                 "+resumedetails.location);
console.log("                             "+ resumedetails.emailId);
console.log("                                " + resumedetails.contacts);
console.log("=============================================================================");
console.log("SUMMARY");
console.log(resumedetails.summary);
console.log("===========================================================================");
console.log("WORK EXPERIENCE :-");
console.log("     ");
console.log(". "+ resumedetails.workExperience);
console.log("==============================================================================");
console.log("EDUCATION :-");
console.log("SCHOOL  : " + resumedetails.education[0].college);
console.log("EDUCATION : " + resumedetails.education[0].course_college);
console.log("COMPLETED YEAR : " + resumedetails.education[0].course_complete_at);
console.log("PERCENTAGE : " + resumedetails.education[0].course_score);
console.log("COLLEGE DURATION : " + resumedetails.education[0].course_duration.from);
console.log("to " + resumedetails.education[0].course_duration.to);
console.log("               ");
console.log("COLLEGE NAME :   " + resumedetails.education[1].college);
console.log("EDUCATION : " + resumedetails.education[1].course_college);
console.log("COMPLETED YEAR : " + resumedetails.education[1].course_complete_at);
console.log("PERCENTAGE  : " + resumedetails.education[1].course_score);
console.log("COLLEGE DURATION : " + resumedetails.education[1].course_duration.from);
console.log("to " + resumedetails.education[1].course_duration.to);
console.log("                           ")
console.log("COLLEGE NAME : " + resumedetails.education[2].college);
console.log("EDUCATION :  " + resumedetails.education[2].course_college);
console.log("COMPLETED YEAR  " + resumedetails.education[2].course_complete_at);
console.log("PERCENTAGE :  " + resumedetails.education[2].course_score);
console.log("MY UNIT : " + resumedetails.education[2].course_score_unit);
console.log("COLLEGE DURATION : " + resumedetails.education[2].course_duration.from);
console.log("to " + resumedetails.education[2].course_duration.to);
console.log("==============================================================================");
console.log("MY SKILLS :-");
console.log("  ");
console.log(""+resumedetails.skills);
console.log("===============================================================================");
console.log("D.O.B. =  " + resumedetails.personalInformation[0].DateofBirth);
console.log("NATIONALITY :  " + resumedetails.personalInformation[0].Nationality);
console.log("GENDER :  " + resumedetails.personalInformation[0].GENDER);





    











    