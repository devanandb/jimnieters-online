import React from 'react';

// import Toggle from './Toggle';
import useDarkMode from 'use-dark-mode';

const DarkModeToggle = () => {
	const darkModeConfig = {
		classNameDark : "mode-dark"
	}
  	const darkMode = useDarkMode(false, darkModeConfig);

	return (
		<div className="dark-mode-toggle">
			<button type="button" className={darkMode.value ? '' : 'hidden'} onClick={darkMode.disable}>
				☀
			</button>
			{/* <Toggle checked={darkMode.value} onChange={darkMode.toggle} /> */}
			<button type="button" className={darkMode.value ? 'hidden' : ''} onClick={darkMode.enable}>
				☾
			</button>
		</div>
	);
};

export default DarkModeToggle;