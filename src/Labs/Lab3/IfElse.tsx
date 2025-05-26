export default function IfElse() {
    let true1 = true, false1 = false;
    let loggedIn = true;
    return(
        <div>
            <div id="wd-if-else">
            <h4>If Else</h4>
            { true1 && <p>Since true1 is true, this paragraph renders</p> }
            { !false1 ? <p>!false1</p>
                        : <p>false1</p> } <hr/>
            </div>
            <div id="wd-ternary-operator">
            <h4>Logged In</h4>
            { loggedIn ? <p>Welcome</p>
                        : <p>Please login</p> } <hr/>
            </div>
        </div>
    );
}