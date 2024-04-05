(() => {[...document.getElementsByTagName("*")].forEach(e => { 
    if (e.href){
        e.style.color = "#609CC3"
    } else {
        e.style.background = "#292929"
        e.style.color = "#B9B9B9"
    }
})})()