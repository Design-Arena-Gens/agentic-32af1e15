export function cn(...inputs: Array<string | false | undefined | null>) {
  return inputs.filter(Boolean).join(' ');
}
