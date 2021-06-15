function search() {
  // Declare variables
  var searchlength = document.getElementById("mySearch").getElementsByTagName("li");
  var largo = liList.length
  var input, filter, ul, li, a, i;
  input = document.getElementById("mySearch");
  filter = input.value.toUpperCase();
  ul = document.getElementById("myMenu");
  li = ul.getElementsByTagName("li");
                
  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < 5; i++) {
    a = li[i].getElementsByTagName("a")[0];
                    
    if (a.innerHTML.toUpperCase().indexOf(filter) > -1 && a.innerHTML.toUpperCase().indexOf(filter) != "") {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}
