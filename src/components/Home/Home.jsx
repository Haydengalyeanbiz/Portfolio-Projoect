import React, { useEffect } from 'react';
import './Home.css';
import Reveal from '../Reveal/Reveal';
import { motion } from 'framer-motion';
import Lottie from 'react-lottie';
import DotAnimation from '../../lotties/dots.json';

const Home = ({ handleSetSelected }) => {
	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: DotAnimation,
		rendererSettings: {
			preserveAspectRatio: 'xMidYMid slice',
		},
	};

	return (
		<div className='home-wrapper'>
			<div className='background-ele'>
				<Lottie
					options={defaultOptions}
					height='100%'
					width='100%'
					isClickToPauseDisabled={true}
				/>
			</div>
			<div className='background-image'>
				<motion.img
					className='main-image'
					src='/images/main-background.JPEG'
					alt='Background'
				/>
			</div>
			<div className='home-content'>
				<div className='home-titles'>
					<Reveal>
						<h1>I'm Hayden Galyean</h1>
					</Reveal>
					<Reveal>
						<p className='home-p'>Your full-stack solution</p>
					</Reveal>
				</div>
				<div className='button-holder'>
					<motion.button
						className='button'
						onClick={() => handleSetSelected('contact')}
						animate={{
							boxShadow: [
								'0px 0px 20px var(--accent-light-clr)',
								'0px 0px 40px var(--accent-light-clr)',
								'0px 0px 20px var(--accent-light-clr)',
							],
						}}
						transition={{
							duration: 2,
							ease: 'easeInOut',
							repeat: Infinity,
							repeatType: 'loop',
						}}
					>
						Contact Me
					</motion.button>
					<motion.button
						className='button work-btn'
						onClick={() => handleSetSelected('projects')}
					>
						My Work
					</motion.button>
				</div>
			</div>
		</div>
	);
};

export default Home;
