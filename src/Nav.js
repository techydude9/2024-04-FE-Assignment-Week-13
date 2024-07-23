/* This is my Navigation bar at the top of my web page */


function Nav(){
return (
    <nav className="navBar">
        <div className="navRow"> 
            <p className="navTitle">Ruzga Solutions Group LLC</p>
            <ul>
                <li>Home</li>
                <li>My Account</li>
                <li>Contact us</li>
            </ul>
        </div>
    </nav>
)
}

export default Nav;