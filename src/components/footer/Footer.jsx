import React from "react";
import "./footer.css"
//passing in props to generate the footer to the HTML
const Footer = (props) => {
	console.log("Footer Props", props)
	return (
		<footer id = "footer">
			<div id = "footer-content">
				<div id = "footer-items">
					<p id = "version">
						By: Avyrie Fellows GitHub: Avenix17, Bryson Benson GitHub: Firm-Tofu10, Ciara Gaunt GitHub: ciaragauntt, 						
								Kate Patch GitHub: Katepatch , Khoi Vu GitHub: ChefKhoiRD, Micah Culverhouse GitHub: HolyMicah 
					</p>
				</div>
			</div>
		</footer> 
	)

	}

export default Footer