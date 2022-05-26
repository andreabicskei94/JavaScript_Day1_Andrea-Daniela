// var long_string = "Properties,$a$set$of$immutable$values,$are$passed$to$a$component's$renderer$as$properties$in$its $HTML$tag.      $A$component$cannot$directly$modify$any$properties$passed$to$it,$but$can$be$passed$ callback$functions$that$do$modify$values.$This$mechanism's$promise$is$expressed$as$properties $flow$down;$actions$flow$up"

// var long_string_array = long_string.split("$");

// console.table(long_string_array);

// long_string_array = long_string_array.join(" ");
// document.write("<br>");
// document.write("<br>");
// document.write(long_string_array);
// console.log(long_string_array);



// let text = "Properties,$a$set$of$immutable$values,$are$passed$to$a$component's$renderer$as$properties$in$its $HTML$tag.$A$component$cannot$directly$modify$any$properties$passed$to$it,$but$can$be$passed$ callback$functions$that$do$modify$values.$This$mechanism's$promise$is$expressed$as$properties $flow$down;$actions$flow$up";
// let newText = text.replaceAll("$", " ");
// console.log(newText);
// document.write(newText);

var name_array = ["Maria", "Mona", "Daniela", "Stefan", "Alex"];

name_array.splice(0, 2);
name_array.splice(1);
console.log(name_array)