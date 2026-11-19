/** Phone numbers are stored without spaces: "+380 66 127 17 60" → "+380661271760". */
export const normalizePhone = (phone: string) => phone.replace(/\s+/g, "");
