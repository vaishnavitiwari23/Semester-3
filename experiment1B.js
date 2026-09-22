const EventEmitter = require('events');
class Button extends EventEmitter{}
const button = new Button();
button.on('click',()=>{
    console.log('Button Clicked');
});
button.on('mouseover',()=>{
    console.log('Mouse is Over the Button');
});
button.emit('click');
button.emit('mouseover');