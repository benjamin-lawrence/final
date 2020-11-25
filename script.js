$('#submitButton').on('click', function() {
    $('#chatArea').prepend(`
    <div id='comment'>
        <div id='profilePicture'><img src='Image/userImage.png' alt='Profile Picture' width='100' height='100'></div>
        <div id='input'>
            <div id='nameDiv'>
                ${$(displayName).val()}
            </div>
            <div id='commentdiv'>
                ${$(commentArea).val()}
            </div>
        </div>
        <div id='change'>
            <div id='edit'><p>Edit</p></div>
            <div id='remove'><p>Remove</p></div>
        </div>
    </div>
    `)
})