//Please put your answers here
/*
#1. 
Inside function object or class object, first filter out objects in attribute allQuestions, 
with object's attributes subThreadName or mrLevel are different from attribute 
currentQuestion's subThreadName or mrLevel, next from the remaining objects check if exist 
at least one with attribute currentAnswer equals "No", reverse the boolean result

Improvement:
return this.allQuestions.filter(q => q.subThreadName === this.currentQuestion.subThreadName 
    && q.mrLevel === this.currentQuestion.mrLevel).every(q => q.currentAnswer !== "No")

#2.
shallow copy object of array allQuestions to array oldAssessment

#3.
shallow copy object of array allQuestions to array oldAssessment

#4.
var filtered = arr.filter(item => item!==null);

#5.
from parent component binds property to child's alias, 
export class ParentComponent {
    headerMessage = 'hello world';
}
in child component,
in child we use the @Input decorator which is used for binding

inside child template we use {{headerMessage}} to use the variable
*/