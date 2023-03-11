function topFunction() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }

var active_project_id = null;
function activateProject(self) {
  var project_id = self.getAttribute("project-id")
  console.log(project_id);

  // disable active project

  if (active_project_id != null) {
  	document.getElementById(active_project_id.substring(1, 1000)).style.display = "none";
  }
  console.log(document.getElementById(project_id.substring(1, 1000)));
  document.getElementById(project_id.substring(1, 1000)).style.display = "block";
  active_project_id = project_id;
}