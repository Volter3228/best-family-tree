export type MailMessage = {
  to: string;
  subject: string;
  html: string;
  text: string;
};

/** One file per provider (console, resend, gmail); chosen by MAIL_TRANSPORT. */
export interface Mailer {
  send(message: MailMessage): Promise<void>;
}
