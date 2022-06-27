const status = (res: Response) => {
	if (!res.ok) {
		return Promise.reject(res);
	}

	return res;
};

export default status;
