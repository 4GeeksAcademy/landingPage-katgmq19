import React from "react";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Card from "./Card";

const Home = () => {
	const cardsData = [
		{ title: "Paisaje Púrpura", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, ipsam, eligendi, in quo sunt possimus non incidunt odit vero aliquid similique quaerat nam nobis illo aspernatur vitae fugiat numquam repellat", imageUrl: "https://plus.unsplash.com/premium_photo-1711031505781-2a45c879ceac?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aGVybW9zYSUyMGltYWdlbnxlbnwwfHwwfHx8MA%3D%3D", buttonUrl: "#", buttonLabel: "Find Out More!" },
		{ title: "Margarita en Primer Plano", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, ipsam, eligendi, in quo sunt possimus non incidunt odit vero aliquid similique quaerat nam nobis illo aspernatur vitae fugiat numquam repellat", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT86S_ZlKylXOd3eTqAW5KXxkngeiP-uUxtNA&s", buttonUrl: "#", buttonLabel: "Find Out More!" },
		{ title: "Árbol de Cerezo", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, ipsam, eligendi, in quo sunt possimus non incidunt odit vero aliquid similique quaerat nam nobis illo aspernatur vitae fugiat numquam repellat", imageUrl: "https://wallpapers.com/images/featured/hermosas-imagenes-hd-knhz127r599ui1ht.jpg", buttonUrl: "#", buttonLabel: "Find Out More!" },
		{ title: "Aves Azules", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, ipsam, eligendi, in quo sunt possimus non incidunt odit vero aliquid similique quaerat nam nobis illo aspernatur vitae fugiat numquam repellat", imageUrl: "https://http2.mlstatic.com/D_NQ_NP_985353-CBT108850249445_032026-O.webp", buttonUrl: "#", buttonLabel: "Find Out More!" }
	];

	return (
		<div>
			<Navbar />
			<div className="container" style={{ marginTop: "80px" }}>
				<Jumbotron />
				<div className="row text-center">
					{cardsData.map((item, index) => (
						<Card 
							key={index}
							title={item.title}
							description={item.description}
							imageUrl={item.imageUrl}
							buttonUrl={item.buttonUrl}
							buttonLabel={item.buttonLabel}
						/>
					))}
				</div>
			</div>
			<footer className="py-5 bg-dark mt-5">
				<div className="container">
					<p className="m-0 text-center text-white">Copyright &copy; Your Website 2026</p>
				</div>
			</footer>
		</div>
	);
};

export default Home;