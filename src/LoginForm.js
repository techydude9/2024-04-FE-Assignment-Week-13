/*  This is my Log In Form Centered and below the Nav Bar */



function LoginForm() {
    /* let userName = null;
    let userPwd = null;      I removed these since there isn't any on click logic required */

    return (
        <div className="logInMain">
            <h3 className="logInH3">Log In</h3>
            <hr></hr>
            <div class="card">
                <div class="card-body ms-auto me-auto w-50 bg-secondary-subtle">
                    <label id="inUNameLbl" for="inUName">User Name:</label>
                    <input id="inUName" type="text" placeholder="Enter your User Name"></input>
                    <br></br>
                    <br></br>
                    <label id="inUPwdLbl" for="inUPwd">Password:</label>
                    <input id="inUPwd" type="text" placeholder="Enter your password"></input>
                    <br></br>
                    <br></br>
                    <button class="btn btn-outline-info" id="btnSubmit">Submit</button>
                </div>
            </div>
        </div>)
}

export default LoginForm;