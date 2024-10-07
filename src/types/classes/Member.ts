export interface IMemberProps {
  id: string;
  name: string;
  birthday: Date;
  joinDate: string;
  mentees?: IMemberProps[];
}

export class Member {
  readonly id: string;
  name: string;
  birthday: Date;
  joinDate: string;
  mentees?: Member[];

  constructor({ id, name, birthday, joinDate, mentees }: IMemberProps) {
    this.id = id;
    this.name = name;
    this.birthday = birthday;
    this.mentees = mentees;
    this.joinDate = joinDate;
  }
}
