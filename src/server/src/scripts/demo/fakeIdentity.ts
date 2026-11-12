import { Faker, en, uk } from "@faker-js/faker";
import { translit } from "./translit.js";

const MAX_TRIES = 200;

const OPERATOR_CODES = ["50", "63", "66", "67", "68", "73", "93", "95", "96", "97", "98", "99"];

/** `base`, `base2`, `base3`... the first one not in `taken`. */
const firstFree = (base: string, taken: Set<string>) => {
  if (!taken.has(base)) return base;
  for (let n = 2; ; n++) if (!taken.has(`${base}${n}`)) return `${base}${n}`;
};

/**
 * Fake, repeatable identities. The seed makes every run give the same result,
 * and nothing handed out equals a value in `avoid` (the real data). Names and
 * handles are compared lowercased, the way the final leak check compares them.
 */
export const createIdentityFactory = (
  seed: number,
  avoid: { names: Set<string>; phones: Set<string>; handles?: Set<string> },
) => {
  // Its own instance, so two factories never disturb each other's sequence.
  const faker = new Faker({ locale: [uk, en] });
  faker.seed(seed);
  const lower = (values: Iterable<string>) => new Set([...values].map((v) => v.toLowerCase()));
  const names = lower(avoid.names);
  const phones = new Set(avoid.phones);
  const emails = new Set<string>();
  const handles = lower(avoid.handles ?? []);

  const person = () => {
    const sex = faker.person.sexType();
    for (let i = 0; i < MAX_TRIES; i++) {
      const firstName = faker.person.firstName(sex);
      const lastName = faker.person.lastName(sex);
      const name = `${firstName} ${lastName}`;
      if (!names.has(name.toLowerCase())) {
        names.add(name.toLowerCase());
        return { firstName, lastName, name };
      }
    }
    throw new Error("Could not generate an unused name");
  };

  return {
    person,
    email: ({ firstName, lastName }: { firstName: string; lastName: string }) => {
      const local = firstFree(`${translit(firstName)}.${translit(lastName)}`, emails);
      emails.add(local);
      return `${local}@example.com`;
    },
    /** One unique handle per person; platforms add their own prefix. */
    handle: ({ firstName, lastName }: { firstName: string; lastName: string }) => {
      const handle = firstFree(`${translit(firstName)}_${translit(lastName)}`, handles);
      handles.add(handle);
      return handle;
    },
    phone: () => {
      for (let i = 0; i < MAX_TRIES; i++) {
        const code = faker.helpers.arrayElement(OPERATOR_CODES);
        const number = `+380${code}${faker.string.numeric(7)}`;
        if (!phones.has(number)) {
          phones.add(number);
          return number;
        }
      }
      throw new Error("Could not generate an unused phone number");
    },
    company: () => faker.company.name(),
    /** A birthday 18-25 years before the join date: plausible, and not the real one. */
    birthdayBefore: (joinedAt: Date) => {
      const years = faker.number.float({ min: 18, max: 25 });
      return new Date(joinedAt.getTime() - years * 365.25 * 24 * 3600 * 1000);
    },
  };
};
