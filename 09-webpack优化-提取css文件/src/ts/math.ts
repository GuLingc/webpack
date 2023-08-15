export function sum(num1: number, num2: number) {
  return num1 + num2;
}

export function formatPrice(priceString: string) {
    //因为下方的ts中使用了es新推出的includes()方法，为了进行正常的使用所以会对其进行补丁和预设
  if (priceString.includes('$')) {
    return "xxxx";
  } else {
    return "yyy";
  }
}
