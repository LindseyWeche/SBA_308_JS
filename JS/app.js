const CourseInfo = {
    id: 301,
    name: "Introduction to Cultural Psychology",
};

const AssignmentGroup = {
    id: 10177,
    name: "Fundamentals of JavaScript",
    course_id: 301,
    group_weight: 25,
    assignments: [
      {
        id: 1,
        name: "Haitian History",
        due_at: "2023-01-25",
        points_possible: 50,
      },
      {
        id: 2,
        name: "Cultural Anthropology",
        due_at: "2023-03-20",
        points_possible: 100,
      },
      {
        id: 3,
        name: "Superstition & Schema",
        due_at: "2023-04-26",
        points_possible: 150,
      },
      {
        id: 4,
        name: "Religion vs Beliefs",
        due_at: "3156-11-15",
        points_possible: 500,
      }
    ]
  };
 

const newPoints = AssignmentGroup.assignments.map((point) => point.points_possible)
// console.log(newPoints);
const finalPoints = newPoints.splice (3,1)
// Using .splice to remove the last item by indexing because it's not due yet
// console.log(finalPoints);
const TotalnewPoints = newPoints.reduce((acc, curr) => acc + curr)
  console.log ("The Total of Points for these four modules is :",TotalnewPoints)
//  Apply map method to have a new array for all the points_possible in newPoints and reduce to have a single number (the sum)

//   The provided learner submission data.
const LearnerSubmissions = [
    {
      learner_id: 125,
      assignment_id: 1,
      submission: {
        submitted_at: "2023-01-25",
        score: 47
      }
    },
    {
      learner_id: 125,
      assignment_id: 2,
      submission: {
        submitted_at: "2023-03-12",
        score: 150
      }
    },
    {
      learner_id: 125,
      assignment_id: 3,
      submission: {
        submitted_at: "2023-04-25",
        score: 400
      }
    },
    {
      learner_id: 132,
      assignment_id: 1,
      submission: {
        submitted_at: "2023-01-24",
        score: 39
      }
    },
    {
      learner_id: 132,
      assignment_id: 2,
      submission: {
        submitted_at: "2023-04-07",
        score: 140
      }
    }
  ];



// const score125 = LearnerSubmissions[2]
// if (LearnerSubmissions.learner_id===125);{
// return sum +score125
// for (let i=0; i<LearnerSubmissions.length; i++);
// console.log(score125[i]);
// }

// }
// LearnerSubmissions.forEach(function(submission){
//     let x = submission.score ++;
//     console.log(x);
// });

const score125 = LearnerSubmissions.map((submission) => submission.score)
// console.log(score125)

// Trying to access the score on this array of object to calculate the score for each student
const avg125 = score125 / TotalnewPoints
   if (AssignmentGroup.assignments.due_at <= LearnerSubmissions.submission.submitted_at && LearnerSubmissions.learner_id===125) {
        return avg125 ;
  else {
       return score125;
   }
    }


const remove =  LearnerSubmissions.slice(3);LearnerSubmissions.slice(4)
console.log(remove)
// Now I have the data of the Learner 2
let sum = 0;
const score132 = LearnerSubmissions.submission.reduce((sum,submission));
console.log (sum + submission.submission.score)
// The main problem I'm comfronting is I can't access score 









  function getLearnerData(course, ag, submissions) {
    // here, we would process this data to achieve the desired result.
    const result = [
      {
        id: 125,
        avg: 0.985, // (47 + 150) / (50 + 150)
        1: 0.94, // 47 / 50
        2: 1.0 // 150 / 150
      },
      {
        id: 132,
        avg: 0.82, // (39 + 125) / (50 + 150)
        1: 0.78, // 39 / 50
        2: 0.833 // late: (140 - 15) / 150
      }
    ];
  
    return result;
  }
  
  const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);
  
  console.log(result);
  
  