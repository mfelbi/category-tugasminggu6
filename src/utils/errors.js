class Error404 extends Error {
    constructor(message) {
        super(message);
        this.name = "Error404";
    }
}

class Error403 extends Error {
    constructor(message) {
        super(message);
        this.name = "Error403";
    }
}

class Error401 extends Error {
    constructor(message) {
        super(message);
        this.name = "Error401";
    }
}

class Error400 extends Error {
    constructor(message) {
        super(message);
        this.name = "Error400";
    }
}

const exceptionHandler = (error, res) => {
    switch(error.name){
        case 'CastError':
            return res.status(400).json({detail: "Casting id is Error"});
        case "Error404":
             return res.status(404).json({detail: "Resource not found"});   
        case "Error400":
             return res.status(400).json({detail: "Invalid Data Request"});   
        case "ValidationError":
             return res.status(404).json({detail: "Invalid Data Request"});   
        case "Error401":
             return res.status(401).json({detail: "Authentication Required"});   
        case "Error403":
             return res.status(403).json({detail: "Forbidden Resource"});   
        default: 
             return res.status(500).json({detail: "Server Error"});   
    }
};

module.exports ={
    Error400,
    Error401,
    Error403,
    Error404,
    exceptionHandler,
};
