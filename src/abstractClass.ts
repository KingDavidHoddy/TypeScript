
class TakePhoto{
    constructor(
        public cameraMode: string,
        public filter: string
    ){}
}

// for abstract classes, you cannot create objects from them

const davd = new TakePhoto("test",'test')

// class Instagram extends TakePhoto