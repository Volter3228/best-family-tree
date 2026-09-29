export const ENDPOINTS = {
  getFamilyTree: "/family-tree",
  getMentorsList: "/mentors-list",
  getMemberById: (id: string) => `/member/${id}`,

  addMember: "/add-member",
  editMember: (id: string) => `/members/${id}`,

  getEventTypes: "/event-types",
  createEventType: "/event-types",
  updateEventType: (id: string) => `/event-types/${id}`,
  deleteEventType: (id: string) => `/event-types/${id}`,

  getRoles: "/roles",
  createRole: "/roles",
  getTeams: "/teams",
};
