// ДЗ 19. Группа студентов

// Реализовать функцию которая принимает имя и возраст студента и 
// возвращает объект с полями name, age, marks(пустой массив);

// Реализовать функцию которая будет управлять студентами:
// - функция должна принимать массив студентов созданных с помощью предыдущей
// -функции должна возвращать объект у которого будут следующие методы:
// Работоспособность всех методов продемонстрировать ниже

function student (name, age) {
  return {
    name: name,
    age: age,
    marks: [],
  }
}

let students = [
  student('Эбинизер', 18),
  student('Клава', 20),
  student('Петя', 22),
  student('Клёпа', 23),
  student('Дуся', 21),
]

function manageStudent(allStudens) {
  let methods = {
    addStudent: function(name, age) {// 1. добавления нового студента
      allStudens.push(student(name, age))
    },

    removeStudent: function(name) {// 2. удаление студента по имени
      let index = allStudens.findIndex(item => item.name === name);

      if(index !== -1) {
       allStudens.splice(index, 1);
      }
    },

    addMarks: function(name, mark, lesson) {//3. добавление оценки студенту за занятие(№ занятия === индекс оценки в массиве)
      let iStudentMarks = allStudens.find(item => item.name === name);

      if(iStudentMarks) {
        iStudentMarks.marks[lesson] = mark
      }
    },

    averadeMarks: function(name) {// 4. получение средней оценки студента по имени
      let iStudentMarks = allStudens.find(item => item.name === name);

      if(iStudentMarks && iStudentMarks.marks.length > 0){
          let averMark = iStudentMarks.marks.reduce((acc, mark) => acc + mark, 0);

          return averMark / iStudentMarks.marks.length;
      }
    },
    
    averadeMarksLesson: function(lesson){// 5. получение средней оценки группы за занятие
      let count = 0;
      let sum = 0;

      allStudens.forEach(student => {
        if(student.marks[lesson] !== undefined) {
          sum += student.marks[lesson];
          count++;
        }
      });
      return sum / count
    },

    sortNameStudent: function() {// 6. получение отсортированного по именам списка студентов
      return allStudens.slice(0).sort((a,b) => {
        return a.name.localeCompare(b.name)
      });
    },

    sortMarkStudent: function() {// 7. получение отсортированного по среднему балу списка студентов
      return allStudens.slice(0).sort((a,b) => {
        return methods.averadeMarks(b.name) - methods.averadeMarks(a.name);
      });
    },
}
return methods
}

let manage = manageStudent(students);

manage.addStudent('Инакентий', 30);
manage.removeStudent('Петя');

manage.addMarks('Клава', 10, 0);
manage.addMarks('Клава', 2, 1);
manage.addMarks('Клава', 4, 2);
manage.addMarks('Эбинизер', 1, 0);
manage.addMarks('Эбинизер', 9, 1);
manage.addMarks('Эбинизер', 11, 2);
manage.addMarks('Клёпа', 4, 0);
manage.addMarks('Клёпа', 5, 1);
manage.addMarks('Клёпа', 6, 2);
manage.addMarks('Инакентий', 7, 0);
manage.addMarks('Инакентий', 8, 1);
manage.addMarks('Инакентий', 1, 2);
manage.addMarks('Дуся', 5, 0);
manage.addMarks('Дуся', 7, 1);
manage.addMarks('Дуся', 7, 2);

console.log(manage.averadeMarks('Клава'));
console.log(manage.averadeMarks('Эбинизер'));

console.log(manage.averadeMarksLesson(1))

console.log(manage.sortNameStudent())
console.log(manage.sortMarkStudent())