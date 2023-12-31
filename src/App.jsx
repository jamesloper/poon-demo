import './styles.css';
import 'poon-ui/poon.css';
import React, { Fragment } from 'react';
import { AnimatedValue, PoonOverlays } from 'poon-ui';
import { defineRoute, Stack } from 'poon-router';
import HomePage from './pages/HomePage.jsx';
import FileBrowser from './pages/FileBrowser/FileBrowser.jsx';
import AlertDemo from './pages/AlertDemo.jsx';
import ShadeDemoFluid from './pages/ShadeDemoFluid.jsx';
import TabDemo from './pages/TabDemo.jsx';
import Demos from './pages/Demos.jsx';
import FilesSearch from './pages/FileBrowser/FilesSearch.jsx';
import ShadeDemos from './pages/ShadeDemos.jsx';
import ShadeDemoRainbow from './pages/ShadeDemoRainbow.jsx';
import MapDemo from './pages/MapDemo/MapDemo.jsx';
import FilterCategories from './pages/MapDemo/FilterCategories.jsx';
import FilterTags from './pages/MapDemo/FilterTags.jsx';
import ClockDemo from './pages/ClockDemo.jsx';
import GalleryDemo from './pages/GalleryDemo/GalleryDemo.jsx';
import PhotosDemo from './pages/GalleryDemo/PhotosDemo.jsx';

defineRoute('Home', '/', HomePage);
defineRoute('Demos', '/demos', Demos);
defineRoute('FilesSearch', '/files/search', FilesSearch);
defineRoute('FileBrowser', '/files/:path?', FileBrowser);
defineRoute('AlertDemo', '/alert', AlertDemo);
defineRoute('ShadeDemoFluid', '/shades/fluid', ShadeDemoFluid);
defineRoute('ShadeDemoFluid', '/shades/rainbow', ShadeDemoRainbow);
defineRoute('ShadeDemos', '/shades', ShadeDemos);
defineRoute('TabDemo', '/tab', TabDemo);
defineRoute('MapDemo', '/map', MapDemo);
defineRoute('MapDemoFilterCategories', '/map/categories', FilterCategories);
defineRoute('MapDemoFilterTags', '/map/tags', FilterTags);
defineRoute('ClockDemo', '/clock', ClockDemo);
defineRoute('PhotosDemo', '/photos', PhotosDemo);
defineRoute('GalleryDemo', '/photos/gallery', GalleryDemo);

const App = () => (
	<Fragment>
		<Stack filter="main"/>
		<PoonOverlays/>
	</Fragment>
);

AnimatedValue.defaultAnimationDuration = 500;

export default App;