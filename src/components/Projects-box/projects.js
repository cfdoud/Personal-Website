import React from 'react';
import './projects.css';
import animeNxt from '../../assets/projects/Anime-Nxt.png';
import instagram from '../../assets/projects/isntgram.png';
import tsm from '../../assets/projects/TSM.png';
import ssb from '../../assets/projects/SSB.png';
import zse from '../../assets/projects/ZSE.png';

const projects = [
    {
    id: 1,
    name: "AnimeNxt",
    description: "A website to discover your next favorite anime",
    url: "https://github.com/cfdoud/AnimeNxT",
    image: animeNxt
    },
    {
        id: 2,
        name: "Super Smash Bros. Tournament Tracker",
        description: "A website to track Super Smash Bros. tournaments",
        url: "https://github.com/cfdoud/Super-Smash-Bros-Tournament-Tracker",
        image: ssb
    },
    {
        id: 3,
        name: "Zombie Shooter Extreme",
        description: "Zombie style shooter game created with Raylib library",
        url: "https://github.com/cfdoud/Zombie-Shooter-Extreme",
        image: zse
    },
    {
        id: 4,
        name: "Instagram Clone",
        description: "A clone of Instagram built with React and Firebase",
        url: "https://github.com/cfdoud/Instagram-Clone",
        image: instagram
    },
    {
        id: 5,
        name: "Time Sheet Maker",
        description: "A time sheet maker for tracking work hours",
        url: "https://github.com/cfdoud/Time-Sheet-Maker",
        image: tsm
    },
   
];

function Project() {
    return (
        <div>
            <div className='parent-container' style={{paddingTop: '20px', paddingBottom: '10px'}}>
                <div className='title-container'>
                    <h3 className='tool-text'>Recent Projects</h3>
                </div>      
            </div>

            <div className='project-container'>
                {projects.map(project => (
                    <div className='project-card' key={project.id}>
                        <div className='project-image'>
                            <div className='project-text'>
                                <a href={project.url} style={{ textDecoration: 'none', color: 'green' }}>
                                    {project.name}
                                </a>
                                <p>{project.description}</p>
                            </div>
                            <a href={project.url}>
                                <img src={project.image} className='project-image' alt={project.name} />
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Project;