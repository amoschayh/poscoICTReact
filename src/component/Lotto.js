import { useState } from 'react';
let count = 0;
let index = 0;
function App() {
  const [students, setStudents] =useState(new Array(45).fill(1).map((data,i)=>{  
    return i+1                      //1 ~45까지
  })); 
  const [teams,setTeams] = useState([[],[],[],[],[],[]]);  //6자리
  const max = 6;  //최대 6숫자

  const pickStudentRandom = ()=>{
    const randomStudent = parseInt(Math.random()*students.length-1);  // 0~1에 실수 중 45를 곱하여 1~ 45까지의 랜덤 숫자를 0~ 44까지의 인덱스
    pickStudent(students[randomStudent])  // 
  }
  const pickStudent =(i)=>{
    setStudents(students.filter(data=>data!==i));  //중복 숫자 안뽑히게
    if(count===max) {
      index = index+1;
      count = 0;
    } 
    const newTeams = [...teams];
    newTeams[index].push(i);
    setTeams(newTeams)
    count = count+1;
  } 
  return (
    <div className="App">
      <table>
        {teams.map((team,i)=>(
        <tr>
          <td>{team.map(student=>`${student},`)}</td>
        </tr>
        ))}
        
      </table>
          <button onClick={pickStudentRandom}>추첨</button>
    </div>
  );
}

export default App;