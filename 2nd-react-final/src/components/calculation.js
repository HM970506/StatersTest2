export default function calculation(oper, a, b) {
  let nowResult = 0;
  if (oper === "+") nowResult = parseFloat(a) + parseFloat(b);
  else if (oper === "-") nowResult = parseFloat(a) - parseFloat(b);
  else if (oper === "/") nowResult = parseFloat(a) / parseFloat(b);
  else if (oper === "x") nowResult = parseFloat(a) * parseFloat(b);

  return String(nowResult);
}
