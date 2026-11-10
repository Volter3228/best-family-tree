export type MailMessage = {
  to: string;
  subject: string;
  html: string;
  text: string;
};

/** One file per provider; a domain-based sender can be added later. */
export interface Mailer {
  send(message: MailMessage): Promise<void>;
}
