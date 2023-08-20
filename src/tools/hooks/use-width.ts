import { useLayoutEffect, useState } from 'react';

export function useWindowSize() {
	const [ size, setSize ] = useState<number[]>([ 0 ]);
	useLayoutEffect(() => {
		function updateSize() {
			setSize([ window.innerHeight ]);
		}
		window.addEventListener('resize', updateSize);
		updateSize();
		return () => window.removeEventListener('resize', updateSize);
	}, []);

	return size;
}
