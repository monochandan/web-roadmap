
// space, scary, military, romantic, cowboy, fantasy, superhero
favouriteMovieGenre("cowboy")

// watermelon, tomato, banana, orange, avocado, blueberry
// pastel, love, sky, forrest
favouriteTheme("fantasy")


// light, dark
favouriteMode("light")

// sharp, soft, round
favouriteEdgeStyle("none")

function setProp(prop, value){
    console.log(prop)
    console.log(value)
    document.documentElement.style.setProperty(prop, value)
}

// for chainging the font style
function favouriteMovieGenre(font){
    if(font){
        setProp("--font", "var(--" + font + ")");
    }
}
// round
//  border: dotted;
//   border-width: 10px 4px;
//   border-radius: 10px 40px;

// soft
//   border: dashed;
//   border-width: 2px 4px;
//   border-radius: 40px;

// sharp
//   border: groove 1em red;
//   border-radius: 2em;

function favouriteEdgeStyle(style){
    if(style=== "round"){
        //setProp("--image", "var(--" + style + ")");
        setProp("--border", "var(--round-border)");
        setProp("--border-width", "var(--round-border-width)");
        setProp("--border-radius", "var(--round-border-radius)");
    }
    else if(style === "soft"){
        setProp("--border", "var(--soft-border)");
        setProp("--border-width", "var(--soft-border-width)");
        setProp("--border-radius", "var(--soft-border-radius)");
    }
    else if(style === "sharp"){
        setProp("--border", "var(--sharp-border)");
        setProp("--border-radius", "var(--sharp-border-radius)");
    }
    
}


function favouriteMode(mode){
    if(mode === "light" || !mode){
        setProp('--background', "var(--light)");
        setProp('--text', "var(--dark)");
    }else if(mode === "dark"){
        setProp('--background', "var(--dark)");
        setProp('--text', "var(--light)");
    }

}

function favouriteTheme(theme){
    if(theme === "pastel"){
        setProp('--light', "#f2f6c3")
        setProp('--dark', "#68c4af")
    }
    else if(theme === "muted"){
        setProp('--light', "#4c5b64")
        setProp('--dark', "#45241c")
    }
    else if(theme === "love"){
        setProp('--light', "#f06836")
        setProp('--dark', "#ba0001")
    }
    else if(theme === "sky"){
        setProp('--light', "#99ccff")
        setProp('--dark', "#3366ff")
    }
    else if(theme === "forrest"){
        setProp('--light', "#91B247")
        setProp('--dark', "#597C2B")
    }
    
}