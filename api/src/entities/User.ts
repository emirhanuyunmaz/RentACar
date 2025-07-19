export class User{
    
    constructor(
        public readonly id:string | undefined,
        public readonly name:string,
        public readonly surname:string, 
        public readonly email:string,
        public readonly password:string,
        public readonly gender:string,
        public readonly isAdmin:Number
    ) {}
}