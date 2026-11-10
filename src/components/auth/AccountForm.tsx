import AuthMessage from "./AuthMessage";
import { authStrings as t } from "./strings";

// Email sign-in lands in a later step.
const AccountForm = () => (
  <AuthMessage tone="info">{t.accountSoon}</AuthMessage>
);

export default AccountForm;
