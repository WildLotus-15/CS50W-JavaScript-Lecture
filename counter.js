// the shit is real so listen
// JavaScript isn't saving any state of web-site by default specifically storage of it for example values of the variables
// in order to change that we can use local storage syntax
// the ! syntax means "not" in that case if local storage can't get counter item because it doesn't exist

/* let counter = 0 */

if (!localStorage.getItem('counter')) {
    localStorage.setItem('counter', 0)
}
function count() {
    let counter = localStorage.getItem('counter')
    counter++; //this means take the old value of counter and increment it by 1 (counter += 1 in python; counter = counter + 1)
    document.querySelector('h1').innerHTML = counter
    localStorage.setItem('counter', counter)

    if (counter % 10 === 0) {
        alert(`Count is now ${counter}`) // this is a literal template where value of attribute plugs in -> `${}`
    }
    // Separate HTML from JavaScript to make code easily readable

    // when the content of DOM will be fully loaded anonymous function will be run which is using property
    // if we will run function before loading DOMContent error will be shown on web-site JavaScript terminal               
}
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('h1').innerHTML = localStorage.getItem('counter')
    document.querySelector('button').onclick = count /*document.querySelector('button').addEventListener('click', count) would do the same*/
    /* setInterval(count, 1000) */ // <- there we are setting interval which will run specific function in every specific milliseconds 
})