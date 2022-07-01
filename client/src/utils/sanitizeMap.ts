const sanitizeMap = <T>(map?: Record<string, T>) =>
	map
		? Object.keys(map).reduce((acc, val) => {
				if (map[val]) {
					acc[val] = map[val];
				}
				return acc;
		  }, {} as Record<string, T>)
		: undefined;

export default sanitizeMap;
