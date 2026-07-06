import React from "react";
import { Navbar } from "./Navbar.jsx";
import { Jumbotron } from "./Jumbotron.jsx";
import { Card } from "./card.jsx";




//create your first component
const Home = () => {
	return (
		<>
			<Navbar>
			</Navbar>
			<div className="container">

				<Jumbotron></Jumbotron>
				<div className=" row p-4 g-3">
					<div className="col-12 col-sm-6 col-lg-3">
						<Card link="https://fastly.picsum.photos/id/599/500/325.jpg?hmac=hP_9q5C72x_d0y_Yt-xc-lt6ZG3KsLoKIfAyJD1UYYk" name="Montaña" texto="Se ve tranquilo o que xD" bton="Vamos a la montaña"></Card>
					</div>
					<div className="col-12 col-sm-6 col-lg-3">
						<Card link="https://fastly.picsum.photos/id/548/500/325.jpg?hmac=ENDpHhZiwBUVAi-ZXtt1svbi380dU3LOsr6Ao-5_-Js" name="Fuego" texto="Se ve canlentito noo?" bton="Quemame"></Card>
					</div>
					<div className="col-12 col-sm-6 col-lg-3">
						<Card link="https://fastly.picsum.photos/id/702/500/325.jpg?hmac=fdnZNOqkMr5u0nS2RggYfC7G2lH1J8qyuB577nCOLMs" name="Playa" texto="Se ve relajadito no?" bton="Dame Paz"></Card>
					</div>
					<div className="col-12 col-sm-6 col-lg-3">
						<Card link="https://fastly.picsum.photos/id/404/500/325.jpg?hmac=BxEAH9nzNzk7b_HvhBVTo-dqE7XfRojBHssZCptbHWE" name="Barranco" texto="Se ve peligrosito no?" bton="No me empujes"></Card>
					</div>
				</div>

			</div>

		</>

	);
};

export default Home;