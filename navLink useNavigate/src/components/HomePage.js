import React, { useRef } from 'react'

function HomePage() {

    let stuNameInputRef=useRef();
    let parentNameInputRef=useRef();
    let gaurdianNameInputRef=useRef();

    let eng1MarksInputRef=useRef();
    let sans1MarksInputRef= useRef();
    let mathsA1MarksInputRef= useRef();
    let mathsB1MarksInputRef= useRef();
    let phy1MarksInputRef= useRef();
    let chem1MarksInputRef= useRef();

    let eng2MarksInputRef=useRef();
    let sans2MarksInputRef= useRef();
    let mathsA2MarksInputRef= useRef();
    let mathsB2MarksInputRef= useRef();
    let phy2MarksInputRef= useRef();
    let chem2MarksInputRef= useRef();
    let phyPracInputRef=useRef();
    let chemPracInputRef=useRef();

    let eng1MarksSpanRef=useRef();
    let sans1MarksSpanRef= useRef();
    let mathsA1MarksSpanRef= useRef();
    let mathsB1MarksSpanRef= useRef();
    let phy1MarksSpanRef= useRef();
    let chem1MarksSpanRef= useRef();


    let eng2MarksSpanRef=useRef();
    let sans2MarksSpanRef= useRef();
    let mathsA2MarksSpanRef= useRef();
    let mathsB2MarksSpanRef= useRef();
    let phy2MarksSpanRef= useRef();
    let chem2MarksSpanRef= useRef();
    let phyPracSpanRef=useRef();
    let chemPracSpanRef=useRef();

    let tot1MarksParaRef=useRef();
    let tot2MarksParaRef=useRef();
    let result12ParaRef=useRef();
    let result12ParaRef2=useRef();

 let onBlurSpan100Marks= (inputRef,spanRef)=>{
    if(inputRef.current.value < 0 || inputRef.current.value>99)
    {
        inputRef.current.value="";
        inputRef.current.style.backgroundColor="";
    }
    else if(inputRef.current.value>=35)
    {
        spanRef.current.innerHTML="PASS";
        spanRef.current.style.backgroundColor="lightgreen";
    }
    else
    {
        spanRef.current.innerHTML="FAIL";
        spanRef.current.style.backgroundColor="red";
    }
    
    if(inputRef.current.value == "")
    {
        spanRef.current.innerHTML="Enter your marks";
        spanRef.current.style.backgroundColor="lightblue";
    }
}


let onBlurSpan75Marks= (inputRef,spanRef)=>{
    if(inputRef.current.value < 0 || inputRef.current.value>75)
    {
        inputRef.current.value="";
        inputRef.current.style.backgroundColor="";
    }
    else if(inputRef.current.value>=26.25)
    {
        spanRef.current.innerHTML="PASS";
        spanRef.current.style.backgroundColor="lightgreen";
    }
    else
    {
        spanRef.current.innerHTML="FAIL";
        spanRef.current.style.backgroundColor="red";
    }
    
    if(inputRef.current.value == "")
    {
        spanRef.current.innerHTML="Enter your marks";
        spanRef.current.style.backgroundColor="lightblue";
    }
}


let onBlurSpan60Marks= (inputRef,spanRef)=>{
    if(inputRef.current.value < 0 || inputRef.current.value>60)
    {
        inputRef.current.value="";
        inputRef.current.style.backgroundColor="";
    }
    else if(inputRef.current.value>=21)
    {
        spanRef.current.innerHTML="PASS";
        spanRef.current.style.backgroundColor="lightgreen";
    }
    else
    {
        spanRef.current.innerHTML="FAIL";
        spanRef.current.style.backgroundColor="red";
    }
    
    if(inputRef.current.value == "")
    {
        spanRef.current.innerHTML="Enter your marks";
        spanRef.current.style.backgroundColor="lightblue";
    }
}


let onBlurSpan30Marks= (inputRef,spanRef)=>{
        if(inputRef.current.value < 0 || inputRef.current.value>30)
            {
                inputRef.current.value="";
                inputRef.current.style.backgroundColor="";
            }
        else if(inputRef.current.value>=10.5)
        {
            spanRef.current.innerHTML="PASS";
            spanRef.current.style.backgroundColor="lightgreen";
        }
        else
        {
            spanRef.current.innerHTML="FAIL";
            spanRef.current.style.backgroundColor="red";
        }
        
        if(inputRef.current.value == "")
            {
                spanRef.current.innerHTML="Enter your marks";
                spanRef.current.style.backgroundColor="lightblue";
            }
}
     
        

let onChangeSpan100Marks=(inputRef)=>{
    if(inputRef.current.value < 0 || inputRef.current.value>99)
    {
        inputRef.current.style.backgroundColor="red";
    }
}

let onChangeSpan75Marks=(inputRef)=>{
    if(inputRef.current.value < 0 || inputRef.current.value>75)
    {
        inputRef.current.style.backgroundColor="red";
    }
}

let onChangeSpan60Marks=(inputRef)=>{
    if(inputRef.current.value < 0 || inputRef.current.value>60)
    {
        inputRef.current.style.backgroundColor="red";
    }
}

let onChangeSpan30Marks=(inputRef)=>{
    if(inputRef.current.value < 0 || inputRef.current.value>30)
    {
        inputRef.current.style.backgroundColor="red";
    }
}


let onClickInter1Tot=()=>{

    // let inter1Marks ={
    //     eng1Marks: Number(eng1MarksInputRef.current.value),
    //     sans1Marks: Number(sans1MarksInputRef.current.value),
    //     mathsA1Marks: Number(mathsA1MarksInputRef.current.value),
    //     mathsB1Marks: Number(mathsB1MarksInputRef.current.value),
    //     phy1Marks: Number(phy1MarksInputRef.current.value),
    //     chem1Marks:Number(chem1MarksInputRef.current.value)
    // }

    // let tot1Marks = inter1Marks.eng1Marks + inter1Marks.sans1Marks + inter1Marks.mathsA1Marks + inter1Marks.mathsB1marks + inter1Marks.phy1Marks + inter1Marks.chem1Marks;

    let eng1Marks=Number(eng1MarksInputRef.current.value);
    let sans1Marks=Number(sans1MarksInputRef.current.value);
    let mathsA1Marks=Number(mathsA1MarksInputRef.current.value);
    let mathsB1Marks=Number(mathsB1MarksInputRef.current.value);
    let phy1Marks=Number(phy1MarksInputRef.current.value);
    let chem1Marks=Number(chem1MarksInputRef.current.value);

    let stuName=stuNameInputRef.current.value;

    let tot1= eng1Marks+sans1Marks+mathsA1Marks+mathsB1Marks+phy1Marks+chem1Marks;
    let perc1= (tot1/470)*100;


    if(eng1Marks == "" || sans1Marks=="" || mathsA1Marks=="" || mathsB1Marks=="" || phy1Marks=="" || chem1Marks=="")
    {
        tot1MarksParaRef.current.innerHTML="Please Enter Your Marks";
        tot1MarksParaRef.current.style.color="darkblue";
    }
    else if(eng1Marks>=35 && sans1Marks>=35 && mathsA1Marks>=26.24 && mathsB1Marks>=26.25 && phy1Marks>=21 && chem1Marks>=21)
    {
        tot1MarksParaRef.current.innerHTML= `${stuName} has scored ${tot1}/470 with ${perc1.toFixed(2)}%`;
        tot1MarksParaRef.current.style.color="green";
    }
    else
    {
        tot1MarksParaRef.current.innerHTML=`${stuName} Promoted`;
        tot1MarksParaRef.current.style.color="red";
    }

}


let onClickInter2Tot=()=>{

    // let inter2Marks ={
    //     eng2Marks: Number(eng2MarksInputRef.current.value),
    //     sans2Marks: Number(sans2MarksInputRef.current.value),
    //     mathsA2Marks: Number(mathsA2MarksInputRef.current.value),
    //     mathsB2Marks: Number(mathsB2MarksInputRef.current.value),
    //     phy2Marks: Number(phy2MarksInputRef.current.value),
    //     chem2Marks:Number(chem2MarksInputRef.current.value)
    // }

    // let tot2Marks = inter2Marks.eng2Marks + inter2Marks.sans2Marks + inter2Marks.mathsA2Marks + inter2Marks.mathsB2marks + inter2Marks.phy2Marks + inter2Marks.chem2Marks;

    let eng2Marks=Number(eng2MarksInputRef.current.value);
    let sans2Marks=Number(sans2MarksInputRef.current.value);
    let mathsA2Marks=Number(mathsA2MarksInputRef.current.value);
    let mathsB2Marks=Number(mathsB2MarksInputRef.current.value);
    let phy2Marks=Number(phy2MarksInputRef.current.value);
    let chem2Marks=Number(chem2MarksInputRef.current.value);
    let phyPracMarks=Number(phyPracInputRef.current.value);
    let chemPracMarks=Number(chemPracInputRef.current.value);

    let stuName=stuNameInputRef.current.value;

    let tot2= eng2Marks+sans2Marks+mathsA2Marks+mathsB2Marks+phy2Marks+chem2Marks+phyPracMarks+chemPracMarks;
    let perc2= (tot2/530)*100;


    if(eng2Marks == "" || sans2Marks=="" || mathsA2Marks=="" || mathsB2Marks=="" || phy2Marks=="" || chem2Marks=="" || phyPracMarks=="" || chemPracMarks=="")
    {
        tot2MarksParaRef.current.innerHTML="Please Enter Your Marks";
        tot2MarksParaRef.current.style.color="darkblue";
    }
    else if(eng2Marks>=35 && sans2Marks>=35 && mathsA2Marks>=26.24 && mathsB2Marks>=26.25 && phy2Marks>=22 && chem2Marks>=22 && phyPracMarks>=10.5 && chemPracMarks>=10.5)
    {
        tot2MarksParaRef.current.innerHTML= `${stuName} has scored ${tot2}/530 with ${perc2.toFixed(2)}%`;
        tot2MarksParaRef.current.style.color="green";
    }
    else
    {
        tot2MarksParaRef.current.innerHTML=`${stuName} Failed`;
        tot2MarksParaRef.current.style.color="red";
    }
}


// let onClickResult12=()=>{

//     let eng2Marks=Number(eng2MarksInputRef.current.value);
//     let sans2Marks=Number(sans2MarksInputRef.current.value);
//     let mathsA2Marks=Number(mathsA2MarksInputRef.current.value);
//     let mathsB2Marks=Number(mathsB2MarksInputRef.current.value);
//     let phy2Marks=Number(phy2MarksInputRef.current.value);
//     let chem2Marks=Number(chem2MarksInputRef.current.value);
//     let phyPracMarks=Number(phyPracInputRef.current.value);
//     let chemPracMarks=Number(chemPracInputRef.current.value);


//     let tot2= eng2Marks+sans2Marks+mathsA2Marks+mathsB2Marks+phy2Marks+chem2Marks+phyPracMarks+chemPracMarks;
//     let perc2= (tot2/530)*100;


//     let eng1Marks=Number(eng1MarksInputRef.current.value);
//     let sans1Marks=Number(sans1MarksInputRef.current.value);
//     let mathsA1Marks=Number(mathsA1MarksInputRef.current.value);
//     let mathsB1Marks=Number(mathsB1MarksInputRef.current.value);
//     let phy1Marks=Number(phy1MarksInputRef.current.value);
//     let chem1Marks=Number(chem1MarksInputRef.current.value);

//     let stuName=stuNameInputRef.current.value;
//     let parentName=parentNameInputRef.current.value;

//     let tot1= eng1Marks+sans1Marks+mathsA1Marks+mathsB1Marks+phy1Marks+chem1Marks;
//     let perc1= (tot1/470)*100;


//     let tot12= tot1+tot2;
//     let perc12=(tot12/1000)*100;

    
//     if(tot1MarksParaRef.current.innerHTML==`${stuName} Promoted` && tot2MarksParaRef.current.innerHTML==`${stuName} Failed`)
//     {
//         result12ParaRef.current.innerHTML=`${stuName} got Failed in Intermediate`;
//         result12ParaRef.current.style.color="red";
//         result12ParaRef.current.style.fontSize="2rem";
//     }

//     else if(tot1MarksParaRef.current.innerHTML==`${stuName} Promoted` &&  tot2MarksParaRef.current.innerHTML== `${stuName} has scored ${tot2}/530 with ${perc2.toFixed(2)}%`)
//     {
//         result12ParaRef.current.innerHTML=`${stuName} Failed`;
//         result12ParaRef.current.style.color="red";
//         result12ParaRef.current.style.fontSize="1.7rem";
//         result12ParaRef2.current.innerHTML=`${stuName} has to clear I year`;
//     }
//     else if(tot1MarksParaRef.current.innerHTML== `${stuName} has scored ${tot1}/470 with ${perc1.toFixed(2)}%` &&  tot2MarksParaRef.current.innerHTML==`${stuName} Failed`)
//     {
//         result12ParaRef.current.innerHTML=`${stuName} Failed`;
//         result12ParaRef.current.style.color="red";
//         result12ParaRef.current.style.fontSize="1.7rem";
//         result12ParaRef2.current.innerHTML=`${stuName} has to clear II year`;
//     }
//     else if(tot1MarksParaRef.current.innerHTML=="Please Enter Your Marks" || tot2MarksParaRef.current.innerHTML=="Please Enter Your Marks")
//     {
//         result12ParaRef.current.innerHTML="Please Enter Yor Marks";
//         result12ParaRef.current.style.color="darkblue";
//     }    
//     else if(tot2MarksParaRef.current.innerHTML== `${stuName} has scored ${tot2}/530 with ${perc2.toFixed(2)}%` && tot2MarksParaRef.current.innerHTML== `${stuName} has scored ${tot2}/530 with ${perc2.toFixed(2)}%`)
//     {
//         result12ParaRef.current.innerHTML=`${stuName}  ${parentName} has successfully passed Intermedite with ${tot12}/1000 and ${perc12}%`;
//         result12ParaRef.current.style.fontSize="2rem";
//         result12ParaRef.current.style.color="lightgreen";
//         result12ParaRef2.current.innerHTML="";
//     }
//     else{
//         result12ParaRef.current.innerHTML=`${stuName} Enter Your Marks and Find Your TOTAL`;
//         result12ParaRef.current.style.color="darkblue";
//     }
// }

let onClickResult12= ()=>{

    let eng1Marks=Number(eng1MarksInputRef.current.value);
    let sans1Marks=Number(sans1MarksInputRef.current.value);
    let mathsA1Marks=Number(mathsA1MarksInputRef.current.value);
    let mathsB1Marks=Number(mathsB1MarksInputRef.current.value);
    let phy1Marks=Number(phy1MarksInputRef.current.value);
    let chem1Marks=Number(chem1MarksInputRef.current.value);

    let stuName=stuNameInputRef.current.value;
    let parentName=parentNameInputRef.current.value;
    
    let tot1= eng1Marks+sans1Marks+mathsA1Marks+mathsB1Marks+phy1Marks+chem1Marks;
    let perc1= (tot1/470)*100;
    
    
    let eng2Marks=Number(eng2MarksInputRef.current.value);
    let sans2Marks=Number(sans2MarksInputRef.current.value);
    let mathsA2Marks=Number(mathsA2MarksInputRef.current.value);
    let mathsB2Marks=Number(mathsB2MarksInputRef.current.value);
    let phy2Marks=Number(phy2MarksInputRef.current.value);
    let chem2Marks=Number(chem2MarksInputRef.current.value);
    let phyPracMarks=Number(phyPracInputRef.current.value);
    let chemPracMarks=Number(chemPracInputRef.current.value);
    
    let tot2= eng2Marks+sans2Marks+mathsA2Marks+mathsB2Marks+phy2Marks+chem2Marks+phyPracMarks+chemPracMarks;
    let perc2= (tot2/530)*100;
    
        let tot12= (tot1+tot2);
        let perc12=(perc1+perc2);
    

    let stu1Pass= eng1Marks>=35 && sans1Marks>=35 && mathsA1Marks>=26.24 && mathsB1Marks>=26.25 && phy1Marks>=21 && chem1Marks>=21;
    let stu2Pass= eng2Marks>=35 && sans2Marks>=35 && mathsA2Marks>=26.24 && mathsB2Marks>=26.25 && phy2Marks>=21 && chem2Marks>=21 && phyPracMarks>=10.5 && chemPracMarks>=10.5;

    // let stu1Fail= stu1Pass != eng1Marks>=35 && sans1Marks>=35 && mathsA1Marks>=26.24 && mathsB1Marks>=26.25 && phy1Marks>=21 && chem1Marks>=21;
    // let stu2Fail= stu2Pass != eng2Marks>=35 && sans2Marks>=35 && mathsA2Marks>=26.24 && mathsB2Marks>=26.25 && phy2Marks>=21 && chem2Marks>=21 && phyPracMarks>=10.5 && chemPracMarks>=10.5;
    

    if(eng1Marks == "" || sans1Marks=="" || mathsA1Marks=="" || mathsB1Marks=="" || phy1Marks=="" || chem1Marks=="" || eng2Marks=="" || sans2Marks=="" || mathsA2Marks=="" || mathsB2Marks=="" || phy2Marks=="" || chem2Marks=="" || phyPracMarks=="" || chemPracMarks=="")
    {
        result12ParaRef.current.innerHTML="Please Enter Your Marks";
        result12ParaRef.current.style.color="darkblue";
    }
    else if(stu1Pass && stu2Pass)
    {
        result12ParaRef.current.innerHTML=`${stuName} ${parentName} Has Successfully Completed Intermediate with ${tot12}/1000  and ${perc12}%`;
        result12ParaRef.current.style.fontSize="2rem";
        result12ParaRef.current.style.color="green";
    }
    else if(stu1Pass==ture && stu2Pass==false)
    {
        result12ParaRef.current.innerHTML=`${stuName} Failed`;
        result12ParaRef.current.style.color="red";
        result12ParaRef.current.style.fontSize="1.7rem";
        result12ParaRef2.current.innerHTML=`${stuName} has to clear II year`;
        result12ParaRef2.current.style.color="purple";
    }
    else if(stu1Pass==false && stu2Pass==ture)
    {
        result12ParaRef.current.innerHTML=`${stuName} Failed`;
        result12ParaRef.current.style.color="red";
        result12ParaRef.current.style.fontSize="1.7rem";
        result12ParaRef2.current.innerHTML=`${stuName} has to clear I year`;
        result12ParaRef2.style.current.color="purple";
    }
    else if(stu1Fail && stu2Fail)
    {
        result12ParaRef.current.innerHTML=`${stuName} Failed`;
        result12ParaRef.current.style.fontSize="1.7rem";
    }
    // else if(tot1=="" || tot2=="")
    // {
    //     result12ParaRef.current.innerHTML="Please Make Sure To Check The Total";
    //     result12ParaRef.current.style.color="orange";
    // }
    else
    {
        result12ParaRef.current.innerHTML="OOPSs! Something Went Wrong Please Try Again";
        result12ParaRef.current.style.color="orange";
    }
}



    // {
    //     tot2MarksParaRef.current.innerHTML="Please Enter Your Marks";
    //     tot2MarksParaRef.current.style.color="darkblue";
    // }
    // {
    //     tot2MarksParaRef.current.innerHTML= `${stuName} has scored ${tot2}/530 with ${perc2.toFixed(2)}%`;
    //     tot2MarksParaRef.current.style.color="green";
    // }
    // else
    // {
    //     tot2MarksParaRef.current.innerHTML=`${stuName} Failed`;
    //     tot2MarksParaRef.current.style.color="red";
    // }



return (
    <div className='homePages'>
    <form className='stuInterForm'>

      <div className='stuDetailsDiv' style={{
        marginBottom:"40px",
      }}> 
      <fieldset>
          <legend>Student Details</legend>
      <div>
          <label>Student Name</label>
          <input type='text' maxLength={20} ref={stuNameInputRef}></input>
          <label>Gender</label>
          <input type='radio' name='gender'></input>
          <label>Male</label>
          <input type='radio' name='gender'></input>
          <label>Female</label>
      </div>
      <div>
          <label>Parent Name</label>
          <input type='text' maxLength={10} ref={parentNameInputRef}></input>
          <select>
              <option>Select Relation</option>
              <option>Father</option>
              <option>Mother</option>
          </select>
      </div>
      <div>
          <label>Gardian Name</label>
          <input type='text' maxLength={10} ref={gaurdianNameInputRef}></input>
          <input placeholder='Enter Relation' ></input>
      </div>
      </fieldset>
      </div>

      <div className='subDiv'>
          <fieldset>
            <legend>Subjects</legend>
      <div className='inputHeading'>
          <input value="PART-I" disabled></input>
      </div>
      <div>
          <input disabled value="ENGLISH"></input>
      </div>
      <div className='inputHeading'>
          <input value="PART-II" disabled></input>
      </div>
      <div>
          <input disabled value="SANSKRIT"></input>
      </div>
      <div className='inputHeading'>
          <input value="PART-III" disabled></input>
      </div>
      <div>
          <input disabled value="MATHEMATICS A"></input>
      </div>
      <div>
          <input disabled value="MATHEMATICS B"></input>
      </div>
      <div>
          <input disabled value="PHYSICS"></input>
      </div>
      <div>
          <input disabled value="CHEMISTRY"></input>
      </div>
      <div>
          <input disabled value="PHYSICS LAB"></input>
      </div>
      <div>
        <input disabled value="CHEMISTRY LAB"></input>
      </div>

      <div className='hidden'>
        <fieldset>
            <legend><button type='button'></button></legend>
        </fieldset>
      </div>

      </fieldset>
      </div>

      <div className='marksDiv'>
          <fieldset>
            <legend>Marks</legend>
      <div className='inputHeading'>
          <input value="Marks" disabled></input>
          <input value="MAX.Marks" disabled></input>
      </div>
      <div>
          <input disabled value="100"></input>
          <input disabled value="35"></input>
      </div>
      <div className='hidden inputHeading'>
          <input value="PART-II" disabled></input>
      </div>
      <div>
          <input disabled value="100"></input>
          <input disabled value="35"></input>
      </div>
      <div className='inputHeading hidden'>
          <input value="PART-III" disabled></input>
      </div>
      <div>
          <input disabled value="75"></input>
          <input disabled value="26.25"></input>
      </div>
      <div>
          <input disabled value="75"></input>
          <input disabled value="26.25"></input>
      </div>
      <div>
          <input disabled value="60"></input>
          <input disabled value="21"></input>
      </div>
      <div>
          <input disabled value="60"></input>
          <input disabled value="21"></input>
      </div>
      <div>
          <input disabled value="30"></input>
          <input disabled value="10.5"></input>
      </div>
      <div>
          <input disabled value="30"></input>
          <input disabled value="10.5"></input>
      </div>

      <div className='hidden'>
        <fieldset>
            <legend><button type='button'></button></legend>
        </fieldset>
      </div>
      
      </fieldset>
      </div>

      <div className='stuMarks1Div'>
          <fieldset>
            <legend>Student 's I Year Marks</legend>
      <div className='hidden inputHeading'>
          <input value="PART-I" disabled></input>
      </div>
      <div>
          <input type='number' ref={eng1MarksInputRef}
        onChange={()=>{
            onChangeSpan100Marks(eng1MarksInputRef);
        }}  
        onBlur={()=>{
            onBlurSpan100Marks(eng1MarksInputRef,eng1MarksSpanRef);
        }}
          ></input>
        <span ref={eng1MarksSpanRef}></span>
      </div>
      <div className='hidden inputHeading'>
          <input value="PART-II" disabled></input>
      </div>
      <div>
          <input type='number' ref={sans1MarksInputRef}
         onChange={()=>{
            onChangeSpan100Marks(sans1MarksInputRef);
        }}    
        onBlur={()=>{
            onBlurSpan100Marks(sans1MarksInputRef,sans1MarksSpanRef);
        }}
        ></input>
        <span ref={sans1MarksSpanRef}></span>
      </div>
      <div className='hidden inputHeading'>
          <input value="PART-III" disabled></input>
      </div>
      <div>
          <input type='number' ref={mathsA1MarksInputRef}
         onChange={()=>{
            onChangeSpan75Marks(mathsA1MarksInputRef);
        }}    
        onBlur={()=>{
            onBlurSpan75Marks(mathsA1MarksInputRef,mathsA1MarksSpanRef);
        }}
        ></input>
        <span ref={mathsA1MarksSpanRef}></span>
      </div>
      <div>
          <input type='number' ref={mathsB1MarksInputRef}
           onChange={()=>{
            onChangeSpan75Marks(mathsB1MarksInputRef);
        }}  
          onBlur={()=>{
            onBlurSpan75Marks(mathsB1MarksInputRef,mathsB1MarksSpanRef);
        }}
        ></input>
        <span ref={mathsB1MarksSpanRef}></span>
      </div>
      <div>
          <input type='number' ref={phy1MarksInputRef}
           onChange={()=>{
            onChangeSpan60Marks(phy1MarksInputRef);
        }}  
          onBlur={()=>{
            onBlurSpan60Marks(phy1MarksInputRef,phy1MarksSpanRef);
        }}
        ></input>
        <span ref={phy1MarksSpanRef}></span>
      </div>
      <div>
          <input type='number' ref={chem1MarksInputRef}
           onChange={()=>{
            onChangeSpan60Marks(chem1MarksInputRef);
        }}  
          onBlur={()=>{
            onBlurSpan60Marks(chem1MarksInputRef,chem1MarksSpanRef);
        }}
        ></input>
        <span ref={chem1MarksSpanRef}></span>
      </div>
      <div className='hidden'>
          <input type='number'></input>
      </div>
      <div className='hidden'>
        <input type='number'></input>
      </div>

      <div>
        <fieldset>
            <legend><button type='button'
            onClick={()=>{
                onClickInter1Tot();
            }}
            >TOTAL</button></legend>
            <p ref={tot1MarksParaRef}></p>
        </fieldset>
      </div>
      
      </fieldset>
      </div>


      <div className='stuMarks2Div'>
          <fieldset>
            <legend>Student 's II Year Marks</legend>
      <div className='hidden inputHeading'>
          <input value="PART-I" disabled></input>
      </div>
      <div>
        <input type='number' ref={eng2MarksInputRef}
        onChange={()=>{
            onChangeSpan100Marks(eng2MarksInputRef);
        }}
        onBlur={()=>{
            onBlurSpan100Marks(eng2MarksInputRef,eng2MarksSpanRef);
        }}
        ></input>
        <span ref={eng2MarksSpanRef}></span>
      </div>
      <div className='hidden inputHeading'>
          <input value="PART-II" disabled></input>
      </div>
      <div>
        <input type='number' ref={sans2MarksInputRef}
        onChange={()=>{
            onChangeSpan100Marks(sans2MarksInputRef);
        }}
        onBlur={()=>{
            onBlurSpan100Marks(sans2MarksInputRef,sans2MarksSpanRef);
        }}
        ></input>
        <span ref={sans2MarksSpanRef}></span>
      </div>
      <div className='inputHeading hidden'>
          <input value="PART-III" disabled></input>
      </div>
      <div>
        <input type='number' ref={mathsA2MarksInputRef}
        onChange={()=>{
            onChangeSpan75Marks(mathsA2MarksInputRef);
        }}
        onBlur={()=>{
            onBlurSpan75Marks(mathsA2MarksInputRef,mathsA2MarksSpanRef);
        }}
        ></input>
        <span ref={mathsA2MarksSpanRef}></span>
      </div>
      <div>
        <input type='number' ref={mathsB2MarksInputRef}
        onChange={()=>{
            onChangeSpan75Marks(mathsB2MarksInputRef);
        }}
        onBlur={()=>{
            onBlurSpan75Marks(mathsB2MarksInputRef,mathsB2MarksSpanRef);
        }}
        ></input>
        <span ref={mathsB2MarksSpanRef}></span>
      </div>
      <div>
          <input type='number' ref={phy2MarksInputRef}
           onChange={()=>{
            onChangeSpan60Marks(phy2MarksInputRef);
        }}  
        onBlur={()=>{
            onBlurSpan60Marks(phy2MarksInputRef,phy2MarksSpanRef);
        }}
        ></input>
        <span ref={phy2MarksSpanRef}></span>

      </div>
      <div>
          <input type='number' ref={chem2MarksInputRef}
           onChange={()=>{
            onChangeSpan60Marks(chem2MarksInputRef);
        }}  
        onBlur={()=>{
            onBlurSpan60Marks(chem2MarksInputRef,chem2MarksSpanRef);
        }}
        ></input>
        <span ref={chem2MarksSpanRef}></span>
      </div>
      <div>
          <input type='number' ref={phyPracInputRef}
           onChange={()=>{
            onChangeSpan30Marks(phyPracInputRef);
        }}  
        onBlur={()=>{
            onBlurSpan30Marks(phyPracInputRef,phyPracSpanRef);
        }}
        ></input>
        <span ref={phyPracSpanRef}></span>
      </div>
      <div>
        <input type='number' ref={chemPracInputRef}
        onChange={()=>{
            onChangeSpan30Marks(chemPracInputRef);
        }}
        onBlur={()=>{
            onBlurSpan30Marks(chemPracInputRef,chemPracSpanRef);
        }}
        ></input>
        <span ref={chemPracSpanRef}></span>
      </div>

      <div>
        <fieldset>
            <legend><button type='button'
            onClick={()=>{
                onClickInter2Tot();
            }}
            >TOTAL</button></legend>
            <p ref={tot2MarksParaRef}></p>
        </fieldset>
      </div>
      
      </fieldset>
      </div>

      
      <div className='resultDiv'>
        <fieldset>
            <legend><button type='button'
            onClick={()=>{
                onClickResult12();
            }}
            >RESULT</button></legend>
        <p ref={result12ParaRef}></p>
        <p ref={result12ParaRef2}></p>
        </fieldset>
      </div>

    </form>
  </div>
  )
}

export default HomePage
