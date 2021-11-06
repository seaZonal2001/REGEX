const strengther=document.querySelector('.strengther');
const passwordInput=document.querySelector('input[type="text"]');
const passwordCheck=document.querySelector('.password-check');

passwordInput.addEventListener('input',updateStrengther);

function updateStrengther(){
    const assessments=calculatePasswordStrength(passwordInput.value);

    let strength=100;
    passwordCheck.innerHTML="";
    assessments.forEach(assessment =>{
        if(!assessment)return;

        strength-=assessment.strengthLost;
        if(strength<0)strength=0;
        if(strength>80)
        strengther.style.setProperty("--strength-color",'#ed6a11');
        else
        strengther.style.setProperty("--strength-color",'rgb(25, 115, 231)');
        const pwdCheckEl=document.createElement('p');
        pwdCheckEl.innerHTML=assessment.pwdCheck;
        passwordCheck.appendChild(pwdCheckEl);
    });
    console.log(strength);
    strengther.style.setProperty("--strength-amount",strength);
}

function calculatePasswordStrength(password){
    password=password.trim();
    const assessment=[];
    assessment.push(lengthAssessment(password));
    assessment.push(lowerCaseAssessment(password));
    assessment.push(upperCaseAssessment(password));
    assessment.push(numberAssessment(password));
    assessment.push(specialCharacterAssessment(password));
    assessment.push(repeatCharacterAssessment(password));
    return assessment;
}

//Length Assessment Function
function lengthAssessment(password){
    const length=password.length;
    if(length<=5)
    return {
        pwdCheck:'Password is too short',
        strengthLost:40
    };
    if(length<=10)
    return {
        pwdCheck:'Password could be longer',
        strengthLost:15
    };
}

//Lower Case assessment function
function lowerCaseAssessment(password){
    return characterTypeAssessment(password,/[a-z]/g,'lowercase characters');
}

//Uppercase Case assessment function
function upperCaseAssessment(password){
    return characterTypeAssessment(password,/[A-Z]/g,'uppercase characters');
}

//Number Assessment Function
function numberAssessment(password){
    return characterTypeAssessment(password,/[0-9]/g,'numbers')
}

//Special Character Assessment
function specialCharacterAssessment(password){
    return characterTypeAssessment(password,/[^0-9a-zA-Z\s]/g,'special characters');
}

//Character type assessment function
function characterTypeAssessment(password,regX,assessmentType){
    const characterMatch=password.match(regX) || [];
    if(characterMatch.length===0)
    return{
        pwdCheck:`Password has no ${assessmentType}`,
        strengthLost:20
    };
    if(characterMatch.length<=2)
    return{
        pwdCheck:`Password must have more ${assessmentType}`,
        strengthLost:5
    }
}

function repeatCharacterAssessment(password){
    const repeatCharacterMatch=password.match(/(.)\1/g) || [];
    if(repeatCharacterMatch.length>0)
        return {
            pwdCheck:'Password has consecutive repeated character',
            strengthLost:repeatCharacterMatch.length*10
        }
}
