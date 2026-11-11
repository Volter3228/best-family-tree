# BEST Family Tree

Visual map of a student organisation's people: who mentored whom, and which teams and events they took part in.

## People

**Member**:
Any person on record in the organisation, whatever their status or how much data we hold about them.
_Avoid_: User, person, participant

**Status**:
A member's stage in the organisation: Observer, then Baby, then Full member, then Alumnus.
_Avoid_: Role, level

**Observer**:
A person who has just joined and has not done tasks yet. The initial status.

**Baby**:
An observer promoted after completing tasks.

**Full member**:
A baby who applied for and received full membership. Full members and alumni can be mentors.
_Avoid_: Active member

**Alumnus**:
A full member who retired from the organisation.
_Avoid_: Former member, ex-member

**Mentor**:
A full member (or alumnus) who guides newer members. Mentorship forms the family tree.
_Avoid_: Parent, supervisor

**Mentee**:
A member guided by a mentor.
_Avoid_: Child, newbie

**Sparse record**:
A member for whom some data is missing (old or migrated records). Sparse records are shown like any other member and can be completed gradually. A sparse record can be added on purpose in the Add form's minimal mode (name, status and join date only); normal adds still require everything.
_Avoid_: Broken record, incomplete member

**Completeness rule**:
Editing a member may add data and may change data, but may never empty a field that already has a value; fields that were never filled stay optional.
_Avoid_: Required fields (adding a new member still requires them)

## Teams

**Team**:
A named group of members, optionally limited to a period.

**Team type**:
A category of teams (for example a project, a board, an event kind) with its own colour and icon.

**Event**:
A team type that happens at a point in time rather than continuously. When it has no own name it is called "<type> <start year>".

**Role**:
What a member does in a team, for example leader.

**Position**:
One member holding one role in one team (or organisation) for a period.
_Avoid_: Membership, assignment

## Views

**Tree mode**:
How the map is arranged: Family (mentor lineage), Team (members grouped by team), or Grid (a flat list).
_Avoid_: Layout type, view type

**Member node**:
A member's card on the map. In Team mode the same member has one node per team they belong to.
_Avoid_: Card, vertex

**Team frame**:
The rectangle that groups the member nodes of one team in Team mode.
_Avoid_: Team box, cluster

**Lineage**:
The chain of mentors above a selected member, highlighted with a dashed path in Family mode.
_Avoid_: Ancestry, parentage

**Orientation**:
The direction a family tree grows in. Top-down (TB) is the desktop default;
left-to-right (LR) is used on narrow screens so the tree grows vertically.
Controlled by the Orientation setting: Auto, Down or Right.

**Edge style**:
How family-mode edges are drawn: Smooth (bezier), Straight or Cornered
(orthogonal). Team-frame fan edges and the lineage dash are always bezier.

## Sign-in

**Sign-in method**:
How a visitor proves they may enter. Questions: answer three secret questions about the organisation, no account needed. Personal: a one-time code sent to the visitor's email.
_Avoid_: Login type, auth mode

**Session**:
A signed-in browser, held by one cookie. It slides: each visit extends it (30 days for Questions, 90 for Personal). Signing out, or excluding the member, ends it.
_Avoid_: Token, login

**Access level**:
What a session may do: Viewer (read only), Editor (edit members and teams, except other grant holders), Admin (edit everyone). Only a Personal sign-in of a member with a grant is above Viewer.
_Avoid_: Role (that means a position in a team), permission

**Allowed email**:
An address on the allowlist that may sign in by email without being a member, as a Viewer. It comes from the Google Group export or is added by hand; the import never touches the hand-added ones.
_Avoid_: Whitelist, guest

**Contacts**:
A member's email, social links and phone numbers. Hidden in the Reduced view; no two members may share one.
_Avoid_: Personal info

**Reduced view**:
What a Questions session sees: the tree without contacts and birthdays.
_Avoid_: Guest mode, limited mode

**Sign-in code**:
The six digits emailed for a Personal sign-in. Valid for 10 minutes, usable once, and locked after five wrong guesses. Only a keyed hash is stored.
_Avoid_: OTP, PIN, token

**Demo mode**:
A deployment switch (`DEMO_MODE=true`) for the public showcase, run on an anonymized copy of the data. Anyone can sign in: the questions are easy and any email address gets a code, which makes them an Editor. Every edit is refused ("У демо зміни не зберігаються"), so nothing changes.
_Avoid_: Sandbox (edits are refused, not kept in the browser), test mode
