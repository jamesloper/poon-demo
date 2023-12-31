import React, { useRef } from 'react';
import { Button, ViewPager } from 'poon-ui';
import Logo from '../components/Logo.jsx';

const HomePage = () => {
	const el = useRef();

	return (
		<div className="pitch">
			<ViewPager vertical ref={el}>
				<div className="pitch-page pitch-page-0">
					<Logo/>
					<br/>
					<br/>
					<p>
						Married to the web but want to get down and dirty with
						a native app?
					</p>
					<Button icon="arrow_downward" onClick={() => el.current.scrollToPage(1)} color="clear"/>
				</div>
				<div className="pitch-page pitch-page-1">
					<p>Poon UI is so native, it feels indecent!</p>
					<Button icon="arrow_downward" onClick={() => el.current.scrollToPage(2)} color="clear"/>
				</div>
				<div className="pitch-page pitch-page-2">
					<p>Why settle for a vanilla web app?</p>
					<Button title="Let’s make some magic →" href="/demos" color="frosted"/>
				</div>
			</ViewPager>
		</div>
	);
};

export default HomePage;