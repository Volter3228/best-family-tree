export interface IFamilyMemberProps {
  id: string;
  name: string;
  birthday: Date;
  joinDate: Date;
  descendants?: IFamilyMemberProps[];
}

export class FamilyMember {
  readonly id: string;
  name: string;
  birthday: Date;
  joinDate: Date;
  descendants?: FamilyMember[];

  constructor({
    id,
    name,
    birthday,
    joinDate,
    descendants,
  }: IFamilyMemberProps) {
    this.id = id;
    this.name = name;
    this.birthday = birthday;
    this.descendants = descendants;
    this.joinDate = joinDate;
  }
}
