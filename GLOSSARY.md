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
A member for whom some data is missing (old or migrated records). Sparse records are shown like any other member and can be completed gradually.
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
