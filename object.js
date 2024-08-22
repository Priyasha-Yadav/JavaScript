console.log("Welcome")

const id = {
    user: "XYZ",
    isfollow: false,
    posts: 190,
    followers: 569000,
    following: 4,
    occupation: "Entrepreneur",
    bio: "Shoot for the moon, even if your miss you'll land among the stars."

};



////




let Book = new Object({
  Title: 'Ikegai',
  Author: 'x'
});
console.log(Book.Title);

let StudentProfile=[{student_name:"Blane", StudentAge: 21, location:'Ahmedabad',
  hobbies:'Shooting'
},
{student_name:"Nicolas", StudentAge: 20, location:'Surat',
  hobbies:'Gardening'},
  {student_name:"Arion", StudentAge: 19, location:'Vadodara',
    hobbies:{hobby1:'Cooking' ,hobby2:'Singing'}},
    {student_name:"Aziza", StudentAge: 18, location:'Vapi',
      hobbies:{hobby1:'Listening to music',hobby2:'Dancing'}}]
      
      console.log(StudentProfile)
      //console.log(StudentProfile['cohort_name']);
      
//   let StudentProfile={student_name:"Blane", StudentAge: 21, location:'Ahmedabad',
//     hobbies:['Shooting','Listening to music'], cohort_name: 'CG'}
    
//     console.log(StudentProfile)
    
//   console.log(StudentProfile.student_name)
let obj = { one: 1, two: 2, four:4 ,three: 3 };

let { one, two, three } = obj;

console.log(three);   
