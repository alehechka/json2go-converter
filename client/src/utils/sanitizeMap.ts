const sanitizeMap = (map?: Record<string, string>) =>
	map
		? Object.keys(map).reduce((acc, val) => {
				if (map[val]) {
					acc[val] = map[val];
				}
				return acc;
		  }, {} as Record<string, string>)
		: undefined;

export default sanitizeMap;
