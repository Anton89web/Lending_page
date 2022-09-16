import React from "react";
import ReactDom from "react-dom";
import {createRoot} from "react-dom/client";
import Editor from "./components/editor";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(Editor);

// ReactDom.render(<Editor/>, document.getElementById('root'));

// function getPageList() {
//   $("h1").remove();
//   $.get("./api", data => {
//     data.forEach(file => {
//       $("body").append(`<h1>${file}</h1>h1>`)
//     })
//   },"JSON");
// }
//
// getPageList();
//
// $("button").on("click", function (){
//   $.post("./api/createNewPage.php", {
//     "name": $("input").val()
//   }, () => {
//     getPageList();
//   })
//     .fail(()=>{
//       alert('Страница уже существует!');
//     })
// });