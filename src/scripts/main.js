import ace from "../ace-builds-1.5.0";
import "../ace-builds-1.5.0/src-noconflict/mode-javascript";
import "../ace-builds-1.5.0/webpack-resolver";
import "../styles/style.scss";
import { runCode } from "./getMockData";

const editor = ace.edit("editor");
editor.setTheme("ace/theme/monokai");
editor.session.setMode("ace/mode/javascript");

const lang = document.getElementById("language");
lang.addEventListener("change", function (event) {
  editor.session.setMode(`ace/mode/${event.target.value}`);
});

const run = document.getElementById("run");
run.addEventListener("click", function (event) {
  const language = document.getElementById("language");

  const result = document.getElementById("result");
  result.value = editor.getValue();

  const payload = {
    language: language.value,
    code: editor.getValue(),
  };
  runCode(JSON.stringify(payload))
    .then(function (response) {
      if (response.status == "success") {
        result.value = response.output;
      } else {
        result.value = response.error;
      }
    })
    .catch(function (err) {
      console.error("Ошибка при запросе:", err);
      result.value = "При выполнение запроса произошла ошибка!";
    });
});
