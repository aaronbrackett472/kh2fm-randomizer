import { Found } from "./enums"

export interface Hints {
	report1: Found,
	report2: Found,
	report3: Found,
	report4: Found,
	report5: Found,
	report6: Found,
	report7: Found,
	report8: Found,
	report9: Found,
	report10: Found,
	report11: Found,
	report12: Found,
	report13: Found,
}

export const defaultHints: Hints = {
	report1: Found.NOT_FOUND,
	report2: Found.NOT_FOUND,
	report3: Found.NOT_FOUND,
	report4: Found.NOT_FOUND,
	report5: Found.NOT_FOUND,
	report6: Found.NOT_FOUND,
	report7: Found.NOT_FOUND,
	report8: Found.NOT_FOUND,
	report9: Found.NOT_FOUND,
	report10: Found.NOT_FOUND,
	report11: Found.NOT_FOUND,
	report12: Found.NOT_FOUND,
	report13: Found.NOT_FOUND,
};
