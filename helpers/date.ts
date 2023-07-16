export class DateHelpers {
  public static getAge = (): number => {
    const birthDate = 2000;
    const actualDate = this.getNow().getFullYear();
    const dateOfBirth = new Date(birthDate, 0, 1).getFullYear();

    return actualDate - dateOfBirth;
  };

  public static getNow = (): Date => {
    return new Date();
  };
}
