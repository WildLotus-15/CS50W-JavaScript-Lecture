let counter = 0
function count() {
    counter++; //this means take the old value of counter and increment it by 1 (counter += 1 in python; counter = counter + 1)
    document.querySelector('h1').innerHTML = counter

    if (counter % 10 === 0) {
        alert(`Count is now ${counter}`) // this is a literal template where value of attribute plugs in -> `${}`
    }
    // Separate HTML from JavaScript to make code easily readable

    // when the content of DOM will be fully loaded anonymous function will be run which is using property
    // if we will run function before loading DOMContent error will be shown on web-site JavaScript terminal               
}
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('button').onclick = count /*document.querySelector('button').addEventListener('click', count) would do the same*/
})