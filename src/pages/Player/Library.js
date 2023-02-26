import React from "react";
import LibrarySong from "./LibrarySong";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";

const Library = ({ songs, currentSong, setCurrentSong, audioRef, isPlaying, setSongs, libraryStatus }) => {
	return (
		
	
		<LibraryContainer libraryStatus={libraryStatus}>
			<H1>Musicas</H1>
			<SongContainer>
				{songs.map((song) => (
					<LibrarySong
						song={song}
						songs={songs}
						setCurrentSong={setCurrentSong}
						key={song.id}
						audioRef={audioRef}
						isPlaying={isPlaying}
						setSongs={setSongs}
					/>
				))}
			</SongContainer>
			
		</LibraryContainer>
	
	);
};
const LibraryContainer = styled.div`
position: absolute;
	z-index: 9;
	top: 0;
	left: 1px;
	border-radius: 5px;
	width: 20rem;
	height: 98%;
	background-color: white;
	
	box-shadow: 0 6px 5px rgb(130, 23, 192);
	user-select: none;
	overflow: scroll;
	transform: translateX(${(p) => (p.libraryStatus ? "0%" : "-100%")});
	transition: all 0.5s ease;
	opacity: ${(p) => (p.libraryStatus ? "100" : "0")};
	scrollbar-width: thin;
	scrollbar-color: rgba(155, 155, 155, 0.5) tranparent;
	&::-webkit-scrollbar {
		width: 10px;
	}
	&::-webkit-scrollbar-track {
		background: transparent;
	}
	&::-webkit-scrollbar-thumb {
		background-color: rgba(155, 155, 155, 0.5);
		border-radius: 20px;
		border: transparent;
	}
	@media screen and (max-width: 200px) {
		width: 100%;
		z-index: 9;
	}
`;

const SongContainer = styled.div`
	display: flex;
	flex-direction: column;
	background-color: white;
`;

const H1 = styled.h2`
	padding: 2rem;
`;

export default Library;
