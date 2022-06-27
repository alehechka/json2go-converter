export type Error = {
	status: number;
	title: string;
	detail: string;
};

export type ErrorResponse = {
	errors: Error[];
};
