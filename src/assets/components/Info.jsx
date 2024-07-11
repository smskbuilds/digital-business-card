import About from "./info--section/About";
import Buttons from "./info--section/Buttons";
import Interests from "./info--section/Interests";
import UserDetails from "./info--section/UserDetails";

export default function Info() {
    return(
        <div className = 'info--div'>
            <UserDetails />
            <Buttons />
            <About />
            <Interests />
        </div>
    )
}