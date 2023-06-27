///<reference types="cypress"/>

describe('Submit Assignment', function () {
   
    const arr = [
        {
          "userid": "aachman",
          "password": "praveen"
        },
        {
          "userid": "aadamya",
          "password": "praveen"
        },
        {
          "userid": "aadarsh",
          "password": "praveen"
        },
        {
          "userid": "aadhavan",
          "password": "praveen"
        },
        {
          "userid": "aadhyatm",
          "password": "praveen"
        },
        {
          "userid": "aadi2",
          "password": "praveen"
        },
        {
          "userid": "badrinarayanan",
          "password": "praveen"
        },
        {
          "userid": "bagira",
          "password": "praveen"
        },

        {
          "userid": "karan3",
          "password": "praveen"
        },
        {
          "userid": "kiaan",
          "password": "praveen"
        },
        {
          "userid": "krish2",
          "password": "praveen"
        },
        {
          "userid": "krishna4",
          "password": "praveen"
        },
        {
          "userid": "kshatragna",
          "password": "praveen"
        },
        {
          "userid": "laban1",
          "password": "praveen"
        },
        {
          "userid": "laksh",
          "password": "praveen"
        },
        {
          "userid": "lakshit",
          "password": "praveen"
        },
        {
          "userid": "lohit",
          "password": "praveen"
        },
        {
          "userid": "lucky3",
          "password": "praveen"
        },
        {
          "userid": "maanas",
          "password": "praveen"
        },
        {
          "userid": "maanav1",
          "password": "praveen"
        },
        {
          "userid": "madhav",
          "password": "praveen"
        },
        {
          "userid": "manan",
          "password": "praveen"
        },
        {
          "userid": "manbir",
          "password": "praveen"
        },
        {
          "userid": "manthan",
          "password": "praveen"
        },
        {
          "userid": "mitesh",
          "password": "praveen"
        },
        {
          "userid": "mohammed9",
          "password": "praveen"
        },
        {
          "userid": "mullinti",
          "password": "praveen"
        },
        {
          "userid": "nachiket",
          "password": "praveen"
        },
        {
          "userid": "naksh",
          "password": "praveen"
        },
        {
          "userid": "naveen1",
          "password": "praveen"
        },
        {
          "userid": "nayanesh",
          "password": "praveen"
        },
        {
          "userid": "neel1",
          "password": "praveen"
        },
        {
          "userid": "nihal",
          "password": "praveen"
        },
        {
          "userid": "nihant",
          "password": "praveen"
        },
        {
          "userid": "nitesh",
          "password": "praveen"
        },
        {
          "userid": "ojas",
          "password": "praveen"
        },
        {
          "userid": "om119",
          "password": "praveen"
        },
        {
          "userid": "omkaar",
          "password": "praveen"
        },
        {
          "userid": "onkar",
          "password": "praveen"
        },
        {
          "userid": "onveer",
          "password": "praveen"
        },
        {
          "userid": "orinder",
          "password": "praveen"
        },
        {
          "userid": "parth",
          "password": "praveen"
        },
        {
          "userid": "prajith",
          "password": "praveen"
        },
        {
          "userid": "pranav1",
          "password": "praveen"
        },
        {
          "userid": "praneel",
          "password": "praveen"
        },
        {
          "userid": "pranit",
          "password": "praveen"
        },
        {
          "userid": "pratyush",
          "password": "praveen"
        },
        {
          "userid": "qabil",
          "password": "praveen"
        },
        {
          "userid": "qadim",
          "password": "praveen"
        },
        {
          "userid": "qarin",
          "password": "praveen"
        },
        {
          "userid": "qasim",
          "password": "praveen"
        },
        {
          "userid": "rachit",
          "password": "praveen"
        },
        {
          "userid": "raghav1",
          "password": "praveen"
        },
        {
          "userid": "rajasekaran",
          "password": "praveen"
        },
        {
          "userid": "ranbir",
          "password": "praveen"
        },
        {
          "userid": "ranveer",
          "password": "praveen"
        },
        {
          "userid": "rayaan",
          "password": "praveen"
        },
        {
          "userid": "rehaan",
          "password": "praveen"
        },
        {
          "userid": "reshvind",
          "password": "praveen"
        },
        {
          "userid": "reyansh",
          "password": "praveen"
        },
        {
          "userid": "rishi4",
          "password": "praveen"
        },
        {
          "userid": "rohan5",
          "password": "praveen"
        },
        {
          "userid": "ronith",
          "password": "praveen"
        },
        {
          "userid": "rudra1",
          "password": "praveen"
        },
        {
          "userid": "rushil1",
          "password": "praveen"
        },
        {
          "userid": "ryan98",
          "password": "praveen"
        },
        {
          "userid": "sai",
          "password": "praveen"
        },
        {
          "userid": "saksham",
          "password": "praveen"
        },
        {
          "userid": "samaksh",
          "password": "praveen"
        },
        {
          "userid": "samar1",
          "password": "praveen"
        },
        {
          "userid": "samarth",
          "password": "praveen"
        },
        {
          "userid": "samesh",
          "password": "praveen"
        },
        {
          "userid": "sarthak1",
          "password": "praveen"
        },
        {
          "userid": "sathvik1",
          "password": "praveen"
        },
        {
          "userid": "shaurya",
          "password": "praveen"
        },
        {
          "userid": "shivansh",
          "password": "praveen"
        },
        {
          "userid": "siddharth16",
          "password": "praveen"
        },
        {
          "userid": "sridhara",
          "password": "praveen"
        },
        {
          "userid": "srivasthav",
          "password": "praveen"
        },
        {
          "userid": "student5111",
          "password": "praveen"
        },
        {
          "userid": "student5112",
          "password": "praveen"
        },
        {
          "userid": "student5113",
          "password": "praveen"
        },
        {
          "userid": "tanay",
          "password": "praveen"
        },
        {
          "userid": "tanish",
          "password": "praveen"
        },
        {
          "userid": "tanveer",
          "password": "praveen"
        },
        {
          "userid": "tarak2",
          "password": "praveen"
        },
        {
          "userid": "teerth",
          "password": "praveen"
        },
        {
          "userid": "tejas1",
          "password": "praveen"
        },
        {
          "userid": "thanvye",
          "password": "praveen"
        },
        {
          "userid": "udant",
          "password": "praveen"
        },
        {
          "userid": "udarsh",
          "password": "praveen"
        },
        {
          "userid": "umang",
          "password": "praveen"
        },
        {
          "userid": "upkaar",
          "password": "praveen"
        },
        {
          "userid": "utkarsh1",
          "password": "praveen"
        },
        {
          "userid": "vedant1",
          "password": "praveen"
        },
        {
          "userid": "veer",
          "password": "praveen"
        },
        {
          "userid": "vihaan1",
          "password": "praveen"
        },
        {
          "userid": "viraj",
          "password": "praveen"
        },
        {
          "userid": "vishu",
          "password": "praveen"
        },
        {
          "userid": "vivaan",
          "password": "praveen"
        },
        {
          "userid": "wahab",
          "password": "praveen"
        },
        {
          "userid": "warinder",
          "password": "praveen"
        },
        {
          "userid": "warjas",
          "password": "praveen"
        },
        {
          "userid": "wazir",
          "password": "praveen"
        },
        {
          "userid": "wriddhish",
          "password": "praveen"
        },
        {
          "userid": "wridesh",
          "password": "praveen"
        },
        {
          "userid": "yagnesh",
          "password": "praveen"
        },
        {
          "userid": "yash1",
          "password": "praveen"
        },
        {
          "userid": "yatan",
          "password": "praveen"
        },
        {
          "userid": "yatin",
          "password": "praveen"
        },
        {
          "userid": "yug",
          "password": "praveen"
        },
        {
          "userid": "yuvraj",
          "password": "praveen"
        },
        {
          "userid": "zaid1",
          "password": "praveen"
        },
        {
          "userid": "zashil",
          "password": "praveen"
        },
        {
          "userid": "zayan",
          "password": "praveen"
        },
        {
          "userid": "zayyan",
          "password": "praveen"
        },
        {
          "userid": "zehaan",
          "password": "praveen"
        }
       ]
      
      // for loop
     // for (let i = 0; i < data.length; i++) {
        ///<reference types="cypress"/>

        it('Sign as student', () => {
 
    cy.visit('http://edtest70.edcite-dev.com/go?lang=en-us')

    for (var index in arr) {
        cy.get('.userid > .form-control').type(arr[index].userid)
        cy.get('.password > .form-control').type(arr[index].password)    
        cy.get(':nth-child(12) > .btn').click()
        cy.wait(6000)
        cy.get('.user-icons > :nth-child(1) > .MuiIconButton-label-46 > .fas').click()
        cy.wait(2000)
        cy.get('.MuiButton-textSecondary-321 > .MuiButton-label-318').click()
        cy.wait(3000)
    }
  
 })
  
 });