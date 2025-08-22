class ExpressError extends Error{
    constructor(status,message){
        super();
        this.status=status;
        this.message=message;
    }
}

module.exports = ExpressError;


/*
1. What super() does

a)  In JavaScript, when you create a class that extends another class, you need to call super() inside the constructor.

b)   super() calls the constructor of the parent class (in this case, the built-in Error class).

c)   This makes sure the parent’s properties (message, stack, etc.) are properly initialized.
*/