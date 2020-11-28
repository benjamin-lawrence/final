$("#submitButton").on("click", function () {
    let display = $("#displayName").val();
    let content = $("#commentArea").val();
    $("#chatArea").prepend(`
      <div class = 'addedstuff' id='comment'>
          <div class= 'addedstuff' id='profilePicture'><img src='Image/userImage.png' alt='Profile Picture' width='100' height='100'></div>
              <div class = 'addedstuff' id='input'>
                  <p class = 'addedstuff' id='nameDiv'>
                      <strong>${display}</strong>
                  </p>
                  <p class = 'commentDiv'>
                      ${content}
                  </p>
                  <div class="hiddenEdit hidden">
                      <div class = 'addedstuff' id='hiddenComment'>
                      <input type="text" class = 'addedstuff' id="hiddenCommentArea" placeholder="Comment" name="comment">
                      </div>
                      <div class = 'addedstuff' id="hiddenSubmitButton">
                      <p>Submit</p>
                      </div>
                  </div>
              </div>
              <div class = 'addedstuff' id='change'>
                  <div class = 'addedstuff edit'><p>Edit</p></div>
                      
                  <div class = 'addedstuff' id='remove'><p>Remove</p></div>
                  
              </div>
      </div>
      `);
  });
  
  $("#chatArea").on("click", "#remove", function () {
    let i = $(this).parent().parent();
    $(i).remove();
  });
  
  $("#chatArea").on("click", ".edit", function () {
    let i = $(this).parent().parent().find(".hiddenEdit");
    $(i).toggleClass("hidden");
    $("#hiddenCommentArea").focus();
  });
  
  $("#chatArea").on("click", "#hiddenSubmitButton", function () {
    let i = $(this).parent().parent().parent();
    i = $(i).children();
    i = i.children(".commentDiv");
    let newText = $("#hiddenCommentArea").val();
    $(i).text(newText);
  
    $(this).parent().toggleClass("hidden");
    $("#hiddenCommentArea").val("");
  });
  