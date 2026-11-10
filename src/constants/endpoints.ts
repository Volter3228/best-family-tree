export const ENDPOINTS = {
  authMe: "/auth/me",
  authLogout: "/auth/logout",
  questionsChallenge: "/auth/questions/challenge",
  questionsSwap: (id: string) => `/auth/questions/challenge/${id}/swap`,
  questionsVerify: "/auth/questions/verify",
  emailRequest: "/auth/email/request",
  emailVerify: "/auth/email/verify",

  getFamilyTree: "/family-tree",
  getMentorsList: "/mentors-list",
  getMemberById: (id: string) => `/member/${id}`,

  addMember: "/add-member",
  editMember: (id: string) => `/members/${id}`,

  getTeamTypes: "/team-types",
  createTeamType: "/team-types",
  updateTeamType: (id: string) => `/team-types/${id}`,
  deleteTeamType: (id: string) => `/team-types/${id}`,

  getRoles: "/roles",
  createRole: "/roles",
  getTeams: "/teams",
  getTeam: (id: string) => `/teams/${id}`,
  createTeam: "/teams",
  updateTeam: (id: string) => `/teams/${id}`,
  deleteTeam: (id: string) => `/teams/${id}`,
  setTeamMembers: (id: string) => `/teams/${id}/members`,
};
