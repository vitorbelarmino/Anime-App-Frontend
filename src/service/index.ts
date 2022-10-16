export function sliceString(text: string, quantity: number): string {
  if (text.length > quantity) {
    const myText = text.slice(0, quantity + 1);
    return `${myText}...`;
  }
  return text;
}
