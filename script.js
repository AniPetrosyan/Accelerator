/*

*
**
***
****
*****

*/

// function draw1() {
//   for (let i = 1; i <= 5; ++i) {
//     for (let j = 0; j < i; ++j) {
//       document.write("*");
//     }
//     document.write("<br />");
//   }
// }

// draw1();

//or the same with 1 loop
/* function draw1() {
  let line = "";
  for (let i = 1; i <= 5; ++i) {
    line += "*";
    document.write(line, "<br />");
  }
}

draw1(); */

//the same with 'repeat'
/* let star = "*";
function draw1() {
  for (let i = 1; i <= 5; ++i) {
    document.write(star.repeat(i), "<br />");
  }
}

draw1(); */

/*

*****
****
***
**
*

*/

/*
const star = "*";
const new_line = "<br />";

function draw2(length) {
  let line = star.repeat(length); //******
  for (let i = 0; i < length; ++i) {
    document.write(line, new_line);
    line = line.slice(1);
  }
}

draw2(5);  */

//rekursiayov nuyn@
/* const star = "*";
const new_line = "<br />";

function draw2(lvl = 5) {
  if (lvl === 0) {
    return;
  }

  const line = star.repeat(lvl);
  document.write(line, new_line);

  return draw2(--lvl);
}

draw2(); */

/*

*****
 ****
  ***
   **  
    *
        

*/

/* const star = "*";
const new_line = "<br />";
const space = "&nbsp;&nbsp;";

function draw3(lvl) {
  let spaces = "";

  for (let n = lvl; n >= 0; --n) {
    let line = star.repeat(n);
    document.write(spaces, line, new_line);
    spaces += space;
  }
}

draw3(5);
*/

/*
    *
   ** 
  *** 
 ****
*****

*/
/*
const star = "*";
const new_line = "<br />";
const space = "&nbsp;&nbsp;";

function draw4(lvl) {
  for (let n = lvl; n >= 0; --n) {
    let spaces = space.repeat(n);
    let stars = star.repeat(lvl - n);
    document.write(spaces, stars, new_line);
  }
}

draw4(5);  */

const star = "*";
const new_line = "<br />";
const space = "&nbsp;&nbsp;";

function draw1() {
  for (let i = 1; i <= 5; ++i) {
    document.write(star.repeat(i), "<br />");
  }
}

function draw2(length) {
  let line = star.repeat(length); //******
  for (let i = 0; i < length; ++i) {
    document.write(line, new_line);
    line = line.slice(1);
  }
}

function draw3(lvl) {
  let spaces = "";

  for (let n = lvl; n >= 0; --n) {
    let line = star.repeat(n);
    document.write(spaces, line, new_line);
    spaces += space;
  }
}

function draw4(lvl) {
  for (let n = lvl; n >= 0; --n) {
    let spaces = space.repeat(n);
    let stars = star.repeat(lvl - n);
    document.write(spaces, stars, new_line);
  }
}

draw1();
draw2(5);
draw3(5);
draw4(5);
