import { IValidator } from '../interface/interface_module'
// import { Constants } from '../constant/constant'

class ValidatorCLS implements IValidator {
    isValidStr(s: string,regex): boolean {
      
        return regex.test(s);
        // return regex.test(s) && minlength===8;
    }

    
}

export { ValidatorCLS };