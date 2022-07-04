export default interface IEnrollable {
  enrollment: string;
  generateEnrollment(): string;
}