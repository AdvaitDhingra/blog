import Posts from "./Posts";

export default function Home() {
    return(
        <div style = {{
            padding: "20px 20px"
        }}>
            <div className = "containter">
                <h1 className = "welcomeText">Welcome to my Blog</h1>
                <Posts/>
            </div>
            
        </div>
    )
}