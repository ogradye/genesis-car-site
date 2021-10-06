import { Link } from "react-router-dom"

export default function NotFound(){
	return (
		<div className="container nf-c">
			<img src="/logo.png" alt="Genesis logo"></img>
			<h1>404 - Not Found</h1>
			<p>We couldn't find what you were looking for. <br></br> It may have been deleted or never exsisted in the first place.</p>
			<Link to='/' className="btn btn-primary">Go Back Home</Link>
		</div>
	)
}