enum StudentsStatus {
	Active = 1,
	Inactive,
	Paused,
}

let newStudentStatus: StudentsStatus = StudentsStatus.Inactive;
console.log(newStudentStatus);

enum StatusCodes {
  OK = 200,
  BadRequest = 400,
  Unauthorized,
  PaymentRequired,
  Forbidden,
  NotFound,
}

const ok = StatusCodes.OK;
const indiceOk = StatusCodes["OK"];
const stringBadRequest = StatusCodes[400];

console.log(ok); //saída: 200
console.log(indiceOk); //saída: 200
console.log(stringBadRequest); //saída: BadRequest