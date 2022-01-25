interface Crypt {
    [key: string]: string;
 }


export interface RoleProps {
    _name        : string ;
    _input       : string ;
    _encrypt   : (input : string| undefined) => string  ;
}