export default function spongeCase(input: string) {
  return input
    .split("")
    .map((c) => {
      if (Math.random() > 0.5) {
        return c.toUpperCase();
      }
      return c;
    })
    .join("");
}
