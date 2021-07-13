import {AbstractControl, ValidationErrors} from '@angular/forms';

export class UserNameValidator {
  // tslint:disable-next-line:typedef
  // @ts-ignore
  static noSpecialCharacters(conrol: AbstractControl): ValidationErrors | null{
    const regExp: RegExp = /^[a-zA-Z0-9_]{3,10}$/;
    if (regExp.test(conrol.value)){
      return null;
    }
    return {
      noSpecialCharacters: true
    };
  }
}
