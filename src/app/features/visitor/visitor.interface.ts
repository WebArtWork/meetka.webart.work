/** A regular Meetka attendee's public profile (as opposed to a barista's). */
export interface Visitor {
	id: string;
	name: string;
	photo: string;
	bio: string;
	interestIds: string[];
	socialLinks: { label: string; url: string }[];
}

/** A walk-in noted by a barista — not tied to a Meetka account/profile. */
export interface VisitorLogEntry {
	id: string;
	name: string;
	note: string;
	addedAt: string;
}
