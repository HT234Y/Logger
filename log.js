class Logger{
    log(text){
        console.log(text);
    }
}

class Filelogger{
    log(text){
        var fs = require('fs');
        fs.appendFileSync('filelogger.txt', text + '\r\n');
    }
}

class EmptyLogger{
    log(text){
    }
}

class MultiLogger{
    constructor(){
        this.loggers = [new Logger(), new Filelogger(), new EmptyLogger()]
    }
    
    log(text){
        // emptylog.log(text)     
        // fillog.log(text)
        // log2.log(text) 

        this.loggers[0]
    }
};

//----

let l = new Logger()
let fl = new Filelogger()
let ml = new MultiLogger()

// l.log('hello')
// fl.log('hello1')
// fl.log('hello2')
// fl.log('hello3')
ml.log('Hello_')
ml.log('Hello__')
ml.log('Hello___')