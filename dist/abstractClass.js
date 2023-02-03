"use strict";
class TakePhoto {
    constructor(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
}
// for abstract classes, you cannot create objects from them
const davd = new TakePhoto("test", 'test');
// class Instagram extends TakePhoto
